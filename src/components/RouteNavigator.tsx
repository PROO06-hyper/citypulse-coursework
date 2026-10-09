import React, { useState } from 'react';
import { RouteOption } from '../types/citypulse';
import { ROUTE_COMPARISONS } from '../data/puneData';
import { ShieldCheck, Zap, AlertCircle, Eye, Lightbulb, ShieldAlert, PhoneCall } from 'lucide-react';

interface RouteNavigatorProps {
  activeRoute: RouteOption | null;
  onSelectRoute: (route: RouteOption) => void;
}

export const RouteNavigator: React.FC<RouteNavigatorProps> = ({
  activeRoute,
  onSelectRoute
}) => {
  const routes = ROUTE_COMPARISONS['station_to_kp'] || [];
  const [sosActive, setSosActive] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Night & Day Navigation</div>
          <h2 className="text-lg font-bold text-white">Safe Route Optimizer (Pune)</h2>
        </div>
        <button
          onClick={() => {
            setSosActive(!sosActive);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
            sosActive 
              ? 'bg-rose-600 text-white animate-bounce' 
              : 'bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20'
          }`}
        >
          <PhoneCall size={14} />
          <span>{sosActive ? 'SOS DISPATCHED (112)' : 'Simulate SOS'}</span>
        </button>
      </div>

      {sosActive && (
        <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/50 text-xs text-rose-200 flex items-start gap-2 animate-pulse">
          <ShieldAlert size={18} className="text-rose-400 mt-0.5 shrink-0" />
          <div>
            <b>Emergency Protocol Activated:</b> Coordinates (18.5289, 73.8744) dispatched to Pune Police Control Room (Dial 112) and Damini Mobile Squad. Nearest police unit at Sassoon Chowki alerted.
          </div>
        </div>
      )}

      {/* Origin & Destination Display */}
      <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800/80">
        <div>
          <span className="text-slate-500 font-semibold block uppercase text-[10px]">Start Point</span>
          <span className="text-white font-medium">Pune Railway Station</span>
        </div>
        <div>
          <span className="text-slate-500 font-semibold block uppercase text-[10px]">Destination</span>
          <span className="text-white font-medium">Koregaon Park (Lane 1)</span>
        </div>
      </div>

      {/* Route Options Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {routes.map((r) => {
          const isSelected = activeRoute?.id === r.id;
          const isSafest = r.type === 'safest';

          return (
            <div
              key={r.id}
              onClick={() => onSelectRoute(r)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all text-xs relative ${
                isSelected
                  ? isSafest
                    ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-rose-950/40 border-rose-500 shadow-lg shadow-rose-500/10'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                  isSafest ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {isSafest ? <ShieldCheck size={12} /> : <Zap size={12} />}
                  {isSafest ? 'Safest Route (Recommended)' : 'Fastest Route (Direct)'}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">{r.distanceKm} km • {r.estimatedMinutes} min</span>
              </div>

              <div className="font-semibold text-white text-sm mb-2">{r.name}</div>

              {/* Safety Score Meter */}
              <div className="mb-3 space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Safety Index</span>
                  <span className={`font-bold ${isSafest ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {r.safetyScore} / 100
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${isSafest ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${r.safetyScore}%` }}
                  />
                </div>
              </div>

              {/* Urban Safety Indicators */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 border-t border-slate-800/80 pt-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <Lightbulb size={13} className="text-amber-400 shrink-0" />
                  <span>Streetlights: <b>{r.lightingScore}%</b></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye size={13} className="text-cyan-400 shrink-0" />
                  <span>CCTV: <b>{r.cctvCoveragePercent}%</b></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                  <span>Police Chowkis: <b>{r.policeStationsOnRoute}</b></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">🏪</span>
                  <span>Active Shops: <b>{r.activeNightShops}</b></span>
                </div>
              </div>

              {/* Highlights & Warnings */}
              {isSafest ? (
                <div className="text-[11px] text-emerald-400/90 space-y-0.5">
                  {r.perks.slice(0, 2).map((p, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span>✓</span> <span>{p}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-[11px] text-rose-400/90 space-y-0.5">
                  {r.warnings.slice(0, 2).map((w, idx) => (
                    <div key={idx} className="flex items-start gap-1">
                      <AlertCircle size={12} className="shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
