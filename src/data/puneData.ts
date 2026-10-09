import { Place, SafetyIncident, RouteOption, AreaMetric, CityVitals, EVStation, TransitWay } from '../types/citypulse';

export const PUNE_COORDINATES: [number, number] = [18.5204, 73.8567];

export const PUNE_PLACES: Place[] = [
  {
    id: 'p1',
    name: 'Shaniwar Wada',
    category: 'heritage',
    tagline: '18th-century Maratha Empire Seat of Power',
    description: 'Historical fortification built in 1732 by Peshwa Bajirao I. Famous for its towering Dilli Darwaza, courtyards, and light & sound show depicting Maratha heritage.',
    history: 'Constructed as the seat of the Peshwa rulers of the Maratha Empire until 1818. Surviving structure stands as Pune’s premier historic icon.',
    lat: 18.5196,
    lng: 73.8553,
    rating: 4.6,
    reviewsCount: 38400,
    safetyScore: 88,
    cleanlinessScore: 82,
    priceTier: '₹',
    avgCostForTwo: 50,
    pricing: {
      entryFeeIndian: 25,
      entryFeeForeigner: 300,
      signatureItems: [
        { name: 'Indian Adult Entry Ticket', price: 25 },
        { name: 'Foreigner Entry Ticket', price: 300 },
        { name: 'Evening Light & Sound Show (English/Marathi)', price: 50 },
        { name: 'Children under 15', price: 0 }
      ],
      notes: 'ASI ticket counter accepts UPI & cash; audio guides available at gate for ₹100.'
    },
    bestTimeToVisit: '4:30 PM - 7:30 PM (Evening breeze & sound show)',
    tags: ['Historical', 'Maratha Empire', 'Architecture', 'Family Friendly'],
    crowdLevel: 'High',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    localTip: 'Carry a water bottle and explore the Bajirao statue garden right across Shivaji Bridge.'
  },
  {
    id: 'p2',
    name: 'Aga Khan Palace',
    category: 'heritage',
    tagline: 'Italian Arches & Freedom Movement Sanctuary',
    description: 'Built in 1892 by Sultan Muhammed Shah Aga Khan III. Served as a prison for Mahatma Gandhi, Kasturba Gandhi, and Sarojini Naidu during the Quit India movement.',
    history: 'Spans 19 acres with Italian arches and manicured lawns; houses Kasturba Gandhi’s samadhi memorial.',
    lat: 18.5529,
    lng: 73.9015,
    rating: 4.7,
    reviewsCount: 22100,
    safetyScore: 95,
    cleanlinessScore: 94,
    priceTier: '₹',
    avgCostForTwo: 50,
    pricing: {
      entryFeeIndian: 25,
      entryFeeForeigner: 300,
      signatureItems: [
        { name: 'Indian Adult Entry', price: 25 },
        { name: 'Foreign Tourist Entry', price: 300 },
        { name: 'Still Camera Permit', price: 50 },
        { name: 'Student ID Discount Entry', price: 10 }
      ],
      notes: 'Entry ticket valid for entire 19-acre memorial grounds and Gandhi archives museum.'
    },
    bestTimeToVisit: '9:00 AM - 12:00 PM',
    tags: ['Gandhi Memorial', 'National Heritage', 'Peaceful', 'Photography'],
    crowdLevel: 'Moderate',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    localTip: 'Visit the museum room displaying Gandhiji’s personal belongings and charkha.'
  },
  {
    id: 'p3',
    name: 'Cafe Goodluck',
    category: 'food',
    tagline: 'Legendary Irani Chai & Bun Maska since 1935',
    description: 'Iconic Iranian cafe at Deccan Gymkhana known for piping hot ginger chai, maska bun, caramel custard, and mutton kheema pav.',
    lat: 18.5167,
    lng: 73.8415,
    rating: 4.5,
    reviewsCount: 31200,
    safetyScore: 92,
    cleanlinessScore: 84,
    priceTier: '₹',
    avgCostForTwo: 350,
    pricing: {
      avgCostForTwo: 350,
      signatureItems: [
        { name: 'Special Irani Chai', price: 35 },
        { name: 'Bun Maska (Fresh Butter)', price: 60 },
        { name: 'Cheese Omelette with Toast', price: 140 },
        { name: 'Mutton Kheema Pav', price: 195 },
        { name: 'Signature Caramel Custard', price: 85 }
      ],
      notes: 'Pocket-friendly historic cafe; cash & UPI accepted; expect 10-15 min queue during morning rush.'
    },
    bestTimeToVisit: '7:30 AM - 10:00 AM or 5:00 PM - 7:00 PM',
    tags: ['Irani Cafe', 'Iconic', 'Breakfast', 'Deccan'],
    crowdLevel: 'Very High',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    localTip: 'Order the bun maska paired with extra hot Irani chai dipped right away.'
  },
  {
    id: 'p4',
    name: 'Vaishali Restaurant (FC Road)',
    category: 'food',
    tagline: 'Pune Student Culture & South Indian Delights',
    description: 'The beating heart of Fergusson College Road. Known for Mysur Masala Dosa, SPDP (Sev Potato Dahi Puri), filter coffee, and rooftop tree seating.',
    lat: 18.5238,
    lng: 73.8418,
    rating: 4.6,
    reviewsCount: 45000,
    safetyScore: 96,
    cleanlinessScore: 91,
    priceTier: '₹₹',
    avgCostForTwo: 500,
    pricing: {
      avgCostForTwo: 500,
      signatureItems: [
        { name: 'Special SPDP (Sev Potato Dahi Puri)', price: 120 },
        { name: 'Mysore Masala Dosa with Chutneys', price: 155 },
        { name: 'Cheese Masala Dosa', price: 180 },
        { name: 'Authentic South Indian Filter Coffee', price: 60 },
        { name: 'Veg Cutlet Plate', price: 110 }
      ],
      notes: 'Open 7:00 AM to 11:00 PM; vibrant safe youth hotspot with Damini Police patrol kiosk outside.'
    },
    bestTimeToVisit: '4:00 PM - 8:00 PM',
    tags: ['FC Road', 'South Indian', 'Youth Hub', 'Safe Corridor'],
    crowdLevel: 'Very High',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    localTip: 'Try the Special Vaishali Filter Coffee and sit in the open-air backyard courtyard.'
  },
  {
    id: 'p5',
    name: 'Pataleshwar Cave Temple',
    category: 'heritage',
    tagline: '8th-century Rock-cut Basalt Wonder',
    description: 'Monolithic rock-cut cave temple dedicated to Lord Shiva, carved out of a single basalt rock during the Rashtrakuta period.',
    history: 'Surrounded by tranquil gardens right in the bustling heart of Shivaji Nagar.',
    lat: 18.5284,
    lng: 73.8504,
    rating: 4.6,
    reviewsCount: 14500,
    safetyScore: 90,
    cleanlinessScore: 89,
    priceTier: 'Free',
    avgCostForTwo: 0,
    pricing: {
      entryFeeIndian: 0,
      entryFeeForeigner: 0,
      signatureItems: [
        { name: 'Public Temple Entry', price: 0 },
        { name: 'Garden Access', price: 0 },
        { name: 'Shoe Keeper Donation (Optional)', price: 10 }
      ],
      notes: '100% Free archaeological monument maintained by ASI. Photography allowed.'
    },
    bestTimeToVisit: '8:30 AM - 11:30 AM',
    tags: ['Ancient Rock Cut', 'Rashtrakuta', 'Shiva Temple', 'Peaceful'],
    crowdLevel: 'Low',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    localTip: 'Admire the circular Nandi mandapa supported by massive pillars carved seamlessly.'
  },
  {
    id: 'p6',
    name: 'German Bakery (Koregaon Park)',
    category: 'food',
    tagline: 'Cosmopolitan Cafe Culture & Artisan Bakes',
    description: 'Famous bohemian cafe in leafy Koregaon Park Lane 1. Known for German sausages, keema omelettes, berry smoothies, and decadent chocolate cakes.',
    lat: 18.5372,
    lng: 73.8967,
    rating: 4.4,
    reviewsCount: 28000,
    safetyScore: 94,
    cleanlinessScore: 92,
    priceTier: '₹₹₹',
    avgCostForTwo: 900,
    pricing: {
      avgCostForTwo: 900,
      signatureItems: [
        { name: 'Red Velvet Pastry Slice', price: 185 },
        { name: 'German Sausage Platter', price: 340 },
        { name: 'Iced Cappuccino with Vanilla', price: 210 },
        { name: 'Keema Pav / Omelette Special', price: 260 },
        { name: 'Nutella Pancakes Stack', price: 250 }
      ],
      notes: 'Free high-speed Wi-Fi; open until 11:45 PM; safe upscale cafe neighborhood.'
    },
    bestTimeToVisit: '10:00 AM - 1:00 PM or Late Evening',
    tags: ['Koregaon Park', 'Cafe', 'European Cuisine', 'Safe Nightlife'],
    crowdLevel: 'Moderate',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    localTip: 'A great co-working spot during weekday mornings with steady Wi-Fi.'
  },
  {
    id: 'p7',
    name: 'Vetal Tekdi (Hill)',
    category: 'nature',
    tagline: 'Highest Point in Pune City & Morning Green Lungs',
    description: 'Serene natural hilltop providing panoramic views of Pune, beloved by runners, birdwatchers, and sunrise enthusiasts.',
    lat: 18.5235,
    lng: 73.8188,
    rating: 4.8,
    reviewsCount: 18900,
    safetyScore: 78,
    cleanlinessScore: 86,
    priceTier: 'Free',
    avgCostForTwo: 0,
    pricing: {
      entryFeeIndian: 0,
      entryFeeForeigner: 0,
      signatureItems: [
        { name: 'Trail Entry / Trekking', price: 0 },
        { name: 'Panoramic Sunrise Viewpoint', price: 0 }
      ],
      notes: 'Free public forest reserve. Strictly daylight hours recommended for solo hikers.'
    },
    bestTimeToVisit: '5:45 AM - 8:30 AM (Morning daylight recommended)',
    tags: ['Hiking', 'Sunrise', 'Nature', 'Panoramic View'],
    crowdLevel: 'Moderate',
    cctvCovered: false,
    wellLitStreet: false,
    image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80',
    localTip: 'Avoid isolated trails after sunset as lighting is sparse on unpaved ridges.'
  },
  {
    id: 'p8',
    name: 'Katakirrr Misal (Karve Road)',
    category: 'food',
    tagline: 'Punekar Spice Benchmark & Rassa Feast',
    description: 'Celebrated for authentic Puneri Kolhapuri-style Misal with fiery tarri/kat, fresh sprouts, and unlimited farsan.',
    lat: 18.5028,
    lng: 73.8291,
    rating: 4.7,
    reviewsCount: 24000,
    safetyScore: 91,
    cleanlinessScore: 87,
    priceTier: '₹',
    avgCostForTwo: 260,
    pricing: {
      avgCostForTwo: 260,
      signatureItems: [
        { name: 'Special Kolhapuri Misal Pav Plate', price: 110 },
        { name: 'Medium Spicy Puneri Misal', price: 110 },
        { name: 'Extra Pav Pair', price: 20 },
        { name: 'Cold Mattha / Spiced Buttermilk', price: 35 },
        { name: 'Gulab Jamun Dessert', price: 40 }
      ],
      notes: 'Super budget-friendly meal benchmark; open 8:00 AM to 3:00 PM.'
    },
    bestTimeToVisit: '8:00 AM - 12:30 PM',
    tags: ['Misal Pav', 'Spicy', 'Authentic Maharashtrian', 'Breakfast'],
    crowdLevel: 'High',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    localTip: 'Choose "Medium" spice if you are not accustomed to Kolhapuri chili tarri!'
  },
  {
    id: 'p9',
    name: 'The Westin Pune (Koregaon Park)',
    category: 'hotel',
    tagline: 'Luxury 5-Star Riverside Retreat & Business Stay',
    description: 'Five-star hotel on North Main Road with riverside promenade, world-class spas, Italian restaurant, and 24/7 high security.',
    lat: 18.5398,
    lng: 73.9094,
    rating: 4.7,
    reviewsCount: 9200,
    safetyScore: 98,
    cleanlinessScore: 97,
    priceTier: '₹₹₹₹',
    avgCostForTwo: 9500,
    pricing: {
      perNightRate: 9500,
      signatureItems: [
        { name: 'Deluxe King Room (Per Night)', price: 9500 },
        { name: 'Riverside Suite with Breakfast', price: 14500 },
        { name: 'The Market Multi-Cuisine Buffet', price: 2200 },
        { name: 'Airport Private Pickup Escort', price: 1800 }
      ],
      notes: '24/7 armed private security, monitored perimeter, EV charging points inside.'
    },
    bestTimeToVisit: 'Check-in 2:00 PM',
    tags: ['5 Star Hotel', 'Luxury Stay', 'Riverside', 'Business Friendly'],
    crowdLevel: 'Moderate',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    localTip: 'Offers private airport transfers and 24-hour guarded security escort.'
  },
  {
    id: 'p10',
    name: 'Zostel Pune (Viman Nagar)',
    category: 'hotel',
    tagline: 'Vibrant Backpacker Hostel & Digital Nomad Hub',
    description: 'Top-rated youth and traveler hostel in Viman Nagar near airport. Clean dorms, female-only dorms, private rooms, rooftop cafe, and co-working spaces.',
    lat: 18.5635,
    lng: 73.9182,
    rating: 4.6,
    reviewsCount: 4200,
    safetyScore: 94,
    cleanlinessScore: 92,
    priceTier: '₹',
    avgCostForTwo: 1300,
    pricing: {
      perNightRate: 650,
      signatureItems: [
        { name: '6-Bed Mixed Dorm Bed (Per Night)', price: 650 },
        { name: 'Female-Only 4-Bed Dorm Bed', price: 750 },
        { name: 'Deluxe Private Room with Ensuite', price: 2100 },
        { name: 'Community Breakfast Buffet', price: 150 },
        { name: 'Co-Working Day Pass', price: 200 }
      ],
      notes: 'Biometric keycard security, 24/7 reception, female travel safety compliance.'
    },
    bestTimeToVisit: 'Check-in 1:00 PM',
    tags: ['Hostel', 'Budget Stay', 'Solo Travelers', 'Female Friendly', 'Viman Nagar'],
    crowdLevel: 'Moderate',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    localTip: 'Female travelers can reserve the top-floor women-only dorm with private balcony.'
  },
  {
    id: 'p11',
    name: 'Hotel Shreyas (Deccan Gymkhana)',
    category: 'hotel',
    tagline: 'Iconic Puneri Heritage Stay & Authentic Thali',
    description: 'Classic Maharashtrian hospitality right in Deccan. Clean family-friendly rooms and internationally famous for its authentic Maharashtrian Thali feast.',
    lat: 18.5175,
    lng: 73.8445,
    rating: 4.5,
    reviewsCount: 8800,
    safetyScore: 93,
    cleanlinessScore: 90,
    priceTier: '₹₹',
    avgCostForTwo: 2400,
    pricing: {
      perNightRate: 2200,
      signatureItems: [
        { name: 'Standard AC Double Room (Per Night)', price: 2200 },
        { name: 'Executive Family Room (Per Night)', price: 3400 },
        { name: 'Legendary Unlimited Maharashtrian Thali', price: 380 },
        { name: 'Traditional Puran Poli Plate', price: 110 }
      ],
      notes: 'Located in safe Deccan commercial hub; 5 mins walk to Sambhaji Park & FC Road.'
    },
    bestTimeToVisit: 'Check-in 12:00 PM',
    tags: ['Mid-Range Hotel', 'Family Friendly', 'Authentic Thali', 'Deccan'],
    crowdLevel: 'Moderate',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    localTip: 'Do not miss the weekend special Shreyas Thali with fresh Ukdiche Modak.'
  },
  {
    id: 'p12',
    name: 'JW Marriott Hotel Pune (Senapati Bapat Road)',
    category: 'hotel',
    tagline: '5-Star Luxury, Skyline Dining & Ultra-Secure Precinct',
    description: 'Premier luxury hotel on Senapati Bapat Road. Featuring 8 dining destinations, heated rooftop pool (Paasha), grand ballrooms, and 24/7 security protocol.',
    lat: 18.5322,
    lng: 73.8296,
    rating: 4.8,
    reviewsCount: 16500,
    safetyScore: 99,
    cleanlinessScore: 98,
    priceTier: '₹₹₹₹',
    avgCostForTwo: 11200,
    pricing: {
      perNightRate: 11200,
      signatureItems: [
        { name: 'Superior King Room (Per Night)', price: 11200 },
        { name: 'Executive Suite with Lounge Access', price: 17500 },
        { name: 'Paasha Rooftop Lounge Cocktail Dinner for 2', price: 3500 },
        { name: 'Quan Spa 60-min Rejuvenation', price: 4200 }
      ],
      notes: 'Dedicated EV fast charging station on basement level; airport limo service.'
    },
    bestTimeToVisit: 'Check-in 3:00 PM',
    tags: ['Luxury Hotel', '5 Star', 'SB Road', 'Safe Nightlife'],
    crowdLevel: 'Moderate',
    cctvCovered: true,
    wellLitStreet: true,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    localTip: 'Visit Paasha at 7:00 PM for Pune city skyline sunset cocktails.'
  }
];

