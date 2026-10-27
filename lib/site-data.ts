export const BUSINESS = {
  name: "ZPR Roofing",
  phone: "(815) 904-9777",
  phoneHref: "tel:+18159049777",
  email: "info@zprroofing.com",
  emailHref: "mailto:info@zprroofing.com",
  city: "Rockford",
  state: "IL",
  siteUrl: "https://www.zprroofing.com",
  hours: "Mon–Sun, 7am–7pm",
  licenseIL: "Unlimited Illinois Roofing License",
  licenseWI: "Wisconsin Roofing License",
  serviceArea: "Northern Illinois and Southern Wisconsin",
  tagline: "Excellence above. Protection below.",
  socials: {
    bbb: "https://www.bbb.org/us/il/rockford/profile/roofing-contractors/zpr-roofing-0654-1000129430",
    gaf: "https://www.gaf.com/en-us/roofing-contractors/residential/usa/il/rockford/zpr-roofing-1158368",
    facebook: "https://www.facebook.com/p/ZPR-Roofing-100063549822507/",
    instagram: "https://www.instagram.com/humbertozprroofing/",
  },
} as const;

export const SERVICES = [
  { slug: "roof-repair", label: "Roof Repair", short: "Leaks, damaged shingles, flashing, and vents fixed at the source." },
  { slug: "new-installation", label: "Roof Replacement", short: "Asphalt shingle, metal, and tile roofs installed by our in-house crew." },
  { slug: "storm-damage", label: "Storm Damage", short: "Hail and wind damage inspected, documented with photos, and repaired." },
  { slug: "inspections", label: "Roof Inspections", short: "A straight answer on the condition of your roof, backed by photos." },
  { slug: "metal-roofing", label: "Metal Roofing", short: "Standing seam metal roofs for farmhouses, acreage homes, and modern builds." },
  { slug: "commercial-roofing", label: "Commercial Roofing", short: "Flat and low-slope TPO and EPDM systems for businesses." },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export type CityState = "IL" | "WI";

export interface City {
  slug: string;
  name: string;
  state: CityState;
  tileText: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  neighborhoods: string;
  photo: {
    kind: "single" | "pair";
    src?: string;
    before?: string;
    after?: string;
    alt: string;
    caption: string;
  };
  mapQuery: string;
  services: ServiceSlug[];
  nearby: string[];
  copy: {
    s1: string;
    s2: string;
    s3Heading: string;
    s3: string;
    s4Heading: string;
    s4: string;
  };
  faqs: { q: string; a: string }[];
}

export const CITIES: City[] = [
  {
    slug: "belvidere-roofing",
    name: "Belvidere",
    state: "IL",
    tileText: "Historic State Street homes and acreage properties along the Kishwaukee River.",
    metaTitle: "Roof Repair & Replacement in Belvidere, IL | ZPR Roofing",
    metaDescription:
      "Family-owned roofers serving Belvidere, IL. Roof repair, replacement, metal roofing and storm damage work by an in-house crew. Get a free estimate.",
    h1: "Roofing Contractor in Belvidere, IL",
    neighborhoods:
      "North State Street Historic District, South State Street Historic District, Doty Park area, Kishwaukee River east side, Boone County Fairgrounds and Route 76 edge of town.",
    photo: {
      kind: "single",
      src: "/projects/fwave-aerial.jpg",
      alt: "Aerial view of a finished specialty shingle roof",
      caption: "A finished specialty shingle roof.",
    },
    mapQuery: "Belvidere, IL",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["rockford-roofing", "loves-park-roofing"],
    copy: {
      s1: "Roofs around the North and South State Street historic districts are old and particular: steep pitches, chimneys, and porch lines with flashing details that a shortcut repair will not hold up. Past Doty Park toward the county fairgrounds and Illinois Route 76, the lots get bigger and the roofs get simpler, on farmhouses and acreage properties with open exposure to wind. We repair and replace both, based on what the roof actually needs.\n\nWe're based in Rockford, about 12 miles west on Route 20, so a Belvidere estimate is not a special trip for us. Our crew is in-house, so the person who inspects your roof is also the one who repairs it.",
      s2: "Hail, straight-line wind, and heavy snow all take a toll on Boone County roofs. We repair leaks, replace missing or lifted shingles, and move to a full replacement when repairs no longer make sense. If a storm caused the damage, we document it with photos and a written scope you can share with your insurance company.\n\nOn acreage and farmhouse-style properties, standing seam metal is worth a look. It sheds snow, holds up in open wind, and suits the look of those homes well. Metal roofing is one of our core specialties.",
      s3Heading: "Local roofing conditions in Belvidere",
      s3: "Freeze and thaw does most of the damage here. Snow melts during the day and refreezes overnight, and that cycle pushes water under shingles at the eaves, especially on older homes with limited attic insulation. On the acreage and farmhouse properties near the edge of town, there is nothing to slow the wind down before it hits the roof. We check eaves, valleys, and flashing first on every inspection, since that is where both problems tend to start.",
      s4Heading: "Why ZPR in Belvidere",
      s4: "A Belvidere roof is not one size fits all, and we do not treat it that way. If a repair will hold on an older State Street home, we will say so. If a rural property calls for the wind resistance of metal, we will say that instead. Either way, it is our own in-house crew doing the work, not a subcontractor.",
    },
    faqs: [
      {
        q: "How do I know if my Belvidere roof has storm damage?",
        a: "Look for missing or curled shingles, granules in your gutters, dents in vents or flashing, and water stains on ceilings. Hail and wind damage is not always visible from the ground. We can inspect the roof and photograph what we find so you know exactly where you stand.",
      },
      {
        q: "Do you install metal roofs on farmhouses and acreage homes near Belvidere?",
        a: "Yes. Metal roofing is one of our core specialties, including standing seam systems. It is a popular choice for farmhouse-style homes and rural properties because it handles snow and wind well. We can walk you through options during your estimate.",
      },
      {
        q: "How far is your crew from Belvidere?",
        a: "Belvidere is about 12 miles east of Rockford, so it is well within our regular service area. Call (815) 904-9777 and we will schedule your estimate.",
      },
    ],
  },
  {
    slug: "loves-park-roofing",
    name: "Loves Park",
    state: "IL",
    tileText: "Riverside bungalows, Argyle ranch homes, and everything along Alpine Road.",
    metaTitle: "Roof Replacement & Repair in Loves Park, IL | ZPR Roofing",
    metaDescription:
      "Roof repair and replacement in Loves Park, IL from a family-owned crew. GAF Certified, licensed in Illinois, financing available. Free estimates.",
    h1: "Roofing Contractor in Loves Park, IL",
    neighborhoods:
      "Martin Shorewood, Argyle, Kingsley Forest Hills, North Alpine Road, Rock River waterfront, and the Rock Cut State Park area.",
    photo: {
      kind: "single",
      src: "/projects/fwave-edge.jpg",
      alt: "Edge of a finished specialty shingle roof",
      caption: "The edge of a finished specialty shingle roof.",
    },
    mapQuery: "Loves Park, IL",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["machesney-park-roofing", "rockford-roofing", "belvidere-roofing"],
    copy: {
      s1: "The roofs here split along the river. Closer to the water in Martin Shorewood, older Cape Cods and bungalows have tight valleys, dormers, and porch roofs where careful flashing matters more than square footage. Head toward Argyle and the lots open up, with newer ranch and farmhouse-style homes carrying broad, simple roof planes instead.\n\nLoves Park borders Rockford directly, so getting a crew out here is never a logistics problem for us. The real difference between the two ends of town is how we approach the job: small and detailed near the river, or large and straightforward toward Argyle.",
      s2: "On the older homes, we focus on repairs that actually hold: resealing flashing around chimneys and dormers, replacing worn sections, and finding the real source of a leak instead of covering it up. On the newer, larger homes, replacement usually means architectural asphalt shingles or metal, depending on how long you plan to stay and the look you want.\n\nWe inspect the decking as we go on every job, so a hidden problem does not end up buried under new shingles.",
      s3Heading: "Local roofing conditions in Loves Park",
      s3: "On the older river-area homes, water finds its way in at the joints, valleys, dormers, and porch tie-ins, and Northern Illinois freeze-thaw cycles work at those spots every winter. The larger ranch and farmhouse roofs do not have as many joints, but their wide, low-slope planes take a lot of direct sun and wind wear across a bigger surface. We inspect the decking on both, since hidden problems get buried fast once new shingles go down.",
      s4Heading: "Why ZPR in Loves Park",
      s4: "Your roof is never handed to a subcontractor here. The same in-house crew that inspects it does the repair or replacement, whether that is a careful flashing fix near the river or a full reroof on a larger lot. Financing is available if you would rather spread out the cost.",
    },
    faqs: [
      {
        q: "Do you replace roofs on riverfront homes in Martin Shorewood?",
        a: "Yes. We serve all of Loves Park, including Martin Shorewood and the Rock River area. Older bungalows and Cape Cods often have smaller, more detailed roofs, and we take extra care with flashing and edges.",
      },
      {
        q: "Is metal roofing a good fit for a larger lot home in Argyle?",
        a: "It can be. Metal handles snow and wind well and suits farmhouse-style and contemporary homes. Metal roofing is one of our specialties, and we can talk through options and budget during your estimate.",
      },
      {
        q: "What should I do if my Loves Park roof is leaking right now?",
        a: "Call us at (815) 904-9777. Emergency roof calls are answered seven days a week. In the meantime, move belongings away from the leak and put a bucket underneath. Please do not go up on the roof yourself.",
      },
    ],
  },
  {
    slug: "machesney-park-roofing",
    name: "Machesney Park",
    state: "IL",
    tileText: "Rock River homes and family neighborhoods in the Harlem area.",
    metaTitle: "Roofing Contractor in Machesney Park, IL | ZPR Roofing",
    metaDescription:
      "Machesney Park, IL roofing contractor for repairs, replacements and storm damage. Family-owned, in-house crew, GAF Certified. Get a free estimate.",
    h1: "Roofing Services in Machesney Park, IL",
    neighborhoods:
      "Rock River waterfront, Harlem High School area, Rock Cut State Park nearby, Illinois Route 173, and Illinois Route 251.",
    photo: {
      kind: "single",
      src: "/projects/repair-final.jpg",
      alt: "Finished section of new shingles after a roof repair",
      caption: "A finished partial roof repair.",
    },
    mapQuery: "Machesney Park, IL",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["loves-park-roofing", "roscoe-roofing", "rockford-roofing"],
    copy: {
      s1: "Machesney Park's homes span several decades, and that means the roofs do too. Along the Rock River and out toward Rock Cut State Park, some roofs are original and worn out, while others have had patch repairs over the years. Near Harlem High School, older ranches sit mixed in with newer builds. We take the time to check what is actually under the shingles before we quote, so your price reflects the real condition of your roof, not a guess.\n\nZPR Roofing serves Machesney Park with repair, replacement, and storm damage work, and we are close by in Rockford if you need us fast.",
      s2: "If you have a leak, we find the source before we recommend anything. Sometimes it is failed flashing or a few damaged shingles. Sometimes the roof has reached the end of its life. Either way, you get an honest answer.\n\nFor full replacements, we install architectural asphalt shingles or metal roofing. If a storm or hail event damaged your roof, we photograph the damage and give you a written scope you can share with your insurance company.",
      s3Heading: "Local roofing conditions in Machesney Park",
      s3: "Roofs near the Rock River deal with more moisture and open wind. Northern Illinois winters add freezing and thawing, which works at old sealant, flashing, and patched areas a little more each year, and spring storms bring wind and hail. A roof that looked fine last fall can have problems by spring, which is why we check flashing, vents, and roof edges first.",
      s4Heading: "Why ZPR in Machesney Park",
      s4: "Machesney Park is a short drive from our Rockford base, and you deal with the same family and the same in-house crew from estimate to cleanup.",
    },
    faqs: [
      {
        q: "Do you serve all of Machesney Park?",
        a: "Yes, all of it, from the Rock River to the Route 173 and Route 251 areas. If you are not sure whether your address is in our range, call (815) 904-9777.",
      },
      {
        q: "Should I repair or replace my roof?",
        a: "It depends on age, condition, and how far the damage has spread. A few damaged shingles can usually be repaired. A roof with widespread wear, repeated leaks, or storm damage often needs replacement. We will tell you which one makes sense and explain why.",
      },
      {
        q: "Can you help with an insurance claim after hail or wind damage?",
        a: "We can inspect the roof, document the damage with photos, and give you a written estimate to share with your insurance company. If your claim was denied or only partly approved, we can inspect the roof and document its condition for you. The decision is your insurer's.",
      },
    ],
  },
  {
    slug: "rockford-roofing",
    name: "Rockford",
    state: "IL",
    tileText: "Our home base, from Signal Hill to Edgewater and Keith Creek.",
    metaTitle: "Roof Repair & Replacement in Rockford, IL | ZPR Roofing",
    metaDescription:
      "Rockford, IL roofing contractor for roof repair, replacement, metal and commercial roofing. Family-owned with an in-house crew. Get a free estimate.",
    h1: "Roofing Contractor in Rockford, IL",
    neighborhoods: "Churchill's Grove, Signal Hill, Edgewater, Keith Creek, and Palmwood.",
    photo: {
      kind: "pair",
      before: "/projects/low-slope-before.jpg",
      after: "/projects/low-slope-after.jpg",
      alt: "Low-slope roof during tear-off and after a new roof was installed",
      caption: "Before and after: a residential low-slope roof installation.",
    },
    mapQuery: "Rockford, IL",
    services: ["roof-repair", "new-installation", "storm-damage", "inspections", "metal-roofing", "commercial-roofing"],
    nearby: ["loves-park-roofing", "machesney-park-roofing", "roscoe-roofing", "belvidere-roofing"],
    copy: {
      s1: "This is home base, so we know these roofs from the inside out: older homes in Churchill's Grove and Signal Hill with layered roofs and hidden decking damage, and newer neighborhoods along the river in Edgewater dealing with wind-lifted shingles and poor attic ventilation. There are plenty of roofers to choose from in this city. We think you should choose the one who tells you the truth about your roof.\n\nWe inspect before we quote, on every job, so you know what is actually going on up there before you decide anything.",
      s2: "We install asphalt shingle, metal, and tile roofs on homes, and we also work with flat and low-slope roof systems such as TPO and EPDM. Our Illinois license is unlimited, which covers both residential and commercial work.\n\nStorm damage repair is part of what we do too, and we document it for your insurance company. Emergency roof calls are answered seven days a week.",
      s3Heading: "Local roofing conditions in Rockford",
      s3: "This city gets the full range of Northern Illinois weather: heavy winter snow, ice at the eaves, spring hail and wind, and hot summers that bake shingles. The older neighborhoods tend to have mature trees, which means leaves and branches collect in valleys and gutters and hold moisture against the roof. In the newer subdivisions, ventilation and wind-lifted shingles are the more common problem.",
      s4Heading: "Why ZPR in Rockford",
      s4: "Family-owned, based right here, with a crew that has put in more than 15 years of hands-on roofing work. We give honest opinions instead of sales pitches, on every roof we look at.",
    },
    faqs: [
      {
        q: "Do you work in every part of Rockford?",
        a: "Yes. This is our home base, so we serve the whole city, from downtown and the river to the east and south sides.",
      },
      {
        q: "My home is older. Can the roof be repaired, or does it need to be replaced?",
        a: "Many older homes can be repaired if the decking underneath is sound. We check for hidden damage before we recommend anything. If the roof has reached the end of its life, we will explain what a replacement involves and what options fit your budget, including financing.",
      },
      {
        q: "Do you do commercial roofing?",
        a: "Yes. Our Illinois license is unlimited, which covers residential and commercial work, and we work with flat roof systems like TPO and EPDM. Call us to talk through your building.",
      },
    ],
  },
  {
    slug: "roscoe-roofing",
    name: "Roscoe",
    state: "IL",
    tileText: "Newer homes from the 2000s building boom, plus The Ledges and Sagewood.",
    metaTitle: "Roof Replacement & Repair in Roscoe, IL | ZPR Roofing",
    metaDescription:
      "Roscoe, IL roof replacement and repair from a family-owned, GAF Certified crew. Straight answers, no sales pitch. Get a free estimate today.",
    h1: "Roofing Services in Roscoe, IL",
    neighborhoods: "Sagewood, The Ledges, Burr Oak Road area, Roscoe Village Center, and the Rock River.",
    photo: {
      kind: "pair",
      before: "/projects/chimney-before.jpg",
      after: "/projects/chimney-after.jpg",
      alt: "Worn chimney flashing and shingles before a roof replacement, and new shingles and flashing after",
      caption: "Before and after: an asphalt shingle roof replacement.",
    },
    mapQuery: "Roscoe, IL",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["machesney-park-roofing", "rockford-roofing", "beloit-roofing"],
    copy: {
      s1: "Roscoe grew fast, and a lot of its housing went up in that same building boom. That puts a large share of the roofs in town at the age where asphalt shingles start to show wear, whether that is in Sagewood, out toward The Ledges, or along Burr Oak Road.\n\nWe're based in Rockford, a short drive north. If you have noticed curling shingles, granules in the gutters, or a few leaks starting, an inspection will tell you whether you need a repair or are getting close to replacement.",
      s2: "For mid-size family homes, architectural asphalt shingles are the practical choice: durable and a good value. For larger homes near The Ledges Golf Course, more owners want the extra presence of standing seam metal instead.\n\nWe install both, and we're GAF Certified for shingle systems. If storm damage is the reason you're calling, we document it with photos and a written scope for your insurance company.",
      s3Heading: "Local roofing conditions in Roscoe",
      s3: "As asphalt shingles age, granules wash into the gutters, edges curl, and the sealed joints around vents and chimneys start to open up. Homes near the forest preserve sit among mature trees, so falling leaves and branches add wear and hold moisture in the valleys. Spring wind and hail tend to find the weak spots on a roof that is already aging first.",
      s4Heading: "Why ZPR in Roscoe",
      s4: "A lot of Roscoe's roofs are the same age, which means a lot of homeowners here are facing the same decision around the same time. We'll give you a straight answer on which side of it you're on, backed by our own in-house crew doing the actual work.",
    },
    faqs: [
      {
        q: "How long should a roof last in Roscoe?",
        a: "Most asphalt shingle roofs last about 20 to 30 years, depending on the shingle, ventilation, and weather. Roofs installed during Roscoe's building boom in the 2000s are reaching that range now. An inspection will show how much life is left.",
      },
      {
        q: "Is metal roofing worth it for a larger Roscoe home?",
        a: "Metal costs more up front than shingles, but it can last decades and handles snow and wind well. Whether it is worth it depends on how long you plan to stay and the look you want. Metal roofing is one of our specialties, so we can walk through both options honestly.",
      },
      {
        q: "Do you offer financing for roof replacement?",
        a: "Yes. We offer financing options for qualified homeowners so you can spread out the cost of a new roof. Ask us about it during your estimate.",
      },
    ],
  },
  {
    slug: "beloit-roofing",
    name: "Beloit",
    state: "WI",
    tileText: "Historic Near East Side homes and both sides of the state line.",
    metaTitle: "Roof Repair & Replacement in Beloit, WI | ZPR Roofing",
    metaDescription:
      "Beloit, WI roofing contractor for both sides of the state line. Roof repair, replacement and storm damage by a licensed, family-owned crew. Free estimates.",
    h1: "Roofing Contractor in Beloit, WI",
    neighborhoods:
      "Near East Side Historic District, Beloit College area, Downtown Beloit and the Rock River, and the Stateline area (Beloit and South Beloit).",
    photo: {
      kind: "single",
      src: "/projects/repair-closeup.jpg",
      alt: "Close-up of a roof ridge seam being checked during a repair",
      caption: "Checking a ridge seam during a roof repair.",
    },
    mapQuery: "Beloit, WI",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["janesville-roofing", "roscoe-roofing"],
    copy: {
      s1: "Beloit sits right on the state line, and a lot of its older homes, especially near the Near East Side Historic District and Beloit College, have hips, gables, dormers, and chimneys that make flashing the hard part of the job. We're licensed in both Wisconsin and Illinois, so working either side of that line is routine for us.\n\nOur base in Rockford is a short drive south on I-90. We serve this area directly under our own name, not through a subcontractor once you cross the border.",
      s2: "Older homes near the college and the historic district often have layered roofs, decorative rooflines, and chimneys that need flashing done properly. We start with a full inspection and give you a straight answer on repair versus replacement.\n\nNewer homes around town get the same attention, whether that means shingle replacement, metal roofing, or repairing storm damage from Wisconsin's hail, wind, and winter ice.",
      s3Heading: "Local roofing conditions in Beloit",
      s3: "Wisconsin winters are long, and roofs here deal with heavy snow and the freeze-thaw cycle that builds ice at the eaves. On older homes with complex rooflines and limited attic insulation, that is where ice dams tend to start: melting snow refreezes at the roof edge and backs water up under the shingles. Summer brings wind and hail to every roof in town, old or new.",
      s4Heading: "Why ZPR in Beloit",
      s4: "We're licensed for residential and commercial work in Wisconsin, and in Illinois, so the state line does not complicate anything on our end. Your roof gets our own in-house crew, not a sub, whichever side you're on.",
    },
    faqs: [
      {
        q: "Are you licensed to roof in Wisconsin?",
        a: "Yes. ZPR Roofing is licensed in Wisconsin for residential and commercial work, and in Illinois. Our crew works across southern Wisconsin.",
      },
      {
        q: "Can you work on historic homes near Beloit College?",
        a: "Yes. Older homes often need extra care with flashing, chimneys, and complex rooflines. We inspect the roof and decking first, then recommend the repair or replacement that makes sense for the home.",
      },
      {
        q: "Do you serve both Beloit, Wisconsin and South Beloit, Illinois?",
        a: "Yes. We serve both sides of the state line, along with towns across southern Wisconsin and Northern Illinois.",
      },
    ],
  },
  {
    slug: "evansville-roofing",
    name: "Evansville",
    state: "WI",
    tileText: "Historic downtown homes on Highway 14.",
    metaTitle: "Roof Repair & Replacement in Evansville, WI | ZPR Roofing",
    metaDescription:
      "Evansville, WI roofing for historic and newer homes. Roof repair, replacement and storm damage from a family-owned crew. Call for a free estimate.",
    h1: "Roofing Services in Evansville, WI",
    neighborhoods:
      "Evansville Historic District, Leonard-Leota Park and Lake Leota, Main Street, the Baker Manufacturing Company Office Building area, and Highway 14.",
    photo: {
      kind: "single",
      src: "/projects/fwave-chimney.jpg",
      alt: "Finished specialty shingle roof around a stone chimney",
      caption: "A finished specialty shingle roof around a stone chimney.",
    },
    mapQuery: "Evansville, WI",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["janesville-roofing", "madison-roofing"],
    copy: {
      s1: "Evansville's older homes, especially near Main Street and Leonard-Leota Park, come with roof details that reward patience: porch roofs, dormers, chimneys, and the small transitions where one roof section meets another.\n\nWe serve the small towns along Highway 14, and this is one of them. Small towns notice good work, and we treat every roof here as a chance to earn that reputation, starting with an honest inspection and a plain answer.",
      s2: "A leak in an older home is often not where the stain shows up. Water travels along the framing before it drips. We trace the real source instead of guessing, then recommend the smallest repair that will hold.\n\nWhen a full replacement is the honest answer, we install architectural shingles or metal roofing and walk you through the options. If wind or hail caused the damage, we document it with photos and a written scope for your insurance company.",
      s3Heading: "Local roofing conditions in Evansville",
      s3: "This town sees the same Rock County winters and spring storms as the rest of southern Wisconsin: heavy snow, ice at the eaves, and wind. Homes near the lake and the park sit among mature trees, where leaves and branches collect in the valleys and gutters and keep the roof damp longer than it should be.",
      s4Heading: "Why ZPR in Evansville",
      s4: "Evansville is a small town, and word gets around fast about who does honest work. We give it to you straight, and it's our own crew on the roof, not a sub.",
    },
    faqs: [
      {
        q: "Do you work on older and historic homes in Evansville?",
        a: "Yes. Historic homes often have complex rooflines, chimneys, and porch roofs that need careful flashing. We inspect the roof and decking first and give you a plain-English recommendation.",
      },
      {
        q: "How do I find the source of a roof leak in an older home?",
        a: "Water often travels along rafters and decking before it shows up on the ceiling, so the stain may not be right below the leak. We inspect the roof surface, flashing, and vents, and check the attic when needed, to find the true source.",
      },
      {
        q: "Do you serve Evansville, or only larger cities nearby?",
        a: "We serve Evansville directly, not just the bigger towns around it. Call (815) 904-9777 to schedule an estimate.",
      },
    ],
  },
  {
    slug: "janesville-roofing",
    name: "Janesville",
    state: "WI",
    tileText: "Courthouse Hill, Look West, and newer neighborhoods across town.",
    metaTitle: "Roof Repair & Replacement in Janesville, WI | ZPR Roofing",
    metaDescription:
      "Janesville, WI roofing contractor for repairs, replacements and storm damage. Licensed in Wisconsin, family-owned, GAF Certified. Get a free estimate.",
    h1: "Roofing Contractor in Janesville, WI",
    neighborhoods:
      "Courthouse Hill, Old Fourth Ward, Look West, Northeast Janesville (Milton Avenue and Wright Road), and the East Side.",
    photo: {
      kind: "single",
      src: "/projects/repair-wood-edge.jpg",
      alt: "Damaged wood at a roof edge being replaced during a repair",
      caption: "Replacing damaged wood at the roof edge during a repair.",
    },
    mapQuery: "Janesville, WI",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["beloit-roofing", "evansville-roofing"],
    copy: {
      s1: "Janesville has two very different housing stocks, and they need different things from a roofer. Around Courthouse Hill and the Old Fourth Ward, older homes have steep, cut-up rooflines with hips and mansards, chimneys, and flashing that has to be done right. Out in the newer subdivisions on the northeast side, ranch homes have large, simple roofs that mostly need good shingles and proper ventilation.\n\nWe're licensed in Wisconsin and Illinois, and our crew covers all of Janesville, not just one side of town.",
      s2: "Historic homes call for careful work: steep slopes, decorative rooflines, and flashing details that cannot be rushed. Newer homes tend to have large, simple roofs that benefit from quality shingles and proper attic ventilation.\n\nWe work with asphalt shingles and metal, so we can match the roof to the home. Storm damage help is part of what we do too, including photos and a written scope for your insurance company.",
      s3Heading: "Local roofing conditions in Janesville",
      s3: "Rock County winters bring heavy snow, ice at the eaves, and freeze-thaw cycles that work at flashing and old repairs. On the older, steeper homes, ice and snow collect in spots that are hard to see from the ground. On the newer side of town, wide-open roof planes take more direct wind and hail, so shingle quality and ventilation matter more.",
      s4Heading: "Why ZPR in Janesville",
      s4: "Two very different kinds of roofs, one crew, no subcontractors either way. You get the same honest estimate whether you're on Courthouse Hill or the newer side of town.",
    },
    faqs: [
      {
        q: "Can you replace a mansard or steep historic roof?",
        a: "Yes. We work with asphalt shingles and metal, including on older homes with unusual rooflines. We will inspect the roof first and be upfront about what the job will take.",
      },
      {
        q: "Are you licensed to roof in Janesville?",
        a: "Yes. We're licensed in Wisconsin for residential and commercial work, and in Illinois.",
      },
      {
        q: "What are common signs I need a new roof?",
        a: "Curling or missing shingles, granules collecting in gutters, daylight in the attic, sagging areas, and repeated leaks are all signs. Rock County winters and summer storms add wear over time. An inspection will show whether a repair is enough.",
      },
    ],
  },
  {
    slug: "madison-roofing",
    name: "Madison",
    state: "WI",
    tileText: "Century-old homes in Nakoma, Marquette, Vilas, and beyond.",
    metaTitle: "Roof Replacement & Repair in Madison, WI | ZPR Roofing",
    metaDescription:
      "Madison, WI roof repair and replacement from a family-owned, licensed crew. Metal roofing and storm damage help. Call for a free estimate.",
    h1: "Roofing Contractor in Madison, WI",
    neighborhoods: "Nakoma, Marquette, Vilas, Dudgeon-Monroe, and Tenney-Lapham.",
    photo: {
      kind: "pair",
      before: "/projects/decking-before.jpg",
      after: "/projects/shingle-after-1.jpg",
      alt: "Worn shingle roof before replacement, and a new architectural shingle roof after",
      caption: "Before and after: an asphalt shingle roof replacement.",
    },
    mapQuery: "Madison, WI",
    services: ["roof-repair", "new-installation", "storm-damage"],
    nearby: ["evansville-roofing", "janesville-roofing"],
    copy: {
      s1: "Madison is a city of century-old neighborhoods. Nakoma, Vilas, and Tenney-Lapham are typical of what we see: roofs that need careful attention to flashing, valleys, and decking after a hundred winters.\n\nWe're glad to be at the northern edge of where we work, since Madison has that kind of housing stock throughout. Homes here range from those century-old houses to newer builds on the outskirts, and we treat each roof individually, starting with an inspection and a plain answer on repair or replacement.",
      s2: "Older homes often have a lot of history under the shingles: previous repairs, patched flashing, and decking that has been through many freezing winters. We check all of it before we quote. If hail or high wind caused the damage, we document it with photos and a written scope for your insurance company.\n\nFor homeowners who want a longer-lasting roof, metal roofing is one of our core specialties. We will walk you through metal and shingle options and what each one costs over time.",
      s3Heading: "Local roofing conditions in Madison",
      s3: "Dane County gets the full range of Midwest weather: heavy snow, ice at the eaves, and summer storms that bring wind and hail. On older homes, that punishment adds up year after year, and a small flashing or ventilation problem gets bigger with each winter that passes.",
      s4Heading: "Why ZPR in Madison",
      s4: "Madison has plenty of roofers to pick from. What sets us apart is that the crew who inspects your roof is the same crew that repairs or replaces it, and we will tell you honestly which one your roof needs.",
    },
    faqs: [
      {
        q: "Do you serve Madison and the surrounding area?",
        a: "Yes. Madison is the northern edge of our service area, and we cover the towns between here and the Illinois border as well.",
      },
      {
        q: "My home is 100 years old. Can the roof be repaired?",
        a: "Often, yes, if the decking and framing underneath are sound. We inspect first and tell you whether a repair will hold or whether replacement is the better value. We will not sell you a new roof you do not need.",
      },
      {
        q: "Can you help if my insurance claim was denied?",
        a: "We can inspect the roof again and document its condition with photos and a written scope of work you can share with your insurer. The decision is your insurance company's.",
      },
    ],
  },
];

export const CITIES_IL = CITIES.filter((c) => c.state === "IL");
export const CITIES_WI = CITIES.filter((c) => c.state === "WI");

export const ALSO_SERVING_IL = [
  "Byron",
  "Caledonia",
  "Cherry Valley",
  "Davis Junction",
  "Dixon",
  "Durand",
  "Freeport",
  "Lindenwood",
  "Mount Morris",
  "Oregon",
  "Pecatonica",
  "Polo",
  "Poplar Grove",
  "Rockton",
  "South Beloit",
  "Sterling",
  "Stillman Valley",
  "Winnebago",
];

export const ALSO_SERVING_WI = ["Cottage Grove", "Edgerton", "Fitchburg", "Oregon", "Stoughton"];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
