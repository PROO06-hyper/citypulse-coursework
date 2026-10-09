# CityPulse 🌆
### Smart City Exploration, Night Safety Navigation & Mobility Intelligence Platform
**Pilot City:** Pune, Maharashtra, India *(Extensible to any metropolitan city)*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](LICENSE)

---

## 📌 Table of Contents

1. [About The Project](#-about-the-project)
2. [Visual Interface & Screenshots](#-visual-interface--screenshots)
3. [Key Features](#-key-features)
4. [System Architecture](#-system-architecture)
5. [Tech Stack](#-tech-stack)
6. [Getting Started & Local Setup](#-getting-started--local-setup)
7. [Deployment Guide](#-deployment-guide)
8. [Data Models & Pricing Reference](#-data-models--pricing-reference)
9. [Open Source Contributing](#-open-source-contributing)
10. [Roadmap](#-roadmap)
11. [License & Acknowledgments](#-license--acknowledgments)

---

## 🌟 About The Project

Urban life is dynamic and complex: from discovering hidden culinary treasures and centuries-old Maratha heritage to dealing with traffic choke-points, sudden monsoon causeway flooding, and poorly-lit walking paths at night.

**CityPulse** is an interactive, full-stack smart city exploration and civic safety web application. Built for citizens, daily commuters, tourists, and civic authorities, it aggregates spatial datasets, transit feeds, and crowdsourced citizen incident reports into verified, actionable intelligence.

### 🎯 Core Problem Statements Addressed
* **Exploration & Culture:** Finding historical monuments and food hubs with authentic ratings, cleanliness benchmarks, and verified entry fees.
* **Nighttime Safety Navigation:** Choosing between a direct unlit shortcut and a well-illuminated route guarded by police chowkis and active commercial footfall.
* **Green Mobility & EV Charging:** Locating real-time fast chargers with transparent per-kWh tariffs.
* **Citizen Triage:** Reporting broken infrastructure, waterlogging, or hazards with multi-lingual AI NLP categorization.
* **Civic Transparency:** 100% upfront pricing for hotels, monument tickets, transit passes, and EV charging.

---

## 📸 Visual Interface & Screenshots

```
+---------------------------------------------------------------------------------------------------+
| 🌆 CityPulse [Pune Pilot Active]        🌤️ 27.4°C • AQI 78   ⚡ EV Avg: ₹18/kWh   [📢 Report] [SOS 112] |
+---------------------------------------------------------------------------------------------------+
| [Map & Roads] [Tourist AI Guide] [Prices Directory] [Safest Route] [Ward Comparator] [Reports]     |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [Search Spots...]                      +-------------------------------------------------------+ |
|  Filters: ✨ All  🏨 Hotels  🏛️ Heritage |   Theme: [🌌 Cyber Dark] [🚦 Transit] [☀️ Daylight]    | |
|  -------------------------------------  |                                                       | |
|  • Shaniwar Wada (88% Safe • ₹25 Entry) |   🟢 FC Road Pedestrian Safe Corridor (96% Safe)      | |
|  • Cafe Goodluck (92% Safe • ₹350 / 2)  |   ⚡ Tata Power EZ Hub (60kW • ₹18/kWh)               | |
|  • Zostel Pune (94% Safe • ₹650 / n)    |   🏨 The Westin Pune (Luxury • ₹9,500/night)          | |
|  • Tata Power EV (94% Safe • ₹18/kWh)   |   ⚠️ Caution: Katraj Bypass (Dark Stretch)             | |
|                                         |   🌊 Flood Alert: Baba Bhide Causeway Flooded         | |
|  [🗺️ Curated Places Directory]           +-------------------------------------------------------+ |
|                                                                                                   |
+-------------------------------------------------------------------------------------+-------------+
|                                                                                     | 🤖 How to   |
|                                                                                     | Use Website |
+-------------------------------------------------------------------------------------+-------------+
```

### UI Highlights
* **Interactive Map with 3 Visual Themes:** Cyberpunk Dark mode, Transit & Mobility mode, and Daylight OpenStreetMap mode.
* **Live Heatmaps & Danger Corridors:** Instant visual distinction between high-safety walking streets (green) and hazard zones (amber/red).
* **Detailed Place & Tariff Modals:** Instant popups displaying entry fees, signature dishes, room options, and cleanliness metrics.
* **Floating AI Website Assistant:** Context-aware interactive assistant explaining platform tools with one-click navigation chips.

---

## 🚀 Key Features

### 1. 🗺️ Multi-Theme GIS Map & Road Corridors
* **Human Pedestrian Walkways:** Free illuminated walking promenades (FC Road, Koregaon Park Lane 1) with Damini Police Squad coverage.
* **Local Public Transit Routes:** PMPML Bus Rapid Corridors (₹10–₹20 / ₹50 unlimited day pass) and Pune Metro Aqua Line (₹10–₹35).
* **Private Vehicle Highways:** 6-lane vehicle corridors for auto rickshaws (₹25 base + ₹17/km) and app cabs.

### 2. ⚡ EV Fast Charging Hubs with Live Tariffs
* Comprehensive coverage of Pune EV hubs (Tata Power EZ, Ather Grid, Jio-bp pulse 120kW Supercharger, Mahavitaran, Static EV).
* Pin displays **Power (kW)**, **Available ports**, **Cost per kWh (₹14.5 – ₹19.5/kWh)**, and calculated 4W and 2W full recharge estimates.

### 3. 🏨 Nearby Stays & Hostels with Nightly Rates
* Budget dorms at **Zostel Pune** (₹650/night), heritage stays at **Hotel Shreyas** (₹2,200/night), to 5-star luxury at **The Westin** (₹9,500/night) and **JW Marriott** (₹11,200/night).

### 4. 🧭 Punekar Tourist AI Guide
* Custom itinerary builder grounded in real pricing:
  * *Half-Day Peshwa Heritage & Food Crawl* (₹240 Total).
  * *Punekar Street Food Crawl* (₹385 Total).
  * *Backpacker Day under ₹500* (₹285 Total).
  * *Green EV Drive in Koregaon Park* (₹690 Total).
* Conversational tourist planner answering queries about local history, food recommendations, and solo traveler safety.

### 5. 🛡️ Safest Route Optimizer
* Evaluates street lighting percentages, CCTV surveillance, police chowkis, and nighttime commercial activity.
* Compares **Safest Arterial** (94/100 safety score, 96% lighting) against **Fastest Cut** (61/100 safety score, 48% lighting).
* Integrated 1-tap **SOS button** with simulated emergency dispatch to Pune Police Control (112) and Damini Mobile Squad.

### 6. 📢 Citizen Hazard Reporting with AI NLP Triage
* Crowdsourced reports with text, geo-tagged photos, and simulated audio notes.
* Instant AI Named Entity Recognition (NER) and intent classification categorizing severity (low, medium, high, critical) and dispatching alerts to municipal bodies.

### 7. 📊 Best vs. Worst Area Comparator
* Side-by-side ward comparison matrix for Pune localities (Koregaon Park, FC Road/Deccan, Swargate, Hinjawadi, Viman Nagar).
* Benchmark bars for **Safety**, **Cleanliness**, **Affordability**, **Traffic Congestion**, and **Transit Connectivity**.

---

## 🏛️ System Architecture

```
+---------------------------------------------------------------------------------------------------+
|                                CLIENT LAYER (React 19 + TypeScript + PWA)                         |
|   - Leaflet Map (Themes: Cyber, Transit, Daylight)   - Punekar Tourist AI Guide                   |
|   - Safest Route Navigator (A* with Safety Weights)  - Citizen Report Modal + Audio Recorder      |
|   - Ward Comparator Matrix                           - Transparent Price Directory Catalog        |
+-------------------------------------------------+-------------------------------------------------+
                                                  | HTTPS / REST (JSON)
                                                  v
+---------------------------------------------------------------------------------------------------+
|                               BACKEND API GATEWAY (Node.js / Express)                             |
|   - GeoJSON Serializer                 - PostGIS Spatial Queries      - In-Memory Redis Caching   |
|   - /api/places/nearby                 - /api/routes/safest          - /api/safety/heatmap        |
+----------------------+--------------------------+-------------------------+-----------------------+
                       |                          |                         |
                       v                          v                         v
+-----------------------------+  +-------------------------------+  +-------------------------------+
|      SPATIAL DATABASE       |  |       AI / ML ENGINE          |  |      EXTERNAL DATA FEEDS      |
| PostgreSQL + PostGIS        |  | Google Gemini 2.5 Flash SDK   |  | Open-Meteo Weather API        |
| - GIST Spatial Indexes      |  | - Multilingual NLP Triage     |  | TomTom / OpenStreetMap Tiles  |
| - LineString Route Segments |  | - Named Entity Recognition    |  | PMC Disaster Warning Cell     |
+-----------------------------+  +-------------------------------+  +-------------------------------+
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 + Vite 8.3 | Ultra-fast build times, modular architecture, and modern JSX runtime |
| **Styling** | Tailwind CSS v4 | High-performance CSS framework with zero runtime overhead |
| **Icons & UI** | Lucide React | Consistent, accessible iconography |
| **GIS & Maps** | Leaflet 1.9 + CartoDB | Free vector tiles, custom SVG markers, dynamic polyline buffers |
| **AI / NLP** | Google Gemini 2.5 Flash (`@google/genai`) | Sub-second multi-lingual entity extraction and structured JSON output |
| **Type Safety** | TypeScript 5.x | Strict end-to-end data models |
| **Deployment** | Vercel / Netlify / GitHub Pages | Automated CI/CD with SPA redirect routing |

---

## 📦 Getting Started & Local Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
* [npm](https://www.npmjs.com/) (version 9.0.0 or higher) or [yarn](https://yarnpkg.com/)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/citypulse.git
cd citypulse
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Copy the example environment file:
```bash
cp .env.example .env
```
*(Optional)* Add your Gemini API key inside `.env`:
```env
GEMINI_API_KEY="your_actual_gemini_api_key"
```
> **Note:** The application includes a smart, contextual fallback engine for Pune exploration and NLP triage so it works out of the box even without an external API key!

### 4. Start local development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 5. Build for production
```bash
npm run build
```
Compiled production assets will be generated in the `dist/` directory.

---

## 🚀 Deployment Guide

### Option A: Deploy to Vercel (Recommended)
1. Fork or push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `citypulse` repository.
4. Vercel automatically detects the Vite configuration:
   * **Framework Preset:** `Vite`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
5. Click **Deploy**.  
*(The included `vercel.json` ensures that direct URL paths do not trigger 404 errors).*

### Option B: Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/) and choose **"Import from Git"**.
2. Select your `citypulse` repo.
3. Netlify will detect the included `netlify.toml` file:
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
4. Click **Deploy Site**.

### Option C: Deploy to GitHub Pages (Automatic CI/CD)
1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` workflow will automatically test, compile, and deploy your site on every push to `main`!

---

## 📊 Data Models & Pricing Reference

### Pune Verified Tariffs Summary

| Category | Item / Service | Rate / Tariff | Notes |
| :--- | :--- | :--- | :--- |
| **Heritage** | Shaniwar Wada Adult Entry | ₹25 (Indian) / ₹300 (Foreigner) | Evening Light & Sound show: ₹50 |
| **Heritage** | Aga Khan Palace Entry | ₹25 (Indian) / ₹300 (Foreigner) | Free entry for children under 15 |
| **Heritage** | Pataleshwar Cave Temple | **Free (₹0)** | 8th-century monolithic rock-cut wonder |
| **Food & Cafes** | Cafe Goodluck Irani Chai + Bun Maska | ₹95 (Chai ₹35, Maska ₹60) | Authentic Irani cafe since 1935 |
| **Food & Cafes** | Vaishali FC Road SPDP + Coffee | ₹180 (SPDP ₹120, Coffee ₹60) | Student safe corridor landmark |
| **Food & Cafes** | Katakirrr Special Kolhapuri Misal | ₹110 | Medium or fiery Kolhapuri rassa |
| **Hotels & Stays** | Zostel Pune (Viman Nagar) | ₹650 / dorm bed | Female-only dorms, biometric keycards |
| **Hotels & Stays** | Hotel Shreyas (Deccan) | ₹2,200 / night | Renowned Maharashtrian Thali (₹380) |
| **Hotels & Stays** | The Westin Pune (Koregaon Park) | ₹9,500 / night | 5-star riverside luxury, guarded perimeter |
| **Hotels & Stays** | JW Marriott (Senapati Bapat Rd) | ₹11,200 / night | 5-star executive, in-house EV charger |
| **EV Fast Charge** | Tata Power EZ (Deccan 60kW) | **₹18.0 / kWh** | ~₹480 for 4W full charge |
| **EV Fast Charge** | Ather Grid (FC Road 30kW) | **₹15.0 / kWh** | ~₹40 for 2W full charge |
| **EV Fast Charge** | Jio-bp pulse (KP 120kW Supercharger) | **₹19.5 / kWh** | 24/7 cafe lounge & air station |
| **EV Fast Charge** | Mahavitaran (Swargate 50kW) | **₹14.5 / kWh** | Subsidized municipal tariff |
| **Transit** | PMPML City Bus Daily Pass | **₹50 Unlimited** | Valid on all red & electric buses |
| **Transit** | Pune Metro Aqua Line | **₹10 to ₹35** | Air-conditioned elevated transit |
| **Transit** | Auto Rickshaw Meter | **₹25 base + ₹17/km** | Official Pune RTO meter fare |

---

## 🤝 Open Source Contributing

Contributions make the open-source community an inspiring place to learn and innovate. Any contributions you make to **CityPulse** are **greatly appreciated**!

### How to Contribute

1. **Fork the Project:**
   Click the **Fork** button at the top right of this page.
2. **Create your Feature Branch:**
   ```bash
   git checkout -b feature/NewCityExpansion
   ```
3. **Commit your Changes:**
   ```bash
   git commit -m "feat: add Mumbai pilot dataset and local trains"
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/NewCityExpansion
   ```
5. **Open a Pull Request:**
   Open a PR against the `main` branch with a description of your changes and test screenshots.

### Code Style Guidelines
* Write strict, type-safe TypeScript.
* Use Tailwind CSS utility classes; avoid inline styles.
* Run `npm run lint` before committing to verify zero syntax or type errors.

---

## 🗺️ Roadmap

- [x] Pilot City: Pune, Maharashtra (Heritage, food, hotels, EV hubs, transit).
- [x] Leaflet map integration with 3 selectable themes (Cyber Dark, Transit & Roads, Daylight).
- [x] Punekar Tourist AI Guide with ready itineraries and budget calculators.
- [x] 100% transparent city pricing directory.
- [x] Citizen incident reporting with AI NLP triage.
- [ ] **Phase 2 (Expansion):** Expand pilot datasets to Mumbai (Local train corridors), Bengaluru (Namma Metro + tech parks), and Delhi (Metro lines).
- [ ] **Phase 3 (Live Telemetry):** Direct IoT integration with PMPML bus GPS transponders and live municipal CCTV feeds.
- [ ] **Phase 4 (Offline PWA):** Full service worker caching for offline map viewing and SMS-based emergency SOS dispatch.

---

## 📄 License

Distributed under the **Apache 2.0 License**. See `LICENSE` for more information.

---

## 📞 Support & Community

* **Author:** CityPulse Engineering Team
* **Email:** [praveshdupare6@gmail.com](mailto:praveshdupare6@gmail.com)
* **GitHub Repository:** [https://github.com/praveshdupare6/citypulse](https://github.com/praveshdupare6/citypulse)
* **Live App Preview:** [https://ais-pre-4g7wy5gtjtxaa23dmgx57t-332833971217.asia-east1.run.app](https://ais-pre-4g7wy5gtjtxaa23dmgx57t-332833971217.asia-east1.run.app)

---

⭐ *If you find CityPulse useful, please consider giving this repository a star on GitHub!*