export const EV_STATIONS: EVStation[] = [
  {
    id: 'ev-1',
    name: 'Tata Power EZ Charge - Deccan Gymkhana Hub',
    operator: 'Tata Power EZ',
    lat: 18.5170,
    lng: 73.8432,
    powerKw: 60,
    connectorTypes: ['CCS2 (Dual Gun)', 'Type-2 AC 22kW', 'Bharat DC-001'],
    costPerKwh: 18.0,
    avgFullChargeCost2W: 55,
    avgFullChargeCost4W: 480,
    availablePorts: 3,
    totalPorts: 4,
    rating: 4.7,
    open24x7: true,
    amenities: ['Cafe Goodluck Adjacent', 'CCTV 24/7', 'Covered Canopy', 'UPI Tap & Pay'],
    safetyScore: 94,
    locationDetails: 'Behind Deccan Bus Station, near Sambhaji Park Gate'
  },
  {
    id: 'ev-2',
    name: 'Ather Grid Fast Charger - FC Road (Vaishali Complex)',
    operator: 'Ather Grid',
    lat: 18.5230,
    lng: 73.8420,
    powerKw: 30,
    connectorTypes: ['Ather Fast Port', 'Type-2 (Universal 2W)'],
    costPerKwh: 15.0,
    avgFullChargeCost2W: 40,
    avgFullChargeCost4W: 0,
    availablePorts: 2,
    totalPorts: 2,
    rating: 4.8,
    open24x7: true,
    amenities: ['Student Hub', 'High Footfall', 'Damini Police Booth', 'Well-Lit'],
    safetyScore: 97,
    locationDetails: 'Opposite British Library, FC Road Main Promenade'
  },
  {
    id: 'ev-3',
    name: 'Jio-bp pulse Ultra-Fast EV Hub - Koregaon Park',
    operator: 'Jio-bp pulse',
    lat: 18.5380,
    lng: 73.9010,
    powerKw: 120,
    connectorTypes: ['CCS2 120kW Supercharger', 'CHAdeMO 50kW', 'Type-2 22kW'],
    costPerKwh: 19.5,
    avgFullChargeCost2W: 60,
    avgFullChargeCost4W: 520,
    availablePorts: 5,
    totalPorts: 6,
    rating: 4.9,
    open24x7: true,
    amenities: ['Wild Bean Cafe Lounge', 'Restroom Cleanliness A+', 'Security Guard', 'Tire Air Station'],
    safetyScore: 96,
    locationDetails: 'North Main Road, between Lane 3 and Lane 4, Koregaon Park'
  },
  {
    id: 'ev-4',
    name: 'Mahavitaran / PMC Green EV Station - Swargate Depot',
    operator: 'Mahavitaran / BESCOM',
    lat: 18.5020,
    lng: 73.8570,
    powerKw: 50,
    connectorTypes: ['CCS2', 'Type-2 AC', 'GB/T'],
    costPerKwh: 14.5,
    avgFullChargeCost2W: 45,
    avgFullChargeCost4W: 390,
    availablePorts: 1,
    totalPorts: 4,
    rating: 4.0,
    open24x7: true,
    amenities: ['Public Bus Terminal', 'Police Chowki Nearby', 'Low Tariff'],
    safetyScore: 78,
    locationDetails: 'PMPML Central Workshop Corner, Swargate Flyover ramp'
  },
  {
    id: 'ev-5',
    name: 'Static EV Station - Phoenix Marketcity (Viman Nagar)',
    operator: 'Static EV',
    lat: 18.5605,
    lng: 73.9160,
    powerKw: 60,
    connectorTypes: ['CCS2 Dual Gun', 'Type-2 AC'],
    costPerKwh: 17.0,
    avgFullChargeCost2W: 50,
    avgFullChargeCost4W: 460,
    availablePorts: 4,
    totalPorts: 6,
    rating: 4.6,
    open24x7: true,
    amenities: ['Mall Parking Basement P1', 'Security Attendants', 'Food Court Nearby'],
    safetyScore: 95,
    locationDetails: 'Phoenix Marketcity Mall Basement P1, Ahmednagar Road'
  },
  {
    id: 'ev-6',
    name: 'Zeon Fast DC Charging Hub - Hinjawadi Phase 1 Circle',
    operator: 'Zeon Charging',
    lat: 18.5910,
    lng: 73.7380,
    powerKw: 50,
    connectorTypes: ['CCS2', 'Type-2 AC'],
    costPerKwh: 18.0,
    avgFullChargeCost2W: 55,
    avgFullChargeCost4W: 475,
    availablePorts: 2,
    totalPorts: 4,
    rating: 4.5,
    open24x7: true,
    amenities: ['Tech Park Perimeter', '24/7 Guards', 'Chai Point nearby'],
    safetyScore: 89,
    locationDetails: 'Near Shivaji Chowk, Hinjawadi Phase 1 IT Spine'
  }
];

