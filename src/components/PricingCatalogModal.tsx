import React, { useState } from 'react';
import { PUNE_PLACES, EV_STATIONS, TRANSIT_WAYS } from '../data/puneData';
import { DollarSign, Zap, Hotel, Utensils, Landmark, Car, Bus, Check, ArrowRight } from 'lucide-react';

export const PricingCatalogModal: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'heritage' | 'food' | 'hotel' | 'ev' | 'transit'>('all');

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-slate-100 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
            <DollarSign size={14} />
            <span>Pune Comprehensive Pricing Directory</span>
          </div>
          <h2 className="text-2xl font-black text-white mt-1">100% Transparent City Tariffs & Rates</h2>
          <p className="text-xs text-slate-400 mt-1">
            Exact pricing for heritage tickets, cafe menus, hotel night stays, EV charging per kWh, and local transit.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 text-xs">
          {[
            { id: 'all', label: 'All Rates', icon: '💎' },
            { id: 'hotel', label: 'Hotels & Stays', icon: '🏨' },
            { id: 'ev', label: 'EV Charging', icon: '⚡' },
            { id: 'food', label: 'Food & Cafes', icon: '🍲' },
            { id: 'heritage', label: 'Heritage Tickets', icon: '🏛️' },
            { id: 'transit', label: 'Transit & Fares', icon: '🚌' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer border ${
                filter === f.id
                  ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300 shadow-md'
                  : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span className="mr-1">{f.icon}</span> {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: HOTELS & STAYS */}
      {(filter === 'all' || filter === 'hotel') && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 uppercase tracking-wider">
            <Hotel size={16} />
            <span>Hotels & Nearby Stays (Per-Night Tariffs)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {PUNE_PLACES.filter(p => p.category === 'hotel').map(hotel => (
              <div
                key={hotel.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h4 className="font-bold text-white text-sm">{hotel.name}</h4>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono text-[11px] shrink-0">
                      ₹{hotel.pricing.perNightRate}/night
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3">{hotel.tagline}</p>
                  
                  <div className="space-y-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800/80 mb-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Room Options:</span>
                    {hotel.pricing.signatureItems?.map(item => (
                      <div key={item.name} className="flex justify-between text-[11px]">
                        <span className="text-slate-300">{item.name}</span>
                        <b className="text-yellow-400 font-mono">₹{item.price}</b>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-[10px] text-emerald-400 font-medium pt-1 border-t border-slate-800">
                  🛡️ Safety Rating: {hotel.safetyScore}% • CCTV Guarded
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: EV CHARGING STATIONS */}
      {(filter === 'all' || filter === 'ev') && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wider">
            <Zap size={16} />
            <span>EV Charging Stations (Tariff per kWh)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {EV_STATIONS.map(ev => (
              <div
                key={ev.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <div>
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">{ev.operator}</span>
                      <h4 className="font-bold text-white text-sm">{ev.name}</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-black font-mono text-xs shrink-0">
                      ₹{ev.costPerKwh} / kWh
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2.5">{ev.locationDetails}</p>

                  <div className="grid grid-cols-2 gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800 mb-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block">4W Full Charge:</span>
                      <b className="text-yellow-400 font-mono">~₹{ev.avgFullChargeCost4W}</b>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">2W Full Charge:</span>
                      <b className="text-yellow-400 font-mono">~₹{ev.avgFullChargeCost2W}</b>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-slate-800 flex justify-between text-[10px] text-slate-300">
                      <span>Power: <b>{ev.powerKw} kW Fast</b></span>
                      <span>Ports: <b className="text-emerald-400">{ev.availablePorts}/{ev.totalPorts} Free</b></span>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Connectors: {ev.connectorTypes[0]}</span>
                  <span className="text-emerald-400 font-semibold">24/7 Monitored</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: HERITAGE & MONUMENTS */}
      {(filter === 'all' || filter === 'heritage') && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-amber-400 uppercase tracking-wider">
            <Landmark size={16} />
            <span>Heritage & Monuments (Entry Tickets & Passes)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {PUNE_PLACES.filter(p => p.category === 'heritage' || p.category === 'nature').map(place => (
              <div
                key={place.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h4 className="font-bold text-white text-sm">{place.name}</h4>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold font-mono text-xs">
                      {place.pricing.entryFeeIndian === 0 ? 'Free Entry' : `₹${place.pricing.entryFeeIndian}`}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2.5">{place.tagline}</p>

                  <div className="space-y-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800 mb-2">
                    {place.pricing.signatureItems?.map(item => (
                      <div key={item.name} className="flex justify-between text-[11px]">
                        <span className="text-slate-300">{item.name}</span>
                        <b className="text-yellow-400 font-mono">{item.price === 0 ? 'Free' : `₹${item.price}`}</b>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 italic">{place.pricing.notes}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 4: FOOD & CAFES */}
      {(filter === 'all' || filter === 'food') && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-rose-400 uppercase tracking-wider">
            <Utensils size={16} />
            <span>Food & Cafes (Menu Items & Avg for Two)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {PUNE_PLACES.filter(p => p.category === 'food').map(food => (
              <div
                key={food.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h4 className="font-bold text-white text-sm">{food.name}</h4>
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold font-mono text-[11px] shrink-0">
                      ₹{food.avgCostForTwo} for 2
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2.5">{food.tagline}</p>

                  <div className="space-y-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800 mb-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Top Punekar Dishes:</span>
                    {food.pricing.signatureItems?.map(dish => (
                      <div key={dish.name} className="flex justify-between text-[11px]">
                        <span className="text-slate-300">{dish.name}</span>
                        <b className="text-yellow-400 font-mono">₹{dish.price}</b>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">{food.pricing.notes}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 5: LOCAL TRANSIT & TRAVELING FARES */}
      {(filter === 'all' || filter === 'transit') && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-indigo-400 uppercase tracking-wider">
            <Bus size={16} />
            <span>Local Transit & Travel Corridors (Humans & Vehicles)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {TRANSIT_WAYS.map(tw => (
              <div
                key={tw.id}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">
                        {tw.type.replace('_', ' ')}
                      </span>
                      <h4 className="font-bold text-white text-sm">{tw.name}</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-bold font-mono text-xs shrink-0">
                      {tw.fareOrCost}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 my-2">{tw.notes}</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-900 p-2 rounded-lg border border-slate-800">
                    <span>From: <b>{tw.startPoint}</b></span>
                    <span>To: <b>{tw.endPoint}</b></span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between text-[11px]">
                  <span>Crowd Density: <b className="text-amber-400">{tw.crowdLevel}</b></span>
                  <span>Safety: <b className="text-emerald-400">{tw.safetyScore}%</b></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
