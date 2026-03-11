export interface Vehicle {
  slug: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  category: string;
  tagline: string;
  description: string;
  specs: {
    horsepower: number;
    zeroToSixty: string;
    topSpeed: string;
    engine: string;
    transmission: string;
    drivetrain: string;
  };
  images: {
    hero: string;
    gallery: string[];
  };
  colors: string[];
  featured: boolean;
}

export const vehicles: Vehicle[] = [
  {
    slug: "lamborghini-revuelto",
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    year: 2025,
    price: 608358,
    category: "Exotics",
    tagline: "The future of the V12",
    description:
      "The Revuelto is the first super sports car with a V12 hybrid plug-in powertrain. Its naturally aspirated V12 engine combined with three electric motors delivers an unprecedented 1,001 horsepower, rewriting the rules of performance with electrification at its core.",
    specs: {
      horsepower: 1001,
      zeroToSixty: "2.5s",
      topSpeed: "217 mph",
      engine: "6.5L V12 Hybrid",
      transmission: "8-Speed Dual-Clutch",
      drivetrain: "AWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
        "https://images.unsplash.com/photo-1621993202323-eb4ed813e9f4?w=800&q=80",
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
      ],
    },
    colors: ["Grigio Telesto", "Bianco Siderale", "Rosso Mars", "Verde Mantis"],
    featured: true,
  },
  {
    slug: "rolls-royce-spectre",
    name: "Rolls-Royce Spectre",
    brand: "Rolls-Royce",
    year: 2025,
    price: 420000,
    category: "Luxury Sedans",
    tagline: "The most perfect product Rolls-Royce has ever produced",
    description:
      "The Spectre is the marque's first fully electric motor car—a prophetic statement of intent for the future of luxury. With near-silent propulsion and effortless performance, it embodies the spirit of Rolls-Royce while pioneering an electric future.",
    specs: {
      horsepower: 577,
      zeroToSixty: "4.4s",
      topSpeed: "155 mph",
      engine: "Dual Electric Motors",
      transmission: "Single-Speed",
      drivetrain: "AWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
        "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80",
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
      ],
    },
    colors: ["Black Diamond", "English White", "Midnight Sapphire", "Spirit Silver"],
    featured: true,
  },
  {
    slug: "ferrari-296-gtb",
    name: "Ferrari 296 GTB",
    brand: "Ferrari",
    year: 2025,
    price: 351000,
    category: "Exotics",
    tagline: "Redefining fun to drive",
    description:
      "The 296 GTB is the latest evolution of the mid-rear-engined two-seater sports berlinetta concept. Its 120° V6 engine combined with a plug-in electric motor delivers 819 horsepower with the most exhilarating driving dynamics Ferrari has ever created.",
    specs: {
      horsepower: 819,
      zeroToSixty: "2.9s",
      topSpeed: "205 mph",
      engine: "3.0L Twin-Turbo V6 Hybrid",
      transmission: "8-Speed Dual-Clutch",
      drivetrain: "RWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
        "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?w=800&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      ],
    },
    colors: ["Rosso Corsa", "Giallo Modena", "Blu Corsa", "Bianco Avus"],
    featured: true,
  },
  {
    slug: "bentley-continental-gt",
    name: "Bentley Continental GT",
    brand: "Bentley",
    year: 2025,
    price: 245000,
    category: "Grand Touring",
    tagline: "Extraordinary journeys begin here",
    description:
      "The Continental GT is the definitive grand tourer—combining handcrafted luxury with breathtaking performance. Every surface is sculpted with precision, every material chosen with intention, creating an automotive masterpiece for transcontinental journeys.",
    specs: {
      horsepower: 771,
      zeroToSixty: "3.2s",
      topSpeed: "198 mph",
      engine: "4.0L Twin-Turbo V8 Hybrid",
      transmission: "8-Speed Dual-Clutch",
      drivetrain: "AWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
      ],
    },
    colors: ["Beluga", "Glacier White", "Barnato", "Cricket Ball"],
    featured: true,
  },
  {
    slug: "mclaren-750s",
    name: "McLaren 750S",
    brand: "McLaren",
    year: 2025,
    price: 324000,
    category: "Exotics",
    tagline: "Raise your limits",
    description:
      "The 750S is McLaren's new supercar benchmark—lighter, faster, and more engaging than anything in its class. With a twin-turbocharged V8 producing 750PS and a race-derived chassis, it delivers an experience that pushes the boundaries of possibility.",
    specs: {
      horsepower: 740,
      zeroToSixty: "2.7s",
      topSpeed: "206 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "7-Speed SSG",
      drivetrain: "RWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80",
        "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80",
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      ],
    },
    colors: ["Silica White", "Onyx Black", "Volcano Red", "McLaren Orange"],
    featured: true,
  },
  {
    slug: "porsche-911-gt3-rs",
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    year: 2025,
    price: 241300,
    category: "Performance SUVs",
    tagline: "Born in Flacht. For the track.",
    description:
      "The 911 GT3 RS is the most track-focused road-legal 911 ever built. With motorsport-derived aerodynamics generating over 900 pounds of downforce and a naturally aspirated flat-six revving to 9,000 RPM, it delivers a visceral experience unlike anything else on four wheels.",
    specs: {
      horsepower: 518,
      zeroToSixty: "3.0s",
      topSpeed: "184 mph",
      engine: "4.0L Flat-Six",
      transmission: "7-Speed PDK",
      drivetrain: "RWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
        "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&q=80",
      ],
    },
    colors: ["GT Silver", "Guards Red", "Shark Blue", "White"],
    featured: false,
  },
  {
    slug: "aston-martin-db12",
    name: "Aston Martin DB12",
    brand: "Aston Martin",
    year: 2025,
    price: 245000,
    category: "Grand Touring",
    tagline: "The world's first super tourer",
    description:
      "The DB12 heralds a new era for Aston Martin. As the world's first super tourer, it fuses the soul of a grand tourer with the heart of a supercar—delivering breathtaking performance wrapped in handcrafted British luxury that is unmistakably Aston Martin.",
    specs: {
      horsepower: 671,
      zeroToSixty: "3.5s",
      topSpeed: "202 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "8-Speed Automatic",
      drivetrain: "RWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      ],
    },
    colors: ["Quantum Silver", "Onyx Black", "Iridescent Emerald", "Ultramarine Black"],
    featured: false,
  },
  {
    slug: "mercedes-amg-gt-63",
    name: "Mercedes-AMG GT 63",
    brand: "Mercedes-Benz",
    year: 2025,
    price: 178000,
    category: "Grand Touring",
    tagline: "Handcrafted by racers",
    description:
      "The AMG GT 63 is the pinnacle of Mercedes-AMG performance. With its handcrafted twin-turbocharged V8 and AMG ACTIVE RIDE CONTROL suspension, it delivers explosive performance without compromising the grand touring luxury that defines the marque.",
    specs: {
      horsepower: 577,
      zeroToSixty: "3.1s",
      topSpeed: "196 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "9-Speed MCT",
      drivetrain: "AWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
        "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&q=80",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      ],
    },
    colors: ["Obsidian Black", "Designo Diamond White", "Lunar Blue", "MANUFAKTUR Patagonia Red"],
    featured: false,
  },
  {
    slug: "range-rover-sv",
    name: "Range Rover SV",
    brand: "Land Rover",
    year: 2025,
    price: 215000,
    category: "Performance SUVs",
    tagline: "The ultimate luxury SUV",
    description:
      "The Range Rover SV represents the pinnacle of luxury SUV refinement. Crafted by Special Vehicle Operations, it offers bespoke commissioning options, the finest materials, and a commanding presence that is unmistakable on any road.",
    specs: {
      horsepower: 606,
      zeroToSixty: "4.4s",
      topSpeed: "162 mph",
      engine: "4.4L Twin-Turbo V8",
      transmission: "8-Speed Automatic",
      drivetrain: "AWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
        "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800&q=80",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      ],
    },
    colors: ["Santorini Black", "Fuji White", "Carpathian Grey", "Charente Grey"],
    featured: false,
  },
  {
    slug: "bugatti-chiron-pur-sport",
    name: "Bugatti Chiron Pur Sport",
    brand: "Bugatti",
    year: 2025,
    price: 3900000,
    category: "Limited Editions",
    tagline: "The pursuit of lateral agility",
    description:
      "The Chiron Pur Sport is a limited-edition masterpiece conceived for the winding road. With revised aerodynamics, a stiffer chassis, and a retuned W16 engine, it transforms the Chiron's immense power into a driver's instrument of extraordinary precision.",
    specs: {
      horsepower: 1500,
      zeroToSixty: "2.3s",
      topSpeed: "218 mph",
      engine: "8.0L Quad-Turbo W16",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "AWD",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
      ],
    },
    colors: ["Nocturne", "Quartz White", "Blue Royal Carbon", "Atlantic Blue"],
    featured: true,
  },
];

export const categories = [
  {
    name: "Exotics",
    slug: "exotics",
    description: "Uncompromising performance meets radical design. Supercars and hypercars that push the boundaries of engineering.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  },
  {
    name: "Grand Touring",
    slug: "grand-touring",
    description: "The art of covering great distances in supreme comfort and effortless speed.",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
  },
  {
    name: "Luxury Sedans",
    slug: "luxury-sedans",
    description: "The pinnacle of automotive refinement. Handcrafted cabins that redefine what it means to arrive.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
  },
  {
    name: "Performance SUVs",
    slug: "performance-suvs",
    description: "Commanding presence meets exhilarating capability. Luxury without compromise, anywhere you go.",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
  },
  {
    name: "Limited Editions",
    slug: "limited-editions",
    description: "Rare, collectible, and extraordinary. Automotive masterpieces produced in strictly limited numbers.",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80",
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getVehiclesByCategory(category: string): Vehicle[] {
  return vehicles.filter((v) => v.category === category);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.featured);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