export const TRANSIT_WAYS: TransitWay[] = [
  {
    id: 'tw-1',
    name: 'FC Road Pedestrian Promenade (Human / Crowd Walkway)',
    type: 'pedestrian_walkway',
    startPoint: 'Deccan Gymkhana (Goodluck Chowk)',
    endPoint: 'Fergusson College Main Gate',
    coordinates: [
      [18.5167, 73.8415],
      [18.5205, 73.8417],
      [18.5238, 73.8418],
      [18.5265, 73.8420]
    ],
    fareOrCost: 'Free Walkway (₹0)',
    crowdLevel: 'Packed',
    safetyScore: 96,
    illuminated: true,
    notes: 'Wide paved footpaths, barrier-free pedestrian crossings, Damini police booth stationed, vibrant bookstalls and cafes.'
  },
  {
    id: 'tw-2',
    name: 'Koregaon Park Green Boulevard (Human & Cyclist Path)',
    type: 'pedestrian_walkway',
    startPoint: 'German Bakery (Lane 1)',
    endPoint: 'Osho Teerth Park & North Main Rd',
    coordinates: [
      [18.5372, 73.8967],
      [18.5385, 73.8995],
      [18.5398, 73.9040],
      [18.5392, 73.8942]
    ],
    fareOrCost: 'Free Walkway (₹0)',
    crowdLevel: 'Moderate',
    safetyScore: 94,
    illuminated: true,
    notes: 'Banyan tree-shaded boulevard, private estate security guards every 100m, high safety for solo evening runners.'
  },
  {
    id: 'tw-3',
    name: 'PMPML Central BRTS Corridor (Local Public Bus Way)',
    type: 'pmpml_bus_corridor',
    startPoint: 'Swargate Bus Terminal',
    endPoint: 'Shivajinagar Railway Station',
    coordinates: [
      [18.5015, 73.8582],
      [18.5110, 73.8560],
      [18.5210, 73.8530],
      [18.5310, 73.8520]
    ],
    fareOrCost: 'Single: ₹10 - ₹20 | Daily City Pass: ₹50',
    crowdLevel: 'High',
    safetyScore: 84,
    illuminated: true,
    notes: 'Dedicated bus rapid lanes, frequent red & electric e-buses every 3 minutes, budget commuter lifeline.'
  },
  {
    id: 'tw-4',
    name: 'Pune Metro Aqua Line (Elevated Transit Way)',
    type: 'metro_corridor',
    startPoint: 'Vanaz Station (Kothrud)',
    endPoint: 'Ramwadi Station (Viman Nagar)',
    coordinates: [
      [18.5060, 73.8050],
      [18.5150, 73.8400],
      [18.5280, 73.8740],
      [18.5530, 73.9100]
    ],
    fareOrCost: '₹10 minimum - ₹35 maximum per trip',
    crowdLevel: 'Moderate',
    safetyScore: 98,
    illuminated: true,
    notes: 'Air-conditioned modern coaches, female-only reserved coach, automated ticket gates, zero road congestion.'
  },
  {
    id: 'tw-5',
    name: 'Senapati Bapat Road Arterial (Private Vehicles & Cabs)',
    type: 'private_vehicle_highway',
    startPoint: 'Symbiosis Circle',
    endPoint: 'JW Marriott / Pune University Circle',
    coordinates: [
      [18.5250, 73.8340],
      [18.5290, 73.8320],
      [18.5322, 73.8296],
      [18.5380, 73.8270]
    ],
    fareOrCost: 'Auto: ₹25 base + ₹17/km | Cab: ₹60 base + ₹20/km',
    crowdLevel: 'High',
    safetyScore: 92,
    illuminated: true,
    notes: '6-lane paved arterial for four-wheelers and two-wheelers, well-maintained LED streetlights, fast transit corridor.'
  }
];

