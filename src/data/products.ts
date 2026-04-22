export type ProductCondition = "Like New" | "Excellent" | "Very Good";

export interface ProductVariant {
  label: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;

  shortDescription: string;
  description: string;

  images: string[];
  thumbnail: string;

  condition: ProductCondition;
  ageRange: string;
  tagline: string;

  category: string;
  inStock: boolean;

  specs: {
    dimensions: string;
    battery: string;
    maxWeight: string;
    materials: string;
    speed?: string;
  };

  variants?: ProductVariant[];
}

const img = (folder: string, file: string) =>
  `/images/${folder}/${file}`;

export const products: Product[] = [
  {
    id: "audi-r8-spyder",
    slug: "audi-r8-spyder",
    name: "Audi R8 Spyder Ride-On",
    price: 15200,
    originalPrice: 26000,

    shortDescription: "Sporty convertible design",
    description: "A stylish Audi R8 Spyder ride-on with realistic detailing, LED lights and smooth drive. Refurbished and tested for safety and performance.",

    images: [
      img("audi", "AUDI_R8_1.jpg"),
      img("audi", "AUDI_R8_2.jpg"),
      img("audi", "AUDI_R8_3.jpg"),
    ],
    thumbnail: img("audi", "AUDI_R8_1.jpg"),

    condition: "Excellent",
    ageRange: "3–6 yrs",
    tagline: "Convertible fun",

    category: "Ride-On Cars",
    inStock: true,

    specs: {
      dimensions: "105 × 60 × 45 cm",
      battery: "12V 7Ah",
      maxWeight: "30 kg",
      materials: "ABS, rubber wheels",
      speed: "4 km/h",
    },

    variants: [{ label: "Color", options: ["Red", "Yellow"] }],
  },

  {
    id: "jeep-wrangler-12v",
    slug: "jeep-wrangler-12v",
    name: "Jeep Wrangler 12V Off-Roader",
    price: 12400,
    originalPrice: 22000,

    shortDescription: "Iconic American style, gentle 12V motor",
    description: "A pre-loved Mini Cooper ride-on in pristine condition. Refurbished and sanitized in our workshop, with a fresh battery and detailed paintwork. Perfect first electric car for little drivers — gentle acceleration, soft start, and a working horn.",

    images: [
      img("jeep_wrangler", "JEEP_WRANGLER_1.jpg"),
      img("jeep_wrangler", "JEEP_WRANGLER_2.jpg"),
      img("jeep_wrangler", "JEEP_WRANGLER_3.jpg"),
    ],
    thumbnail: img("jeep_wrangler", "JEEP_WRANGLER_1.jpg"),

    condition: "Like New",
    ageRange: "3–6 yrs",
    tagline: "Iconic American style",

    category: "Ride-On Cars",
    inStock: true,

    specs: {
      dimensions: "105 × 60 × 45 cm",
      battery: "12V 7Ah (replaced)",
      maxWeight: "30 kg",
      materials: "ABS plastic, EVA wheels",
      speed: "3 km/h",
    },

    variants: [{ label: "Color", options: ["Glossy Black"] }],
  },
  {
    id: "range-rover-sport-12v",
    slug: "range-rover-sport-12v",
    name: "Range Rover Sport 12V",
    price: 13900,
    originalPrice: 24000,

    shortDescription: "Luxury SUV styling with smooth drive",
    description: "A premium ride-on inspired by Range Rover design. Features smooth acceleration, LED headlights, and a comfortable seat. Fully refurbished with a new battery and polished finish.",

    images: [
      img("range_rover", "RANGE_ROVER_1.jpg"),
      img("range_rover", "RANGE_ROVER_2.jpg"),
      img("range_rover", "RANGE_ROVER_3.jpg"),
    ],
    thumbnail: img("range_rover", "RANGE_ROVER_1.jpg"),

    condition: "Like New",
    ageRange: "3–7 yrs",
    tagline: "Luxury SUV feel",

    category: "Ride-On Cars",
    inStock: true,

    specs: {
      dimensions: "110 × 65 × 50 cm",
      battery: "12V 7Ah (replaced)",
      maxWeight: "35 kg",
      materials: "ABS plastic, EVA wheels",
      speed: "4 km/h",
    },

    variants: [{ label: "Color", options: ["White", "Black"] }],
  },
 
  {
    id: "bmw-x5-ride-on",
    slug: "bmw-x5-ride-on",
    name: "BMW X5 Ride-On",
    price: 14800,
    originalPrice: 25000,

    shortDescription: "Premium SUV experience",
    description: "BMW X5 inspired ride-on with dual motors and smooth suspension. Comes with parental remote and upgraded battery.",

    images: [
      img("bmw", "BMW_X5_1.jpeg"),
      img("bmw", "BMW_X5_2.jpeg"),
      img("bmw", "BMW_X5_3.jpeg"),
    ],
    thumbnail: img("bmw", "BMW_X5_1.jpeg"),

    condition: "Like New",
    ageRange: "3–7 yrs",
    tagline: "Premium SUV ride",

    category: "Ride-On Cars",
    inStock: true,

    specs: {
      dimensions: "115 × 70 × 55 cm",
      battery: "12V 10Ah",
      maxWeight: "40 kg",
      materials: "ABS, EVA tyres",
      speed: "5 km/h",
    },

    variants: [{ label: "Color", options: ["Black", "Blue"] }],
  },
  {
    id: "mercedes-g63-amg",
    slug: "mercedes-g63-amg",
    name: "Mercedes G63 AMG Ride-On",
    price: 16500,
    originalPrice: 28000,

    shortDescription: "Bold and rugged luxury",
    description: "A G63 AMG styled ride-on with rugged looks and powerful motor. Features LED lights, music system, and parental control.",

    images: [
      img("benz", "BENZ_G63_1.jpg"),
      img("benz", "BENZ_G63_2.jpg"),
      img("benz", "BENZ_G63_3.jpg"),
    ],
    thumbnail: img("benz", "BENZ_G63_1.jpg"),

    condition: "Excellent",
    ageRange: "3–8 yrs",
    tagline: "Bold AMG styling",

    category: "Ride-On Cars",
    inStock: true,

    specs: {
      dimensions: "120 × 75 × 60 cm",
      battery: "12V 10Ah",
      maxWeight: "45 kg",
      materials: "ABS, rubber wheels",
      speed: "5 km/h",
    },

    variants: [{ label: "Color", options: ["White", "Black"] }],
  },
  {
    id: "mini-tractor-ride-on",
    slug: "mini-tractor-ride-on",
    name: "Mini Tractor Ride-On",
    price: 8900,
    originalPrice: 14000,

    shortDescription: "Farm-style fun ride",
    description: "A compact tractor ride-on with detachable trailer. Great for both indoor and outdoor play. Fully cleaned and refurbished.",

    images: [
      img("mini_tractor", "MINI_TRACTOR_1.jpg"),
      img("mini_tractor", "MINI_TRACTOR_2.jpg"),
      img("mini_tractor", "MINI_TRACTOR_3.jpg"),
    ],
    thumbnail: img("mini_tractor", "MINI_TRACTOR_1.jpg"),

    condition: "Very Good",
    ageRange: "2–5 yrs",
    tagline: "Farm adventure",

    category: "Ride-On Vehicles",
    inStock: true,

    specs: {
      dimensions: "95 × 50 × 55 cm",
      battery: "6V",
      maxWeight: "25 kg",
      materials: "ABS plastic",
    },
  },
  {
    id: "police-jeep-ride-on",
    slug: "police-jeep-ride-on",
    name: "Police Jeep Ride-On",
    price: 11900,
    originalPrice: 19000,

    shortDescription: "Siren & LED patrol style",
    description: "A police-themed ride-on with working siren, lights, and rugged wheels. Refurbished with new battery and tested for performance.",

    images: [
      img("police_jeep", "POLICE_JEEP_1.jpg"),
      img("police_jeep", "POLICE_JEEP_2.jpg"),
      img("police_jeep", "POLICE_JEEP_3.jpg"),
    ],
    thumbnail: img("police_jeep", "POLICE_JEEP_1.jpg"),

    condition: "Excellent",
    ageRange: "3–7 yrs",
    tagline: "Patrol ready",

    category: "Ride-On Cars",
    inStock: true,

    specs: {
      dimensions: "110 × 65 × 50 cm",
      battery: "12V",
      maxWeight: "35 kg",
      materials: "ABS, rubber tyres",
      speed: "4 km/h",
    },
  },
  {
    id: "kids-scooter-led",
    slug: "kids-scooter-led",
    name: "LED Wheel Scooter",
    price: 3200,
    originalPrice: 5000,

    shortDescription: "Light-up wheels & smooth glide",
    description: "Three-wheel scooter with LED wheels and adjustable height. Perfect for beginners. Refurbished bearings and fresh grip.",

    images: [
      img("scooter", "SCOOTER_1.jpg"),
      img("scooter", "SCOOTER_2.jpg"),
      img("scooter", "SCOOTER_3.jpg"),
    ],
    thumbnail: img("scooter", "SCOOTER_1.jpg"),

    condition: "Like New",
    ageRange: "3–8 yrs",
    tagline: "Glow & ride",

    category: "Scooters",
    inStock: true,

    specs: {
      dimensions: "60 × 30 × 80 cm",
      battery: "LED kinetic",
      maxWeight: "50 kg",
      materials: "Aluminium, PU wheels",
    },

    variants: [{ label: "Color", options: ["Blue", "Pink", "Green"] }],
  },





  // {
  //   id: "mini-cooper-electric-red",
  //   name: "Mini Cooper Electric Ride-On",
  //   price: 14500,
  //   originalPrice: 22000,
  //   shortDescription: "Iconic British style, gentle 6V motor",
  //   description:
  //     "A pre-loved Mini Cooper ride-on in pristine condition. Refurbished and sanitized in our workshop, with a fresh battery and detailed paintwork. Perfect first electric car for little drivers — gentle acceleration, soft start, and a working horn.",
  //   images: [
  //     img("photo-1622547748225-3fc4abd2cca0"),
  //     img("photo-1503376780353-7e6692767b70"),
  //     img("photo-1494976388531-d1058494cdd8"),
  //   ],
  //   condition: "Like New",
  //   ageRange: "3–6 yrs",
  //   tagline: "Iconic British style",
  //   specs: {
  //     dimensions: "105 × 60 × 45 cm",
  //     battery: "6V 7Ah (replaced)",
  //     maxWeight: "30 kg",
  //     materials: "ABS plastic, EVA wheels",
  //     speed: "3 km/h",
  //   },
  //   variants: [{ label: "Color", options: ["Racing Red", "Sky Blue"] }],
  // },
  // {
  //   id: "jeep-wrangler-12v",
  //   name: "Jeep Wrangler 12V Off-Roader",
  //   price: 21900,
  //   originalPrice: 32000,
  //   shortDescription: "Two-seater with rugged grip wheels",
  //   description:
  //     "A two-seater Jeep Wrangler built for backyard adventures. New 12V battery, working LED headlights, MP3 input and a parental remote override. Tested across grass, gravel and tile — confident traction everywhere.",
  //   images: [
  //     img("photo-1533473359331-0135ef1b58bf"),
  //     img("photo-1519641471654-76ce0107ad1b"),
  //     img("photo-1485827404703-89b55fcc595e"),
  //   ],
  //   condition: "Excellent",
  //   ageRange: "3–8 yrs",
  //   tagline: "Two-seater off-roader",
  //   specs: {
  //     dimensions: "120 × 75 × 55 cm",
  //     battery: "12V 10Ah (replaced)",
  //     maxWeight: "45 kg",
  //     materials: "Reinforced ABS, rubber-trim wheels",
  //     speed: "5 km/h",
  //   },
  //   variants: [{ label: "Color", options: ["Sand", "Forest Green", "Charcoal"] }],
  // },
  // {
  //   id: "balance-bike-oak",
  //   name: "Oak Balance Bike",
  //   price: 4200,
  //   originalPrice: 6500,
  //   shortDescription: "Hand-finished wooden balance bike",
  //   description:
  //     "A heirloom-quality wooden balance bike, lightly used and hand-refinished with food-safe oil. Adjustable seat grows with your child. Builds confidence before pedals.",
  //   images: [
  //     img("photo-1571068316344-75bc76f77890"),
  //     img("photo-1532282194506-eee5c84daa3a"),
  //   ],
  //   condition: "Very Good",
  //   ageRange: "2–5 yrs",
  //   tagline: "Hand-finished wood",
  //   specs: {
  //     dimensions: "85 × 35 × 50 cm",
  //     battery: "—",
  //     maxWeight: "30 kg",
  //     materials: "Solid birch, EVA tyres",
  //   },
  // },
  // {
  //   id: "ferrari-style-roadster",
  //   name: "Roadster GT 12V",
  //   price: 18500,
  //   originalPrice: 28000,
  //   shortDescription: "Sporty styling, leather-look seat",
  //   description:
  //     "A head-turning roadster with smooth acceleration, working dashboard lights and a faux-leather bucket seat. Comes with parental remote and a fresh 12V battery.",
  //   images: [
  //     img("photo-1503376780353-7e6692767b70"),
  //     img("photo-1552519507-da3b142c6e3d"),
  //   ],
  //   condition: "Like New",
  //   ageRange: "3–7 yrs",
  //   tagline: "Showroom finish",
  //   specs: {
  //     dimensions: "115 × 65 × 50 cm",
  //     battery: "12V 7Ah (replaced)",
  //     maxWeight: "35 kg",
  //     materials: "ABS, faux leather seat",
  //     speed: "5 km/h",
  //   },
  //   variants: [{ label: "Color", options: ["Rosso", "Ivory"] }],
  // },
  // {
  //   id: "vintage-tricycle",
  //   name: "Vintage Steel Tricycle",
  //   price: 3800,
  //   shortDescription: "Restored classic with chrome trim",
  //   description:
  //     "A restored vintage tricycle with chrome handlebars and a powder-coated steel frame. Repainted in our workshop with period-correct colors. New grips and pedals.",
  //   images: [
  //     img("photo-1597700928093-cc1d1da7c8c3"),
  //     img("photo-1622547748225-3fc4abd2cca0"),
  //   ],
  //   condition: "Very Good",
  //   ageRange: "3–5 yrs",
  //   tagline: "Restored classic",
  //   specs: {
  //     dimensions: "80 × 45 × 60 cm",
  //     battery: "—",
  //     maxWeight: "25 kg",
  //     materials: "Powder-coated steel, rubber grips",
  //   },
  // },
  // {
  //   id: "police-bike-12v",
  //   name: "Patrol Bike 12V",
  //   price: 11900,
  //   originalPrice: 18000,
  //   shortDescription: "Working siren and LED lights",
  //   description:
  //     "A pre-loved 12V patrol bike with working siren, LED bar and training wheels. Refurbished frame, replaced battery and freshly polished.",
  //   images: [
  //     img("photo-1558981806-ec527fa84c39"),
  //     img("photo-1485827404703-89b55fcc595e"),
  //   ],
  //   condition: "Excellent",
  //   ageRange: "3–6 yrs",
  //   tagline: "Sirens & lights",
  //   specs: {
  //     dimensions: "100 × 50 × 65 cm",
  //     battery: "12V 7Ah (replaced)",
  //     maxWeight: "30 kg",
  //     materials: "ABS, rubber tyres",
  //     speed: "4 km/h",
  //   },
  // },
  // {
  //   id: "sit-on-tractor",
  //   name: "Farm Tractor with Trailer",
  //   price: 9800,
  //   originalPrice: 14500,
  //   shortDescription: "Push-along with detachable trailer",
  //   description:
  //     "A sturdy push-along tractor with a detachable trailer for hauling toys and treasures. Lightly used, deep-cleaned and inspected. Great for indoor and outdoor play.",
  //   images: [
  //     img("photo-1605559424843-9e4c228bf1c5"),
  //     img("photo-1606107557195-0e29a4b5b4aa"),
  //   ],
  //   condition: "Very Good",
  //   ageRange: "2–5 yrs",
  //   tagline: "Hauls everything",
  //   specs: {
  //     dimensions: "95 × 40 × 50 cm",
  //     battery: "—",
  //     maxWeight: "30 kg",
  //     materials: "ABS, EVA wheels",
  //   },
  // },
  // {
  //   id: "scooter-3-wheel",
  //   name: "Three-Wheel LED Scooter",
  //   price: 3400,
  //   originalPrice: 4900,
  //   shortDescription: "Light-up wheels, lean-to-steer",
  //   description:
  //     "A three-wheel scooter with light-up wheels and lean-to-steer mechanism. Adjustable T-bar grows with your child. Refurbished bearings, new grip tape.",
  //   images: [
  //     img("photo-1591025207163-942350e47db2"),
  //     img("photo-1532375810709-75b1da00537c"),
  //   ],
  //   condition: "Excellent",
  //   ageRange: "3–8 yrs",
  //   tagline: "Light-up wheels",
  //   specs: {
  //     dimensions: "60 × 30 × 80 cm",
  //     battery: "Wheel LEDs (kinetic)",
  //     maxWeight: "50 kg",
  //     materials: "Aluminium, PU wheels",
  //   },
  //   variants: [{ label: "Color", options: ["Mint", "Coral", "Sunshine"] }],
  // },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id: string, limit = 6): Product[] {
  return products.filter((p) => p.id !== id).slice(0, limit);
}
