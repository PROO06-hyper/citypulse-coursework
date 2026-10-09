import React, { useState } from 'react';
import { Copy, Check, FileText, ChevronRight, Layers, Database, Cpu, Terminal, Compass, ShieldAlert } from 'lucide-react';

export const ArchitectureDoc: React.FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 text-slate-200 py-6 px-4">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border border-cyan-800/40 p-6 md:p-8 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
          <Terminal size={16} />
          <span>Full Architecture & Implementation Blueprint</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          CityPulse: Smart City Exploration Platform
        </h1>
        <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
          Comprehensive Hackathon Engineering Specification, Architecture Diagrams, Data Schemas, API Definitions, AI/ML Models, and 4-Week Execution Plan. Pilot City: Pune, India.
        </p>
      </div>

      {/* Section 1: High-Level Architecture */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <Layers size={20} />
          <h2>1. High-Level Architecture</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          CityPulse follows an event-driven, decoupled micro-monolith or microservices-ready architecture designed for rapid iteration during a hackathon and linear scalability for production municipal deployments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-bold text-white text-sm">Frontend Client</span>
            <p className="text-slate-400">
              Responsive React/Vite single-page web & mobile PWA app. Leverages Leaflet/MapLibre GL for client-side vector tile rendering, dynamic geo-buffers, route geometry polylines, and real-time audio recording for citizen reporting.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-bold text-white text-sm">Backend API & Routing Engine</span>
            <p className="text-slate-400">
              Node.js / Express or FastAPI service executing graph-based routing algorithms (Dijkstra/A* with safety weight modifiers) and providing REST endpoints for places, live incidents, and safety queries.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-bold text-white text-sm">Spatial Database & Storage</span>
            <p className="text-slate-400">
              PostgreSQL with PostGIS extension for sub-millisecond geospatial k-NN radius queries (ST_DWithin), polyline spatial intersections, and spatial indexing (GIST). Redis caches high-frequency heatmap raster tiles.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-bold text-white text-sm">AI/ML & NLP Microservice</span>
            <p className="text-slate-400">
              Python / Node worker powered by LLM (Gemini 2.5 Flash) or lightweight SpaCy/HuggingFace transformer pipeline to parse raw citizen text/voice, extract named entities (location, time, severity), and calculate segment safety scores.
            </p>
          </div>
        </div>

        {/* ASCII Architecture Diagram */}
        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-[11px] leading-snug overflow-x-auto text-cyan-300">
          <pre>{`
+---------------------------------------------------------------------------------------------------+
|                                  CLIENT LAYER (React 19 + PWA)                                   |
|   - Interactive Pune Map (Leaflet)     - Safe Route Navigator        - Citizen Reporting Modal    |
|   - Ward Comparator Matrix             - SOS Emergency Trigger       - Audio/Photo Capture Client  |
+-------------------------------------------------+-------------------------------------------------+
                                                  | HTTPS / REST & WebSockets
                                                  v
+---------------------------------------------------------------------------------------------------+
|                                BACKEND API GATEWAY (Node.js / Express)                            |
|   - Rate Limiter & Auth (JWT)          - GeoJSON Serializer          - Cache Layer (Redis TTL 60s)|
|   - /api/places/nearby                 - /api/routes/safest          - /api/reports               |
+----------------------+--------------------------+-------------------------+-----------------------+
                       |                          |                         |
                       v                          v                         v
+-----------------------------+  +-------------------------------+  +-------------------------------+
|     SPATIAL DATABASE        |  |        AI / ML PIPELINE       |  |     EXTERNAL CITY APIS        |
| PostgreSQL + PostGIS        |  | Gemini Flash / NLP NER Pipeline|  | Open-Meteo / OpenWeatherMap   |
| - Places (GIST Index)       |  | - Citizen Text Categorization |  | TomTom / Pune Traffic API     |
| - SafetyIncidents (Point)   |  | - Extracted Entities (NER)    |  | Pune Municipal Corp (PMC Open)|
| - RouteSegments (LineString)|  | - Safety Scoring Regression   |  | Mapbox / OpenStreetMap Tiles  |
+-----------------------------+  +-------------------------------+  +-------------------------------+
          `}</pre>
        </div>
      </section>

      {/* Section 2: Recommended Tech Stack */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <Cpu size={20} />
          <h2>2. Recommended Tech Stack (Hackathon-Friendly)</h2>
        </div>
        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white">Frontend: </span>
              <span className="text-cyan-300 font-mono">React 19 + Vite + Tailwind CSS + Lucide Icons</span>
            </div>
            <p className="text-slate-400 text-[11px] md:max-w-md">
              Instant HMR development speed, small bundle size, native mobile responsiveness, and clean CSS styling.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white">Backend: </span>
              <span className="text-cyan-300 font-mono">Node.js (TypeScript) + Express</span>
            </div>
            <p className="text-slate-400 text-[11px] md:max-w-md">
              Shared TypeScript models across client/server, lightning-fast async I/O, and rich geospatial library support.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white">Database: </span>
              <span className="text-cyan-300 font-mono">PostgreSQL + PostGIS (or Supabase / Cloud SQL)</span>
            </div>
            <p className="text-slate-400 text-[11px] md:max-w-md">
              Industry standard for spatial geometry operations (`ST_DWithin`, `ST_DistanceSphere`, GIST spatial indexing).
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white">Caching & Real-Time: </span>
              <span className="text-cyan-300 font-mono">Redis / Socket.io</span>
            </div>
            <p className="text-slate-400 text-[11px] md:max-w-md">
              Low-latency spatial caching for dynamic safety heatmaps and live citizen alert push broadcasts.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white">Maps & Geocoding: </span>
              <span className="text-cyan-300 font-mono">Leaflet / OpenStreetMap + CartoDB Dark Tiles + OSRM</span>
            </div>
            <p className="text-slate-400 text-[11px] md:max-w-md">
              Zero billing hurdle for hackathon demos, no API key lockouts, open-source routing machine support.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white">AI / NLP Service: </span>
              <span className="text-cyan-300 font-mono">Google Gemini 2.5 Flash SDK (`@google/genai`)</span>
            </div>
            <p className="text-slate-400 text-[11px] md:max-w-md">
              Sub-second structured JSON output for entity extraction, multilingual Marathi/Hindi/English triage, and zero-shot categorization.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Data Model Design */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <Database size={20} />
          <h2>3. Data Model Design</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Compact relational schema with PostGIS spatial geography geometry columns and spatial indexing.
        </p>

        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-[11px] overflow-x-auto text-emerald-300">
          <pre>{`
-- 1. Places Entity
CREATE TABLE places (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('heritage', 'food', 'hotel', 'attraction', 'nature')),
  tagline VARCHAR(255),
  description TEXT,
  history TEXT,
  location GEOGRAPHY(POINT, 4326) NOT NULL, -- Lat/Lng point
  rating NUMERIC(2, 1) DEFAULT 4.0,
  reviews_count INT DEFAULT 0,
  safety_score INT CHECK (safety_score BETWEEN 0 AND 100),
  cleanliness_score INT CHECK (cleanliness_score BETWEEN 0 AND 100),
  price_tier VARCHAR(5) CHECK (price_tier IN ('₹', '₹₹', '₹₹₹', '₹₹₹₹')),
  avg_cost_for_two INT,
  best_time_to_visit VARCHAR(100),
  cctv_covered BOOLEAN DEFAULT FALSE,
  well_lit_street BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_places_location ON places USING GIST (location);
CREATE INDEX idx_places_category ON places (category);

-- 2. Safety Incident Entity
CREATE TABLE safety_incidents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('safety', 'infrastructure', 'traffic', 'weather', 'event')),
  severity VARCHAR(20) NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  location GEOGRAPHY(POINT, 4326) NOT NULL,
  location_name VARCHAR(255),
  description TEXT NOT NULL,
  photo_url TEXT,
  voice_note_url TEXT,
  verified BOOLEAN DEFAULT FALSE,
  verified_by VARCHAR(100),
  upvotes INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_incidents_location ON safety_incidents USING GIST (location);
CREATE INDEX idx_incidents_created ON safety_incidents (created_at DESC);

-- 3. Route Segment Entity (For Safe Routing Graph)
CREATE TABLE route_segments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  segment_name VARCHAR(255),
  geometry GEOGRAPHY(LINESTRING, 4326) NOT NULL,
  distance_meters INT NOT NULL,
  lighting_score INT DEFAULT 70,       -- 0 to 100
  cctv_coverage_pct INT DEFAULT 50,     -- 0 to 100
  police_station_count INT DEFAULT 0,
  active_night_shops INT DEFAULT 0,
  historical_incident_weight NUMERIC(4,2) DEFAULT 1.0,
  computed_safety_score INT DEFAULT 75
);
CREATE INDEX idx_segments_geometry ON route_segments USING GIST (geometry);

-- 4. Citizen User Reports Entity
CREATE TABLE user_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID,
  raw_input_type VARCHAR(20) CHECK (raw_input_type IN ('text', 'photo', 'voice')),
  transcript TEXT,
  ai_extracted_category VARCHAR(50),
  ai_extracted_location VARCHAR(255),
  ai_confidence_score NUMERIC(3, 2),
  status VARCHAR(20) DEFAULT 'triage_pending'
);

-- 5. User Profile Entity
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(150),
  email VARCHAR(255) UNIQUE NOT NULL,
  reputation_score INT DEFAULT 100, -- Trust score for citizen verification
  reports_submitted INT DEFAULT 0,
  role VARCHAR(20) DEFAULT 'citizen' CHECK (role IN ('citizen', 'police', 'admin'))
);
          `}</pre>
        </div>
      </section>

      {/* Section 4: API Design */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <FileText size={20} />
          <h2>4. API Design Specifications</h2>
        </div>

        {/* API 1 */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">GET</span>
            <span className="font-mono text-sm text-white font-semibold">/api/places/nearby</span>
          </div>
          <p className="text-xs text-slate-400">Fetch places within radius filtered by category, price, and minimum safety score.</p>
          <div className="text-[11px] font-mono text-slate-300">
            <b>Query Params:</b> <code>lat=18.5204&lng=73.8567&radius=3000&category=food&minSafety=80</code>
          </div>
          <div className="rounded bg-slate-950 p-2.5 font-mono text-[11px] text-cyan-300">
            <pre>{`// Response 200 OK
{
  "status": "success",
  "count": 1,
  "places": [
    {
      "id": "p4",
      "name": "Vaishali Restaurant (FC Road)",
      "category": "food",
      "distance_meters": 420,
      "rating": 4.6,
      "safety_score": 96,
      "price_tier": "₹₹",
      "well_lit_street": true
    }
  ]
}`}</pre>
          </div>
        </div>

        {/* API 2 */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">GET</span>
            <span className="font-mono text-sm text-white font-semibold">/api/routes/safest</span>
          </div>
          <p className="text-xs text-slate-400">Computes the safest walking/driving corridor compared to fastest direct route.</p>
          <div className="text-[11px] font-mono text-slate-300">
            <b>Query Params:</b> <code>origin=18.5289,73.8744&destination=18.5372,73.8967&mode=walk</code>
          </div>
          <div className="rounded bg-slate-950 p-2.5 font-mono text-[11px] text-cyan-300">
            <pre>{`// Response 200 OK
{
  "safest_route": {
    "safety_score": 94,
    "distance_km": 5.4,
    "eta_minutes": 16,
    "lighting_score": 96,
    "cctv_coverage_pct": 92,
    "police_chowkis": 2,
    "route_name": "Bund Garden - North Main Road Arterial"
  },
  "fastest_route": {
    "safety_score": 61,
    "distance_km": 4.1,
    "eta_minutes": 11,
    "lighting_score": 48,
    "cctv_coverage_pct": 35,
    "warnings": ["Riverbed bypass unlit", "Zero police chowkis"]
  }
}`}</pre>
          </div>
        </div>

        {/* API 3 */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs">POST</span>
            <span className="font-mono text-sm text-white font-semibold">/api/reports</span>
          </div>
          <p className="text-xs text-slate-400">Citizen submits incident report with automated AI NLP entity extraction.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="rounded bg-slate-950 p-2.5 font-mono text-[11px] text-slate-300">
              <span className="text-slate-500 block mb-1 font-sans font-bold">Request Body:</span>
              <pre>{`{
  "description": "Streetlights are completely out near Katraj bypass old tunnel.",
  "lat": 18.4485,
  "lng": 73.8596,
  "photo_base64": null,
  "has_voice": false
}`}</pre>
            </div>
            <div className="rounded bg-slate-950 p-2.5 font-mono text-[11px] text-cyan-300">
              <span className="text-slate-500 block mb-1 font-sans font-bold">Response 201 Created:</span>
              <pre>{`{
  "id": "inc-9921",
  "category": "infrastructure",
  "severity": "high",
  "extracted_entities": {
    "location": "Katraj Bypass Old Tunnel",
    "hazard": "Complete blackout / No lighting"
  },
  "ai_confidence": 0.96,
  "dispatched_to": "Mahavitaran / PMC Electrical"
}`}</pre>
            </div>
          </div>
        </div>

        {/* API 4 */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">GET</span>
            <span className="font-mono text-sm text-white font-semibold">/api/safety/heatmap</span>
          </div>
          <p className="text-xs text-slate-400">Returns aggregated risk coordinates and safe buffer polygons for map overlay.</p>
          <div className="rounded bg-slate-950 p-2.5 font-mono text-[11px] text-cyan-300">
            <pre>{`// Response 200 OK
{
  "city": "Pune",
  "timestamp": "2026-10-08T22:30:00Z",
  "high_safety_zones": [
    { "name": "FC Road Corridor", "center": [18.5225, 73.8423], "radius_m": 900, "score": 96 },
    { "name": "Koregaon Park", "center": [18.5385, 73.8995], "radius_m": 1100, "score": 94 }
  ],
  "caution_zones": [
    { "name": "Swargate Bus Terminal", "center": [18.5015, 73.8582], "radius_m": 750, "risk_type": "Theft / Crowding" },
    { "name": "Baba Bhide Causeway", "center": [18.5178, 73.8488], "radius_m": 500, "risk_type": "Flooding" }
  ]
}`}</pre>
          </div>
        </div>
      </section>

      {/* Section 5: AI/ML Components & Pseudocode */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <Compass size={20} />
          <h2>5. AI/ML Components & Algorithms</h2>
        </div>

        {/* NLP Pipeline */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="font-bold text-white text-sm">A. NLP Pipeline for Citizen Reports</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            The NLP pipeline handles multi-lingual inputs (English, Hindi, Marathi transliteration) to extract structured incident metadata.
          </p>
          <div className="rounded bg-slate-950 p-3 font-mono text-[11px] text-amber-300 overflow-x-auto">
            <pre>{`# Pseudocode: Categorizing text report using NLP & NER
function categorize_citizen_report(raw_text, user_lat, user_lng):
    # Step 1: Pre-process and normalize text
    cleaned_text = clean_and_normalize(raw_text)
    
    # Step 2: Zero-shot classification & Prompt formatting
    prompt = """
    You are Pune Smart City Triage Engine.
    Analyze the citizen text: "{cleaned_text}"
    Extract:
    - category: [safety, infrastructure, traffic, weather, event]
    - severity: [low, medium, high, critical]
    - location_name: specific Pune landmark if mentioned
    - time_context: immediate, past, recurring
    - severity_weight: 0 to 100
    Return strict JSON.
    """
    
    nlp_response = LLM_Engine.generate_json(prompt, model="gemini-2.5-flash")
    
    # Step 3: Spatial validation with PostGIS
    if nlp_response.location_name:
        resolved_coords = geocode_pune_landmark(nlp_response.location_name)
    else:
        resolved_coords = (user_lat, user_lng)
        
    return {
        "category": nlp_response.category,
        "severity": nlp_response.severity,
        "coords": resolved_coords,
        "severity_weight": nlp_response.severity_weight,
        "confidence": nlp_response.confidence
    }`}</pre>
          </div>
        </div>

        {/* Safety Scoring Model */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="font-bold text-white text-sm">B. Segment & Route Safety Scoring Algorithm</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            The safety score is calculated across four key dimensions: illumination, surveillance & law enforcement presence, active commercial vitality (Jane Jacobs' "eyes on the street" principle), and historical reported incident density.
          </p>
          <div className="rounded bg-slate-950 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
            <pre>{`# Pseudocode: Computing Safety Score for a Route or Area
function compute_route_safety_score(route_segments, current_time_hour):
    total_length = sum(seg.length for seg in route_segments)
    weighted_score_accum = 0.0

    for seg in route_segments:
        # Base physical factors (0 to 100)
        lighting = seg.lighting_score              # e.g., 95%
        cctv = seg.cctv_coverage_pct              # e.g., 90%
        police_prox = min(seg.police_stations * 35, 100)
        vitality = min(seg.open_shops_count * 5, 100)
        
        # Incident penalty (decayed by time: recent incidents hurt more)
        incident_penalty = calculate_incident_penalty(seg.id, window_hours=72)
        
        # Time-of-day weighting: lighting & shops matter 2.5x more at night (20:00 - 05:00)
        is_night = (current_time_hour >= 20 or current_time_hour <= 5)
        w_light = 0.35 if is_night else 0.15
        w_cctv  = 0.25 if is_night else 0.25
        w_police = 0.20 if is_night else 0.20
        w_vitality = 0.20 if is_night else 0.40
        
        # Segment baseline score
        seg_score = (lighting * w_light) + (cctv * w_cctv) + (police_prox * w_police) + (vitality * w_vitality)
        seg_score = max(0, min(100, seg_score - incident_penalty))
        
        # Weight by segment distance
        weighted_score_accum += seg_score * (seg.length / total_length)

    return round(weighted_score_accum)`}</pre>
          </div>
        </div>
      </section>

      {/* Section 6: MVP Scope (2–4 Weeks) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <ShieldAlert size={20} />
          <h2>6. MVP Scope (2–4 Weeks Hackathon Scope)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Core Map & Places Explorer
            </div>
            <p className="text-slate-400">
              Interactive Pune map with curated landmarks (Shaniwar Wada, Aga Khan Palace, Vaishali, Vetal Tekdi) with ratings, cleanliness scores, price tiers, and local tips.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Safety Heatmap & Route Navigator
            </div>
            <p className="text-slate-400">
              Live toggle for safety corridors (FC Road, KP) and caution zones (Swargate, Katraj) with side-by-side comparison of Safest vs Fastest route.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Citizen Incident Reporting with AI NLP
            </div>
            <p className="text-slate-400">
              Citizen modal with text, photo attachment, and simulated voice note. Real-time NLP entity extraction and instant map broadcast.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Best vs. Worst Area Comparator
            </div>
            <p className="text-slate-400">
              Interactive neighborhood comparator matrix comparing Pune wards across Safety, Cleanliness, Affordability, Traffic, and Accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Step-by-Step Implementation Plan */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <FileText size={20} />
          <h2>7. Step-by-Step 4-Week Implementation Plan</h2>
        </div>
        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-cyan-400 font-bold">
              <span>Week 1: Setup, Database & Spatial Scaffolding</span>
              <span className="text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded">Foundation</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Initialize React + Vite + Tailwind CSS repository with Lucide icons.</li>
              <li>Setup PostgreSQL with PostGIS extension; configure spatial indexes (GIST).</li>
              <li>Seed pilot datasets for Pune (places, heritage landmarks, police stations, street lamps).</li>
              <li>Scaffold basic Node.js Express REST API endpoints (`/api/places`, `/api/safety/heatmap`).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-cyan-400 font-bold">
              <span>Week 2: Core Map, Layers & Route Optimization Engine</span>
              <span className="text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded">Core Logic</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Integrate Leaflet map with CartoDB dark tiles; render custom category marker icons.</li>
              <li>Implement routing graph algorithm with safety cost function (lighting, CCTV, police stations).</li>
              <li>Build safest route vs fastest route comparison card with interactive polyline overlays.</li>
              <li>Create neighborhood analytics comparator for Pune wards (KP, FC Road, Swargate, Hinjawadi).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-cyan-400 font-bold">
              <span>Week 3: AI/ML Triage & Citizen Reporting Subsystem</span>
              <span className="text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded">Intelligence</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Build Citizen Incident Reporting Modal with photo and voice note audio capture.</li>
              <li>Implement NLP triage pipeline using Gemini 2.5 Flash for category classification and NER.</li>
              <li>Integrate live citizen feedback loop: upvoting, community verification status, and pin to map.</li>
              <li>Hook up simulated real-time weather and traffic alerts (Mutha river causeway, Swargate).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-cyan-400 font-bold">
              <span>Week 4: UI Polish, SOS Trigger & Hackathon Demo Preparation</span>
              <span className="text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded">Launch</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Implement 1-tap SOS button simulation broadcasting location to emergency dispatch.</li>
              <li>Fine-tune mobile responsiveness, touch controls, and dark mode aesthetic.</li>
              <li>Run end-to-end user testing across the three key demo scenarios.</li>
              <li>Prepare 3-minute pitch deck and live demo script.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Example User Flows */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <ChevronRight size={20} />
          <h2>8. Example User Flows</h2>
        </div>
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-bold text-white mb-2">Flow 1: Tourist Exploring Heritage & Authentic Food</h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Tourist opens CityPulse and selects Pune pilot city.</li>
              <li>App displays top heritage spots (Shaniwar Wada, Aga Khan Palace) with historical context and entry fees.</li>
              <li>User filters by "Food / Irani Cafes" and discovers Cafe Goodluck (Deccan) and Vaishali (FC Road).</li>
              <li>User taps "Vaishali" to inspect cleanliness score (91%), safety score (96%), and Punekar local tips.</li>
              <li>User taps "Navigate Safely" to get walking directions along well-lit pedestrian corridors.</li>
            </ol>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-bold text-white mb-2">Flow 2: Local Commuter Choosing Safest Night Route</h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Late evening commuter at Pune Railway Station selects destination: Koregaon Park.</li>
              <li>CityPulse compares the Direct Cut (saves 5 min but traverses unlit riverbank) vs Safest Route.</li>
              <li>Commuter reviews safety metrics: Safest route features 96% LED lighting, 2 police chowkis, and 92% CCTV coverage.</li>
              <li>Commuter chooses the Safest Route; navigation begins with active street monitoring and SOS standby.</li>
            </ol>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-bold text-white mb-2">Flow 3: Citizen Reporting Hazard with Photo/Voice</h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Citizen notices flooded causeway at Baba Bhide bridge during heavy monsoon rain.</li>
              <li>Citizen taps the floating "Report Incident" button on the map.</li>
              <li>Citizen speaks or types: "Causeway is completely submerged under river water, barricades needed."</li>
              <li>CityPulse AI parses the text, extracts location (Baba Bhide Bridge) and assigns Severity: Critical.</li>
              <li>Report is published to the live map with a blue flood warning circle and broadcasted to PMC Disaster cell.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 9: Risks and Mitigations */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <ShieldAlert size={20} />
          <h2>9. Risks and Mitigations</h2>
        </div>
        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-bold text-white">Risk 1: Data Quality & Stale Datasets</span>
            <p className="text-slate-400 mt-0.5">
              <b>Mitigation:</b> Use community consensus upvoting (reports require 3+ verified upvotes to influence routing graphs) and decay penalties exponentially after 48 hours.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-bold text-white">Risk 2: Privacy & Citizen Location Exposure</span>
            <p className="text-slate-400 mt-0.5">
              <b>Mitigation:</b> Anonymize reporter IDs, blur coordinates by ±50 meters for residential areas, and strip EXIF location metadata before persisting uploaded photos.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-bold text-white">Risk 3: API Rate Limits & Cloud Costs</span>
            <p className="text-slate-400 mt-0.5">
              <b>Mitigation:</b> Use free OpenStreetMap / CartoDB tile layers, cache static place assets with Redis TTL, and use lightweight Gemini Flash with strict JSON schema constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Demo & Pitch Support */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-slate-800 pb-2">
          <Terminal size={20} />
          <h2>10. Demo & Pitch Support</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-bold text-cyan-400">Key Demo Scenarios to Present</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li><b>Night Walker Scenario:</b> Compare dark riverbank cut vs illuminated Koregaon Park arterial.</li>
              <li><b>Monsoon Flash Alert:</b> Show real-time flood warning on Baba Bhide bridge and live rerouting.</li>
              <li><b>Live AI Citizen Triage:</b> Type a messy unstructured incident and watch NLP extract entities in 400ms.</li>
              <li><b>City Hall Decision Matrix:</b> Use Best vs Worst comparator to show PMC where streetlight funding is needed.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-bold text-emerald-400">Key Impact Metrics to Highlight</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li><b>+42% Safety Index Improvement</b> on recommended night corridors.</li>
              <li><b>&lt; 500ms Incident Triage Latency</b> from citizen submission to public map broadcast.</li>
              <li><b>96% Lighting Verification</b> on prioritized walking paths.</li>
              <li><b>100% Extensible Architecture</b> ready to scale from Pune to Mumbai, Bengaluru, or Delhi.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