export const SAFETY_INCIDENTS: SafetyIncident[] = [
  {
    id: 'inc-1',
    title: 'Streetlights malfunctioning near Katraj Ghat approach',
    category: 'safety',
    severity: 'high',
    lat: 18.4485,
    lng: 73.8596,
    locationName: 'Katraj Bypass near Old Tunnel road',
    description: 'Entire 800m stretch has defunct streetlights for the past 48 hours. Two-wheelers at high risk due to ongoing road surface work and low visibility.',
    timestamp: '25 mins ago',
    verified: true,
    verifiedBy: 'Pune Traffic Police Ward 14',
    upvotes: 42,
    hasPhoto: true,
    hasVoice: false,
    extractedEntities: {
      location: 'Katraj Bypass',
      time: 'Night (20:00 - 05:00)',
      severityScore: 82,
      recommendedAction: 'Reroute via new tunnel arterial or slow speed under 30 km/h'
    }
  },
  {
    id: 'inc-2',
    title: 'Waterlogging alert on Baba Bhide Low-Level Bridge',
    category: 'weather',
    severity: 'critical',
    lat: 18.5178,
    lng: 73.8488,
    locationName: 'Baba Bhide Bridge, Deccan-Narayan Peth',
    description: 'Khadakwasla dam discharge increased to 12,000 cusecs. Water overtopping causeway; barricades placed by Pune Police. Causeway closed to all vehicular traffic.',
    timestamp: '1 hour ago',
    verified: true,
    verifiedBy: 'PMC Disaster Management Cell',
    upvotes: 118,
    hasPhoto: true,
    hasVoice: true,
    extractedEntities: {
      location: 'Baba Bhide Bridge / Mutha River bed',
      time: 'Immediate',
      severityScore: 95,
      recommendedAction: 'Take Z-Bridge or SM Joshi Bridge as elevated bypass'
    }
  },
  {
    id: 'inc-3',
    title: 'Crowded transit & pickpocket alert at Swargate ST Stand',
    category: 'safety',
    severity: 'medium',
    lat: 18.5015,
    lng: 73.8582,
    locationName: 'Swargate Bus Terminal Platform 2',
    description: 'Heavy festival weekend crowd causing stampede conditions at bus depot. Increased plainclothes police deployed. Citizens advised to secure bags in front.',
    timestamp: '2 hours ago',
    verified: true,
    verifiedBy: 'Swargate Police Chowki',
    upvotes: 76,
    hasPhoto: false,
    hasVoice: true,
    extractedEntities: {
      location: 'Swargate Bus Depot',
      time: 'Ongoing peak hours',
      severityScore: 65,
      recommendedAction: 'Keep valuables zipped; prefer booking online counters'
    }
  },
  {
    id: 'inc-4',
    title: 'Safe Transit Corridor: Women Helpline kiosk active on FC Road',
    category: 'event',
    severity: 'low',
    lat: 18.5225,
    lng: 73.8423,
    locationName: 'Fergusson College Road near Goodluck Chowk',
    description: 'Pune Police "Damini Squad" mobile patrol and help booth stationed. Excellent lighting, active CCTV surveillance, and high pedestrian footfall till 11:30 PM.',
    timestamp: 'Today, 6:00 PM',
    verified: true,
    verifiedBy: 'Pune City Police Damini Squad',
    upvotes: 145,
    hasPhoto: true,
    hasVoice: false,
    extractedEntities: {
      location: 'FC Road Safe Corridor',
      time: 'Every day 17:00 - 00:00',
      severityScore: 10,
      recommendedAction: 'Recommended route for night walking'
    }
  }
];

