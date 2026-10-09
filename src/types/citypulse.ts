export type PlaceCategory = 'heritage' | 'food' | 'hotel' | 'attraction' | 'nature' | 'ev_station';

export interface PlacePriceDetail {
  entryFeeIndian?: number;
  entryFeeForeigner?: number;
  perNightRate?: number;
  avgCostForTwo?: number;
  costPerKwh?: number;
  signatureItems?: { name: string; price: number }[];
  notes?: string;
}

export interface Place {
  id: string;
  name: string;
  category: PlaceCategory;
  tagline: string;
  description: string;
  history?: string;
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  safetyScore: number; // 0 - 100
  cleanlinessScore: number; // 0 - 100
  priceTier: 'Free' | '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹';
  avgCostForTwo: number;
  pricing: PlacePriceDetail;
  bestTimeToVisit: string;
  tags: string[];
  crowdLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  cctvCovered: boolean;
  wellLitStreet: boolean;
  image: string;
  localTip: string;
}

export interface EVStation {
  id: string;
  name: string;
  operator: 'Tata Power EZ' | 'Ather Grid' | 'Jio-bp pulse' | 'Mahavitaran / BESCOM' | 'Static EV' | 'Zeon Charging';
  lat: number;
  lng: number;
  powerKw: number;
  connectorTypes: string[];
  costPerKwh: number;
  avgFullChargeCost2W: number;
  avgFullChargeCost4W: number;
  availablePorts: number;
  totalPorts: number;
  rating: number;
  open24x7: boolean;
  amenities: string[];
  safetyScore: number;
  locationDetails: string;
}

export interface TransitWay {
  id: string;
  name: string;
  type: 'pedestrian_walkway' | 'pmpml_bus_corridor' | 'metro_corridor' | 'private_vehicle_highway';
  startPoint: string;
  endPoint: string;
  coordinates: [number, number][];
  fareOrCost: string;
  crowdLevel: 'Low' | 'Moderate' | 'High' | 'Packed';
  safetyScore: number;
  illuminated: boolean;
  notes: string;
}

export type IncidentCategory = 'safety' | 'infrastructure' | 'traffic' | 'weather' | 'event';
export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface SafetyIncident {
  id: string;
  title: string;
  category: IncidentCategory;
  severity: IncidentSeverity;
  lat: number;
  lng: number;
  locationName: string;
  description: string;
  timestamp: string;
  verified: boolean;
  verifiedBy?: string;
  upvotes: number;
  hasPhoto?: boolean;
  hasVoice?: boolean;
  extractedEntities?: {
    location?: string;
    time?: string;
    severityScore?: number;
    recommendedAction?: string;
  };
}

export interface RouteOption {
  id: string;
  name: string;
  type: 'safest' | 'fastest' | 'balanced';
  distanceKm: number;
  estimatedMinutes: number;
  safetyScore: number; // 0 - 100
  lightingScore: number; // 0 - 100
  cctvCoveragePercent: number;
  policeStationsOnRoute: number;
  activeNightShops: number;
  estimatedFareAuto: number;
  estimatedFareBus: number;
  coordinates: [number, number][];
  warnings: string[];
  perks: string[];
}

export interface AreaMetric {
  areaName: string;
  pincode: string;
  safetyScore: number;
  cleanlinessScore: number;
  affordabilityScore: number;
  trafficCongestionScore: number; // lower is better (less congested)
  accessibilityScore: number;
  description: string;
  avgHotelPricePerNight: number;
  avgMealPriceForTwo: number;
  crimeRateCategory: 'Very Low' | 'Low' | 'Moderate' | 'High';
  recommendedFor: string[];
  keyHighlights: string[];
  cautions: string[];
}

export interface CityVitals {
  city: string;
  temperatureC: number;
  weatherCondition: string;
  aqi: number;
  aqiStatus: string;
  trafficCongestionPercent: number;
  activeAlerts: {
    type: 'warning' | 'alert' | 'info';
    title: string;
    desc: string;
    timestamp: string;
  }[];
  emergencyContacts: {
    name: string;
    number: string;
    service: string;
  }[];
  faresSummary: {
    metroMinMax: string;
    pmpmlDailyPass: string;
    autoBaseRate: string;
    evKwhAvg: string;
  };
}
