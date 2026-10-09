import React, { useState } from 'react';
import { AREA_METRICS } from '../data/puneData';
import { AreaMetric } from '../types/citypulse';
import { Shield, Sparkles, DollarSign, Car, Navigation, AlertCircle, CheckCircle } from 'lucide-react';

export const AreaComparator: React.FC = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([
    'Koregaon Park (KP)',
    'Fergusson College (FC) Road / Deccan',
    'Swargate / Market Yard'
  ]);

  const toggleArea = (name: string) => {
    if (selectedAreas.includes(name)) {
      if (selectedAreas.length > 1) {
        setSelectedAreas(selectedAreas.filter(a => a !== name));
      }
    } else {
      if (selectedAreas.length < 3) {
        setSelectedAreas([...selectedAreas, name]);
      } else {
        setSelectedAreas([selectedAreas[1], selectedAreas[2], name]);
      }
    }
  };

  const activeMetrics: AreaMetric[] = AREA_METRICS.filter(m => selectedAreas.includes(m.areaName));

  return (
    <div className="flex flex-col gap-6 p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Urban Analytics & Benchmarks</div>
          <h2 className="text-xl font-bold text-white">Best vs. Worst Places Comparator (Pune)</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Compare key Pune zones side-by-side across safety, cleanliness, affordability, traffic congestion, and accessibility.
          </p>
        </div>
      </div>

      {/* Select Wards Buttons */}
      <div>
        <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
          Select Up to 3 Neighborhoods to Compare:
        </div>
        <div className="flex flex-wrap gap-2">
          {AREA_METRICS.map((area) => {
            const isSelected = selectedAreas.includes(area.areaName);
            return (
              <button
                key={area.areaName}
                onClick={() => toggleArea(area.areaName)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {isSelected ? '✓ ' : '+ '}
                {area.areaName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {activeMetrics.map((m) => {
          return (
            <div
              key={m.areaName}
              className="rounded-xl bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-white text-base leading-snug">{m.areaName}</h3>
                  <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                    PIN {m.pincode}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">{m.description}</p>

                {/* Metric Bars */}
                <div className="space-y-3 text-xs">
                  {/* Safety */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Shield size={13} className="text-emerald-400" /> Safety Score
                      </span>
                      <span className={`font-bold ${m.safetyScore >= 85 ? 'text-emerald-400' : m.safetyScore >= 70 ? 'text-amber-400' : 'text-rose-400'}`}>
                        {m.safetyScore}/100
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${m.safetyScore >= 85 ? 'bg-emerald-500' : m.safetyScore >= 70 ? 'bg-amber-500' : 'bg-rose-500'}`}
                        style={{ width: `${m.safetyScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Cleanliness */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Sparkles size={13} className="text-cyan-400" /> Cleanliness Index
                      </span>
                      <span className="font-bold text-cyan-400">{m.cleanlinessScore}/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500 rounded-full"
                        style={{ width: `${m.cleanlinessScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Affordability */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <DollarSign size={13} className="text-yellow-400" /> Affordability
                      </span>
                      <span className="font-bold text-yellow-400">
                        {m.affordabilityScore >= 75 ? 'Budget-Friendly' : m.affordabilityScore >= 50 ? 'Moderate' : 'Premium'}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${m.affordabilityScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Traffic Congestion (Lower is better) */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Car size={13} className="text-orange-400" /> Congestion Burden
                      </span>
                      <span className={`font-bold ${m.trafficCongestionScore >= 80 ? 'text-rose-400' : 'text-slate-300'}`}>
                        {m.trafficCongestionScore}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${m.trafficCongestionScore >= 80 ? 'bg-rose-500' : 'bg-orange-500'}`}
                        style={{ width: `${m.trafficCongestionScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Accessibility */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Navigation size={13} className="text-indigo-400" /> Transit Connectivity
                      </span>
                      <span className="font-bold text-indigo-400">{m.accessibilityScore}/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${m.accessibilityScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges and Cautions */}
              <div className="space-y-2 border-t border-slate-800/80 pt-3">
                <div className="text-[11px]">
                  <span className="text-slate-400 block font-semibold mb-1">Ideal For:</span>
                  <div className="flex flex-wrap gap-1">
                    {m.recommendedFor.map((r, idx) => (
                      <span key={idx} className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded text-[10px]">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] bg-rose-950/20 border border-rose-900/30 p-2 rounded-lg text-rose-300/90">
                  <div className="font-semibold flex items-center gap-1 text-rose-300 text-[10px] uppercase">
                    <AlertCircle size={11} /> Caution Notice:
                  </div>
                  <div>{m.cautions[0]}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