export const ROUTE_COMPARISONS: Record<string, RouteOption[]> = {
  'station_to_kp': [
    {
      id: 'route-safe',
      name: 'Safe Illuminated Arterial (Via Bund Garden & North Main)',
      type: 'safest',
      distanceKm: 5.4,
      estimatedMinutes: 16,
      safetyScore: 94,
      lightingScore: 96,
      cctvCoveragePercent: 92,
      policeStationsOnRoute: 2,
      activeNightShops: 18,
      estimatedFareAuto: 115,
      estimatedFareBus: 15,
      coordinates: [
        [18.5289, 73.8744], // Pune Rly Stn
        [18.5332, 73.8778],
        [18.5375, 73.8835], // Bund Garden
        [18.5398, 73.8912], // Bridge
        [18.5385, 73.8995], // KP North Main Road
        [18.5372, 73.8967]  // German Bakery
      ],
      warnings: ['Slightly higher signal waiting at Bund Garden circle'],
      perks: [
        '96% LED street lighting coverage',
        'Passing Koregaon Park Police Station',
        '24/7 active commercial cafes & EV chargers nearby',
        'Auto fare approx ₹115 / PMPML Bus Route #165 fare ₹15'
      ]
    },
    {
      id: 'route-fast',
      name: 'Shortest Cut (Via Sangamwadi Alley & Riverbank Bypass)',
      type: 'fastest',
      distanceKm: 4.1,
      estimatedMinutes: 11,
      safetyScore: 61,
      lightingScore: 48,
      cctvCoveragePercent: 35,
      policeStationsOnRoute: 0,
      activeNightShops: 2,
      estimatedFareAuto: 90,
      estimatedFareBus: 0,
      coordinates: [
        [18.5289, 73.8744],
        [18.5312, 73.8698], // narrow underpass
        [18.5380, 73.8790], // riverbank bypass
        [18.5410, 73.8890], // unlit service lane
        [18.5372, 73.8967]
      ],
      warnings: [
        'Dark unlit stretch along riverbed bypass (48% lighting)',
        'Zero police checkpoints or CCTV surveillance',
        'Narrow blind bends with stray dog packs reported after 9:30 PM'
      ],
      perks: [
        'Saves ~5 minutes during non-peak hours',
        'Slightly lower auto meter fare (~₹90)'
      ]
    }
  ]
};

