import React, { useState } from 'react';
import { 
  PUNE_PLACES, 
  SAFETY_INCIDENTS, 
  ROUTE_COMPARISONS, 
  PUNE_VITALS,
  EV_STATIONS,
  TRANSIT_WAYS
} from './data/puneData';
import { Place, SafetyIncident, RouteOption } from './types/citypulse';
import { PuneMap, MapTheme } from './components/PuneMap';
import { ReportModal } from './components/ReportModal';
import { RouteNavigator } from './components/RouteNavigator';
import { AreaComparator } from './components/AreaComparator';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { ArchitectureDoc } from './components/ArchitectureDoc';
import { TouristAIGuide } from './components/TouristAIGuide';
import { CityPulseChatbot } from './components/CityPulseChatbot';
import { PricingCatalogModal } from './components/PricingCatalogModal';
import { 
  Map, 
  Navigation, 
  BarChart3, 
  AlertCircle, 
  FileCode, 
  CloudSun, 
  Car, 
  PhoneCall, 
  Search,
  Compass,
  DollarSign,
  Zap,
  Hotel
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'routes' | 'tourist' | 'pricing' | 'comparator' | 'feed' | 'blueprint'>('map');
  const [places, setPlaces] = useState<Place[]>(PUNE_PLACES);
  const [incidents, setIncidents] = useState<SafetyIncident[]>(SAFETY_INCIDENTS);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeRoute, setActiveRoute] = useState<RouteOption | null>(ROUTE_COMPARISONS['station_to_kp'][0]);
  
  // Map customization state
  const [mapTheme, setMapTheme] = useState<MapTheme>('transit_mobility');
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showIncidents, setShowIncidents] = useState(true);
  const [showPlaces, setShowPlaces] = useState(true);
  const [showHotels, setShowHotels] = useState(true);
  const [showEVStations, setShowEVStations] = useState(true);
  const [showTransitWays, setShowTransitWays] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  // Filtered places
  const filteredPlaces = places.filter(p => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleAddIncident = (newIncident: SafetyIncident) => {
    setIncidents([newIncident, ...incidents]);
  };

  const handleUpvoteIncident = (id: string) => {
    setIncidents(incidents.map(inc => inc.id === id ? { ...inc, upvotes: inc.upvotes + 1 } : inc));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Smart City Ticker & Emergency Banner */}
      <header className="border-b border-slate-800 bg-slate-900/95 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-cyan-500/20 text-lg">
              CP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-base tracking-tight text-white">CityPulse</h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                  Pune Pilot Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Smart City Exploration, Transit & Roads Mobility, EV Hubs & Transparent Tariffs
              </p>
            </div>
          </div>

          {/* Real-time City Vitals */}
          <div className="hidden lg:flex items-center gap-4 text-xs bg-slate-950/80 px-3.5 py-1.5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-slate-300">
              <CloudSun size={15} className="text-amber-400" />
              <span>{PUNE_VITALS.temperatureC}°C</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-medium">AQI {PUNE_VITALS.aqi}</span>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Zap size={15} className="text-cyan-400" />
              <span>EV Avg: <b>{PUNE_VITALS.faresSummary.evKwhAvg}</b></span>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Car size={15} className="text-orange-400" />
              <span>Congestion: <b>{PUNE_VITALS.trafficCongestionPercent}%</b></span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('pricing')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-yellow-500/15 hover:bg-yellow-500/25 text-yellow-300 border border-yellow-500/30 cursor-pointer transition-all flex items-center gap-1.5"
            >
              <DollarSign size={13} />
              <span className="hidden sm:inline">Price Directory</span>
            </button>
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 cursor-pointer transition-all flex items-center gap-1.5"
            >
              <span>📢</span>
              <span className="hidden sm:inline">Report Hazard</span>
            </button>
            <button
              onClick={() => setShowEmergencyModal(true)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall size={13} />
              <span>SOS (112)</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-t border-slate-800/80 bg-slate-900/60 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-1 scrollbar-none text-xs">
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'map'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Map size={15} />
              <span>Map, Roads & EV Hubs</span>
            </button>

            <button
              onClick={() => setActiveTab('tourist')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tourist'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-amber-400/90 hover:text-amber-300 hover:bg-amber-950/30'
              }`}
            >
              <Compass size={15} />
              <span>Tourist AI Guide</span>
              <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-[9px] font-bold uppercase">New</span>
            </button>

            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'pricing'
                  ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <DollarSign size={15} />
              <span>Prices of Everything</span>
            </button>

            <button
              onClick={() => setActiveTab('routes')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'routes'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Navigation size={15} />
              <span>Safest Route Optimizer</span>
            </button>

            <button
              onClick={() => setActiveTab('comparator')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'comparator'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <BarChart3 size={15} />
              <span>Best vs. Worst Places</span>
            </button>

            <button
              onClick={() => setActiveTab('feed')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'feed'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <AlertCircle size={15} />
              <span>Citizen Reports ({incidents.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('blueprint')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ml-auto ${
                activeTab === 'blueprint'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                  : 'text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/40'
              }`}
            >
              <FileCode size={15} />
              <span>Architecture Spec</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 flex flex-col gap-4">
        {/* TAB 1: MAP, ROADS & EV HUBS */}
        {activeTab === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[calc(100vh-140px)] min-h-[700px]">
            {/* Left Controls & Places List Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-3 h-full overflow-hidden">
              {/* Search & Category Filter */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 space-y-3 shrink-0">
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Shaniwar Wada, Zostel, EV station..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
                  {[
                    { id: 'all', label: 'All', emoji: '✨' },
                    { id: 'hotel', label: 'Hotels', emoji: '🏨' },
                    { id: 'heritage', label: 'Heritage', emoji: '🏛️' },
                    { id: 'food', label: 'Food', emoji: '🍲' },
                    { id: 'nature', label: 'Hills', emoji: '🌳' },
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer border ${
                        selectedCategory === cat.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {cat.emoji} {cat.label}
                    </button>
                  ))}
                </div>

                {/* Granular Layer Toggles */}
                <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-slate-300">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showTransitWays}
                      onChange={(e) => setShowTransitWays(e.target.checked)}
                      className="rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <span>Roads & Corridors</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showEVStations}
                      onChange={(e) => setShowEVStations(e.target.checked)}
                      className="rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <span className="text-cyan-400 font-bold">⚡ EV Hubs</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showHotels}
                      onChange={(e) => setShowHotels(e.target.checked)}
                      className="rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <span className="text-emerald-400 font-bold">🏨 Hotels</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showHeatmap}
                      onChange={(e) => setShowHeatmap(e.target.checked)}
                      className="rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <span>Heatmap</span>
                  </label>
                </div>
              </div>

              {/* Places Scroll Area with Badged Prices */}
              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1 flex justify-between items-center">
                  <span>Pune Spots ({filteredPlaces.length})</span>
                  <span className="text-yellow-400 text-[11px] font-mono">Rates Verified</span>
                </div>
                {filteredPlaces.map(place => {
                  const isHotel = place.category === 'hotel';
                  return (
                    <div
                      key={place.id}
                      onClick={() => setSelectedPlace(place)}
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all cursor-pointer group flex gap-3"
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1 mb-0.5">
                          <h4 className="font-bold text-white text-xs truncate group-hover:text-cyan-300">
                            {place.name}
                          </h4>
                          <span className="text-[10px] font-mono text-emerald-400 shrink-0 font-bold">
                            {place.safetyScore}% Safe
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mb-1.5">{place.tagline}</p>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-amber-400 font-semibold">★ {place.rating}</span>
                          <span className="font-mono font-bold text-yellow-400 bg-yellow-500/10 px-1.5 py-0.5 rounded border border-yellow-500/20">
                            {isHotel ? `₹${place.pricing.perNightRate}/night` : `₹${place.avgCostForTwo} for 2`}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Interactive Leaflet Map with Multiple Themes */}
            <div className="lg:col-span-8 h-full flex flex-col">
              <PuneMap
                places={filteredPlaces}
                incidents={incidents}
                evStations={EV_STATIONS}
                transitWays={TRANSIT_WAYS}
                selectedPlace={selectedPlace}
                onSelectPlace={setSelectedPlace}
                activeRoute={null}
                showHeatmap={showHeatmap}
                showIncidents={showIncidents}
                showPlaces={showPlaces}
                showHotels={showHotels}
                showEVStations={showEVStations}
                showTransitWays={showTransitWays}
                mapTheme={mapTheme}
                onChangeMapTheme={setMapTheme}
                onOpenReportModal={() => setIsReportModalOpen(true)}
              />
            </div>
          </div>
        )}

        {/* TAB 2: TOURIST AI GUIDE */}
        {activeTab === 'tourist' && (
          <TouristAIGuide
            places={places}
            evStations={EV_STATIONS}
            transitWays={TRANSIT_WAYS}
            onSelectPlace={(p) => {
              setSelectedPlace(p);
              setActiveTab('map');
            }}
          />
        )}

        {/* TAB 3: TRANSPARENT PRICING DIRECTORY */}
        {activeTab === 'pricing' && (
          <div className="overflow-y-auto max-h-[calc(100vh-140px)]">
            <PricingCatalogModal />
          </div>
        )}

        {/* TAB 4: SAFEST ROUTE NAVIGATOR */}
        {activeTab === 'routes' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[calc(100vh-140px)] min-h-[700px]">
            <div className="lg:col-span-5 h-full overflow-y-auto">
              <RouteNavigator
                activeRoute={activeRoute}
                onSelectRoute={setActiveRoute}
              />
            </div>
            <div className="lg:col-span-7 h-full">
              <PuneMap
                places={places}
                incidents={incidents}
                evStations={EV_STATIONS}
                transitWays={TRANSIT_WAYS}
                selectedPlace={null}
                onSelectPlace={setSelectedPlace}
                activeRoute={activeRoute}
                showHeatmap={true}
                showIncidents={true}
                showPlaces={false}
                showHotels={false}
                showEVStations={true}
                showTransitWays={true}
                mapTheme={mapTheme}
                onChangeMapTheme={setMapTheme}
                onOpenReportModal={() => setIsReportModalOpen(true)}
              />
            </div>
          </div>
        )}

        {/* TAB 5: BEST VS WORST AREA COMPARATOR */}
        {activeTab === 'comparator' && (
          <div className="overflow-y-auto max-h-[calc(100vh-140px)]">
            <AreaComparator />
          </div>
        )}

        {/* TAB 6: CITIZEN REPORTS FEED */}
        {activeTab === 'feed' && (
          <div className="space-y-4 max-w-4xl mx-auto overflow-y-auto max-h-[calc(100vh-140px)] py-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-xl font-bold text-white">Live Citizen Reports Feed (Pune)</h2>
                <p className="text-xs text-slate-400">Crowdsourced alerts triaged in real time via Gemini NLP engine.</p>
              </div>
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/20 cursor-pointer transition-all flex items-center gap-1.5"
              >
                <span>📢</span>
                <span>Submit Citizen Report</span>
              </button>
            </div>

            <div className="space-y-3">
              {incidents.map(inc => (
                <div
                  key={inc.id}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        inc.severity === 'critical' ? 'bg-rose-500/20 text-rose-400' :
                        inc.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        inc.severity === 'medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {inc.severity} Severity
                      </span>
                      <span className="text-xs text-cyan-400 font-mono capitalize">#{inc.category}</span>
                      <span className="text-slate-500 text-xs">•</span>
                      <span className="text-xs text-slate-400">{inc.timestamp}</span>
                    </div>

                    <button
                      onClick={() => handleUpvoteIncident(inc.id)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer transition-colors"
                    >
                      <span>👍</span>
                      <span>{inc.upvotes}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{inc.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{inc.description}</p>
                  </div>

                  {inc.extractedEntities && (
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <span className="text-slate-500 font-semibold">Location: </span>
                        <span>{inc.extractedEntities.location || inc.locationName}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-semibold">Time: </span>
                        <span>{inc.extractedEntities.time}</span>
                      </div>
                      {inc.extractedEntities.recommendedAction && (
                        <div className="col-span-full text-cyan-300 font-medium">
                          ⚡ AI Triage Action: {inc.extractedEntities.recommendedAction}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                    <span className="text-slate-400">📍 Near: {inc.locationName}</span>
                    {inc.verified && (
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        ✓ {inc.verifiedBy}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ARCHITECTURE & BLUEPRINT */}
        {activeTab === 'blueprint' && (
          <div className="overflow-y-auto max-h-[calc(100vh-140px)]">
            <ArchitectureDoc />
          </div>
        )}
      </main>

      {/* Floating Website AI Assistant ("How to Use This Website") */}
      <CityPulseChatbot
        onNavigateTab={(tab) => setActiveTab(tab)}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onToggleSOS={() => setShowEmergencyModal(true)}
      />

      {/* Place Detail Popup Modal with Itemized Price Breakdown */}
      <PlaceDetailModal
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />

      {/* Citizen Report Modal */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmitReport={handleAddIncident}
      />

      {/* Emergency SOS Numbers Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-rose-500/40 p-6 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                <PhoneCall size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Pune Emergency Helpline Hub</h3>
                <p className="text-xs text-rose-400">Official Municipal & Police Dispatch Hotlines</p>
              </div>
            </div>

            <div className="space-y-2">
              {PUNE_VITALS.emergencyContacts.map(c => (
                <div key={c.number} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white text-xs">{c.name}</div>
                    <div className="text-[10px] text-slate-400">{c.service}</div>
                  </div>
                  <div className="text-cyan-400 font-mono font-bold text-sm bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/40">
                    {c.number}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowEmergencyModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
            >
              Close Helplines
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
