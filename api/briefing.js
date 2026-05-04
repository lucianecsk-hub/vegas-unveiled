export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const {
    travelerType, vibeDesc, interestDesc, budgetDesc,
    season, days, timeOfDay,
    experiences = [], freeExperiences = []
  } = req.body;

  const seasonCtx = {
    winter: "Vegas in winter — cold desert nights, thin crowds, the city at its most raw.",
    spring: "Vegas in spring — perfect weather, the city in full swing without summer's chaos.",
    summer: "Vegas in summer — brutal heat outside, electric chaos after dark.",
    fall: "Vegas in fall — golden light, the best-kept seasonal secret on the Strip."
  };

  const prompt = `You are writing a cinematic, noir-style secret briefing for a Vegas travel app. It should feel like classified intel — personal, sharp, a little dark, completely tailored.

The traveler is a ${travelerType}${vibeDesc ? `, ${vibeDesc}` : ""}${interestDesc ? `, interested in ${interestDesc}` : ""}. Their budget profile: ${budgetDesc}. ${seasonCtx[season] || ""} Trip length: ${days} days.

Return ONLY a valid JSON object with exactly two fields, no markdown, no backticks:
{
  "title": "A short, punchy traveler archetype title in English. Max 6 words. Examples: 'The Midnight Thrill Architect', 'The Calculated Luxury Hunter', 'The Solo Shadow Collector'. Make it feel like a classified codename.",
  "text": "2-3 paragraphs of cinematic briefing prose. About who this traveler is, their mindset, and what Vegas will feel like for them at this time of year. Do NOT mention any specific show, attraction, venue, restaurant, or activity by name. Tone: dark, confident, slightly conspiratorial. No bullet points. Do not start with 'You are' or 'You are the type of traveler'."
}`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const raw = data?.content?.[0]?.text || "";
    try {
      const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
      res.json({ title: parsed.title || "", text: parsed.text || "" });
    } catch {
      res.json({ title: "", text: raw });
    }
  } catch (err) {
    console.error("Briefing error:", err);
    res.status(500).json({ title: "", text: "" });
  }
}
