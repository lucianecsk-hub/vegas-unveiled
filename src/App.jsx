import { useState } from "react";

// ─── EXPERIENCE DATABASE (Real affiliate links) ────────────────────────────
const PAID = [
  { id:1, name:"High Roller Ticket", cat:"Views", price:21, rating:4.6, reviews:4458, dur:"30 min", emoji:"🎡", desc:"Spin above the Strip. The most iconic view in Las Vegas — day or night, solo or together.", url:"https://www.getyourguide.com/las-vegas-l58/the-high-roller-ride-at-the-linq-ticket-t270522/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family","work","kids"], vibes:["romantic","first-timer"], times:["morning","day","night"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"budget" },
  { id:2, name:"Atomic Golf", cat:"Entertainment", price:22, rating:0, reviews:0, dur:"2 hrs", emoji:"⛳", desc:"Rooftop entertainment complex with golf bays, food and craft cocktails. Vegas reinvented the sport.", url:"https://vegas.vdvm.net/dy9YAq", provider:"VCO", tags:["solo","couple","group"], vibes:[], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["unique","nightlife"], tier:"budget", isNew:true },
  { id:4, name:"Flyover Las Vegas", cat:"Adventure", price:25, rating:4.7, reviews:649, dur:"30 min", emoji:"🪂", desc:"A simulated flight over Las Vegas. Wind, scents, movement — you'll forget you're inside.", url:"https://vegas.vdvm.net/a1LxZQ", provider:"VCO", tags:["family","kids"], vibes:["adventure"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["unique","adventure"], tier:"budget" },
  { id:5, name:"Dig This — Drive Excavators", cat:"Unique", price:28, rating:5.0, reviews:17, dur:"1 hr", emoji:"🚜", desc:"Drive real excavators and bulldozers in the desert. The most unexpected fun you'll have in Vegas.", url:"https://vegas.vdvm.net/QjbP19", provider:"VCO", tags:["solo","couple","group","family","kids"], vibes:["romantic","first-timer"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["unique","adventure"], tier:"budget" },
  { id:6, name:"Eiffel Tower Viewing Deck", cat:"Views", price:35, rating:4.6, reviews:1116, dur:"1 hr", emoji:"🗼", desc:"Paris is better when you're 46 stories above the Vegas Strip at sunset.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-eiffel-tower-viewing-deck-skip-the-line-ticket-t276227/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family","work","kids"], vibes:["first-timer"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"budget" },
  { id:7, name:"Titanic Exhibition — Luxor", cat:"Culture", price:36, rating:4.6, reviews:305, dur:"1.5 hrs", emoji:"🚢", desc:"Real artifacts from the Titanic. The ship that changed history, inside a pyramid. Only Vegas.", url:"https://www.getyourguide.com/las-vegas-l58/luxor-hotel-titanic-the-artifact-exhibition-entry-ticket-t395730/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple"], vibes:["dark"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"budget" },
  { id:8, name:"FANTASY Burlesque", cat:"Show", price:37, rating:4.7, reviews:1014, dur:"1.5 hrs", emoji:"💃", desc:"The Strip's longest-running adult show. At Luxor. Beautiful performers, Vegas glamour, zero pretense.", url:"https://vegas.vdvm.net/4P13Po", provider:"VCO", tags:["family","kids"], vibes:[], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget", guysTrip:true },
  { id:10, name:"Piff the Magic Dragon", cat:"Show", price:39, rating:4.7, reviews:1678, dur:"1.5 hrs", emoji:"🐉", desc:"A magician in a dragon suit. As seen on America's Got Talent. Funnier than anything on the Strip.", url:"https://vegas.vdvm.net/dy9Y0M", provider:"VCO", tags:["solo","couple"], vibes:[], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  { id:11, name:"VIP Club Crawl + Open Bar", cat:"Nightlife", price:40, rating:4.9, reviews:40, dur:"5 hrs", emoji:"🥂", desc:"Party bus, open bar and VIP entry to the best clubs on the Strip. The night that never ends.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-cocktail-class-party-bus-and-vip-club-entry-t1230903/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","bachelorette"], vibes:[], times:["night"], seasons:["winter","spring","summer","fall"], interests:["nightlife"], tier:"budget", girlsTrip:true },
  { id:12, name:"Piano Man — Kyle Martin", cat:"Show", price:42, rating:4.8, reviews:1037, dur:"1.5 hrs", emoji:"🎹", desc:"The Vegas piano show that Billy Joel himself would respect. Miracle Mile Shops. Every night.", url:"https://vegas.vdvm.net/qWEY35", provider:"VCO", tags:["solo","couple","work"], vibes:["dark"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  { id:13, name:"The King Comes Home — Elvis", cat:"Show", price:41, rating:4.7, reviews:124, dur:"1.5 hrs", emoji:"👑", desc:"The most convincing Elvis tribute in Vegas. Westgate Hotel — where the real Elvis performed.", url:"https://vegas.vdvm.net/5gXJVN", provider:"VCO", tags:["solo","couple","group"], vibes:["dark"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  { id:15, name:"Interstellar Arc — AREA15", cat:"Unique", price:44, rating:4.8, reviews:14, dur:"1 hr", emoji:"🌌", desc:"An otherworldly art installation inside AREA15. The future is already here — Vegas just doesn't advertise it.", url:"https://vegas.vdvm.net/9VM075", provider:"VCO", tags:["group","family","kids"], vibes:[], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"budget" },
  { id:16, name:"All Shook Up — Elvis Show", cat:"Show", price:45, rating:4.8, reviews:1340, dur:"1.5 hrs", emoji:"🎸", desc:"Open bar cabin above the Strip. Premium experience, best views in Vegas. No group needed — perfect solo.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-all-shook-up-the-ultimate-elvis-tribute-t693302/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:["luxury","romantic"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  { id:17, name:"Blue Man Group — Luxor", cat:"Show", price:47, rating:4.4, reviews:4893, dur:"1.5 hrs", emoji:"💙", desc:"Three blue-painted performers, musical machines, and audience chaos. Zero words. Maximum impact.", url:"https://vegas.vdvm.net/21aPxA", provider:"VCO", tags:["family","kids"], vibes:["adventure"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  { id:18, name:"High Roller Open Bar Cabin", cat:"Views", price:48, rating:4.6, reviews:1285, dur:"30 min", emoji:"🎡", desc:"The Strip from 550 feet. Open bar. No limits. Best at sunset.", url:"https://www.getyourguide.com/las-vegas-l58/the-high-roller-ride-at-the-linq-ticket-t436735/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple","group","family"], vibes:[], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["unique","nightlife"], tier:"budget", girlsTrip:true },
  { id:19, name:"Mojave + 7 Magic Mountains Tour", cat:"Tour", price:49, rating:4.7, reviews:362, dur:"2 hrs", emoji:"🏔️", desc:"The neon totem poles in the middle of the Mojave desert. Plus the Vegas sign. Art meets nowhere.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-seven-magic-mountains-and-las-vegas-sign-tour-t400361/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","group","work"], vibes:["adventure"], times:["day"], seasons:["winter","spring","summer","fall"], interests:["unique","adventure"], tier:"budget" },
  { id:20, name:"Mat Franco Magic Show", cat:"Show", price:50, rating:4.8, reviews:2686, dur:"1.5 hrs", emoji:"🪄", desc:"Winner of America's Got Talent. At The LINQ. Still the best magic show in Vegas — by far.", url:"https://vegas.vdvm.net/ZVx77X", provider:"VCO", tags:["couple","family","work"], vibes:["luxury"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  { id:21, name:"Machine Guns Vegas", cat:"Adventure", price:50, rating:4.8, reviews:144, dur:"1 hr", emoji:"🔫", desc:"Real machine guns in a supervised Vegas shooting range. The only place on Earth this makes sense.", url:"https://vegas.vdvm.net/Py36Z6", provider:"VCO", tags:["solo","couple","group","kids"], vibes:["dark"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["adventure"], tier:"budget" },
  { id:22, name:"Mystère — Cirque du Soleil", cat:"Show", price:49, rating:4.6, reviews:5750, dur:"1.5 hrs", emoji:"🎭", desc:"The original Cirque in Vegas. Treasure Island. 30+ years of acrobatics that defy physics.", url:"https://vegas.vdvm.net/LKVW3L", provider:"VCO", tags:["solo","couple","group","bachelorette","work"], vibes:["dark"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  
  { id:24, name:"Bars Unknown Bar Crawl", cat:"Nightlife", price:54, rating:5.0, reviews:5, dur:"3 hrs", emoji:"🍸", desc:"The Strip's hidden bars. Most tourists walk past them every night without knowing. You won't.", url:"https://www.getyourguide.com/las-vegas-l58/bars-unknown-the-las-vegas-strip-bar-crawl-t708411/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family","kids"], vibes:[], times:["night"], seasons:["winter","spring","summer","fall"], interests:["nightlife","unique"], tier:"budget", girlsTrip:true },
  { id:25, name:"Vegas! The Show", cat:"Show", price:47, rating:4.6, reviews:2599, dur:"1.5 hrs", emoji:"✨", desc:"Vegas history told through its greatest hits. Sinatra, Elvis, Liberace — all in one show.", url:"https://vegas.vdvm.net/R0O77N", provider:"VCO", tags:["solo","couple"], vibes:["dark","romantic"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget" },
  { id:26, name:"Hop-On Hop-Off Bus", cat:"Tour", price:58, rating:4.3, reviews:907, dur:"24 hrs", emoji:"🚌", desc:"See every inch of the Strip at your own pace. First-timers' best friend.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-24-or-48-hour-hop-on-hop-off-tour-t61878/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family","work","kids"], vibes:["luxury","romantic","first-timer"], times:["morning","day","night"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"budget" },
  { id:27, name:"ROUGE — Sensual Cabaret", cat:"Show", price:54, rating:4.4, reviews:843, dur:"1.5 hrs", emoji:"❤️", desc:"The STRAT's adults-only cabaret. Sensual, fearless, intimate. The perfect date night show on the Strip.", url:"https://vegas.vdvm.net/m5znGa", provider:"VCO", tags:["couple","group","bachelorette"], vibes:["dark"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid" },
  { id:28, name:"Cirque du Soleil O", cat:"Show", price:64, rating:4.8, reviews:1564, dur:"1.5 hrs", emoji:"🌊", desc:"Water. Acrobats. A stage that defies physics. The show that defines Las Vegas.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-o-by-cirque-du-soleil-at-bellagio-t398243/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple","bachelorette"], vibes:["dark"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid", girlsTrip:true },
  { id:29, name:"Atomic Saloon Show", cat:"Show", price:64, rating:4.4, reviews:490, dur:"1.5 hrs", emoji:"🤠", desc:"Wild West meets Vegas cabaret. The Venetian's best-kept secret. Adults only.", url:"https://vegas.vdvm.net/9g5B1y", provider:"VCO", tags:["couple","group","bachelorette"], vibes:["dark"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid", girlsTrip:true },
  { id:30, name:"Magic Mike Live", cat:"Show", price:54, rating:4.7, reviews:649, dur:"1.5 hrs", emoji:"🔥", desc:"The show every bachelorette group talks about for years. SAHARA Las Vegas. You already know.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-magic-mike-live-at-the-sahara-t525549/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:[], times:["night"], seasons:["spring"], interests:["show"], tier:"mid", girlsTrip:true },
  { id:31, name:"Chippendales", cat:"Show", price:67, rating:4.6, reviews:468, dur:"1.5 hrs", emoji:"💪", desc:"Planet Hollywood. The original male revue. Still the wildest night on the Strip.", url:"https://vegas.vdvm.net/DyOEj2", provider:"VCO", tags:["solo","couple","group","work"], vibes:["adventure"], times:["night"], seasons:["winter","spring","fall"], interests:["show"], tier:"mid", girlsTrip:true },
  { id:32, name:"Hoover Dam Mini Tour", cat:"Tour", price:70, rating:4.8, reviews:778, dur:"3 hrs", emoji:"🏗️", desc:"One of the greatest engineering feats in history. Hotel pickup included — no car needed. Most tourists never go.", url:"https://www.getyourguide.com/las-vegas-l58/award-winning-3-hour-vip-hoover-dam-small-group-mini-tour-t203887/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["family","kids"], vibes:["adventure"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["unique","adventure"], tier:"mid" },
  { id:33, name:"Tournament of Kings", cat:"Show", price:63, rating:4.5, reviews:1891, dur:"1.5 hrs", emoji:"⚔️", desc:"Medieval knights, jousting, explosions — and dinner included. Excalibur. Kids go absolutely wild.", url:"https://vegas.vdvm.net/oq1xGn", provider:"VCO", tags:["solo","couple","group","family"], vibes:["luxury","romantic"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid" },
  { id:34, name:"Awakening — Wynn", cat:"Show", price:74, rating:4.4, reviews:1576, dur:"1.5 hrs", emoji:"💫", desc:"A brand-new Wynn original. Dance, illusion, technology — what Vegas shows look like in 2026.", url:"https://vegas.vdvm.net/MmJP2n", provider:"VCO", tags:["solo","couple","group","bachelorette"], vibes:["dark"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid" },
  { id:35, name:"Thunder From Down Under", cat:"Show", price:74, rating:4.5, reviews:722, dur:"1.5 hrs", emoji:"⚡", desc:"Australian men. Excalibur. The bachelorette show that started it all.", url:"https://vegas.vdvm.net/VmROXR", provider:"VCO", tags:["solo","couple","group"], vibes:["adventure"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid", girlsTrip:true },
  { id:36, name:"Military Hummer Tour", cat:"Tour", price:79, rating:4.8, reviews:95, dur:"2.5 hrs", emoji:"🪖", desc:"The Strip, the neon signs and the desert — from inside a military Hummer. Vegas from a different angle.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-strip-sightseeing-tour-in-a-military-hummer-t828401/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:[], times:["morning","day","night"], seasons:["winter","spring","summer","fall"], interests:["unique","adventure"], tier:"mid" },
  { id:37, name:"Pawn Stars + Shelby Tour", cat:"Culture", price:85, rating:4.5, reviews:486, dur:"4 hrs", emoji:"🏆", desc:"The actual Pawn Stars store, Count's Kustoms, and the Shelby Museum. Vegas for car and TV lovers.", url:"https://www.getyourguide.com/las-vegas-l58/vip-pawn-stars-tour-t39631/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","work"], vibes:[], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"mid" },
  { id:38, name:"Wizard of Oz — Sphere", cat:"Show", price:114, rating:4.5, reviews:1319, dur:"1.5 hrs", emoji:"🌐", desc:"The Sphere. 160,000 sq ft of LED. Wizard of Oz has never looked anything like this.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-the-sphere-experience-the-wizard-of-oz-t969545/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family","kids"], vibes:["luxury","adventure","first-timer"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["show","unique"], tier:"mid" },
  { id:39, name:"Michael Jackson ONE", cat:"Show", price:96, rating:4.8, reviews:1048, dur:"1.5 hrs", emoji:"🕺", desc:"Cirque du Soleil meets MJ. Mandalay Bay. The most emotional show on the Strip.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-michael-jackson-one-by-cirque-du-soleil-ticket-t400944/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family","work","kids"], vibes:["luxury"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid" },
  { id:40, name:"Desert ATV Tour", cat:"Adventure", price:109, rating:4.7, reviews:712, dur:"3 hrs", emoji:"🏜️", desc:"Real ATVs in the real Mojave. Nothing between you and the desert. Pure adrenaline.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-guided-las-vegas-desert-atv-tour-t417683/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:[], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["adventure"], tier:"mid" },
  { id:41, name:"Mt. Charleston Day Trip", cat:"Tour", price:109, rating:4.7, reviews:82, dur:"Half day", emoji:"❄️", desc:"30 minutes from the Strip. Hotel pickup included — no car needed. Snow in winter, pine forests in spring.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-mount-charleston-and-lee-canyon-day-trip-t371990/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","work"], vibes:[], times:["morning","day"], seasons:["winter"], interests:["adventure","unique"], tier:"mid" },
  { id:42, name:"Exotics Racing", cat:"Adventure", price:109, rating:4.8, reviews:188, dur:"1 hr", emoji:"🏎️", desc:"Drive a Lamborghini, Ferrari or Porsche on a real track. South of the Strip. Lives changed here.", url:"https://vegas.vdvm.net/eK4ZeZ", provider:"VCO", tags:["solo","group"], vibes:["adventure"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["adventure"], tier:"mid" },
  { id:43, name:"Red Rock Canyon Trekker", cat:"Adventure", price:123, rating:4.8, reviews:125, dur:"4 hrs", emoji:"🪨", desc:"The red sandstone cliffs that frame Vegas — from inside them. Hotel pickup included. Small group. No tourists.", url:"https://www.getyourguide.com/las-vegas-l58/red-rock-canyon-by-tour-trekker-from-las-vegas-t7455/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family"], vibes:["adventure"], times:["morning","day"], seasons:["winter","spring"], interests:["adventure"], tier:"mid" },
  { id:44, name:"Grand Canyon + Hoover Dam", cat:"Tour", price:99, rating:4.8, reviews:3066, dur:"10.5 hrs", emoji:"🏔️", desc:"Two natural and engineering wonders in one day. Hotel pickup included — no car needed. The most-booked tour from Vegas.", url:"https://www.getyourguide.com/las-vegas-l58/vegas-grand-canyon-hoover-dam-lunchskywalk-options-wifi-t190065/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","work"], vibes:["luxury","adventure"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["adventure","unique"], tier:"mid" },
  { id:45, name:"Helicopter Night Strip", cat:"Adventure", price:129, rating:4.6, reviews:1687, dur:"15 min", emoji:"🚁", desc:"The Strip from a helicopter at night. The most iconic view in America — from 1,000 feet.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-strip-helicopter-flight-without-transfers-t33967/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family"], vibes:["adventure"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["adventure"], tier:"mid", girlsTrip:true },
  { id:46, name:"Valley of Fire Tour", cat:"Tour", price:99, rating:4.8, reviews:572, dur:"6 hrs", emoji:"🔥", desc:"50-mile stretch of ancient red rock. Hotel pickup included — no car needed. Petroglyphs, silence, Mars on Earth.", url:"https://www.getyourguide.com/las-vegas-l58/vegas-valley-of-fire-state-park-1-day-tour-t700962/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family","work","kids"], vibes:["adventure"], times:["morning","day"], seasons:["winter","spring","fall"], interests:["adventure","unique"], tier:"mid" },
  { id:47, name:"Machine Gun Shooting — Outdoor", cat:"Adventure", price:159, rating:4.9, reviews:264, dur:"3 hrs", emoji:"💥", desc:"Outdoor machine gun range with shuttle. The most American afternoon you'll spend anywhere.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-outdoor-machine-gun-and-rifle-shooting-w-pickup-t524974/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:["luxury","adventure","romantic"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["adventure"], tier:"premium" },
  { id:48, name:"Bryce + Zion National Parks", cat:"Tour", price:169, rating:4.7, reviews:1126, dur:"13 hrs", emoji:"🌲", desc:"Two of America's most spectacular national parks in one day. Hotel pickup included — no car needed. Hoodoos and red arches.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-bryce-and-zion-national-parks-tour-with-lunch-t304518/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:["adventure"], times:["morning","day"], seasons:["winter","spring","fall"], interests:["adventure","unique"], tier:"premium" },
  { id:49, name:"Death Valley Sunset + Stars", cat:"Tour", price:249, rating:4.9, reviews:242, dur:"12 hrs", emoji:"🌟", desc:"The lowest point in North America at sunset. Hotel pickup included — no car needed. Then the Milky Way. No words.", url:"https://www.getyourguide.com/las-vegas-l58/from-las-vegas-best-of-death-valley-small-group-tour-t405877/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","work"], vibes:["adventure"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["adventure","unique"], tier:"premium" },
  { id:50, name:"Desert Horseback + BBQ Dinner", cat:"Adventure", price:160, rating:4.7, reviews:459, dur:"6 hrs", emoji:"🐴", desc:"Horses in the Mojave at sunset. Hotel pickup included — no car needed. Real cowboy BBQ dinner under the stars.", url:"https://www.getyourguide.com/las-vegas-l58/wild-west-sunset-bbq-dinner-horseback-ride-t5169/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family"], vibes:["adventure"], times:["day"], seasons:["spring","fall"], interests:["adventure"], tier:"premium", girlsTrip:true },
  { id:51, name:"Emerald Cave Kayak", cat:"Adventure", price:119, rating:4.7, reviews:269, dur:"4 hrs", emoji:"🚣", desc:"Kayak into a glowing emerald cave on the Colorado River. Shuttle included — no car needed. The best outdoor secret near Vegas.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-colorado-river-to-emerald-cave-half-day-kayak-t518013/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple"], vibes:["dark","adventure"], times:["morning","day"], seasons:["winter","spring","fall"], interests:["adventure"], tier:"mid" },
  { id:52, name:"Moonlight Kayak — Colorado River", cat:"Adventure", price:149, rating:5.0, reviews:10, dur:"3 hrs", emoji:"🌙", desc:"Kayaking on the Colorado River under the full moon. The most romantic outdoor adventure near Vegas.", url:"https://www.getyourguide.com/las-vegas-l58/from-las-vegas-moonlight-kayak-tour-on-the-colorado-river-t449853/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple","group","family"], vibes:["adventure","romantic"], times:["night"], seasons:["winter","spring","fall"], interests:["adventure","unique"], tier:"mid", girlsTrip:true },
  { id:53, name:"Antelope Canyon + Horseshoe Bend", cat:"Tour", price:189, rating:4.7, reviews:2104, dur:"15 hrs", emoji:"🏞️", desc:"The most photographed slot canyon on Earth, plus Horseshoe Bend. Hotel pickup included — no car needed.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-antelope-canyon-horseshoe-bend-with-lunch-wifi-t173577/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family"], vibes:["adventure"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["adventure","unique"], tier:"premium" },
  { id:54, name:"Area 51 Full-Day Tour", cat:"Tour", price:242, rating:4.8, reviews:252, dur:"10 hrs", emoji:"👽", desc:"The classified base. The black mailbox. Hotel pickup included — no car needed. Whether you believe or not — this is eerie.", url:"https://www.getyourguide.com/las-vegas-l58/area-51-tour-from-las-vegas-t47582/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","family"], vibes:["dark","adventure","romantic"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["unique","adventure"], tier:"premium" },
  { id:55, name:"Personal Photographer", cat:"Experience", price:304, rating:4.8, reviews:39, dur:"1-3 hrs", emoji:"📸", desc:"A professional travel photographer. Your whole trip documented. Worth every dollar.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-personal-travel-vacation-photographer-t129907/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:["adventure","romantic"], times:["morning","day","night"], seasons:["spring","fall"], interests:["unique"], tier:"luxury", girlsTrip:true },
  { id:56, name:"Limo Tour + Champagne + Club VIP", cat:"Nightlife", price:499, rating:4.8, reviews:11, dur:"4 hrs", emoji:"🚘", desc:"Stretch limo pickup, champagne on the way, VIP club entry. The bachelorette night Vegas was built for.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-limo-tour-with-champagne-and-nightclub-entry-t981477/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:["dark","adventure"], times:["day","night"], seasons:["winter","spring","fall"], interests:["nightlife"], tier:"luxury", girlsTrip:true },
  { id:57, name:"Elvis Wedding — Graceland", cat:"Romantic", price:324, rating:4.9, reviews:331, dur:"1.5 hrs", emoji:"💍", desc:"The Graceland Wedding Chapel. Elvis officiates. Completely legal. Completely Vegas.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-traditional-wedding-or-vow-renewal-t437514/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple"], vibes:["luxury","romantic"], times:["morning","day","night"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"luxury" },
  { id:58, name:"Grand Canyon Helicopter Landing", cat:"Adventure", price:519, rating:4.8, reviews:1415, dur:"4.5 hrs", emoji:"🚁", desc:"Land inside the Grand Canyon. Champagne picnic on the canyon floor. Nothing comes close.", url:"https://www.getyourguide.com/las-vegas-l58/grand-canyon-helicopter-landing-tour-ecostar-t9617/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple","group","bachelorette"], vibes:["luxury"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["adventure"], tier:"luxury" },
  { id:59, name:"KÀ Royal VIP + Backstage", cat:"Show", price:370, rating:5.0, reviews:1, dur:"3 hrs", emoji:"🎪", desc:"Cirque's most spectacular show — plus backstage access, artist meet and greet, VIP lounge. Once in a lifetime.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-ka-by-cirque-du-soleil-at-mgm-grand-ticket-t405483/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple"], vibes:["luxury","romantic"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"luxury" },
  { id:60, name:"Helicopter Wedding Ceremony", cat:"Romantic", price:1350, rating:5.0, reviews:2, dur:"2 hrs", emoji:"💒", desc:"Get married in a helicopter over the Las Vegas Strip at night. The most Vegas thing possible.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-night-strip-helicopter-wedding-ceremony-package-t774621/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group","work"], vibes:["luxury","adventure","romantic"], times:["night"], seasons:["winter","spring","fall"], interests:["unique"], tier:"luxury" },
  { id:61, name:"Four Seasons Spa Day", cat:"Wellness", price:150, rating:4.9, reviews:50, dur:"Full day", emoji:"💆", desc:"Forbes 5-star. Mineral pools, expert therapists, complete silence. The reset Vegas can actually give you.", url:"https://vegas.vdvm.net/JkL7PE", provider:"VCO", tags:["solo","couple","work"], vibes:["luxury","romantic"], times:["morning"], seasons:["winter","spring","summer","fall"], interests:["wellness","unique"], tier:"premium", girlsTrip:true },
  { id:62, name:"Canyon Ranch Spa — Venetian", cat:"Wellness", price:120, rating:4.8, reviews:200, dur:"Half day", emoji:"🧖", desc:"The world's most famous spa brand, inside The Venetian. Massages, fitness, complete transformation.", url:"https://vegas.vdvm.net/xJ2YMv", provider:"VCO", tags:["couple"], vibes:["luxury","romantic"], times:["morning"], seasons:["winter","spring","summer","fall"], interests:["wellness","unique"], tier:"premium", girlsTrip:true },
  { id:63, name:"The Spa at Encore — Wynn", cat:"Wellness", price:130, rating:4.9, reviews:150, dur:"Half day", emoji:"🌿", desc:"One of the most awarded spas in North America. Inside Encore at Wynn. Pure luxury, no casino noise.", url:"https://vegas.vdvm.net/dy9YMk", provider:"VCO", tags:["solo","couple"], vibes:["luxury","romantic"], times:["morning"], seasons:["winter","spring","summer","fall"], interests:["wellness","unique"], tier:"premium", girlsTrip:true },
  { id:64, name:"Vdara Spa & Salon", cat:"Wellness", price:80, rating:4.7, reviews:100, dur:"Half day", emoji:"🛁", desc:"No casino. No noise. Just a world-class spa in the most peaceful hotel on the Strip.", url:"https://vegas.vdvm.net/6kPmjG", provider:"VCO", tags:["solo","couple","bachelorette","work"], vibes:["luxury","romantic"], times:["morning"], seasons:["winter","spring","summer","fall"], interests:["wellness","unique"], tier:"mid" },
  { id:65, name:"Nelson Ghost Town & Mine Tour", cat:"Dark", price:134, rating:4.7, reviews:68, dur:"4 hrs", emoji:"👻", desc:"An abandoned 1800s gold mining town 45 minutes from Vegas. Rusty cars, real ghost stories, an actual mine. The dark side Nevada doesn't advertise.", url:"https://www.getyourguide.com/nelson-ghost-town-nevada-l187538/las-vegas-nelson-ghost-town-with-mine-tour-option-t1221627/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple"], vibes:["luxury","romantic"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["unique","adventure"], tier:"mid" },
  { id:74, name:"Strip Club Crawl + Open Bar + Party Bus", cat:"Nightlife", price:99, rating:4.7, reviews:150, dur:"4 hrs", emoji:"🍾", desc:"Party bus, open bar and VIP entry to Vegas' top strip clubs. The bachelor party night this city was built for.", url:"https://www.getyourguide.com/las-vegas-l58/strip-club-crawl-open-bar-party-bus-t442598/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:["luxury"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["nightlife"], tier:"mid", guysTrip:true },
  { id:66, name:"Pool Party Crawl by Party Bus", cat:"Nightlife", price:99, rating:4.5, reviews:110, dur:"5 hrs", emoji:"🏊", desc:"Party bus to a Vegas pool party with free drinks and VIP entry. The definitive Vegas summer experience.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-pool-party-crawl-by-party-bus-t439815/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","work"], vibes:["luxury"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["nightlife"], tier:"mid", girlsTrip:true },
  { id:67, name:"3-Stop Pool Party Crawl — Party Bus", cat:"Nightlife", price:99, rating:4.5, reviews:110, dur:"5 hrs", emoji:"🎉", desc:"Party bus hits 3 Vegas pool parties in one day. Free drinks, VIP entry at each stop. Summer in Vegas, maximized.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-strip-3-stop-pool-party-crawl-with-party-bus-t384399/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["solo","couple","group"], vibes:["dark","adventure"], times:["morning","day"], seasons:["winter","spring","fall"], interests:["nightlife"], tier:"mid", girlsTrip:true },
  // ── LGBT EXPERIENCES ──
  { id:68, name:"EDC Las Vegas 2026", cat:"Festival", price:350, rating:4.9, reviews:500, dur:"3 nights", emoji:"🎡", desc:"Electric Daisy Carnival — the world's most iconic EDM festival. Las Vegas Motor Speedway. Three nights of pure freedom.", url:"https://vegas.vdvm.net/L0xvKL", provider:"VCO", tags:["solo","couple","group","bachelorette"], vibes:["adventure"], times:["night"], seasons:["spring","summer"], interests:["show","nightlife"], tier:"luxury", lgbtq:true },
  { id:69, name:"Phoenix Bar and Lounge", cat:"Nightlife", price:20, rating:4.8, reviews:200, dur:"Night", emoji:"🌈", desc:"Vegas' most welcoming LGBT bar. No attitude, all energy. The kind of place you don't want to leave.", url:"https://vegas.vdvm.net/5kMey2", provider:"VCO", tags:["solo","couple","group","bachelorette"], vibes:["adventure"], times:["night"], seasons:["spring","summer"], interests:["nightlife"], tier:"budget", lgbtq:true },
  { id:70, name:"Faaabulous! Ultimate Drag Brunch", cat:"Show", price:75, rating:4.9, reviews:150, dur:"2 hrs", emoji:"👑", desc:"The most spectacular drag brunch in Vegas. Lip sync battles, comedy, audience moments. Saturday mornings at their most fabulous.", url:"https://vegas.vdvm.net/Gb06Em", provider:"VCO", tags:["solo","group"], vibes:["adventure"], times:["morning"], seasons:["spring"], interests:["show"], tier:"mid", lgbtq:true },
  { id:71, name:"Drag Brunch Las Vegas", cat:"Show", price:65, rating:4.8, reviews:120, dur:"2 hrs", emoji:"💅", desc:"Bottomless mimosas, drag queens, and the most fun brunch you've ever had. Reservations essential.", url:"https://vegas.vdvm.net/n4ROgA", provider:"VCO", tags:["solo","couple","group"], vibes:["dark"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid", lgbtq:true },
  { id:72, name:"RuPaul's Drag Race LIVE!", cat:"Show", price:99, rating:4.9, reviews:800, dur:"1.5 hrs", emoji:"🏆", desc:"The queens from RuPaul's Drag Race, live on the Vegas Strip. Iconic. Unmissable. The most entertaining show in town.", url:"https://vegas.vdvm.net/QYNqGY", provider:"VCO", tags:["solo","couple","group"], vibes:[], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid", lgbtq:true },
  { id:73, name:"Drag Your Sass to Brunch — Hamburger Mary's", cat:"Show", price:55, rating:4.8, reviews:90, dur:"2 hrs", emoji:"🍔", desc:"Hamburger Mary's legendary drag brunch. Outrageous, hilarious, and inclusive. The most fun $55 you'll spend in Vegas.", url:"https://vegas.vdvm.net/B5zWG9", provider:"VCO", tags:["solo","couple","group"], vibes:[], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"budget", lgbtq:true },
  // ── SPORTS ──
  { id:75, name:"Circa Las Vegas Sportsbook", cat:"Sports", price:0, rating:4.9, reviews:300, dur:"Any time", emoji:"🏆", desc:"The largest sportsbook in the world. 4 stories, 350 screens, stadium seating. Watch any game like nowhere else on Earth.", url:"https://vegas.vdvm.net/jRnEoP", provider:"VCO", tags:["solo","couple","group"], vibes:[], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["sports","unique"], tier:"budget", guysTrip:true },
  { id:76, name:"MGM Grand Race & Sports Book", cat:"Sports", price:0, rating:4.7, reviews:200, dur:"Any time", emoji:"🎰", desc:"One of Vegas' most iconic sportsbooks. Inside MGM Grand. Great screens, great action, great atmosphere.", url:"https://vegas.vdvm.net/vD4LLv", provider:"VCO", tags:["solo","group","bachelorette"], vibes:["dark"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["sports","unique"], tier:"budget", guysTrip:true },
  { id:77, name:"Vegas Golden Knights — NHL Game", cat:"Sports", price:80, rating:4.9, reviews:500, dur:"3 hrs", emoji:"🏒", desc:"T-Mobile Arena. The team that made Vegas a real sports city. The most electric atmosphere in the NHL.", url:"https://vegas.vdvm.net/YVq55P", provider:"VCO", tags:["solo","couple","group","work"], vibes:["casino"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["sports"], tier:"mid", guysTrip:true },
  { id:78, name:"Las Vegas Aces — WNBA Game", cat:"Sports", price:40, rating:4.8, reviews:200, dur:"2.5 hrs", emoji:"🏀", desc:"Back-to-back WNBA champions. Michelob Ultra Arena. The most exciting women's basketball in the world.", url:"https://vegas.vdvm.net/xJ2xx1", provider:"VCO", tags:["solo","group","work"], vibes:["casino"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["sports"], tier:"budget", girlsTrip:true },
  { id:79, name:"Las Vegas Aviators — Baseball Game", cat:"Sports", price:20, rating:4.7, reviews:150, dur:"3 hrs", emoji:"⚾", desc:"Triple-A baseball at Las Vegas Ballpark. Affordable, fun for all ages. The best family sports experience in Vegas.", url:"https://vegas.vdvm.net/PzrLLe", provider:"VCO", tags:["solo","couple","group","family","work"], vibes:["adventure"], times:["day","night"], seasons:["winter","spring","fall"], interests:["sports"], tier:"budget" },
  { id:80, name:"Henderson Silver Knights — Hockey", cat:"Sports", price:25, rating:4.7, reviews:100, dur:"2.5 hrs", emoji:"🥅", desc:"The VGK's farm team. Dollar Arena in Henderson. Great hockey, small venue, affordable — the locals' choice.", url:"https://vegas.vdvm.net/L0xvJM", provider:"VCO", tags:["solo","couple","group","family","kids"], vibes:["adventure"], times:["day","night"], seasons:["spring","summer"], interests:["sports"], tier:"budget", guysTrip:true },
  // ── LIMITED TIME ──
  { id:81, name:"Dolly Parton Live at Allegiant Stadium", cat:"Concert", price:1843, rating:4.9, reviews:100, dur:"2.5 hrs", emoji:"🎸", desc:"The Queen of Country. Live at Allegiant Stadium. September shows only — premium event, limited seats.", url:"https://vegas.vdvm.net/gRAzj9", provider:"VCO", tags:["solo","couple","group","family","kids"], vibes:["adventure"], times:["night"], seasons:["spring","summer","fall"], interests:["show"], tier:"luxury", girlsTrip:true, limitedTime:"Until Sep 26, 2026" },
  { id:82, name:"NHRA Nationals Las Vegas", cat:"Sports", price:45, rating:4.8, reviews:80, dur:"Full day", emoji:"🚗", desc:"The fastest cars on the planet. The loudest event in Vegas. NHRA drag racing at its absolute best.", url:"https://vegas.vdvm.net/enrDn1", provider:"VCO", tags:["solo","group","family","kids"], vibes:["adventure"], times:["morning","day"], seasons:["winter","spring","fall"], interests:["sports","adventure"], tier:"budget", guysTrip:true, limitedTime:"Until Nov 1" },
  { id:83, name:"NBA Summer League", cat:"Sports", price:30, rating:4.7, reviews:150, dur:"2.5 hrs", emoji:"🏀", desc:"Watch NBA rookies and future stars before they make it big. Thomas & Mack Center. Vegas summers just got better.", url:"https://vegas.vdvm.net/B5zj5B", provider:"VCO", tags:["solo","couple","group"], vibes:["luxury"], times:["day","night"], seasons:["fall"], interests:["sports"], tier:"budget", limitedTime:"Until Jul 19" },
  { id:84, name:"NASCAR Cup Series Las Vegas", cat:"Sports", price:75, rating:4.8, reviews:200, dur:"Full day", emoji:"🏁", desc:"500 miles of pure adrenaline at Las Vegas Motor Speedway. The loudest Sunday you'll ever have.", url:"https://vegas.vdvm.net/6kPvkQ", provider:"VCO", tags:["solo","couple","group"], vibes:[], times:["morning","day"], seasons:["fall"], interests:["sports","adventure"], tier:"mid", guysTrip:true, limitedTime:"Until Oct 4" },
  { id:85, name:"Formula 1 Las Vegas Grand Prix", cat:"Sports", price:500, rating:4.9, reviews:300, dur:"Full day", emoji:"🏎️", desc:"F1 racing on the Las Vegas Strip at night. The most spectacular sporting event in the world — right here.", url:"https://vegas.vdvm.net/dy9xyW", provider:"VCO", tags:["group","family","kids"], vibes:["adventure"], times:["day","night"], seasons:["summer"], interests:["sports","adventure"], tier:"luxury", guysTrip:true, limitedTime:"Until Nov 21" },
  { id:86, name:"BTS — Live in Las Vegas", cat:"Concert", price:101, rating:4.9, reviews:200, dur:"2.5 hrs", emoji:"💜", desc:"BTS live at Allegiant Stadium. Shows May 23, 24, 27 & 28. The biggest K-pop event of the year — don't miss it.", url:"https://vegas.vdvm.net/m4XeGa", provider:"VCO", tags:["solo","group","family"], vibes:["adventure"], times:["night"], seasons:["fall"], interests:["show"], tier:"mid", girlsTrip:true, lgbtq:true, limitedTime:"May 23–28, 2026" },
  { id:87, name:"Cowabunga Canyon Water Park", cat:"Adventure", price:45, rating:4.7, reviews:300, dur:"Full day", emoji:"💦", desc:"Vegas' best water park. Slides, lazy river, wave pool — the perfect summer day with kids of all ages.", url:"https://vegas.vdvm.net/xkWeD1", provider:"VCO", tags:["solo","couple","group","family","kids"], vibes:[], times:["morning","day"], seasons:["summer"], interests:["adventure","unique"], tier:"budget" },
  { id:88, name:"New Kids on the Block", cat:"Concert", price:69, rating:4.9, reviews:23, dur:"2.5 hrs", emoji:"🎤", desc:"Back to the stage at Park MGM. The Boys are back — and Vegas is their venue.", url:"https://vegas.vdvm.net/B5z74y", provider:"VCO", tags:["solo","group"], vibes:["adventure"], times:["night"], seasons:["fall"], interests:["show"], tier:"mid", girlsTrip:true, limitedTime:"Until Jul 3" },
  { id:89, name:"Ed Sheeran — Allegiant Stadium", cat:"Concert", price:87, rating:4.8, reviews:50, dur:"2.5 hrs", emoji:"🎸", desc:"Ed Sheeran live at Allegiant Stadium. One of the biggest touring artists in the world — right here in Vegas.", url:"https://vegas.vdvm.net/k4aYxL", provider:"VCO", tags:["solo","couple","group","work"], vibes:["luxury","adventure"], times:["night"], seasons:["fall"], interests:["show"], tier:"mid", girlsTrip:true, limitedTime:"Until Jul 17" },
  { id:90, name:"Scorpions — Planet Hollywood", cat:"Concert", price:91, rating:4.6, reviews:44, dur:"2 hrs", emoji:"🦂", desc:"Rock legends at Planet Hollywood. The Scorpions residency — a bucket list night for rock fans.", url:"https://vegas.vdvm.net/Pzr7P6", provider:"VCO", tags:["solo","couple","group","family","work"], vibes:["luxury","adventure"], times:["night"], seasons:["winter","spring","summer","fall"], interests:["show"], tier:"mid", guysTrip:true, limitedTime:"Until Oct 2" },
  { id:91, name:"Allegiant Stadium Guided Tour", cat:"Culture", price:59, rating:4.8, reviews:49, dur:"1.5 hrs", emoji:"🏟️", desc:"Go behind the scenes of the most technologically advanced stadium in NFL history. Home of the Raiders.", url:"https://vegas.vdvm.net/9VM05e", provider:"VCO", tags:["couple"], vibes:["luxury","romantic"], times:["morning","day"], seasons:["winter","spring","summer","fall"], interests:["unique","sports"], tier:"mid", guysTrip:true },
  { id:92, name:"Elvis Wedding + Limousine", cat:"Romantic", price:549, rating:5.0, reviews:23, dur:"2 hrs", emoji:"🚘", desc:"Get married by Elvis — then ride away in a stretch limo. The most Vegas honeymoon moment possible.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-elvis-themed-wedding-with-limousine-t844123/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple","group","bachelorette"], vibes:["luxury"], times:["day","night"], seasons:["winter","spring","summer","fall"], interests:["unique"], tier:"luxury" },
  { id:93, name:"Arts District Limo + Meal", cat:"Experience", price:199, rating:4.3, reviews:10, dur:"4 hrs", emoji:"🎨", desc:"Stretch limo ride through the Arts District with a meal included. Vegas' creative side, in style.", url:"https://www.getyourguide.com/las-vegas-l58/las-vegas-arts-district-tour-with-limo-ride-bubbly-meal-t844124/?partner_id=FIT427X&utm_medium=online_publisher", provider:"GYG", tags:["couple","bachelorette","group"], vibes:["luxury"], times:["day","night"], seasons:["spring","summer","fall","winter"], interests:["unique"], tier:"premium", girlsTrip:true },
];

const FREE_EXPERIENCES = [
  { id:"f1", name:"Bellagio Fountains at Night", loc:"Bellagio Hotel", time:"After 8pm", emoji:"⛲", desc:"Every 15-30 minutes after dark. 1,000 jets of water choreographed to music. Free. Unmissable.", url:"https://vegas.vdvm.net/oq11jb" },
  { id:"f3", name:"Fremont Street LED Experience", loc:"Downtown Vegas", time:"After dark", emoji:"💡", desc:"A 1,500-foot LED canopy with free shows every hour. The Vegas the Strip doesn't want you to see.", url:"https://vegas.vdvm.net/9gR3A3" },
  { id:"f5", name:"Grand Canal Shoppes — The Venetian", loc:"The Venetian", time:"Anytime", emoji:"🛶", desc:"Venice reconstructed inside a hotel. Walk it for free. Watch the gondolas for free. It works.", url:"https://vegas.vdvm.net/MmJJG3" },
  { id:"f10", name:"Welcome to Las Vegas Sign", loc:"South Strip", time:"Golden Hour", emoji:"🪧", desc:"The photo. Golden hour makes it transcendent. Get there 30 minutes before sunset.", url:"https://vegas.vdvm.net/DKPrk2" },
  { id:"f6", name:"Pinball Hall of Fame", loc:"South Strip", time:"Anytime", emoji:"🎮", desc:"500+ vintage machines from the 1950s onward. All playable for quarters. Totally free to enter.", url:"https://vegas.vdvm.net/WqnZa3", tags:["budget"] },
  { id:"f2", name:"Bellagio Conservatory & Garden", loc:"Bellagio Hotel", time:"Anytime", emoji:"🌸", desc:"A 14,000 sq ft indoor garden that changes 5 times a year. Currently the most beautiful room in Vegas.", url:"https://vegas.vdvm.net/Org2RN" },
  { id:"f9", name:"Fall of Atlantis — Caesars", loc:"Forum Shops", time:"Every hour", emoji:"🏛️", desc:"A free animatronic show inside Caesars Forum Shops. Surprisingly spectacular.", url:"https://vegas.vdvm.net/g1jjyO", tags:["budget"] },
  { id:"f4", name:"Flamingo Wildlife Habitat", loc:"Flamingo Hotel", time:"Morning", emoji:"🦩", desc:"Real flamingos living inside a casino resort. Free to visit. Great for families and kids — surreal at 8am.", tags:["family","kids"], url:"https://vegas.vdvm.net/6eOKEq" },
  { id:"f7", name:"M&M's World Las Vegas", loc:"Las Vegas Blvd", time:"Anytime", emoji:"🍬", desc:"4 floors of chocolate chaos. Free to enter. The world's largest M&M's store.", url:"https://vegas.vdvm.net/JzGaLE", tags:["family","kids"] },
  { id:"f8", name:"Hershey's Chocolate World", loc:"New York-New York", time:"Anytime", emoji:"🍫", desc:"Inside a casino. A giant Hershey's experience — free to browse, optional to buy.", url:"https://vegas.vdvm.net/rQZ9R5", tags:["family","kids"] },
];

// ─── HOTELS ───────────────────────────────────────────────────────────────
const HOTELS = [
  { name:"Wynn Las Vegas", stars:5, price:"$250–$600/night", feature:"Best spa & pool on Strip", url:"https://vegas.vdvm.net/n4RmL9", profiles:["luxury","couple","girls","work"], tiers:["vip"], location:"north-south", nosmoking:false, kitchen:false },
  { name:"Bellagio", stars:5, price:"$200–$500/night", feature:"Iconic fountains, fine dining", url:"https://vegas.vdvm.net/OY9Per", profiles:["luxury","couple","girls","family","first-timer","work"], tiers:["high","vip"], location:"center", nosmoking:false, kitchen:false },
  { name:"The Venetian Resort", stars:5, price:"$200–$450/night", feature:"Gondola rides, huge suites", url:"https://vegas.vdvm.net/y200Jv", profiles:["luxury","couple","girls","first-timer"], tiers:["high","vip"], location:"center", nosmoking:false, kitchen:false },
  { name:"Cosmopolitan", stars:5, price:"$180–$500/night", feature:"Hippest hotel, best vibe", url:"https://vegas.vdvm.net/POPzZX", profiles:["luxury","couple","girls","first-timer"], tiers:["high","vip"], location:"center", nosmoking:false, kitchen:false },
  { name:"Caesars Palace", stars:5, price:"$150–$400/night", feature:"Most iconic Vegas hotel", url:"https://vegas.vdvm.net/QYNkjx", profiles:["luxury","couple","first-timer","work"], tiers:["high","vip"], location:"center", nosmoking:false, kitchen:false },
  { name:"Fontainebleau Las Vegas", stars:5, price:"$200–$600/night", feature:"Newest 5-star, stunning design", url:"https://vegas.vdvm.net/5kM4k3", profiles:["luxury","couple","girls","work"], tiers:["vip"], location:"north-south", nosmoking:false, kitchen:false },
  { name:"Trump International Hotel", stars:5, price:"$150–$400/night", feature:"No casino, suites with kitchen", url:"https://vegas.vdvm.net/GmzdA6", profiles:["luxury","couple","family","work"], tiers:["high","vip"], location:"off-strip", nosmoking:true, kitchen:true },
  { name:"Aria Resort & Casino", stars:5, price:"$180–$450/night", feature:"Modern luxury, best casino tech", url:"https://vegas.vdvm.net/MKDrA2", profiles:["luxury","work"], tiers:["high","vip"], location:"center", nosmoking:false, kitchen:false },
  { name:"MGM Grand", stars:4, price:"$100–$300/night", feature:"Huge casino, great pools", url:"https://vegas.vdvm.net/DWb4Lo", profiles:["first-timer","work"], tiers:["mid","high"], location:"center", nosmoking:false, kitchen:false },
  { name:"Mandalay Bay", stars:4, price:"$120–$350/night", feature:"Beach pool, lazy river — best for families", url:"https://vegas.vdvm.net/WqmQxO", profiles:["couple","girls","family"], tiers:["mid","high"], location:"north-south", nosmoking:false, kitchen:false },
  { name:"The Signature at MGM Grand", stars:4, price:"$120–$350/night", feature:"All suites, separate entrance, no casino noise", url:"https://vegas.vdvm.net/rQ6o4d", profiles:["couple","family","work"], tiers:["mid","high"], location:"center", nosmoking:true, kitchen:true },
  { name:"Hilton Grand Vacations Club Elara", stars:4, price:"$130–$300/night", feature:"Suite with full kitchen, Center Strip", url:"https://vegas.vdvm.net/PzrobX", profiles:["couple","family"], tiers:["mid","high"], location:"center", nosmoking:true, kitchen:true },
  { name:"Park MGM", stars:4, price:"$80–$200/night", feature:"Only 100% smoke-free casino on Strip", url:"https://vegas.vdvm.net/L0x90L", profiles:["couple","first-timer","work"], tiers:["mid","high"], location:"center", nosmoking:true, kitchen:false },
  { name:"Vdara Hotel & Spa", stars:4, price:"$100–$250/night", feature:"No casino, quiet, suites with kitchen", url:"https://vegas.vdvm.net/xk4DEx", profiles:["couple","family","work"], tiers:["mid","high"], location:"center", nosmoking:true, kitchen:true },
  { name:"SAHARA Las Vegas", stars:4, price:"$70–$180/night", feature:"Great pool, energetic vibe, North Strip", url:"https://vegas.vdvm.net/E0z4qe", profiles:["girls","first-timer"], tiers:["budget","mid"], location:"north-south", nosmoking:false, kitchen:false },
  { name:"The LINQ Hotel", stars:3, price:"$60–$150/night", feature:"Steps from High Roller — center of everything", url:"https://vegas.vdvm.net/Gb0Lbr", profiles:["couple","girls","first-timer"], tiers:["budget","mid"], location:"center", nosmoking:false, kitchen:false },
  { name:"Paris Las Vegas", stars:4, price:"$80–$200/night", feature:"Eiffel Tower views, romantic location", url:"https://vegas.vdvm.net/xJ21JR", profiles:["couple","girls","first-timer"], tiers:["mid","high"], location:"center", nosmoking:false, kitchen:false },
  { name:"Flamingo Las Vegas", stars:3, price:"$50–$130/night", feature:"Wildlife habitat, classic Vegas — best budget Strip hotel", url:"https://vegas.vdvm.net/1GD49x", profiles:["couple","girls","first-timer","budget"], tiers:["budget","mid"], location:"center", nosmoking:false, kitchen:false },
  { name:"Jockey Club", stars:3, price:"$80–$180/night", feature:"Kitchen suites, steps from Bellagio", url:"https://vegas.vdvm.net/m5WVRy", profiles:["couple","family","first-timer","work"], tiers:["mid","high"], location:"center", nosmoking:true, kitchen:true },
  { name:"Horseshoe Las Vegas", stars:3, price:"$50–$120/night", feature:"Central Strip, unbeatable value", url:"https://vegas.vdvm.net/Pzr5aX", profiles:["family","first-timer","work","budget"], tiers:["budget","mid"], location:"center", nosmoking:false, kitchen:false },
  { name:"New York-New York", stars:3, price:"$60–$150/night", feature:"Roller coaster, fun atmosphere — great for families", url:"https://vegas.vdvm.net/aNxEKb", profiles:["family","first-timer","work","budget"], tiers:["budget","mid"], location:"center", nosmoking:false, kitchen:false },
];

// ─── QUESTIONS ────────────────────────────────────────────────────────────
const QUESTIONS = [
  { id:"tripType", question:"Who's joining you in Vegas?", subtitle:"This shapes your entire experience", cols:3, multi:false,
    options:[
      {v:"solo",label:"Flying Solo",emoji:"🕶️",desc:"Just me — zero compromises"},
      {v:"couple",label:"With My Partner",emoji:"❤️",desc:"Making memories together"},
      {v:"group",label:"The Squad",emoji:"🥂",desc:"The more the wilder"},
      {v:"family",label:"Family Trip",emoji:"👨‍👩‍👧",desc:"Everyone has fun"},
      {v:"bachelorette",label:"Bachelorette / Bachelor",emoji:"👰",desc:"Epic last night of freedom"},
      {v:"work",label:"Work Trip",emoji:"💼",desc:"Here for business, staying for Vegas"},
    ]},
  { id:"groupGender", question:"What's your group like?", subtitle:"Helps us personalize your experience", cols:2, multi:false,
    familyVersion: true,
    options:[
      {v:"girls",label:"Girls / Women",emoji:"👯‍♀️",desc:"Girls night — we run this city"},
      {v:"guys",label:"Guys / Men",emoji:"🤙",desc:"Boys trip — no rules apply"},
      {v:"lgbtq",label:"LGBTQ+",emoji:"🏳️‍🌈",desc:"Proud, loud & ready for Vegas"},
      {v:"mixed",label:"Mixed Group",emoji:"👫",desc:"Everyone together — all welcome"},
    ],
    coupleOptions:[
      {v:"mixed",label:"Man & Woman",emoji:"👫",desc:"Classic couple — Vegas is yours"},
      {v:"lgbtq",label:"LGBTQ+",emoji:"🏳️‍🌈",desc:"Proud & ready for Vegas"},
    ],
    soloOptions:[
      {v:"girls",label:"Woman",emoji:"👩",desc:"Traveling solo as a woman"},
      {v:"guys",label:"Man",emoji:"👨",desc:"Traveling solo as a man"},
      {v:"lgbtq",label:"LGBTQ+",emoji:"🏳️‍🌈",desc:"Proud & ready for Vegas"},
    ],
    familyOptions:[
      {v:"under6",label:"Little Ones",emoji:"🧸",desc:"Under 6 — animals, rides & easy fun"},
      {v:"kids",label:"Kids",emoji:"🧒",desc:"Ages 6–12 — adventures & discovery"},
      {v:"teens",label:"Teens",emoji:"🧑",desc:"Ages 13–17 — thrills & cool experiences"},
      {v:"mixedages",label:"Mixed Ages",emoji:"👨‍👩‍👧‍👦",desc:"Different ages — something for everyone"},
    ]},
  { id:"vibe", question:"What's your Vegas vibe?", subtitle:"Pick up to 2 — your itinerary covers both", cols:3, multi:true, max:2,
    options:[
      {v:"dark",label:"Dark & Mysterious",emoji:"🌑",desc:"Ghost tours, hidden bars & the dark side of Vegas"},
      {v:"luxury",label:"Pure Luxury",emoji:"💎",desc:"Only the best, always"},
      {v:"adventure",label:"Thrill Seeker",emoji:"⚡",desc:"Adrenaline & rush"},
      {v:"casino",label:"Casino & Gambling",emoji:"🎲",desc:"The game within the game"},
      {v:"nightout",label:"Night Out",emoji:"🥃",desc:"Clubs, shows & no rules"},
      {v:"first-timer",label:"First Time in Vegas",emoji:"🎰",desc:"The iconic, done perfectly"},
    ],
    lgbtqOptions:[
      {v:"dark",label:"Dark & Mysterious",emoji:"🌑",desc:"Ghost tours, hidden bars & the dark side of Vegas"},
      {v:"luxury",label:"Pure Luxury",emoji:"💎",desc:"Only the best, always"},
      {v:"adventure",label:"Thrill Seeker",emoji:"⚡",desc:"Adrenaline & rush"},
      {v:"casino",label:"Gambling & Sports",emoji:"🎲",desc:"Sportsbooks, live games & casino action"},
      {v:"nightout",label:"Wild Night Out",emoji:"🥂",desc:"Clubs, shows & no rules"},
      {v:"first-timer",label:"First Time in Vegas",emoji:"🎰",desc:"The iconic, done perfectly"},
    ],
    familyMulti: true, familyMax: 2,
    familyOptions:[
      {v:"thrill",label:"Thrill & Adventure",emoji:"⚡",desc:"Rides, ATV & outdoor thrills"},
      {v:"show",label:"Shows & Entertainment",emoji:"🎭",desc:"Cirque, magic & live shows"},
      {v:"explore",label:"Explore & Discover",emoji:"🔭",desc:"Parks, museums & new experiences"},
      {v:"relaxed",label:"Relaxed & Easy",emoji:"😎",desc:"Low-key fun without exhaustion"},
    ],
    girlsOptions:[
      {v:"girlswild",label:"Wild Night Out",emoji:"🥂",desc:"Clubs, shows & no rules"},
      {v:"girlsspa",label:"Pamper & Relax",emoji:"💆",desc:"Spa days & luxury experiences"},
      {v:"girlsadventure",label:"Adventure Girls",emoji:"⚡",desc:"Thrills, outdoors & adrenaline"},
      {v:"girlsmix",label:"Mix of Everything",emoji:"🔥",desc:"A little bit of it all"},
    ],
    guysOptions:[
      {v:"dark",label:"Dark & Mysterious",emoji:"🌑",desc:"Ghost tours, hidden bars & the dark side of Vegas"},
      {v:"adventure",label:"Thrill Seeker",emoji:"⚡",desc:"Adrenaline & rush"},
      {v:"casino",label:"Gambling & Sports",emoji:"🎲",desc:"Sportsbooks, live games & casino action"},
      {v:"nightout",label:"Night Out",emoji:"🥃",desc:"Clubs, shows & no rules"},
      {v:"first-timer",label:"First Time in Vegas",emoji:"🎰",desc:"The iconic, done perfectly"},
    ]},
  { id:"interest", question:"What's calling you to Vegas?", subtitle:"Pick up to 3 — we'll cover them all", cols:2, multi:true, max:3,
    options:[
      {v:"show",label:"Shows & Live Entertainment",emoji:"🎭",desc:"Cirque, Sphere, concerts & tributes"},
      {v:"nightlife",label:"Wild Nights Out",emoji:"🥂",desc:"Clubs, bar crawls & pool parties"},
      {v:"nature",label:"Nature & National Parks",emoji:"🏜️",desc:"Grand Canyon, deserts & outdoors"},
      {v:"wellness",label:"Spa & Wellness",emoji:"💆",desc:"Rest, reset & luxury spa days"},
      {v:"unique",label:"Unique & Hidden Gems",emoji:"🔮",desc:"Things only possible in Vegas"},
      {v:"sports",label:"Sports & Action",emoji:"🏆",desc:"Live games & sportsbooks"},
      {v:"adventure",label:"Thrill & Adventure",emoji:"⚡",desc:"ATV, helicopter & adrenaline"},
      {v:"luxury",label:"Pure Luxury",emoji:"💎",desc:"Only the best — no compromises"},
    ]},
  { id:"alreadyInVegas", question:"Are you already in Vegas?", subtitle:"This helps us tailor your itinerary perfectly", cols:2, multi:false,
    options:[
      {v:"already",label:"I'm Here Now! 🎰",emoji:"✈️",desc:"Already in Vegas — skip the hotel search"},
      {v:"planning",label:"Planning My Trip",emoji:"🗓️",desc:"Coming soon — I need hotel recommendations"},
    ]},
  { id:"hotelPref", question:"What matters most in your hotel?", subtitle:"We'll match you with the right property", cols:2, multi:false,
    options:[
      {v:"location",label:"Strip Location",emoji:"🏙️",desc:"Center of the action — walk everywhere"},
      {v:"price",label:"Best Price",emoji:"💰",desc:"Smart value — more budget for experiences"},
      {v:"luxury",label:"Luxury & Amenities",emoji:"💎",desc:"The best of everything"},
      {v:"quiet",label:"Quiet & Relaxing",emoji:"🧘",desc:"No casino noise — peaceful retreat"},
      {v:"nosmoking",label:"No Smoking",emoji:"🚭",desc:"100% smoke-free property"},
      {v:"kitchen",label:"Suite with Kitchen",emoji:"🍳",desc:"Cook your own meals — ideal for families"},
    ]},
  { id:"season", question:"When are you visiting?", subtitle:"Vegas transforms completely with each season", cols:2, multi:false,
    options:[
      {v:"winter",label:"Winter",emoji:"❄️",desc:"Dec – Feb · Cool nights, Mt. Charleston snow"},
      {v:"spring",label:"Spring",emoji:"🌸",desc:"Mar – May · Perfect weather"},
      {v:"summer",label:"Summer",emoji:"☀️",desc:"Jun – Sep · 105°F heat, pool parties"},
      {v:"fall",label:"Fall",emoji:"🍂",desc:"Oct – Nov · Golden weather"},
    ]},
  { id:"days", question:"How many days are you staying?", subtitle:"We'll scale your itinerary perfectly", cols:2, multi:false,
    options:[
      {v:"1-2",label:"1–2 Days",emoji:"⚡",desc:"Quick hit — only the best"},
      {v:"3-4",label:"3–4 Days",emoji:"🎯",desc:"The classic Vegas trip"},
      {v:"5-7",label:"5–7 Days",emoji:"🗺️",desc:"Deep dive into everything"},
      {v:"1week",label:"1 Week+",emoji:"👑",desc:"Full immersion"},
    ]},
  { id:"timeOfDay", question:"When do you come alive?", subtitle:"Your rhythm shapes the perfect itinerary", cols:2, multi:false,
    options:[
      {v:"morning",label:"Early Bird",emoji:"🌅",desc:"Up at sunrise — mornings are my peak"},
      {v:"night",label:"Night Owl",emoji:"🌙",desc:"I come alive after dark"},
      {v:"day",label:"Midday Explorer",emoji:"☀️",desc:"Afternoons are my sweet spot"},
      {v:"allday",label:"All Hours",emoji:"🔥",desc:"I sleep when I'm back home"},
    ]},
  { id:"budget", question:"Budget per experience?", subtitle:"Per person · No judgment — just better picks", cols:2, multi:false,
    options:[
      {v:"budget",label:"Under $75",emoji:"🎰",desc:"Smart choices, maximum impact"},
      {v:"mid",label:"$75 – $150",emoji:"🃏",desc:"The sweet spot of quality"},
      {v:"high",label:"$150 – $250",emoji:"🥃",desc:"Premium — worth every dollar"},
      {v:"vip",label:"$250+",emoji:"👑",desc:"VIP. No questions asked."},
    ]},
];

// ─── FILTER LOGIC ─────────────────────────────────────────────────────────
function getMaxCards(days) {
  // Returns total cards (day + night pairs)
  // 1-2 days = 3 pairs = 6 cards, etc.
  return {["1-2"]:6,["3-4"]:8,["5-7"]:14,["1week"]:16}[days]||8;
}

function filterExperiences(ans) {
  const interests = Array.isArray(ans.interest) ? ans.interest : [ans.interest].filter(Boolean);
  const isGirlsTrip = ans.groupGender === "girls" || ans.tripType === "bachelorette";
  const isGuysTrip = ans.groupGender === "guys";
  const isLGBTQ = ans.groupGender === "lgbtq";
  const isGirls = isGirlsTrip; // alias for clarity in scoring
  const kidsAge = ans.groupGender; // when family: under6, kids, teens, mixedages

  // Kids age IDs
  const UNDER6_IDS  = [26,17,24,25,4,7,10]; // Circus, Blue Man, Discovery, Magic Show, Flyover, Titanic, M&M
  const KIDS6_IDS   = [5,23,4,7,10,25,38,17,26]; // Dig This, Aquarium, Flyover, Titanic, M&M, Magic Show, Sphere, Blue Man, Circus
  const TEENS_IDS   = [5,38,1,47,42,40,4,21,23,19,43]; // Dig This, Sphere, High Roller, Shooting, Exotics, ATV, Flyover, Machine Gun, Aquarium, Mojave, Red Rock
  const maxCards = getMaxCards(ans.days);
  const wantsNature = interests.includes("nature");
  const wantsWellness = interests.includes("wellness");
  const wantsNightlife = interests.includes("nightlife");
  const wantsSports = interests.includes("sports");
  const wantsAdventure = interests.includes("adventure");
  const wantsLuxury = interests.includes("luxury");
  const SPORTS_IDS = [75,76,77,78,79,80,45,82,83,84,85];

  const budgetMatch = (price) => {
    if(price===0) return true; // free always passes
    if(ans.budget==="budget") return price<=75;
    if(ans.budget==="mid") return price<=150;
    if(ans.budget==="high") return price<=250;
    return true;
  };

  const NATURE_IDS = [40,41,43,44,46,47,48,49,50,51,52,53,54,58,65];
  const WELLNESS_IDS = [61,62,63,64];
  const NIGHTLIFE_IDS = [11,14,24,30,31,35,66,67];
  const SPHERE_ID = 38;

  // Girls-specific experiences — male revues YES, drag NO
  const GIRLS_IDS = [18,30,31,35,56,61,62,63];
  // Guys-specific experiences — female shows YES
  const GUYS_IDS = [8,14,21,47,40,42,11,66,67,23,36,74];
  // LGBTQ experiences — exclusive
  const LGBTQ_IDS = [68,69,70,71,72,73];

  const scored = PAID.map(exp => {
    let s=0;
    // Vibe scoring — handles both string (others) and array (family)
    const vibes = Array.isArray(ans.vibe) ? ans.vibe : [ans.vibe].filter(Boolean);
    vibes.forEach(v => {
      if(v==="nightout") { if(exp.interests?.includes("nightlife")||exp.tags.includes("nightlife")) s+=4; }
      else if(v==="casino") {
        // casino = gambling + sports for guys AND lgbtq
        if(exp.interests?.includes("sports")||SPORTS_IDS.includes(exp.id)) s+=4;
        if(exp.vibes?.includes("casino")) s+=4;
      }
      else if(exp.vibes.includes(v)) s+=4;
    });

    // Girls trip vibe scoring
    if(isGirlsTrip) {
      if(vibes.includes("girlswild") && [30,31,35,11,56,14,8,66,67].includes(exp.id)) s+=5;
      if(vibes.includes("girlsspa") && WELLNESS_IDS.includes(exp.id)) s+=6;
      if(vibes.includes("girlsspa") && [62,63,61,64].includes(exp.id)) s+=4;
      if(vibes.includes("girlsadventure") && exp.tags.includes("adventure")) s+=4;
      if(vibes.includes("girlsadventure") && [45,50,52,58].includes(exp.id)) s+=3;
      if(vibes.includes("girlsmix") && exp.girlsTrip) s+=3;
    }

    // Guys solo vibe scoring
    if(isGuysTrip && ans.tripType==="solo") {
      if(vibes.includes("nightout") && [74,11,24,66,67].includes(exp.id)) s+=5;
      if(vibes.includes("casino") && (SPORTS_IDS.includes(exp.id)||exp.vibes?.includes("casino"))) s+=5;
      if(vibes.includes("adventure") && exp.tags.includes("adventure")) s+=3;
      if(vibes.includes("dark") && exp.vibes?.includes("dark")) s+=3;
    }

    // Family vibe scoring
    if(ans.tripType==="family") {
      if(vibes.includes("thrill") && TEENS_IDS.includes(exp.id)) s+=4;
      if(vibes.includes("thrill") && exp.tags.includes("adventure")) s+=3;
      if(vibes.includes("show") && exp.tags.includes("family")) s+=4;
      if(vibes.includes("show") && exp.interests?.includes("show")) s+=3;
      if(vibes.includes("explore") && (exp.tags.includes("family")||NATURE_IDS.includes(exp.id)||exp.cat==="Culture")) s+=4;
      if(vibes.includes("relaxed") && [1,18,26,7,10,6,2,3].includes(exp.id)) s+=4;
      if(vibes.includes("relaxed") && exp.price<=60) s+=2;
    }
    if(ans.tripType && exp.tags.includes(ans.tripType)) s+=3;

    // Group gender scoring
    if(isGirlsTrip && exp.girlsTrip) s+=5;
    if(isGirlsTrip && GIRLS_IDS.includes(exp.id)) s+=3;
    if(isGuysTrip && exp.guysTrip) s+=5;
    if(isGuysTrip && GUYS_IDS.includes(exp.id)) s+=3;
    if(isLGBTQ && exp.lgbtq) s+=6;
    if(isLGBTQ && LGBTQ_IDS.includes(exp.id)) s+=4;

    // Kids age scoring
    if(ans.tripType==="family") {
      if(kidsAge==="under6" && UNDER6_IDS.includes(exp.id)) s+=6;
      if(kidsAge==="under6" && !UNDER6_IDS.includes(exp.id) && !exp.tags.includes("family")) s-=4;
      if(kidsAge==="kids" && KIDS6_IDS.includes(exp.id)) s+=6;
      if(kidsAge==="kids" && !KIDS6_IDS.includes(exp.id) && !exp.tags.includes("family")) s-=3;
      if(kidsAge==="teens" && TEENS_IDS.includes(exp.id)) s+=6;
      if(kidsAge==="mixedages" && exp.tags.includes("family")) s+=4;
      // Always penalize adult shows for families
      if([8,14,27,30,31,35,56,74,68,69,70,71,72,73].includes(exp.id)) s-=8;
    }

    // Penalization rules
    if(isGuysTrip && [70,71,72,73].includes(exp.id)) s-=6;  // no drag for guys
    if(!isLGBTQ && [68,69,70,71,72,73].includes(exp.id)) s-=5;  // LGBT events only for lgbtq
    if(isGirlsTrip && [74].includes(exp.id)) s-=4;  // no strip club crawl for girls

    // ADULT SHOW GENDER LOGIC:
    const isBachelorette = ans.tripType === "bachelorette";
    const isHeteroCouple = ans.tripType === "couple" && ans.groupGender !== "lgbtq";
    if(!isGirlsTrip && !isBachelorette && [31,35].includes(exp.id)) s-=8;
    if(isGirlsTrip && [8,27,29].includes(exp.id)) s-=8;
    if(isBachelorette && [8,27,29].includes(exp.id)) s-=8;

    // LUXURY RULES — budget experiences never for vip/luxury budget
    const isLuxuryBudget = ans.budget === "vip" || ans.budget === "high";
    if(isLuxuryBudget) {
      // Never show these for luxury travelers
      if([26].includes(exp.id)) s-=15;  // Hop-On Hop-Off bus
      if([33].includes(exp.id)) s-=15;  // Tournament of Kings (kids show)
      if([44].includes(exp.id)) s-=12;  // Grand Canyon bus tour $99 — show helicopter instead
      if([1,6].includes(exp.id)) s-=8;  // Basic High Roller ticket, Eiffel Tower
      // Grand Canyon helicopter (id:58) gets huge boost for luxury
      if([58].includes(exp.id)) s+=10;
    }

    // GRAND CANYON DEDUP — never show more than 1 Grand Canyon experience
    const GRAND_CANYON_IDS = [44,45,58]; // Bus tour, Helicopter Strip, Helicopter Landing

    interests.forEach(i=>{
      if(exp.interests&&exp.interests.includes(i)) s+=3;
      if(exp.tags.includes(i)) s+=2;
    });

    if(wantsNature && NATURE_IDS.includes(exp.id)) s+=4;
    if(wantsNature && !NATURE_IDS.includes(exp.id) && !exp.vibes.includes("adventure")) s-=2;
    if(wantsWellness && WELLNESS_IDS.includes(exp.id)) s+=4;
    if(wantsNightlife && NIGHTLIFE_IDS.includes(exp.id)) s+=3;
    if(wantsSports && SPORTS_IDS.includes(exp.id)) s+=5;
    if(!wantsSports && SPORTS_IDS.includes(exp.id) && !exp.tags.includes(ans.tripType)) s-=2;
    if(wantsAdventure && exp.tags.includes("adventure")) s+=3;
    if(wantsAdventure && NATURE_IDS.includes(exp.id)) s+=2;
    if(wantsLuxury && exp.vibes.includes("luxury")) s+=4;
    if(wantsLuxury && exp.tier==="luxury") s+=3;
    if(exp.id===SPHERE_ID && budgetMatch(exp.price)) s+=3;
    if(ans.timeOfDay && exp.times.includes(ans.timeOfDay)) s+=2;
    if(ans.season && exp.seasons.includes(ans.season)) s+=2;
    if(budgetMatch(exp.price)) s+=3;
    else s-=2;
    if(ans.timeOfDay!=="allday" && !exp.times.includes(ans.timeOfDay)) s-=3;
    return {...exp,score:s};
  }).sort((a,b)=>b.score-a.score);

  const SPA_IDS = [61,62,63,64]; // Four Seasons, Canyon Ranch, Encore Wynn, Vdara
  const MALE_REVUE_IDS = [31,35]; // Chippendales, Thunder From Down Under
  const FEMALE_REVUE_IDS = [8,27,29]; // FANTASY Burlesque, ROUGE, Atomic Saloon
  const DRAG_IDS = [70,71,72,73]; // Drag shows only
  const TOUR_IDS = [31,43,44,45,46,47,48,50,51,52,53,54,55,56,60,67,86,88,89,90,91];
  const KIDS_IDS = [85,32,15]; // Water park, Tournament of Kings, Blue Man

  const result=[]; const used=new Set();
  const dayPairs = {["1-2"]:3,["3-4"]:4,["5-7"]:7,["1week"]:8}[ans.days]||4;
  const minTours = (ans.days==="5-7"||ans.days==="1week") ? 4 : 0;

  // Nightlife/Adult/Strip category IDs — max 1 per category in itinerary
  const NIGHTLIFE_CAT_IDS = [11, 24, 56, 66, 67]; // Club crawls, bar crawls, pool parties
  const ADULT_SHOW_IDS = []; // Covered by FEMALE_REVUE_IDS and MALE_REVUE_IDS
  const STRIP_CLUB_IDS = [74]; // Strip club crawl
  const GRAND_CANYON_IDS = [44, 45, 58]; // Bus tour, Helicopter Strip, Helicopter Landing
  const WEDDING_IDS = [57, 60, 92]; // Elvis Wedding, Helicopter Wedding, Elvis+Limo

  // Category dedup trackers
  const state = { spaAdded:false, maleRevueAdded:false, femaleRevueAdded:false, dragAdded:false, toursAdded:0, nightlifeAdded:false, adultShowAdded:false, stripClubAdded:false, grandCanyonAdded:false, weddingAdded:false };

  const canAdd = (exp) => {
    if(used.has(exp.id)) return false;
    if(!budgetMatch(exp.price)) return false;
    if(SPA_IDS.includes(exp.id) && state.spaAdded) return false;
    if(MALE_REVUE_IDS.includes(exp.id) && state.maleRevueAdded) return false;
    if(FEMALE_REVUE_IDS.includes(exp.id) && state.femaleRevueAdded) return false;
    if(DRAG_IDS.includes(exp.id) && state.dragAdded) return false;
    if(NIGHTLIFE_CAT_IDS.includes(exp.id) && state.nightlifeAdded) return false;
    if(ADULT_SHOW_IDS.includes(exp.id) && state.adultShowAdded) return false;
    if(STRIP_CLUB_IDS.includes(exp.id) && state.stripClubAdded) return false;
    if(GRAND_CANYON_IDS.includes(exp.id) && state.grandCanyonAdded) return false;
    if(WEDDING_IDS.includes(exp.id) && state.weddingAdded) return false;
    return true;
  };

  const trackAdded = (exp) => {
    used.add(exp.id);
    if(SPA_IDS.includes(exp.id)) state.spaAdded = true;
    if(MALE_REVUE_IDS.includes(exp.id)) state.maleRevueAdded = true;
    if(FEMALE_REVUE_IDS.includes(exp.id)) state.femaleRevueAdded = true;
    if(DRAG_IDS.includes(exp.id)) state.dragAdded = true;
    if(NIGHTLIFE_CAT_IDS.includes(exp.id)) state.nightlifeAdded = true;
    if(ADULT_SHOW_IDS.includes(exp.id)) state.adultShowAdded = true;
    if(STRIP_CLUB_IDS.includes(exp.id)) state.stripClubAdded = true;
    if(GRAND_CANYON_IDS.includes(exp.id)) state.grandCanyonAdded = true;
    if(WEDDING_IDS.includes(exp.id)) state.weddingAdded = true;
    if(TOUR_IDS.includes(exp.id)) state.toursAdded++;
  };

  // Separate scored into day and night buckets
  const dayScored = scored.filter(e=>
    (e.times.includes("morning")||e.times.includes("day")) &&
    budgetMatch(e.price)
  );
  const nightScored = scored.filter(e=>
    e.times.includes("night") &&
    budgetMatch(e.price)
  );

  // Build pairs: alternating day/night with category dedup
  let dayIdx=0, nightIdx=0;
  for(let i=0; i<dayPairs; i++){
    // Add day experience
    while(dayIdx<dayScored.length && !canAdd(dayScored[dayIdx])) dayIdx++;
    if(dayIdx<dayScored.length){
      trackAdded(dayScored[dayIdx]);
      result.push({...dayScored[dayIdx], timeSlot:"day"});
      dayIdx++;
    }
    // Add night experience
    while(nightIdx<nightScored.length && !canAdd(nightScored[nightIdx])) nightIdx++;
    if(nightIdx<nightScored.length){
      trackAdded(nightScored[nightIdx]);
      result.push({...nightScored[nightIdx], timeSlot:"night"});
      nightIdx++;
    }
  }

  // Enforce minimum tours for longer trips
  if(minTours > 0 && state.toursAdded < minTours) {
    const tourCandidates = scored.filter(e=>TOUR_IDS.includes(e.id)&&!used.has(e.id)&&budgetMatch(e.price));
    let added = 0;
    for(const tour of tourCandidates) {
      if(state.toursAdded + added >= minTours) break;
      // Replace last night exp with tour if needed
      const lastNight = result.findIndex(e=>e.timeSlot==="night"&&!TOUR_IDS.includes(e.id));
      if(lastNight>=0) {
        used.delete(result[lastNight].id);
        result[lastNight] = {...tour, timeSlot:"day"};
        used.add(tour.id);
        added++;
      }
    }
  }

  return result;
}

function getHotels(ans) {
  const profile = [];
  const tierMap = {budget:"budget", mid:"mid", high:"high", vip:"vip"};
  const userTier = tierMap[ans.budget] || "mid";

  // Build profile list
  if(ans.groupGender==="girls" || ans.tripType==="bachelorette") profile.push("girls");
  if(ans.groupGender==="lgbtq") profile.push("girls","first-timer");
  if(ans.vibe==="luxury" || ans.hotelPref==="luxury") profile.push("luxury");
  if(ans.tripType==="couple" || (ans.tripType==="solo" && ans.groupGender==="girls")) profile.push("couple");
  if(ans.tripType==="family" || ans.hotelPref==="kitchen") profile.push("family");
  if(ans.tripType==="work" || ans.hotelPref==="quiet") profile.push("work");
  if(ans.vibe==="first-timer" || ans.hotelPref==="location" || ans.tripType==="solo") profile.push("first-timer");
  if(ans.hotelPref==="nosmoking") profile.push("couple","work","family");
  if(ans.budget==="budget" || ans.hotelPref==="price") profile.push("budget");
  if(profile.length===0) profile.push("first-timer");

  // Start with hotels matching profile
  let filtered = HOTELS.filter(h => h.profiles.some(p => profile.includes(p)));

  // Apply hotelPref specific filters
  if(ans.hotelPref==="nosmoking") filtered = HOTELS.filter(h=>h.nosmoking).filter(h=>h.profiles.some(p=>profile.includes(p)));
  else if(ans.hotelPref==="kitchen") filtered = HOTELS.filter(h=>h.kitchen).filter(h=>h.profiles.some(p=>profile.includes(p)));
  else if(ans.hotelPref==="quiet") filtered = HOTELS.filter(h=>h.nosmoking||h.name.includes("Vdara")||h.name.includes("Park MGM")||h.name.includes("Signature")||h.name.includes("Trump")).filter(h=>h.profiles.some(p=>profile.includes(p)));
  else if(ans.hotelPref==="location") filtered = HOTELS.filter(h=>h.location==="center").filter(h=>h.profiles.some(p=>profile.includes(p)));

  // ALWAYS filter by budget tier — hard rule
  const tierFiltered = filtered.filter(h => h.tiers.includes(userTier));
  if(tierFiltered.length >= 2) filtered = tierFiltered;
  else if(tierFiltered.length === 1) filtered = tierFiltered;

  // Deduplicate and limit to 3 — never show MGM Grand + Signature together
  const seen = new Set();
  const result = [];
  let hasMGM = false;
  for(const h of filtered) {
    if(seen.has(h.name) || result.length>=3) continue;
    if(h.name==="MGM Grand" && hasMGM) continue;
    if(h.name==="The Signature at MGM Grand" && hasMGM) continue;
    if(h.name==="MGM Grand" || h.name==="The Signature at MGM Grand") hasMGM = true;
    seen.add(h.name);
    result.push(h);
  }
  // Fill if needed — try adjacent tier before giving up
  if(result.length<3) {
    const adjacentTiers = {budget:["budget","mid"], mid:["mid","budget","high"], high:["high","mid","vip"], vip:["vip","high"]};
    const allowedTiers = adjacentTiers[userTier] || [userTier];
    for(const h of HOTELS) {
      if(!seen.has(h.name) && result.length<3 && 
         h.profiles.some(p=>profile.includes(p)) && 
         h.tiers.some(t=>allowedTiers.includes(t))) {
        seen.add(h.name); result.push(h);
      }
    }
  }
  return result;
}

// ─── EMAIL CAPTURE ────────────────────────────────────────────────────────
async function sendItineraryEmail(toEmail, itinerary, freeExp, hotels, answers, aiStory) {
  const EMAILJS_SERVICE = "service_edep1kv";
  const EMAILJS_TEMPLATE = "template_q80x74g";
  const EMAILJS_KEY = "dieVpaeqWt_BhxNUe";

  const seasonLabels={winter:"Winter",spring:"Spring",summer:"Summer",fall:"Fall"};
  const daysLabels={"1-2":"Weekend","3-4":"4-Day","5-7":"7-Day","1week":"Full Week"};

  // Build itinerary HTML grouped by day
  const dayPairs = Math.ceil(itinerary.length/2);
  let itineraryHtml = "";
  for(let i=0;i<dayPairs;i++){
    const dayExp = itinerary.find(e=>e.timeSlot==="day"&&itinerary.indexOf(e)===i*2);
    const nightExp = itinerary.find(e=>e.timeSlot==="night"&&itinerary.indexOf(e)===i*2+1);
    itineraryHtml += `<p style="color:#ff2d55;font-size:14px;font-weight:bold;letter-spacing:2px;margin:20px 0 8px">Day ${i+1}</p>`;
    [dayExp,nightExp].filter(Boolean).forEach(e=>{
      const isFree = e.price===0;
      itineraryHtml += `
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:14px 18px;margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:20px;margin-right:10px">${e.emoji}</span>
            <span style="color:#fff;font-size:13px;font-weight:bold;flex:1">${e.name}</span>
            <span style="color:${isFree?"#2ecc71":"#ffd700"};font-size:14px;font-weight:bold;margin-left:10px">${isFree?"FREE":"$"+e.price}</span>
          </div>
          <p style="color:#aaa;font-size:12px;line-height:1.6;margin:0 0 10px">${e.desc}</p>
          <a href="${e.url}" style="display:block;background:${isFree?"rgba(39,174,96,.2)":"linear-gradient(135deg,#ff2d55,#c0392b)"};color:${isFree?"#2ecc71":"#fff"};text-align:center;padding:10px;border-radius:6px;text-decoration:none;font-size:12px;font-weight:bold">
            ${isFree?"🔗 Learn More":"🎟️ Book Now"}
          </a>
        </div>`;
    });
  }

  // Free experiences
  if(freeExp && freeExp.length>0){
    itineraryHtml += `<p style="color:#2ecc71;font-size:13px;font-weight:bold;letter-spacing:2px;margin:20px 0 8px">✨ Free Experiences</p>`;
    freeExp.forEach(f=>{
      itineraryHtml += `
        <div style="background:rgba(39,174,96,.04);border:1px solid rgba(39,174,96,.15);border-radius:8px;padding:12px 16px;margin-bottom:6px">
          <span style="font-size:18px;margin-right:8px">${f.emoji}</span>
          <span style="color:#fff;font-size:13px;font-weight:bold">${f.name}</span>
          <p style="color:#aaa;font-size:12px;margin:4px 0 8px">${f.desc}</p>
          <a href="${f.url}" style="color:#2ecc71;font-size:12px;text-decoration:none">🔗 Learn More →</a>
        </div>`;
    });
  }

  // Load EmailJS SDK dynamically
  if(!window.emailjs){
    await new Promise((res,rej)=>{
      const s=document.createElement("script");
      s.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      s.onload=()=>{
        window.emailjs.init(EMAILJS_KEY);
        window._emailjsInited = true;
        res();
      };
      s.onerror=rej;
      document.head.appendChild(s);
    });
  } else if(!window._emailjsInited) {
    window.emailjs.init(EMAILJS_KEY);
    window._emailjsInited = true;
  }

  const fullEmailHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0d0a18;font-family:Georgia,serif">
<div style="max-width:600px;margin:0 auto;background:#0d0a18">

  <div style="background:#1a0a0a;padding:40px;text-align:center;border-bottom:2px solid #ff2d55">
    <p style="color:#ff2d55;font-size:10px;letter-spacing:6px;margin:0 0 12px;font-family:monospace">◆ CLASSIFIED ◆</p>
    <h1 style="font-size:28px;font-weight:bold;margin:0 0 6px;color:#ffd700">VEGAS UNVEILED</h1>
    <p style="color:#666;font-size:11px;letter-spacing:3px;margin:0">YOUR SECRET ITINERARY HAS ARRIVED</p>
  </div>

  <div style="border-left:3px solid #ff2d55;margin:32px 32px 0;padding:16px 20px;background:#1a0505">
    <p style="color:#ff2d55;font-size:10px;letter-spacing:4px;margin:0 0 10px;font-family:monospace">◆ YOUR SECRET BRIEFING</p>
    <p style="color:#ccc;font-style:italic;line-height:1.8;margin:0;font-size:13px">${aiStory || "Your secret Vegas itinerary is ready."}</p>
  </div>

  <div style="padding:16px 32px">
    <span style="background:#1a1500;border:1px solid #3d3000;border-radius:20px;padding:4px 12px;color:#ffd700;font-size:11px;font-family:monospace">${seasonLabels[answers.season]} in Vegas</span>
    &nbsp;
    <span style="background:#1a1500;border:1px solid #3d3000;border-radius:20px;padding:4px 12px;color:#ffd700;font-size:11px;font-family:monospace">${daysLabels[answers.days]} trip</span>
  </div>

  <div style="padding:8px 32px 32px">
    <p style="color:#fff;font-size:15px;margin:0 0 4px;font-weight:bold">Your Itinerary</p>
    <p style="color:#555;font-size:11px;margin:0 0 16px;letter-spacing:1px">BOOK DIRECTLY — LINKS BELOW</p>
    ${itineraryHtml}
  </div>

  <div style="background:#050505;padding:24px 32px;text-align:center;border-top:1px solid #1a1a1a">
    <p style="color:#444;font-size:11px;margin:0 0 6px">Generated exclusively for you by <strong style="color:#ffd700">Vegas Unveiled</strong></p>
    <p style="color:#444;font-size:11px;margin:0">Booking links may include affiliate partnerships · Prices subject to availability</p>
    <p style="margin-top:10px"><a href="https://vegas-unveiled.vercel.app" style="color:#555;font-size:11px">vegas-unveiled.vercel.app</a></p>
  </div>

</div>
</body></html>`;

  try {
    const result = await window.emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
      to_email: toEmail,
      content: fullEmailHtml,
      message_html: fullEmailHtml,
    });
    console.log("EmailJS success:", result);
    return result;
  } catch(err) {
    console.error("EmailJS error:", JSON.stringify(err));
    throw err;
  }
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────
export default function VegasApp() {
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState({});
  const [selected,setSelected]=useState(null);
  const [loading,setLoading]=useState(false);
  const [itinerary,setItinerary]=useState([]);
  const [freeExp,setFreeExp]=useState([]);
  const [hotels,setHotels]=useState([]);
  const [aiStory,setAiStory]=useState();
  const [aiReady,setAiReady]=useState(false);
  const [email,setEmail]=useState();
  const [emailSent,setEmailSent]=useState(false);
  const [emailLoading,setEmailLoading]=useState(false);
  const [showEmail,setShowEmail]=useState(false);

  const totalSteps=QUESTIONS.length;
  const isFamily = answers.tripType === "family";
  const isSolo = answers.tripType === "solo";
  const isCouple = answers.tripType === "couple";
  const isGirls = answers.groupGender === "girls" ||
                  (answers.tripType === "bachelorette" && answers.groupGender !== "guys" && answers.groupGender !== "lgbtq");
  const isGuys = answers.groupGender === "guys";
  const isLGBTQ = answers.groupGender === "lgbtq";
  const rawQ = QUESTIONS[step-1];
  const currentQ = rawQ ? {
    ...rawQ,
    question: rawQ.id==="groupGender" && isFamily ? "How old are the kids?"
            : rawQ.id==="groupGender" && isSolo ? "How do you identify?"
            : rawQ.id==="groupGender" && isCouple ? "How do you identify as a couple?"
            : rawQ.id==="vibe" && isFamily ? "What's the energy for this trip?"
            : rawQ.id==="vibe" && isGirls ? "What kind of girls trip is this?"
            : rawQ.id==="vibe" && isGuys ? "What's your Vegas vibe?"
            : rawQ.question,
    subtitle: rawQ.id==="groupGender" && isFamily ? "We'll tailor the itinerary for them"
            : rawQ.id==="groupGender" && (isSolo||isCouple) ? "Helps us personalize your experience"
            : rawQ.id==="vibe" && isFamily ? "Pick up to 2 — day and night covered"
            : rawQ.id==="vibe" && isGirls ? "Pick the vibe that calls to you"
            : rawQ.id==="vibe" && isGuys ? "Pick up to 2 — we'll cover both"
            : rawQ.subtitle,
    cols: rawQ.id==="groupGender" && (isSolo||isCouple) ? 1
        : rawQ.id==="vibe" && isFamily ? 2
        : rawQ.id==="vibe" && isGirls ? 2
        : rawQ.id==="vibe" && isGuys ? 2
        : rawQ.cols,
    multi: rawQ.id==="vibe" && isFamily ? true
         : rawQ.id==="vibe" && isGuys ? true
         : rawQ.multi,
    max: rawQ.id==="vibe" && isFamily ? rawQ.familyMax
       : rawQ.id==="vibe" && isGuys ? 2
       : rawQ.max,
    options: rawQ.id==="groupGender" && isFamily ? rawQ.familyOptions
           : rawQ.id==="groupGender" && isSolo ? rawQ.soloOptions
           : rawQ.id==="groupGender" && isCouple ? rawQ.coupleOptions
           : rawQ.id==="vibe" && isFamily ? rawQ.familyOptions
           : rawQ.id==="vibe" && isGirls ? rawQ.girlsOptions
           : rawQ.id==="vibe" && isGuys ? rawQ.guysOptions
           : rawQ.id==="vibe" && isLGBTQ ? rawQ.lgbtqOptions
           : rawQ.options,
  } : null;

  function handleSelect(v){
    if(!currentQ?.multi){setSelected(v);return;}
    const max=currentQ.max||2;
    setSelected(prev=>{
      const arr=Array.isArray(prev)?prev:[];
      if(arr.includes(v)) return arr.filter(x=>x!==v);
      if(arr.length>=max) return arr;
      return [...arr,v];
    });
  }

  const canContinue=step===0||(!currentQ?.multi&&selected!==null)||(currentQ?.multi&&Array.isArray(selected)&&selected.length>0);
  const multiCount=currentQ?.multi&&Array.isArray(selected)?selected.length:0;

  async function handleNext(){
    if(step===0){setStep(1);return;}
    const newAns={...answers,[currentQ.id]:selected};
    setAnswers(newAns);
    setSelected(null);

    if(step<totalSteps){
      const nextStep = step+1;
      const nextQ = QUESTIONS[nextStep-1];
      const isGuysNow = newAns.groupGender === "guys";
      const isLGBTQNow = newAns.groupGender === "lgbtq";
      // Skip vibe only for girls/mixed — guys and lgbtq have their own vibe options
      const skipVibe = !isGuysNow && !isLGBTQNow && newAns.tripType !== "family";

      // Skip hotelPref if already in Vegas
      if(nextQ?.id==="hotelPref" && newAns.alreadyInVegas==="already"){
        const finalAns = {...newAns, hotelPref:"location"};
        setAnswers(finalAns);
        setStep(nextStep+1);
        return;
      }

      // For girls/lgbtq/mixed: skip Q3 vibe AND Q4 interest separately
      // Instead interest shows as Q3 (handled in currentQ display)
      // Skip Q3 (vibe) — jump straight to interest
      if(nextQ?.id==="vibe" && skipVibe){
        setStep(nextStep+1); // skip vibe, go to interest
        return;
      }

      // Skip Q4 (interest) for family — auto-map from vibe
      if(nextQ?.id==="interest" && newAns.tripType==="family"){
        const familyVibes = Array.isArray(newAns.vibe) ? newAns.vibe : [newAns.vibe];
        const autoInterests = [];
        if(familyVibes.includes("show")) autoInterests.push("show");
        if(familyVibes.includes("explore")) autoInterests.push("nature","unique");
        if(familyVibes.includes("thrill")) autoInterests.push("adventure");
        if(familyVibes.includes("relaxed")) autoInterests.push("unique");
        const finalAns = {...newAns, interest: autoInterests.length>0 ? autoInterests : ["unique"]};
        setAnswers(finalAns);
        setStep(nextStep+1);
      } else {
        setStep(nextStep);
      }
      return;
    }

    setLoading(true);
    const results=filterExperiences(newAns);
    const hotelResults=getHotels(newAns);
    const kidsAge = newAns.groupGender;
    const isYoungFamily = newAns.tripType==="family" && (kidsAge==="under6"||kidsAge==="kids");
    const maxDays = {["1-2"]:3,["3-4"]:4,["5-7"]:7,["1week"]:8}[newAns.days]||4;
    const freeResults = FREE_EXPERIENCES.filter(f => {
      if(isYoungFamily && f.id==="f3") return false;
      if(newAns.tripType==="family" && kidsAge==="under6" && f.time==="After 8pm") return false;
      // Exclude kids/family attractions for non-family trips
      if(f.tags && f.tags.includes("kids") && newAns.tripType!=="family") return false;
      if(f.tags && f.tags.includes("family") && newAns.tripType!=="family") return false;
      // For luxury/vip — exclude budget-only free experiences
      if((newAns.budget==="vip"||newAns.budget==="high") && f.tags && f.tags.includes("budget")) return false;
      return true;
    }).reduce((acc, f) => {
      const hasFountains = acc.some(x=>x.id==="f1");
      const hasConservatory = acc.some(x=>x.id==="f2");
      if(f.id==="f2" && hasFountains) return acc;
      if(f.id==="f1" && hasConservatory) return acc;
      if(acc.length>=maxDays) return acc;
      return [...acc, f];
    }, []);
    setItinerary(results);
    setFreeExp(freeResults);
    setHotels(hotelResults);

    const seasonCtx={
      winter:"Vegas in winter — cold desert nights, barely any crowds.",
      spring:"Vegas in spring — perfect weather for everything.",
      summer:"Vegas in summer — brutal heat, electric chaos after dark.",
      fall:"Vegas in fall — golden light, the best-kept seasonal secret."
    };

    // Build traveler profile descriptor
    const tripLabels={solo:"solo traveler",couple:"couple",group:"squad",family:"family",bachelorette:"bachelorette party",work:"work traveler"};
    const genderLabels={girls:"woman",guys:"man",lgbtq:"LGBTQ+ traveler",mixed:"",under6:"family with little ones",kids:"family with kids",teens:"family with teens",mixedages:"family"};
    const vibeLabels={dark:"drawn to the dark and mysterious side of Vegas",luxury:"a pure luxury seeker",adventure:"a thrill seeker",casino:"a casino and sports lover",romantic:"a hopeless romantic","first-timer":"experiencing Vegas for the first time",girlswild:"ready for a wild night out",girlsspa:"craving luxury and relaxation",girlsadventure:"an adventure-loving traveler",girlsmix:"looking for a perfect mix of everything",thrill:"craving thrills and adventure",show:"a live entertainment lover",explore:"an explorer at heart",relaxed:"looking for easy, fun experiences",nightout:"here for the nightlife and a serious night out"};

    const genderPrefix = genderLabels[newAns.groupGender] || "";
    const travelerType = genderPrefix
      ? `${genderPrefix} ${tripLabels[newAns.tripType]||""}`.trim()
      : tripLabels[newAns.tripType] || "traveler";
    const vibeDesc = vibeLabels[Array.isArray(newAns.vibe)?newAns.vibe[0]:newAns.vibe]||"";
    const interestDesc = Array.isArray(newAns.interest)?newAns.interest.join(" and "):newAns.interest||"";

    const fallbacks = [
      `You're the type of traveler who already knows what you want before you arrive — and Vegas is about to confirm every instinct. ${seasonCtx[newAns.season]} Most people come here and see the surface. You're not most people. Your itinerary is ready.`,
    ];

    // Show results immediately with fallback — AI briefing updates in background
    setAiStory(fallbacks[0]);
    setLoading(false);
    setStep(totalSteps+1);

    // Fetch AI briefing in background and update when ready
    const budgetDesc = {budget:"looks for the best experience at the lowest cost — hostels, free attractions, street food, nothing wasted",mid:"balances spending consciously — saves on some things to splurge on others, always asking if it's worth it",high:"travels comfortably without overthinking costs — chooses quality over price but isn't reckless",vip:"cost is never the deciding factor — only the best hotels, restaurants and experiences make the cut"}[newAns.budget] || "";

    fetch("/api/briefing",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        travelerType, vibeDesc, interestDesc, budgetDesc,
        season:newAns.season, days:newAns.days, timeOfDay:newAns.timeOfDay
      })
    }).then(r=>r.json()).then(data=>{
      const text = data.text;
      if(text && text.length > 30) { setAiStory(text); setAiReady(true); }
      else setAiReady(true);
    }).catch(()=>{ setAiReady(true); });
  }

  async function handleEmailSubmit(){
    if(!email||emailLoading) return;
    setEmailLoading(true);
    try {
      await sendItineraryEmail(email,itinerary,freeExp,hotels,answers,aiStory);
      setEmailSent(true);
    } catch(err) {
      console.error("Email error:", err);
      alert("Could not send email. Please try again or check your email address.");
    }
    setEmailLoading(false);
  }

  const totalCost=itinerary.reduce((s,e)=>s+e.price,0);
  const seasonLabels={winter:"Winter",spring:"Spring",summer:"Summer",fall:"Fall"};
  const daysLabels={"1-2":"3-day","3-4":"4-day","5-7":"7-day","1week":"8-day"};

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#080810 0%,#0d0a18 45%,#080810 100%)",fontFamily:"'Georgia',serif",color:"#fff",overflow:"hidden",position:"relative"}}>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:.2}50%{opacity:.8}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes flicker{0%,88%,90%,92%,100%{opacity:1}89%,91%{opacity:.3}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-thumb{background:#ff2d55;border-radius:2px}
        a:hover{opacity:.8!important}
        input:focus{outline:none!important}
      `}</style>

      {[...Array(25)].map((_,i)=>(
        <div key={i} style={{position:"fixed",borderRadius:"50%",pointerEvents:"none",
          width:`${(i%3)+1}px`,height:`${(i%3)+1}px`,
          background:["#ffd700","#ff2d55","#9b59b6","#3498db"][i%4],
          left:`${(i*4.1)%100}%`,top:`${(i*7.3)%100}%`,
          animation:`pulse ${2+(i%4)}s ease-in-out infinite`,animationDelay:`${i*0.2}s`}}/>
      ))}

      <div style={{maxWidth:"680px",margin:"0 auto",padding:"28px 18px",position:"relative"}}>

        {/* HEADER */}
        <div style={{textAlign:"center",marginBottom:"36px",animation:"fadeUp .6s ease"}}>
          <div style={{fontSize:"0.6rem",letterSpacing:"0.5em",color:"#ff2d55",marginBottom:"10px",textTransform:"uppercase"}}>◆ CLASSIFIED ◆</div>
          <h1 style={{fontSize:"clamp(1.8rem,6vw,3rem)",margin:"0 0 6px",
            background:"linear-gradient(135deg,#ffd700 0%,#ff2d55 50%,#ffd700 100%)",
            backgroundSize:"200% auto",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
            backgroundClip:"text",animation:"flicker 9s infinite, shimmer 4s linear infinite",lineHeight:1.1}}>
            VEGAS UNVEILED
          </h1>
          <p style={{color:"#777",fontSize:"0.78rem",margin:0,letterSpacing:"0.15em"}}>Experiences they don't put in the brochures</p>
        </div>

        {/* INTRO */}
        {step===0&&(
          <div style={{animation:"fadeUp .6s ease .2s both"}}>
            <div style={{background:"linear-gradient(135deg,rgba(255,45,85,.07),rgba(255,215,0,.04))",border:"1px solid rgba(255,215,0,.12)",borderRadius:"20px",padding:"36px 28px",textAlign:"center",marginBottom:"24px"}}>
              <div style={{fontSize:"2.8rem",marginBottom:"16px"}}>🎰</div>
              <h2 style={{fontSize:"1.3rem",color:"#fff",margin:"0 0 12px",fontWeight:"normal"}}>Most people leave Vegas having seen <em style={{color:"#ff2d55"}}>nothing</em>.</h2>
              <p style={{color:"#ccc",lineHeight:1.8,margin:"0 0 8px",fontSize:"0.92rem"}}>Tell us about your trip. Get a custom itinerary with direct booking links — plus free insider tips most tourists never discover.</p>
              <p style={{color:"#999",fontSize:"0.82rem",margin:0,fontStyle:"italic"}}>Quick, personal, free.</p>
            </div>
            <button onClick={handleNext} style={{width:"100%",padding:"17px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg,#ff2d55,#ff6b35)",color:"#fff",fontSize:"0.95rem",fontWeight:"700",cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 8px 32px rgba(255,45,85,.38)",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(255,45,85,.55)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 8px 32px rgba(255,45,85,.38)"}}>
              Reveal My Secret Itinerary →
            </button>
            <p style={{textAlign:"center",color:"#aaa",fontSize:"0.82rem",margin:"12px 0 0",fontStyle:"italic"}}>
              ✨ Includes free hidden gems only locals know
            </p>
          </div>
        )}

        {/* QUESTIONS */}
        {step>=1&&step<=totalSteps&&!loading&&(
          <div key={step} style={{animation:"fadeUp .35s ease"}}>
            <div style={{marginBottom:"26px"}}>
              <div style={{height:"2px",background:"rgba(255,255,255,.06)",borderRadius:"2px"}}>
                <div style={{height:"100%",borderRadius:"2px",background:"linear-gradient(90deg,#ff2d55,#ffd700)",width:`${(step/totalSteps)*100}%`,transition:"width .5s ease"}}/>
              </div>
            </div>

            <h2 style={{fontSize:"1.4rem",color:"#fff",margin:"0 0 5px",fontWeight:"normal"}}>{currentQ.question}</h2>
            <p style={{color:"#aaa",fontSize:"0.82rem",margin:"0 0 18px",fontStyle:"italic"}}>{currentQ.subtitle}</p>

            {currentQ.multi&&(
              <div style={{background:"rgba(255,215,0,.12)",border:"2px solid rgba(255,215,0,.5)",borderRadius:"10px",padding:"12px 16px",marginBottom:"14px",display:"flex",alignItems:"center",gap:"10px"}}>
                <span style={{fontSize:"1.1rem"}}>✨</span>
                <span style={{color:"#ffd700",fontSize:"0.95rem",fontWeight:"700"}}>
                  {multiCount===0?`Select up to ${currentQ.max} options`:multiCount<currentQ.max?`${multiCount} selected — pick one more`:`${multiCount} selected — ready!`}
                </span>
              </div>
            )}

            <div style={{display:"grid",gridTemplateColumns:currentQ.cols===3?"repeat(3,1fr)":"repeat(2,1fr)",gap:"10px",marginBottom:"20px"}}>
              {currentQ.options.map(opt=>{
                const isSel=currentQ.multi?Array.isArray(selected)&&selected.includes(opt.v):selected===opt.v;
                const isDisabled=currentQ.multi&&!isSel&&multiCount>=(currentQ.max||2);
                return (
                  <button key={opt.v} onClick={()=>!isDisabled&&handleSelect(opt.v)} style={{padding:"16px 12px",borderRadius:"13px",border:"none",cursor:isDisabled?"not-allowed":"pointer",
                    background:isSel?"linear-gradient(135deg,rgba(255,45,85,.25),rgba(255,215,0,.15))":"rgba(255,255,255,.03)",
                    outline:isSel?"1.5px solid rgba(255,215,0,.55)":"1px solid rgba(255,255,255,.06)",
                    opacity:isDisabled&&!isSel?.45:1,color:"#fff",textAlign:"left",transition:"all .2s",
                    transform:isSel?"scale(1.03)":"scale(1)"}}>
                    <div style={{fontSize:"1.4rem",marginBottom:"6px"}}>{opt.emoji}</div>
                    <div style={{fontWeight:"700",fontSize:"0.95rem",marginBottom:"4px",color:isSel?"#ffd700":"#fff"}}>{opt.label}</div>
                    <div style={{color:"#aaa",fontSize:"0.8rem",lineHeight:1.5}}>{opt.desc}</div>
                    {isSel&&<div style={{marginTop:"6px",color:"#ffd700",fontSize:"0.75rem"}}>✓</div>}
                  </button>
                );
              })}
            </div>

            {/* Floating continue button — always visible */}
            <div style={{position:"sticky",bottom:"16px",zIndex:100,marginTop:"16px"}}>
              <button onClick={handleNext} disabled={!canContinue} style={{width:"100%",padding:"16px",borderRadius:"12px",border:"none",
                background:canContinue?"linear-gradient(135deg,#ff2d55,#ff6b35)":"rgba(20,20,30,.95)",
                color:canContinue?"#fff":"#666",fontSize:"0.92rem",fontWeight:"700",
                cursor:canContinue?"pointer":"not-allowed",letterSpacing:"0.08em",textTransform:"uppercase",transition:"all .3s",
                boxShadow:canContinue?"0 6px 24px rgba(255,45,85,.5), 0 2px 8px rgba(0,0,0,.8)":"0 2px 8px rgba(0,0,0,.6)",
                border:canContinue?"none":"1px solid rgba(255,255,255,.08)"}}>
                {step===totalSteps?"🔓 Unlock My Itinerary":canContinue?"Continue →":"Select an option above"}
              </button>
            </div>
          </div>
        )}

        {/* LOADING */}
        {loading&&(
          <div style={{textAlign:"center",padding:"60px 0",animation:"fadeUp .4s ease"}}>
            <div style={{position:"relative",width:"70px",height:"70px",margin:"0 auto 24px"}}>
              {[0,1,2].map(i=>(
                <div key={i} style={{position:"absolute",inset:`${i*8}px`,borderRadius:"50%",border:"2px solid transparent",
                  borderTopColor:i%2===0?"#ff2d55":"#ffd700",
                  animation:`spin ${1+i*.5}s linear infinite ${i%2?"reverse":""}`}}/>
              ))}
            </div>
            <p style={{color:"#ffd700",fontSize:"0.95rem",margin:"0 0 6px"}}>Accessing the underground...</p>
            <p style={{color:"#888",fontSize:"0.78rem"}}>Building your secret Vegas itinerary</p>
          </div>
        )}

        {/* RESULTS */}
        {step===totalSteps+1&&!loading&&(
          <div style={{animation:"fadeUp .5s ease"}}>

            {/* AI Story */}
            <div style={{background:"linear-gradient(135deg,rgba(255,45,85,.09),rgba(255,215,0,.05))",border:"1px solid rgba(255,215,0,.16)",borderLeft:"3px solid #ff2d55",borderRadius:"16px",padding:"22px",marginBottom:"16px"}}>
              <div style={{color:"#ff2d55",fontSize:"0.62rem",letterSpacing:"0.22em",marginBottom:"10px"}}>◆ YOUR SECRET BRIEFING</div>
              {!aiReady ? (
                <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"8px 0"}}>
                  <div style={{position:"relative",width:"28px",height:"28px",flexShrink:0}}>
                    {[0,1,2].map(i=>(
                      <div key={i} style={{position:"absolute",inset:`${i*4}px`,borderRadius:"50%",border:"1.5px solid transparent",
                        borderTopColor:i%2===0?"#ff2d55":"#ffd700",
                        animation:`spin ${0.8+i*.3}s linear infinite ${i%2?"reverse":""}`}}/>
                    ))}
                  </div>
                  <div>
                    <p style={{color:"#ffd700",fontSize:"0.8rem",margin:"0 0 3px",fontWeight:"700"}}>Analyzing your traveler profile...</p>
                    <p style={{color:"#888",fontSize:"0.72rem",margin:0}}>Your personalized briefing will appear in a few seconds ✨</p>
                  </div>
                </div>
              ) : (
                <p style={{color:"#ddd",lineHeight:2,margin:0,fontStyle:"italic",fontSize:"0.95rem",animation:"fadeUp .5s ease"}}>"{aiStory}"</p>
              )}
            </div>

            {/* Summary badges */}
            <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"22px"}}>
              {[`${seasonLabels[answers.season]} in Vegas`,`${daysLabels[answers.days]} trip`].map(b=>(
                <div key={b} style={{background:"rgba(255,215,0,.07)",border:"1px solid rgba(255,215,0,.16)",borderRadius:"20px",padding:"4px 14px",color:"#ffd700",fontSize:"0.72rem",letterSpacing:"0.06em"}}>{b}</div>
              ))}
            </div>

            {/* HOTELS FIRST */}
            {hotels.length>0&&answers.alreadyInVegas!=="already"&&(
              <div style={{marginBottom:"28px"}}>
                <h3 style={{color:"#fff",fontSize:"1.1rem",margin:"0 0 4px",fontWeight:"700"}}>🏨 Where to Stay</h3>
                <p style={{color:"#888",fontSize:"0.78rem",margin:"0 0 14px"}}>Matched to your profile & budget</p>
                <div style={{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"8px"}}>
                  {hotels.map((h,i)=>(
                    <div key={h.name} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.09)",borderRadius:"14px",padding:"18px",animation:`fadeUp .5s ease ${i*.1}s both`}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"}}>
                        <div style={{flex:1}}>
                          <div style={{color:"#fff",fontWeight:"700",fontSize:"1rem",marginBottom:"3px"}}>{h.name}</div>
                          <div style={{color:"#ffd700",fontSize:"0.75rem",marginBottom:"5px"}}>{"⭐".repeat(h.stars)}</div>
                          <div style={{color:"#aaa",fontSize:"0.82rem"}}>{h.feature}</div>
                        </div>
                        <div style={{color:"#2ecc71",fontSize:"0.85rem",fontWeight:"700",marginLeft:"12px",whiteSpace:"nowrap"}}>{h.price}</div>
                      </div>
                      <a href={h.url} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"rgba(26,92,26,.5)",border:"1px solid rgba(39,174,96,.4)",color:"#2ecc71",padding:"12px 16px",borderRadius:"9px",textDecoration:"none",fontSize:"0.85rem",fontWeight:"700",textAlign:"center"}}>
                        🏨 View Hotel
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAID EXPERIENCES + FREE INTERCALATED — grouped by day */}
            <h2 style={{color:"#fff",fontSize:"1.2rem",margin:"0 0 4px",fontWeight:"700"}}>Your Itinerary</h2>
            <p style={{color:"#888",fontSize:"0.78rem",margin:"0 0 18px"}}>Book directly — links below</p>

            <div style={{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"28px"}}>
              {(() => {
                const combined = [];
                const dayPairs = Math.ceil(itinerary.length / 2);

                let freeIdx = 0;
                for(let d=0; d<dayPairs; d++){
                  const dayExp = itinerary[d*2];
                  const nightExp = itinerary[d*2+1];
                  const freeForThisDay = freeExp[freeIdx] || null;
                  if(freeForThisDay) freeIdx++;
                  combined.push(
                    <div key={`day-${d+1}`}>
                      <div style={{color:"#ff2d55",fontSize:"1.1rem",fontWeight:"700",letterSpacing:"0.05em",margin:"0 0 8px",fontFamily:"Georgia,serif"}}>
                        Day {d+1}
                      </div>
                      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                        {dayExp && <ExperienceCard key={dayExp.id} exp={dayExp} day={null} index={d*2} isFree={false} timeLabel="🌅 Day"/>}
                        {freeForThisDay && <ExperienceCard key={freeForThisDay.id} exp={freeForThisDay} day={null} index={d*2} isFree={true}/>}
                        {nightExp && <ExperienceCard key={nightExp.id} exp={nightExp} day={null} index={d*2+1} isFree={false} timeLabel="🌙 Night"/>}
                      </div>
                    </div>
                  );
                }
                return combined;
              })()}
            </div>

            {/* FAMILY TIPS BONUS CARD */}
            {answers.tripType==="family"&&(
              <div style={{background:"rgba(255,215,0,.05)",border:"1px solid rgba(255,215,0,.15)",borderRadius:"16px",padding:"20px",marginBottom:"22px"}}>
                <div style={{color:"#ffd700",fontSize:"0.62rem",letterSpacing:"0.2em",marginBottom:"12px"}}>◆ INSIDER TIPS — VEGAS WITH KIDS</div>
                <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                  {[
                    {emoji:"🎂",tip:"Age matters in Vegas — under 21 cannot sit at bars or stay in casinos. Kids can walk through but not linger."},
                    {emoji:"☀️",tip:"Avoid June–September if possible. Heat exceeds 105°F and can exhaust children quickly."},
                    {emoji:"💧",tip:"Carry water bottles everywhere. The dry desert air dehydrates kids faster than you expect."},
                    {emoji:"🏨",tip:"Book a hotel with kitchen or kitchenette — saves money and makes meals easier for picky eaters."},
                    {emoji:"🎰",tip:"Kids can walk through casinos but cannot stop, sit or linger — even with an adult. Keep moving and they're fine."},
                    {emoji:"🌅",tip:"Plan outdoor activities for early morning (before 10am) and return indoors during peak heat (noon–4pm)."},
                    {emoji:"🚗",tip:"Consider renting a car — much easier with young kids than navigating the Strip on foot."},
                    {emoji:"🚬",tip:"You will smell marijuana on the Strip. It's legal in Nevada. Prepare your kids in advance."},
                    {emoji:"🎭",tip:"Some Strip characters smoke. Be prepared for your child to see Mickey or Elmo with a cigarette."},
                    {emoji:"✈️",tip:"Build in a rest day on arrival — jet lag hits kids hard and a calm first day sets up the whole trip."},
                  ].map((item,i)=>(
                    <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start"}}>
                      <span style={{fontSize:"1rem",minWidth:"24px"}}>{item.emoji}</span>
                      <p style={{color:"#aaa",fontSize:"0.78rem",lineHeight:1.6,margin:0}}>{item.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share buttons — moved to bottom */}
            <div style={{marginBottom:"20px"}}>
              <p style={{color:"#aaa",fontSize:"0.78rem",margin:"0 0 10px",textAlign:"center"}}>Know someone who'd love this? Send them their own custom itinerary.</p>
              <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>{
                    const shareText = "Going to Vegas? Discover your traveler profile and see what the city has to offer you 🎰\n" + window.location.href;
                    if(navigator.clipboard && navigator.clipboard.writeText){
                      navigator.clipboard.writeText(shareText).then(()=>alert("Copied! Just paste and send 🎰")).catch(()=>{
                        prompt("Copy this and send to your friend:", shareText);
                      });
                    } else {
                      prompt("Copy this and send to your friend:", shareText);
                    }
                  }}
                  style={{flex:1,padding:"12px",borderRadius:"9px",border:"1px solid rgba(255,255,255,.12)",background:"rgba(255,255,255,.05)",color:"#ccc",fontSize:"0.8rem",cursor:"pointer"}}>
                  🔗 Copy Link
                </button>
                <button onClick={()=>{
                    const shareText = "Going to Vegas? Discover your traveler profile and see what the city has to offer you 🎰";
                    const shareUrl = window.location.href;
                    if(navigator.share){
                      navigator.share({ title:"Vegas Unveiled", text: shareText, url: shareUrl });
                    } else {
                      prompt("Copy and share this:", shareText + "\n" + shareUrl);
                    }
                  }}
                  style={{flex:1,padding:"12px",borderRadius:"9px",border:"1px solid rgba(255,215,0,.25)",background:"rgba(255,215,0,.08)",color:"#ffd700",fontSize:"0.8rem",cursor:"pointer",fontWeight:"700"}}>
                  💬 Share with Friends
                </button>
              </div>
            </div>

            {/* EMAIL CAPTURE */}
            {!emailSent?(
              <div style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.09)",borderRadius:"14px",padding:"18px",marginBottom:"22px"}}>
                <p style={{color:"#ccc",fontSize:"0.85rem",margin:"0 0 12px"}}>
                  📧 <strong style={{color:"#fff"}}>Get your itinerary as PDF</strong> — save it for later and share with your travel buddies
                </p>
                {!aiReady && (
                  <p style={{color:"#ffd700",fontSize:"0.75rem",margin:"0 0 10px",fontStyle:"italic"}}>
                    ⏳ Finalizing your personalized briefing — email will be ready in seconds...
                  </p>
                )}
                <div style={{display:"flex",gap:"8px"}}>
                  <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)}
                    style={{flex:1,padding:"11px 14px",borderRadius:"8px",border:"1px solid rgba(255,255,255,.12)",background:"rgba(255,255,255,.05)",color:"#fff",fontSize:"0.85rem"}}/>
                  <button onClick={handleEmailSubmit} disabled={!email||emailLoading||!aiReady} style={{padding:"11px 16px",borderRadius:"8px",border:"none",background:(email&&aiReady)?"linear-gradient(135deg,#ff2d55,#c0392b)":"rgba(255,255,255,.05)",color:(email&&aiReady)?"#fff":"#444",fontSize:"0.8rem",fontWeight:"700",cursor:(email&&aiReady)?"pointer":"not-allowed",whiteSpace:"nowrap"}}>
                    {emailLoading?"Sending...":!aiReady?"Wait...":"Send PDF"}
                  </button>
                </div>
              </div>
            ):(
              <div style={{background:"rgba(39,174,96,.1)",border:"1px solid rgba(39,174,96,.3)",borderRadius:"14px",padding:"14px 18px",marginBottom:"22px",textAlign:"center"}}>
                <span style={{color:"#2ecc71",fontSize:"0.85rem"}}>✅ Itinerary sent to {email} — check your inbox!</span>
              </div>
            )}

            {/* Feedback section */}
            <div style={{background:"rgba(255,215,0,.04)",border:"1px solid rgba(255,215,0,.12)",borderRadius:"14px",padding:"18px",marginBottom:"16px",textAlign:"center"}}>
              <p style={{color:"#ccc",fontSize:"0.85rem",margin:"0 0 4px",fontWeight:"700"}}>
                🎰 Missing something in your itinerary?
              </p>
              <p style={{color:"#888",fontSize:"0.78rem",margin:"0 0 12px"}}>
                Vegas is waiting for you with open arms.
              </p>
              <a href="mailto:unveiledvegas@gmail.com?subject=Itinerary Feedback"
                style={{display:"inline-block",padding:"10px 22px",borderRadius:"9px",border:"1px solid rgba(255,215,0,.25)",color:"#ffd700",fontSize:"0.8rem",textDecoration:"none",fontWeight:"700"}}>
                Leave Your Feedback →
              </a>
            </div>

            <button onClick={()=>{setStep(0);setAnswers({});setSelected(null);setAiStory("");setAiReady(false);setItinerary([]);setFreeExp([]);setHotels([]);setEmail("");setEmailSent(false);}}
              style={{width:"100%",padding:"16px",borderRadius:"10px",background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.2)",color:"#bbb",fontSize:"0.95rem",fontWeight:"600",cursor:"pointer",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.color="#fff";e.currentTarget.style.background="rgba(255,255,255,.12)"}}
              onMouseLeave={e=>{e.currentTarget.style.color="#bbb";e.currentTarget.style.background="rgba(255,255,255,.06)"}}>
              ↩ Start Over — Build a New Itinerary
            </button>

            <p style={{textAlign:"center",color:"#444",fontSize:"0.65rem",marginTop:"16px"}}>
              Booking links may include affiliate partnerships · Prices subject to availability
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({exp,day,index,isFree,timeLabel}){
  const [hov,setHov]=useState(false);
  const timeSlotLabels = {
    morning:"🌅 Morning",
    day:"☀️ Afternoon",
    night:"🌙 Night",
    allday:"🔥 Any Time"
  };
  const bestTime = (!timeLabel && exp.times) ? timeSlotLabels[exp.times[0]] || "" : "";

  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:hov?`linear-gradient(135deg,${isFree?"rgba(39,174,96,.1)":"rgba(255,45,85,.1)"},rgba(255,215,0,.05))`:"rgba(255,255,255,.03)",
        border:hov?`1px solid ${isFree?"rgba(39,174,96,.3)":"rgba(255,215,0,.3)"}`:"1px solid rgba(255,255,255,.06)",
        borderRadius:"14px",padding:"18px",transition:"all .3s",transform:hov?"translateY(-1px)":"none",
        animation:`fadeUp .5s ease ${index*.08}s both`}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"}}>
        <div style={{display:"flex",gap:"12px",alignItems:"flex-start",flex:1}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",minWidth:"44px"}}>
            <span style={{fontSize:"1.8rem"}}>{exp.emoji}</span>
          </div>
          <div style={{flex:1}}>
            <div style={{color:"#fff",fontWeight:"700",fontSize:"1rem",marginBottom:"6px",lineHeight:1.3}}>{exp.name}</div>
            <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
              {!isFree&&timeLabel&&<span style={{background:"rgba(255,45,85,.12)",color:"#ff6b8a",fontSize:"0.72rem",padding:"2px 10px",borderRadius:"20px",border:"1px solid rgba(255,45,85,.2)"}}>{timeLabel}</span>}
              {exp.dur&&<span style={{background:"rgba(255,215,0,.15)",color:"#ffd700",fontSize:"0.72rem",padding:"2px 10px",borderRadius:"20px",border:"1px solid rgba(255,215,0,.25)"}}>{exp.dur}</span>}
              {exp.rating>0&&<span style={{background:"rgba(255,45,85,.15)",color:"#ff8080",fontSize:"0.72rem",padding:"2px 10px",borderRadius:"20px",border:"1px solid rgba(255,45,85,.25)"}}>⭐ {exp.rating}</span>}
              {exp.isNew&&<span style={{background:"rgba(39,174,96,.2)",color:"#2ecc71",fontSize:"0.72rem",padding:"2px 10px",borderRadius:"20px",border:"1px solid rgba(39,174,96,.3)"}}>✨ New</span>}
              {exp.limitedTime&&<span style={{background:"rgba(255,165,0,.15)",color:"#ffaa00",fontSize:"0.72rem",padding:"2px 10px",borderRadius:"20px",border:"1px solid rgba(255,165,0,.3)"}}>⏰ {exp.limitedTime}</span>}
            </div>
          </div>
        </div>
        {isFree
          ? <span style={{background:"rgba(39,174,96,.2)",border:"1px solid rgba(39,174,96,.4)",color:"#2ecc71",fontSize:"0.78rem",fontWeight:"700",padding:"4px 12px",borderRadius:"20px",whiteSpace:"nowrap",marginLeft:"8px"}}>FREE</span>
          : <span style={{color:"#ffd700",fontSize:"1.1rem",fontWeight:"bold",marginLeft:"10px",whiteSpace:"nowrap"}}>{exp.price===0?"Free":exp.price?"$"+exp.price:""}</span>
        }
      </div>
      <p style={{color:"#bbb",fontSize:"0.85rem",lineHeight:1.7,margin:"0 0 14px"}}>{exp.desc}</p>
      <a href={exp.url} target="_blank" rel="noopener noreferrer"
        style={{display:"block",background:isFree?"linear-gradient(135deg,rgba(39,174,96,.3),rgba(39,174,96,.15))":"linear-gradient(135deg,#ff2d55,#c0392b)",
          border:isFree?"1px solid rgba(39,174,96,.4)":"none",
          color:"#fff",padding:"13px 16px",borderRadius:"10px",textDecoration:"none",
          fontSize:"0.88rem",fontWeight:"700",textAlign:"center",
          boxShadow:isFree?"none":"0 4px 18px rgba(255,45,85,.35)"}}>
        {isFree?"🔗 Learn More":"🎟️ Book Now"}
      </a>
    </div>
  );
}
