export interface Service {
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export const services: Service[] = [
  {
    title: "Global Vehicle Sourcing",
    description:
      "Our worldwide network of collectors, dealers, and manufacturers ensures access to the rarest and most sought-after automobiles on the planet. Whether it's a limited-production hypercar or a vintage classic, we'll find it.",
    features: [
      "Access to private collections",
      "Pre-market availability",
      "Provenance verification",
      "Worldwide dealer network",
    ],
    iconName: "Search",
  },
  {
    title: "Collections Acquisition",
    description:
      "Building a world-class collection requires vision, patience, and expertise. Our specialists guide you through every acquisition, ensuring each vehicle complements your portfolio and appreciates in value.",
    features: [
      "Portfolio strategy",
      "Market analysis",
      "Authentication services",
      "Storage solutions",
    ],
    iconName: "Crown",
  },
  {
    title: "Worldwide Shipping",
    description:
      "Enclosed, climate-controlled transportation to any destination on the globe. From door-to-door domestic delivery to international ocean freight, your vehicle travels in absolute security.",
    features: [
      "Enclosed transport",
      "Climate-controlled containers",
      "Full insurance coverage",
      "Real-time tracking",
    ],
    iconName: "Globe",
  },
  {
    title: "Bespoke Custom Builds",
    description:
      "Commission a one-of-one creation directly with the world's finest manufacturers. Our privileged partnerships unlock exclusive specifications, materials, and finishes unavailable to the public.",
    features: [
      "Factory liaison",
      "Exclusive specifications",
      "Progress documentation",
      "Delivery coordination",
    ],
    iconName: "Wrench",
  },
  {
    title: "Investment Consulting",
    description:
      "The collector car market has outperformed traditional investments for decades. Our advisory team provides data-driven insights to help you make informed decisions about automotive investments.",
    features: [
      "Market trend analysis",
      "Valuation services",
      "Portfolio diversification",
      "Exit strategy planning",
    ],
    iconName: "TrendingUp",
  },
];
