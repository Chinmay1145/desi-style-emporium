
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  currency: string;
  category: string;
  images: string[];
  rating: number;
  numReviews: number;
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
  stock: number;
  specifications?: Record<string, string>;
}

// Helper function to format price in INR
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const products: Product[] = [
  // Western Outfits - Men
  {
    id: "western-outfit-1",
    name: "Premium Denim Jacket",
    description: "A stylish denim jacket for men, perfect for casual outings.",
    price: 3999,
    discountedPrice: 3499,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    ],
    rating: 4.5,
    numReviews: 124,
    featured: true,
    stock: 50,
    colors: ["Blue", "Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specifications: {
      material: "100% Cotton Denim",
      fit: "Regular",
      care: "Machine wash cold",
    }
  },
  {
    id: "western-outfit-2",
    name: "Classic Oxford Shirt",
    description: "A timeless Oxford shirt that combines comfort with style.",
    price: 2499,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e",
    ],
    rating: 4.7,
    numReviews: 89,
    bestseller: true,
    stock: 75,
    colors: ["White", "Light Blue", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    specifications: {
      material: "100% Cotton",
      fit: "Slim",
      care: "Machine wash",
    }
  },
  {
    id: "western-outfit-3",
    name: "Slim Fit Chinos",
    description: "Versatile chinos perfect for both casual and formal occasions.",
    price: 1999,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
      "https://images.unsplash.com/photo-1552668693-d0738e00eca8",
    ],
    rating: 4.3,
    numReviews: 156,
    stock: 100,
    colors: ["Beige", "Navy", "Olive", "Khaki"],
    sizes: ["30", "32", "34", "36", "38"],
    specifications: {
      material: "98% Cotton, 2% Elastane",
      fit: "Slim",
      care: "Machine wash cold",
    }
  },
  // Western Outfits - Women
  {
    id: "western-outfit-4",
    name: "Designer Maxi Dress",
    description: "Elegant maxi dress with floral patterns, perfect for summer.",
    price: 4499,
    discountedPrice: 3999,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1623609163859-ca93c959b98a",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6",
    ],
    rating: 4.8,
    numReviews: 65,
    featured: true,
    stock: 30,
    colors: ["Blue", "Red", "Green"],
    sizes: ["XS", "S", "M", "L"],
    specifications: {
      material: "100% Rayon",
      fit: "Regular",
      care: "Hand wash",
    }
  },
  {
    id: "western-outfit-5",
    name: "High-Waist Skinny Jeans",
    description: "Fashionable high-waist skinny jeans that offer comfort and style.",
    price: 2899,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1604176424472-9d7465380da6",
    ],
    rating: 4.6,
    numReviews: 202,
    bestseller: true,
    stock: 85,
    colors: ["Dark Blue", "Light Blue", "Black"],
    sizes: ["26", "28", "30", "32", "34"],
    specifications: {
      material: "95% Cotton, 5% Elastane",
      fit: "Skinny",
      care: "Machine wash cold",
    }
  },
  {
    id: "western-outfit-6",
    name: "Casual Blazer",
    description: "A versatile blazer that can be dressed up or down.",
    price: 4999,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
      "https://images.unsplash.com/photo-1598720290281-9f26ae6d6f81",
    ],
    rating: 4.4,
    numReviews: 78,
    stock: 35,
    colors: ["Black", "Navy", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    specifications: {
      material: "Polyester Blend",
      fit: "Regular",
      care: "Dry clean only",
    }
  },
  // Shoes
  {
    id: "shoes-1",
    name: "Leather Oxford Shoes",
    description: "Handcrafted leather Oxford shoes, perfect for formal occasions.",
    price: 5999,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      "https://images.unsplash.com/photo-1562183241-840b8af0721e",
    ],
    rating: 4.7,
    numReviews: 95,
    bestseller: true,
    stock: 25,
    colors: ["Black", "Brown"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    specifications: {
      material: "Genuine Leather",
      sole: "Leather",
      care: "Use shoe polish regularly",
    }
  },
  {
    id: "shoes-2",
    name: "Running Sneakers",
    description: "Lightweight and comfortable running shoes for athletic performance.",
    price: 3499,
    discountedPrice: 2999,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
    rating: 4.5,
    numReviews: 187,
    featured: true,
    stock: 60,
    colors: ["Black/Red", "Blue/White", "Grey/Orange"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    specifications: {
      material: "Mesh and Synthetic",
      sole: "Rubber",
      care: "Wipe clean",
    }
  },
  {
    id: "shoes-3",
    name: "Women's Stiletto Heels",
    description: "Elegant stiletto heels for special occasions.",
    price: 4299,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f",
    ],
    rating: 4.3,
    numReviews: 64,
    stock: 40,
    colors: ["Black", "Red", "Nude"],
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7"],
    specifications: {
      material: "Synthetic Leather",
      heel: "4 inches",
      care: "Wipe with cloth",
    }
  },
  {
    id: "shoes-4",
    name: "Canvas Slip-On Shoes",
    description: "Casual and comfortable slip-on shoes for everyday wear.",
    price: 1499,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    ],
    rating: 4.2,
    numReviews: 112,
    new: true,
    stock: 75,
    colors: ["White", "Black", "Navy", "Red"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      care: "Machine washable",
    }
  },
  // Watches
  {
    id: "watch-1",
    name: "Automatic Chronograph Watch",
    description: "Luxury automatic chronograph watch with leather strap.",
    price: 24999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    ],
    rating: 4.9,
    numReviews: 42,
    featured: true,
    stock: 15,
    colors: ["Brown", "Black"],
    specifications: {
      mechanism: "Automatic",
      case: "Stainless Steel",
      waterResistant: "50m",
      battery: "N/A",
    }
  },
  {
    id: "watch-2",
    name: "Minimalist Quartz Watch",
    description: "Sleek and minimalist quartz watch suitable for all occasions.",
    price: 7999,
    discountedPrice: 6999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    ],
    rating: 4.6,
    numReviews: 87,
    bestseller: true,
    stock: 30,
    colors: ["Silver", "Gold", "Rose Gold"],
    specifications: {
      mechanism: "Quartz",
      case: "Stainless Steel",
      waterResistant: "30m",
      battery: "SR626SW",
    }
  },
  {
    id: "watch-3",
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health monitoring and notifications.",
    price: 12999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
    ],
    rating: 4.7,
    numReviews: 156,
    new: true,
    stock: 50,
    colors: ["Black", "Silver"],
    specifications: {
      display: "AMOLED, 1.3 inch",
      battery: "Up to 7 days",
      waterResistant: "50m",
      compatibility: "Android, iOS",
    }
  },
  {
    id: "watch-4",
    name: "Luxury Gold Watch",
    description: "Premium gold-plated watch with diamond accents.",
    price: 35999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e",
      "https://images.unsplash.com/photo-1618220179428-22790b461013",
    ],
    rating: 4.8,
    numReviews: 34,
    featured: true,
    stock: 10,
    colors: ["Gold"],
    specifications: {
      mechanism: "Quartz",
      case: "Gold-plated stainless steel",
      waterResistant: "30m",
      features: "Diamond indices",
    }
  },
  // Headphones & Earbuds
  {
    id: "headphone-1",
    name: "Noise-Cancelling Headphones",
    description: "Premium over-ear headphones with active noise cancellation.",
    price: 15999,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1545127398-14699f92334b",
      "https://images.unsplash.com/photo-1520170350707-b0903558c150",
    ],
    rating: 4.8,
    numReviews: 205,
    bestseller: true,
    stock: 45,
    colors: ["Black", "Silver"],
    specifications: {
      type: "Over-ear",
      connectivity: "Bluetooth 5.0",
      batteryLife: "30 hours",
      noiseReduction: "Up to 30dB",
    }
  },
  {
    id: "headphone-2",
    name: "True Wireless Earbuds",
    description: "Compact wireless earbuds with crystal clear sound.",
    price: 8999,
    discountedPrice: 7499,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1606400082777-ef70969f7254",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    ],
    rating: 4.6,
    numReviews: 178,
    featured: true,
    stock: 60,
    colors: ["White", "Black", "Blue"],
    specifications: {
      type: "In-ear",
      connectivity: "Bluetooth 5.1",
      batteryLife: "7 hours + 21 hours with case",
      waterResistant: "IPX5",
    }
  },
  {
    id: "headphone-3",
    name: "Professional Studio Headphones",
    description: "High-fidelity studio headphones for professional audio monitoring.",
    price: 10999,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      "https://images.unsplash.com/photo-1524678714210-9917a6c619c2",
    ],
    rating: 4.7,
    numReviews: 92,
    stock: 30,
    colors: ["Black"],
    specifications: {
      type: "Over-ear",
      connectivity: "Wired, 3.5mm",
      frequency: "20Hz-20kHz",
      impedance: "32 ohms",
    }
  },
  {
    id: "headphone-4",
    name: "Sport Wireless Earphones",
    description: "Sweat-resistant wireless earphones perfect for workouts.",
    price: 3499,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3",
    ],
    rating: 4.3,
    numReviews: 146,
    new: true,
    stock: 70,
    colors: ["Black", "Red", "Blue"],
    specifications: {
      type: "In-ear with neckband",
      connectivity: "Bluetooth 5.0",
      batteryLife: "12 hours",
      waterResistant: "IPX7",
    }
  },
  // Smartphones
  {
    id: "smartphone-1",
    name: "Ultra Flagship Smartphone",
    description: "Premium smartphone with top-of-the-line features and camera system.",
    price: 79999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      "https://images.unsplash.com/photo-1606041011872-596597976b25",
    ],
    rating: 4.9,
    numReviews: 326,
    bestseller: true,
    stock: 25,
    colors: ["Midnight Black", "Stellar Silver", "Ocean Blue"],
    specifications: {
      processor: "Octa-core",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP quad camera",
      battery: "5000mAh",
    }
  },
  {
    id: "smartphone-2",
    name: "Mid-Range Smartphone",
    description: "Feature-packed smartphone with great value for money.",
    price: 24999,
    discountedPrice: 22999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f",
    ],
    rating: 4.6,
    numReviews: 245,
    featured: true,
    stock: 50,
    colors: ["Graphite", "Pearl White", "Aqua Green"],
    specifications: {
      processor: "Octa-core",
      ram: "6GB",
      storage: "128GB",
      camera: "64MP triple camera",
      battery: "4500mAh",
    }
  },
  {
    id: "smartphone-3",
    name: "Budget Smartphone",
    description: "Affordable smartphone with essential features.",
    price: 12999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e",
      "https://images.unsplash.com/photo-1533228100845-08145b01de14",
    ],
    rating: 4.3,
    numReviews: 178,
    stock: 80,
    colors: ["Black", "Blue", "Red"],
    specifications: {
      processor: "Octa-core",
      ram: "4GB",
      storage: "64GB",
      camera: "48MP dual camera",
      battery: "5000mAh",
    }
  },
  {
    id: "smartphone-4",
    name: "Foldable Smartphone",
    description: "Innovative foldable smartphone with dual display.",
    price: 119999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9",
      "https://images.unsplash.com/photo-1659740467626-5b1ceae00e3f",
    ],
    rating: 4.7,
    numReviews: 89,
    new: true,
    stock: 15,
    colors: ["Black", "Silver"],
    specifications: {
      processor: "Octa-core",
      ram: "12GB",
      storage: "512GB",
      camera: "108MP triple camera",
      battery: "4400mAh",
    }
  },
  // Accessories
  {
    id: "accessory-1",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots.",
    price: 1999,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    ],
    rating: 4.5,
    numReviews: 154,
    bestseller: true,
    stock: 100,
    colors: ["Brown", "Black", "Tan"],
    specifications: {
      material: "Full-grain leather",
      slots: "8 card slots, 2 bill compartments",
      dimensions: "9cm x 11cm",
    }
  },
  {
    id: "accessory-2",
    name: "Fashion Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: 2499,
    discountedPrice: 1999,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666",
      "https://images.unsplash.com/photo-1590064661010-d4b2828f239d",
    ],
    rating: 4.4,
    numReviews: 87,
    featured: true,
    stock: 60,
    colors: ["Black", "Tortoise", "Gold"],
    specifications: {
      material: "Acetate frame, Polarized lenses",
      protection: "100% UV protection",
      features: "Anti-reflective coating",
    }
  },
  {
    id: "accessory-3",
    name: "Premium Leather Belt",
    description: "High-quality leather belt with elegant buckle.",
    price: 1499,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1624222247344-0f1529988735",
    ],
    rating: 4.6,
    numReviews: 123,
    stock: 80,
    colors: ["Brown", "Black"],
    specifications: {
      material: "Full-grain leather",
      buckle: "Zinc alloy",
      width: "35mm",
    }
  },
  {
    id: "accessory-4",
    name: "Silk Tie",
    description: "Elegant silk tie for formal occasions.",
    price: 1299,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1589756823695-278bc923f146",
      "https://images.unsplash.com/photo-1591243315780-99a996c06f2d",
    ],
    rating: 4.4,
    numReviews: 67,
    stock: 45,
    colors: ["Navy", "Burgundy", "Silver"],
    specifications: {
      material: "100% silk",
      width: "7.5cm",
      care: "Dry clean only",
    }
  },
];