export const AREA_METRICS: AreaMetric[] = [
  {
    areaName: 'Koregaon Park (KP)',
    pincode: '411001',
    safetyScore: 93,
    cleanlinessScore: 92,
    affordabilityScore: 42,
    trafficCongestionScore: 58,
    accessibilityScore: 89,
    avgHotelPricePerNight: 5500,
    avgMealPriceForTwo: 900,
    description: 'Upscale residential and cultural enclave known for leafy boulevards, embassies, global dining, boutique cafes, and tight private & municipal security surveillance.',
    crimeRateCategory: 'Very Low',
    recommendedFor: ['Night Dining', 'Luxury Stays', 'Solo Female Travelers', 'Heritage Walks'],
    keyHighlights: ['Continuous CCTV coverage on Lane 1-7', 'Late night safe cafes', 'High police patrol presence', 'Jio-bp 120kW Supercharger'],
    cautions: ['Premium pricing for food & accommodation', 'Narrow interior lanes get choked during Saturday evenings']
  },
  {
    areaName: 'Fergusson College (FC) Road / Deccan',
    pincode: '411004',
    safetyScore: 95,
    cleanlinessScore: 85,
    affordabilityScore: 88,
    trafficCongestionScore: 74,
    accessibilityScore: 96,
    avgHotelPricePerNight: 2100,
    avgMealPriceForTwo: 450,
    description: 'Youth and collegiate epicenter of Pune. Vibrantly alive with street shopping, bookshops, pocket-friendly Irani and South Indian cafes, and permanent police chowkis.',
    crimeRateCategory: 'Very Low',
    recommendedFor: ['Students', 'Budget Food Crawls', 'Book Shopping', 'Evening Strolls'],
    keyHighlights: ['Designated Damini Squad safe zone', 'Always buzzing with students till midnight', 'Ultra affordable meals', 'Ather Grid EV charger'],
    cautions: ['Heavy two-wheeler parking chaos', 'Peak hour pedestrian bottlenecks between 5 PM and 8 PM']
  },
  {
    areaName: 'Viman Nagar',
    pincode: '411014',
    safetyScore: 91,
    cleanlinessScore: 88,
    affordabilityScore: 68,
    trafficCongestionScore: 62,
    accessibilityScore: 92,
    avgHotelPricePerNight: 2800,
    avgMealPriceForTwo: 600,
    description: 'Modern neighborhood close to Pune International Airport. Hub of modern shopping malls (Phoenix Marketcity), student campuses (Symbiosis), and well-planned residential societies.',
    crimeRateCategory: 'Low',
    recommendedFor: ['Airport Transit', 'Family Shopping', 'Hostel Backpacker Stays', 'Cafes'],
    keyHighlights: ['Zostel Pune hostel nearby (₹650/bed)', 'Wide illuminated avenues', 'Symbiosis campus vigilance', 'Static EV station at Mall'],
    cautions: ['Ahmednagar road highway crossing requires overhead bridges', 'Metro construction barricades in outer peripheries']
  },
  {
    areaName: 'Swargate / Market Yard',
    pincode: '411042',
    safetyScore: 67,
    cleanlinessScore: 59,
    affordabilityScore: 92,
    trafficCongestionScore: 94,
    accessibilityScore: 95,
    avgHotelPricePerNight: 1200,
    avgMealPriceForTwo: 220,
    description: 'Central transit and wholesale nerve center connecting Pune to south Maharashtra. Enormously busy round the clock with intercity state transport buses and goods logistics.',
    crimeRateCategory: 'Moderate',
    recommendedFor: ['Bus Transit', 'Wholesale Produce', 'Budget Transits'],
    keyHighlights: ['Direct buses to every corner of Maharashtra', 'Extremely cheap street food', 'Mahavitaran 50kW EV Station'],
    cautions: ['Pickpocket hotspot near depot gates', 'High noise, diesel fumes, and pedestrian chaos', 'Avoid dark depot yards past 11 PM']
  }
];

