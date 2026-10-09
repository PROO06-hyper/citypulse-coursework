import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Place, SafetyIncident, RouteOption, EVStation, TransitWay } from '../types/citypulse';

export type MapTheme = 'cyberpunk' | 'transit_mobility' | 'daylight';

interface PuneMapProps {
  places: Place[];
  incidents: SafetyIncident[];
  evStations: EVStation[];
  transitWays: TransitWay[];
  selectedPlace: Place | null;
  onSelectPlace: (place: Place | null) => void;
  activeRoute: RouteOption | null;
  showHeatmap: boolean;
  showIncidents: boolean;
  showPlaces: boolean;
  showHotels: boolean;
  showEVStations: boolean;
  showTransitWays: boolean;
  mapTheme: MapTheme;
  onChangeMapTheme: (theme: MapTheme) => void;
  onOpenReportModal: () => void;
}

export const PuneMap: React.FC<PuneMapProps> = ({
  places,
  incidents,
  evStations,
  transitWays,
  selectedPlace,
  onSelectPlace,
  activeRoute,
  showHeatmap,
  showIncidents,
  showPlaces,
  showHotels,
  showEVStations,
  showTransitWays,
  mapTheme,
  onChangeMapTheme,
  onOpenReportModal
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const layersGroupRef = useRef<L.LayerGroup | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [18.528, 73.865],
      zoom: 13,
      zoomControl: false,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const layersGroup = L.layerGroup().addTo(map);
    layersGroupRef.current = layersGroup;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Base Tile Layer when mapTheme changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    let tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'; // cyberpunk default
    let attribution = '&copy; OpenStreetMap contributors &copy; CARTO';

    if (mapTheme === 'transit_mobility') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    } else if (mapTheme === 'daylight') {
      tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    }

    const newTile = L.tileLayer(tileUrl, {
      attribution,
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    tileLayerRef.current = newTile;
  }, [mapTheme]);

  // Sync Markers, Polylines and Overlays
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layers = layersGroupRef.current;
    if (!map || !layers) return;

    layers.clearLayers();

    // 1. Transit & Crowd Corridors (Humans vs Public Transit vs Vehicles)
    if (showTransitWays) {
      transitWays.forEach(tw => {
        let strokeColor = '#10b981'; // Green for pedestrian
        let weight = 6;
        let dashArray: string | undefined = undefined;

        if (tw.type === 'pedestrian_walkway') {
          strokeColor = '#10b981';
          weight = 7;
          dashArray = '6, 6';
        } else if (tw.type === 'pmpml_bus_corridor') {
          strokeColor = '#3b82f6';
          weight = 6;
        } else if (tw.type === 'metro_corridor') {
          strokeColor = '#a855f7';
          weight = 7;
        } else if (tw.type === 'private_vehicle_highway') {
          strokeColor = '#f97316';
          weight = 5;
        }

        const poly = L.polyline(tw.coordinates, {
          color: strokeColor,
          weight,
          opacity: 0.85,
          dashArray
        }).addTo(layers);

        poly.bindTooltip(`
          <div style="font-size: 11px; padding: 2px;">
            <b>${tw.name}</b><br/>
            <span style="color:#0ea5e9;">Fare: ${tw.fareOrCost}</span><br/>
            <span style="color:#64748b;">Crowd: ${tw.crowdLevel} | Safety: ${tw.safetyScore}%</span>
          </div>
        `, { sticky: true });
      });
    }

    // 2. Safety Heatmap Buffers
    if (showHeatmap) {
      // FC Road Corridor
      L.circle([18.5225, 73.8423], {
        radius: 900,
        color: '#10b981',
        fillColor: '#10b981',
        fillOpacity: 0.16,
        weight: 1.5,
        dashArray: '4, 4'
      }).bindTooltip('🟢 Safe Pedestrian Corridor: FC Road (Safety: 96/100, Damini Police Patrol, 98% Illumination)', { sticky: true }).addTo(layers);

      // Koregaon Park
      L.circle([18.5385, 73.8995], {
        radius: 1100,
        color: '#06b6d4',
        fillColor: '#06b6d4',
        fillOpacity: 0.15,
        weight: 1.5,
      }).bindTooltip('🟢 Safe Nightlife Corridor: Koregaon Park (Safety: 94/100, 24/7 Security)', { sticky: true }).addTo(layers);

      // Swargate Transit Hub Caution
      L.circle([18.5015, 73.8582], {
        radius: 750,
        color: '#f59e0b',
        fillColor: '#ef4444',
        fillOpacity: 0.22,
        weight: 2,
      }).bindTooltip('⚠️ Caution Zone: Swargate Bus Depot (High crowd density, pickpocket reports)', { sticky: true }).addTo(layers);

      // Katraj Dark Spot
      L.circle([18.4485, 73.8596], {
        radius: 800,
        color: '#ef4444',
        fillColor: '#ef4444',
        fillOpacity: 0.25,
        weight: 2,
      }).bindTooltip('🔴 Risk Warning: Katraj Approach (Streetlight failure, low visibility)', { sticky: true }).addTo(layers);

      // Flooded causeway
      L.circle([18.5178, 73.8488], {
        radius: 500,
        color: '#3b82f6',
        fillColor: '#0284c7',
        fillOpacity: 0.25,
        weight: 2,
      }).bindTooltip('🌊 Weather Hazard: Baba Bhide Causeway Flooded (Dam discharge active)', { sticky: true }).addTo(layers);
    }

    // 3. Active Route Polyline
    if (activeRoute) {
      const isSafest = activeRoute.type === 'safest';
      const routeColor = isSafest ? '#10b981' : '#f43f5e';
      
      const polyline = L.polyline(activeRoute.coordinates, {
        color: routeColor,
        weight: 6,
        opacity: 0.92,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: isSafest ? undefined : '8, 8'
      }).addTo(layers);

      const startCoord = activeRoute.coordinates[0];
      const endCoord = activeRoute.coordinates[activeRoute.coordinates.length - 1];

      const startIcon = L.divIcon({
        className: 'custom-icon',
        html: `<div style="background-color: #3b82f6; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.4); font-size: 11px; font-weight: bold; color: white;">A</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const endIcon = L.divIcon({
        className: 'custom-icon',
        html: `<div style="background-color: ${isSafest ? '#10b981' : '#f43f5e'}; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.4); font-size: 11px; font-weight: bold; color: white;">B</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      L.marker(startCoord, { icon: startIcon }).bindTooltip('Trip Origin: Pune Railway Station').addTo(layers);
      L.marker(endCoord, { icon: endIcon }).bindTooltip(`Trip Destination (${activeRoute.name}) - Est Auto Fare: ₹${activeRoute.estimatedFareAuto}`).addTo(layers);

      map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
    }

    // 4. EV Charging Stations (with price badge!)
    if (showEVStations) {
      evStations.forEach(ev => {
        const evIcon = L.divIcon({
          className: 'ev-marker',
          html: `
            <div style="background: linear-gradient(135deg, #06b6d4, #0284c7); width: 38px; height: 38px; border-radius: 12px; border: 2px solid #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4); color: white; cursor: pointer; transition: transform 0.2s;" class="hover:scale-110">
              <span style="font-size: 13px; line-height: 1;">⚡</span>
              <span style="font-size: 8px; font-weight: bold; margin-top: 1px;">₹${ev.costPerKwh}</span>
            </div>
          `,
          iconSize: [38, 38],
          iconAnchor: [19, 19]
        });

        const marker = L.marker([ev.lat, ev.lng], { icon: evIcon }).addTo(layers);

        const popupContent = `
          <div style="font-family: system-ui, sans-serif; font-size: 12px; max-width: 250px; padding: 4px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span style="font-weight: 700; color: #0284c7; font-size: 13px;">⚡ ${ev.operator}</span>
              <span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 10px;">${ev.powerKw} kW Fast</span>
            </div>
            <div style="font-weight: 600; color: #0f172a; margin-bottom: 4px;">${ev.name}</div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px; margin: 6px 0;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                <span><b>Tariff:</b></span>
                <span style="color: #0284c7; font-weight: bold;">₹${ev.costPerKwh} / kWh</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; color: #475569;">
                <span>4-Wheeler Full Charge:</span>
                <b>~₹${ev.avgFullChargeCost4W}</b>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; color: #475569;">
                <span>2-Wheeler Full Charge:</span>
                <b>~₹${ev.avgFullChargeCost2W}</b>
              </div>
            </div>
            <div style="font-size: 11px; color: #64748b; margin-bottom: 4px;">
              🔌 Ports: <b>${ev.availablePorts} / ${ev.totalPorts} Available</b>
            </div>
            <div style="font-size: 10px; color: #16a34a; font-weight: 600;">
              🛡️ Safety: ${ev.safetyScore}/100 • 24/7 Monitored
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
      });
    }

    // 5. Places & Hotels Markers (with Price Badges!)
    places.forEach(p => {
      const isHotel = p.category === 'hotel';
      if (isHotel && !showHotels) return;
      if (!isHotel && !showPlaces) return;

      let badgeColor = '#3b82f6';
      let emoji = '📍';
      let priceLabel = '₹';

      if (p.category === 'heritage') {
        badgeColor = '#d97706';
        emoji = '🏛️';
        priceLabel = p.pricing.entryFeeIndian !== undefined ? (p.pricing.entryFeeIndian === 0 ? 'Free' : `₹${p.pricing.entryFeeIndian}`) : '₹';
      } else if (p.category === 'food') {
        badgeColor = '#e11d48';
        emoji = '🍲';
        priceLabel = `₹${p.avgCostForTwo}`;
      } else if (p.category === 'hotel') {
        badgeColor = '#059669';
        emoji = '🏨';
        priceLabel = `₹${p.pricing.perNightRate || p.avgCostForTwo}/n`;
      } else if (p.category === 'nature') {
        badgeColor = '#16a34a';
        emoji = '🌳';
        priceLabel = 'Free';
      }

      const iconHtml = `
        <div style="background-color: ${badgeColor}; border-radius: 12px; border: 2px solid white; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); color: white; cursor: pointer; padding: 2px 4px; min-width: 38px; height: 38px;" class="hover:scale-110 transition-transform">
          <span style="font-size: 13px; line-height: 1;">${emoji}</span>
          <span style="font-size: 8px; font-weight: bold; margin-top: 1px; white-space: nowrap;">${priceLabel}</span>
        </div>
      `;

      const icon = L.divIcon({
        className: 'place-marker',
        html: iconHtml,
        iconSize: [38, 38],
        iconAnchor: [19, 19]
      });

      const marker = L.marker([p.lat, p.lng], { icon }).addTo(layers);
      
      marker.on('click', () => {
        onSelectPlace(p);
      });

      marker.bindTooltip(`
        <b>${p.name}</b><br/>
        <span style="color:#059669; font-weight:bold;">${isHotel ? `Tariff: ₹${p.pricing.perNightRate}/night` : `Avg Cost: ₹${p.avgCostForTwo}`}</span><br/>
        <span style="color:#64748b; font-size:10px;">Safety: ${p.safetyScore}% | ★${p.rating}</span>
      `, {
        offset: [0, -18],
        direction: 'top'
      });
    });

    // 6. Citizen Incidents
    if (showIncidents) {
      incidents.forEach(inc => {
        let bg = '#eab308';
        let iconText = '⚠️';
        if (inc.severity === 'critical') { bg = '#ef4444'; iconText = '🚨'; }
        else if (inc.severity === 'high') { bg = '#f97316'; iconText = '⚠️'; }
        else if (inc.severity === 'low') { bg = '#10b981'; iconText = '🛡️'; }

        const incIcon = L.divIcon({
          className: 'incident-marker',
          html: `
            <div style="background-color: ${bg}; width: 30px; height: 30px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.35); font-size: 14px;">
              ${iconText}
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const marker = L.marker([inc.lat, inc.lng], { icon: incIcon }).addTo(layers);
        
        marker.bindPopup(`
          <div style="font-family: system-ui, sans-serif; font-size: 12px; max-width: 230px; padding: 4px;">
            <div style="font-weight: 700; color: #0f172a; margin-bottom: 2px;">${inc.title}</div>
            <p style="color: #475569; font-size: 11px; margin: 4px 0;">${inc.description}</p>
            <div style="font-size: 10px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 3px;">
              🕒 ${inc.timestamp} • 👍 ${inc.upvotes} upvotes
            </div>
          </div>
        `);
      });
    }

  }, [places, incidents, evStations, transitWays, selectedPlace, activeRoute, showHeatmap, showIncidents, showPlaces, showHotels, showEVStations, showTransitWays]);

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Map Theme & Mode Selector Bar (Top Right) */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md p-1.5 border border-slate-800 shadow-xl text-xs">
        <span className="text-[10px] uppercase font-bold text-slate-400 px-2 hidden sm:inline">Theme:</span>
        <button
          onClick={() => onChangeMapTheme('cyberpunk')}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            mapTheme === 'cyberpunk'
              ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          🌌 Cyber Dark
        </button>
        <button
          onClick={() => onChangeMapTheme('transit_mobility')}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            mapTheme === 'transit_mobility'
              ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          🚦 Transit & Roads
        </button>
        <button
          onClick={() => onChangeMapTheme('daylight')}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            mapTheme === 'daylight'
              ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          ☀️ Daylight
        </button>
      </div>

      {/* Road & Transit Ways Legend (Top Left) */}
      <div className="absolute top-4 left-4 z-10 hidden md:flex flex-col gap-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md p-3 text-xs text-slate-300 border border-slate-800 shadow-xl max-w-xs">
        <div className="font-semibold text-white text-xs tracking-wider uppercase flex items-center justify-between">
          <span>Pune Mobility & Prices</span>
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-block w-3.5 h-1.5 rounded-full bg-emerald-500 border border-white/50"></span>
          <span>Human Walkway (₹0 / Safe Footpaths)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3.5 h-1.5 rounded-full bg-blue-500"></span>
          <span>PMPML Bus Lane (₹10-₹20 / ₹50 Pass)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3.5 h-1.5 rounded-full bg-purple-500"></span>
          <span>Metro Corridor (₹10 - ₹35)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3.5 h-1.5 rounded-full bg-orange-500"></span>
          <span>Vehicle Arterial (Auto / Private Cabs)</span>
        </div>

        <div className="border-t border-slate-800 pt-1.5 mt-1 flex items-center justify-between text-[11px]">
          <span className="text-cyan-400 font-bold">⚡ EV Hub (~₹18/kWh)</span>
          <span className="text-emerald-400 font-bold">🏨 Hotel Stays</span>
        </div>
      </div>

      {/* Quick Report FAB Button on map */}
      <button
        onClick={onOpenReportModal}
        className="absolute bottom-6 left-6 z-10 flex items-center gap-2 rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-rose-500 active:scale-95 transition-all cursor-pointer backdrop-blur-sm border border-rose-400/40"
      >
        <span className="text-base">📢</span>
        <span>Report Incident / Hazard</span>
      </button>
    </div>
  );
};