// Additional products to make 40+ total
export const extraProducts: Product[] = [
  {
    id: "western-outfit-7",
    name: "Leather Bomber Jacket",
    description: "Classic leather bomber jacket with a modern twist.",
    price: 7999,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8",
    ],
    rating: 4.6,
    numReviews: 82,
    stock: 25,
    colors: ["Black", "Brown"],
    sizes: ["M", "L", "XL"],
    specifications: {
      material: "Genuine Leather",
      lining: "Polyester",
      care: "Leather conditioner",
    }
  },
  {
    id: "western-outfit-8",
    name: "Floral Summer Dress",
    description: "Light and airy summer dress with floral pattern.",
    price: 2899,
    discountedPrice: 2499,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1618436934698-d3bc9ed0a61d",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223",
    ],
    rating: 4.3,
    numReviews: 75,
    featured: true,
    stock: 40,
    colors: ["Yellow", "Blue", "Pink"],
    sizes: ["XS", "S", "M", "L"],
    specifications: {
      material: "100% Cotton",
      fit: "A-line",
      care: "Machine wash cold",
    }
  },
  {
    id: "shoes-5",
    name: "Leather Loafers",
    description: "Classic leather loafers that offer both style and comfort.",
    price: 4999,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1",
    ],
    rating: 4.7,
    numReviews: 108,
    stock: 35,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    specifications: {
      material: "Genuine Leather",
      sole: "Rubber",
      care: "Polish regularly",
    }
  },
  {
    id: "shoes-6",
    name: "Canvas High-Top Sneakers",
    description: "Trendy high-top sneakers for casual wear.",
    price: 2499,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    ],
    rating: 4.4,
    numReviews: 136,
    new: true,
    stock: 50,
    colors: ["White", "Black", "Red"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      care: "Machine washable",
    }
  },
  {
    id: "watch-5",
    name: "Diving Watch",
    description: "Professional diving watch with high water resistance.",
    price: 18999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6",
      "https://images.unsplash.com/photo-1548171915-32071b108abf",
    ],
    rating: 4.8,
    numReviews: 46,
    stock: 20,
    colors: ["Black", "Blue"],
    specifications: {
      mechanism: "Automatic",
      case: "Stainless Steel",
      waterResistant: "300m",
      features: "Rotating bezel",
    }
  },
  {
    id: "watch-6",
    name: "Ladies' Fashion Watch",
    description: "Elegant watch for women with mother-of-pearl dial.",
    price: 8999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1526045431048-f857369baa09",
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e",
    ],
    rating: 4.6,
    numReviews: 77,
    stock: 25,
    colors: ["Rose Gold", "Silver"],
    specifications: {
      mechanism: "Quartz",
      case: "Stainless Steel",
      waterResistant: "30m",
      features: "Mother-of-pearl dial",
    }
  },
  {
    id: "headphone-5",
    name: "On-Ear Wireless Headphones",
    description: "Lightweight on-ear headphones with balanced sound.",
    price: 6999,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    ],
    rating: 4.2,
    numReviews: 128,
    stock: 35,
    colors: ["Black", "White", "Red"],
    specifications: {
      type: "On-ear",
      connectivity: "Bluetooth 5.0",
      batteryLife: "20 hours",
      features: "Foldable design",
    }
  },
  {
    id: "headphone-6",
    name: "Gaming Headset",
    description: "Immersive gaming headset with surround sound.",
    price: 5999,
    discountedPrice: 4999,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440",
      "https://images.unsplash.com/photo-1599669454699-248893623440",
    ],
    rating: 4.7,
    numReviews: 215,
    featured: true,
    stock: 40,
    colors: ["Black/Red", "Black/Blue"],
    specifications: {
      type: "Over-ear",
      connectivity: "Wired, 3.5mm",
      features: "Noise-cancelling microphone, RGB lighting",
      compatibility: "PC, Console",
    }
  },
  {
    id: "smartphone-5",
    name: "Camera-Focused Smartphone",
    description: "Smartphone with exceptional camera capabilities for photography enthusiasts.",
    price: 44999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9",
      "https://images.unsplash.com/photo-1618478594486-c65b899c4936",
    ],
    rating: 4.8,
    numReviews: 167,
    bestseller: true,
    stock: 30,
    colors: ["Midnight Black", "Forest Green", "Arctic White"],
    specifications: {
      processor: "Octa-core",
      ram: "8GB",
      storage: "256GB",
      camera: "108MP + 12MP + 10MP + 5MP",
      battery: "4800mAh",
    }
  },
  {
    id: "smartphone-6",
    name: "Gaming Smartphone",
    description: "Performance-focused smartphone optimized for mobile gaming.",
    price: 39999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      "https://images.unsplash.com/photo-1606041011872-596597976b25",
    ],
    rating: 4.5,
    numReviews: 142,
    new: true,
    stock: 25,
    colors: ["Black", "Red"],
    specifications: {
      processor: "Octa-core Gaming Processor",
      ram: "12GB",
      storage: "256GB",
      display: "6.8-inch 144Hz AMOLED",
      battery: "6000mAh",
    }
  },
  {
    id: "accessory-5",
    name: "Leather Gloves",
    description: "Premium leather gloves with touchscreen compatibility.",
    price: 1999,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1531925470851-1b5896b67dcd",
      "https://images.unsplash.com/photo-1510519138101-570d1dca3d66",
    ],
    rating: 4.6,
    numReviews: 85,
    stock: 50,
    colors: ["Black", "Brown", "Tan"],
    specifications: {
      material: "Genuine Leather",
      lining: "Cashmere",
      features: "Touchscreen compatible",
    }
  },
  {
    id: "accessory-6",
    name: "Weekend Duffle Bag",
    description: "Stylish and spacious duffle bag for weekend getaways.",
    price: 3499,
    discountedPrice: 2999,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    ],
    rating: 4.5,
    numReviews: 96,
    bestseller: true,
    stock: 30,
    colors: ["Brown", "Black", "Navy"],
    specifications: {
      material: "Canvas and Leather",
      dimensions: "50cm x 30cm x 25cm",
      features: "Multiple compartments",
    }
  },
  // Adding more products
  {
    id: "western-outfit-9",
    name: "Formal Blazer",
    description: "Sophisticated formal blazer for business and social events.",
    price: 5999,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      "https://images.unsplash.com/photo-1598522325074-042db73aa4e6",
    ],
    rating: 4.7,
    numReviews: 65,
    stock: 40,
    colors: ["Navy", "Black", "Grey"],
    sizes: ["38", "40", "42", "44", "46"],
    specifications: {
      material: "Wool Blend",
      fit: "Slim",
      care: "Dry clean only",
    }
  },
  {
    id: "western-outfit-10",
    name: "Casual Pullover Hoodie",
    description: "Comfortable hoodie perfect for casual outings.",
    price: 1899,
    currency: "INR",
    category: "western-outfits",
    images: [
      "https://images.unsplash.com/photo-1542583701-20d3be307eba",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac5",
    ],
    rating: 4.4,
    numReviews: 112,
    stock: 60,
    colors: ["Grey", "Black", "Navy", "Maroon"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specifications: {
      material: "80% Cotton, 20% Polyester",
      fit: "Regular",
      care: "Machine wash cold",
    }
  },
  {
    id: "shoes-7",
    name: "Espadrille Wedges",
    description: "Comfortable and stylish espadrille wedges for women.",
    price: 1799,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f",
    ],
    rating: 4.3,
    numReviews: 87,
    stock: 45,
    colors: ["Black", "Beige", "Navy"],
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7"],
    specifications: {
      material: "Canvas and Jute",
      heel: "3 inches",
      care: "Spot clean",
    }
  },
  {
    id: "shoes-8",
    name: "Formal Derby Shoes",
    description: "Classic derby shoes for formal occasions.",
    price: 4499,
    currency: "INR",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f",
    ],
    rating: 4.6,
    numReviews: 58,
    stock: 30,
    colors: ["Black", "Brown"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    specifications: {
      material: "Genuine Leather",
      sole: "Leather",
      care: "Polish regularly",
    }
  },
  {
    id: "watch-7",
    name: "Fitness Tracker Watch",
    description: "Modern fitness watch with health monitoring features.",
    price: 5999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
      "https://images.unsplash.com/photo-1529152635496-85c1eb061d8e",
    ],
    rating: 4.5,
    numReviews: 196,
    bestseller: true,
    stock: 50,
    colors: ["Black", "Blue", "Pink"],
    specifications: {
      display: "Color OLED",
      features: "Heart rate monitoring, Sleep tracking, Step counter",
      waterResistant: "50m",
      battery: "Up to 7 days",
    }
  },
  {
    id: "watch-8",
    name: "Pocket Watch",
    description: "Vintage-style pocket watch with chain.",
    price: 3999,
    currency: "INR",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1589948014316-830933805d73",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0",
    ],
    rating: 4.4,
    numReviews: 42,
    stock: 15,
    colors: ["Antique Gold", "Silver"],
    specifications: {
      mechanism: "Quartz",
      case: "Brass",
      features: "Includes chain",
      diameter: "45mm",
    }
  },
  {
    id: "headphone-7",
    name: "Bone Conduction Headphones",
    description: "Open-ear headphones using bone conduction technology.",
    price: 8499,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    ],
    rating: 4.3,
    numReviews: 67,
    new: true,
    stock: 25,
    colors: ["Black", "Grey"],
    specifications: {
      type: "Bone conduction",
      connectivity: "Bluetooth 5.0",
      batteryLife: "8 hours",
      waterResistant: "IP67",
    }
  },
  {
    id: "headphone-8",
    name: "DJ Headphones",
    description: "Professional DJ headphones with superior sound isolation.",
    price: 9999,
    currency: "INR",
    category: "headphones",
    images: [
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    ],
    rating: 4.8,
    numReviews: 85,
    stock: 20,
    colors: ["Black"],
    specifications: {
      type: "Over-ear",
      connectivity: "Wired, 3.5mm",
      features: "Swivel ear cups, Coiled cable",
      frequency: "5Hz-30kHz",
    }
  },
  {
    id: "smartphone-7",
    name: "Rugged Smartphone",
    description: "Durable smartphone designed for extreme conditions.",
    price: 29999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e",
      "https://images.unsplash.com/photo-1533228100845-08145b01de14",
    ],
    rating: 4.6,
    numReviews: 98,
    stock: 35,
    colors: ["Black", "Orange"],
    specifications: {
      processor: "Octa-core",
      ram: "6GB",
      storage: "128GB",
      durability: "IP68, MIL-STD-810G",
      battery: "6000mAh",
    }
  },
  {
    id: "smartphone-8",
    name: "Compact Smartphone",
    description: "Feature-packed phone in a compact form factor.",
    price: 34999,
    currency: "INR",
    category: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1556656793-08538906a9f8",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9",
    ],
    rating: 4.5,
    numReviews: 76,
    stock: 30,
    colors: ["Mint", "Black", "White"],
    specifications: {
      processor: "Octa-core",
      ram: "8GB",
      storage: "128GB",
      display: "5.7-inch OLED",
      battery: "4000mAh",
    }
  },
  {
    id: "accessory-7",
    name: "Passport Holder",
    description: "Sleek passport holder with RFID protection.",
    price: 999,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    ],
    rating: 4.5,
    numReviews: 125,
    stock: 70,
    colors: ["Black", "Brown", "Navy"],
    specifications: {
      material: "Leather",
      features: "RFID blocking, Card slots",
      dimensions: "10cm x 14cm",
    }
  },
  {
    id: "accessory-8",
    name: "Designer Cufflinks",
    description: "Elegant cufflinks for formal occasions.",
    price: 1799,
    currency: "INR",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    ],
    rating: 4.7,
    numReviews: 47,
    featured: true,
    stock: 25,
    colors: ["Silver", "Gold"],
    specifications: {
      material: "Stainless Steel",
      finish: "Polished",
      features: "Gift box included",
    }
  }
];

