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

  {
    name: "Biz Scan",
    description: "Biz Scan scanning & analysis tool.",
    url: "https://ibsdo.com/bit-scan/",
    category: "Analytics",
    initials: "BS",
    accent: "#0ea5e9",
    status: "live",
  },
  {
    name: "HR AI Platform",
    description: "AI-powered HR management platform.",
    url: "https://hr-ai-platform-production.up.railway.app/login",
    category: "Management",
    initials: "HR",
    accent: "#a855f7",
    status: "live",
  },
  {
    name: "GPBS BSC",
    description: "Balanced Scorecard performance dashboard.",
    url: "https://ibsdo.com/gpbs-bsc/",
    category: "Analytics",
    initials: "BSC",
    accent: "#22c55e",
    status: "live",
  },
  {
    name: "GPBS Survey",
    description: "Webinar topic survey & results.",
    url: "https://ibsdo.com/gpbs-survey/",
    category: "Management",
    initials: "SV",
    accent: "#e11d48",
    status: "live",
  },
];

// Build the unique category list for the filter pills (with "All" first).
export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
