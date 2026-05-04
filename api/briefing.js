export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { travelerType, vibeDesc, interestDesc, budgetDesc, season, days, timeOfDay } = req.body;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 280,
        messages: [{
          role: 'user',
          content: `You are an expert in traveler profiles who knows Las Vegas deeply. Based on the profile below, write exactly 3 short paragraphs in English that feel like the person is reading their own travel horoscope — specific, revealing, slightly cinematic, never generic.

TRAVELER PROFILE:
- Trip type: ${travelerType}
- Travel style/vibe: ${vibeDesc}
- Interests: ${interestDesc}
- Budget behavior: ${budgetDesc}
- Season: ${season}
- Trip length: ${days} days
- Preferred time: ${timeOfDay}

PARAGRAPH 1 — THE TRAVELER (2-3 sentences):
Describe how this person travels — their real behavior and decisions. Specific, behavioral, a touch of dry humor. They should think "how did this app know that?"

PARAGRAPH 2 — VEGAS FOR THEM (2-3 sentences):
What Vegas has specifically for this profile that they won't find anywhere else. Not obvious — the layer of Vegas that matches exactly who they are.

PARAGRAPH 3 — THE SEASON (2-3 sentences):
Vegas in ${season} — sensory, seductive, specific details. End with one sentence that makes them want to be there right now.

RULES:
- English only
- Max 3 sentences per paragraph — be concise and punchy
- Never use: "vibrant" "bustling" "amazing" "unforgettable" "unique experience"
- Tone: intimate, knowing, cinematic
- No quotes, no titles, no labels before the text
- Separate each paragraph with a blank line`
        }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text;

    if (text && text.length > 30) {
      res.status(200).json({ text });
    } else {
      res.status(500).json({ error: 'Empty response' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