// Combine the products
export const allProducts = [...products, ...extraProducts];

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

// Function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.featured);
};

// Function to get bestseller products
export const getBestsellerProducts = (): Product[] => {
  return allProducts.filter(product => product.bestseller);
};

// Function to get new arrivals
export const getNewArrivals = (): Product[] => {
  return allProducts.filter(product => product.new);
};

// Function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

// Function to get related products
export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
  return allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

// Function to search products
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );
};

// Function to filter products by price range
export const filterByPriceRange = (products: Product[], min: number, max: number): Product[] => {
  return products.filter(product => product.price >= min && product.price <= max);
};

// Function to sort products
export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const productsCopy = [...products];
  
  switch (sortBy) {
    case 'price-low-to-high':
      return productsCopy.sort((a, b) => a.price - b.price);
    case 'price-high-to-low':
      return productsCopy.sort((a, b) => b.price - a.price);
    case 'name-a-to-z':
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-z-to-a':
      return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
    case 'rating':
      return productsCopy.sort((a, b) => b.rating - a.rating);
    default:
      return productsCopy;
  }
};

// Calculate total price for cart items
export const calculateCartTotal = (items: {product: Product; quantity: number}[]): number => {
  return items.reduce((total, item) => {
    const itemPrice = item.product.discountedPrice || item.product.price;
    return total + (itemPrice * item.quantity);
  }, 0);
};