export const PUNE_VITALS: CityVitals = {
  city: 'Pune, Maharashtra',
  temperatureC: 27.4,
  weatherCondition: 'Partly Cloudy with Evening Breeze',
  aqi: 78,
  aqiStatus: 'Satisfactory Air Quality (AQI 78)',
  trafficCongestionPercent: 54,
  activeAlerts: [
    {
      type: 'warning',
      title: 'Monsoon Riverbed Causeway Closed',
      desc: 'Baba Bhide bridge closed due to Khadakwasla dam outflow (12,000 cusecs). Use elevated Z-Bridge.',
      timestamp: 'Updated 18m ago'
    },
    {
      type: 'alert',
      title: 'Peak Evening Congestion on FC Road & Senapati Bapat Road',
      desc: 'Average delays of 14 minutes due to weekend shopping footfall. Safe pedestrian promenade operational.',
      timestamp: 'Updated 32m ago'
    }
  ],
  emergencyContacts: [
    { name: 'Pune City Police Control', number: '112 / 100', service: '24/7 Police Dispatch' },
    { name: 'Women Helpline (Damini Squad)', number: '1091', service: 'Women Safety Patrol' },
    { name: 'PMC Disaster Management', number: '020-25501269', service: 'Flood & Tree Fall Ops' },
    { name: 'Pune Traffic Control Room', number: '020-26685000', service: 'Traffic Towing & Congestion' }
  ],
  faresSummary: {
    metroMinMax: '₹10 - ₹35',
    pmpmlDailyPass: '₹50 Unlimited Day Pass',
    autoBaseRate: '₹25 base + ₹17/km',
    evKwhAvg: '₹15 - ₹19.5 per kWh'
  }
};
