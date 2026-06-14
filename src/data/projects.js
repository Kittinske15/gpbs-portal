// Central list of all GPBS systems shown on the portal.
//
// To add / edit a tile, just update this array. Fields:
//   name        -> title shown on the card
//   description -> one-line summary
//   url         -> where the tile links to (opens in a new tab)
//   category    -> used for the filter pills at the top
//   initials    -> 1-3 letters shown in the colored badge
//   accent      -> badge color (any valid CSS color)
//   status      -> "live" | "soon"  (controls the small status dot)
//
// NOTE: The first three URLs are confirmed. The remaining entries are
// placeholders based on your other projects — update the `url` (and name)
// once you confirm where each one is hosted, or set status: "soon".

export const projects = [
  {
    name: "Insightra",
    description: "Insights & analytics dashboard.",
    url: "https://ibsdo.com/insightra/",
    category: "Analytics",
    initials: "IN",
    accent: "#4f7cff",
    status: "live",
  },
  {
    name: "360 Demo",
    description: "360° demo experience and showcase.",
    url: "https://ibsdo.com/360-demo/",
    category: "Demo",
    initials: "360",
    accent: "#19b3a6",
    status: "live",
  },
  {
    name: "GPBS PMS",
    description: "Project management system for GPBS.",
    url: "https://ibsdo.com/gpbs-pms/",
    category: "Management",
    initials: "PM",
    accent: "#f0883e",
    status: "live",
  },

  // ---- Add / confirm the URLs below ---------------------------------------
  {
    name: "CPF Insight",
    description: "CPF insight reporting & proposals.",
    url: "https://ibsdo.com/cpf-insight/",
    category: "Analytics",
    initials: "CI",
    accent: "#9b5de5",
    status: "soon",
  },
  {
    name: "True Vision War Room",
    description: "True Vision performance war room.",
    url: "https://ibsdo.com/true-vision-warroom/",
    category: "War Room",
    initials: "TV",
    accent: "#e84d6e",
    status: "soon",
  },
  {
    name: "Investment War Room",
    description: "Investment tracking & decision war room.",
    url: "https://ibsdo.com/investment-warroom/",
    category: "War Room",
    initials: "IW",
    accent: "#2ec4b6",
    status: "soon",
  },
  {
    name: "Sustainability PMS",
    description: "Sustainability program management.",
    url: "https://ibsdo.com/cp-sustain-pms/",
    category: "Management",
    initials: "SP",
    accent: "#43a047",
    status: "soon",
  },
  {
    name: "Bit Scan",
    description: "Bit Scan scanning & analysis tool.",
    url: "https://ibsdo.com/bit-scan/",
    category: "Analytics",
    initials: "BS",
    accent: "#0ea5e9",
    status: "live",
  },
];

// Build the unique category list for the filter pills (with "All" first).
export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
