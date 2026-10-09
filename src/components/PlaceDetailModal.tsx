import React from 'react';
import { Place } from '../types/citypulse';
import { X, Star, Shield, Sparkles, MapPin, Clock, DollarSign, Camera, CheckCircle2, Tag } from 'lucide-react';

interface PlaceDetailModalProps {
  place: Place | null;
  onClose: () => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({ place, onClose }) => {
  if (!place) return null;

  const isHotel = place.category === 'hotel';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700"
        >
          <X size={18} />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-1">
              {place.category}
            </span>
            <h2 className="text-2xl font-black text-white">{place.name}</h2>
            <p className="text-xs text-slate-300 italic">{place.tagline}</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
              <Star className="text-amber-400 shrink-0" size={16} />
              <div>
                <span className="text-[10px] text-slate-400 block">Rating</span>
                <span className="font-bold text-white">{place.rating} / 5</span>
              </div>
            </div>

            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
              <Shield className="text-emerald-400 shrink-0" size={16} />
              <div>
                <span className="text-[10px] text-slate-400 block">Safety Score</span>
                <span className="font-bold text-emerald-400">{place.safetyScore}/100</span>
              </div>
            </div>

            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
              <Sparkles className="text-cyan-400 shrink-0" size={16} />
              <div>
                <span className="text-[10px] text-slate-400 block">Cleanliness</span>
                <span className="font-bold text-cyan-400">{place.cleanlinessScore}/100</span>
              </div>
            </div>

            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
              <DollarSign className="text-yellow-400 shrink-0" size={16} />
              <div>
                <span className="text-[10px] text-slate-400 block">{isHotel ? 'Per Night' : 'Avg for Two'}</span>
                <span className="font-bold text-yellow-400">
                  {isHotel ? `₹${place.pricing.perNightRate || place.avgCostForTwo}` : `₹${place.avgCostForTwo}`}
                </span>
              </div>
            </div>
          </div>

          {/* Transparent Itemized Pricing Breakdown */}
          <div className="p-4 rounded-xl bg-slate-950 border border-yellow-500/30 space-y-2.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-yellow-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <Tag size={13} />
                <span>Verified Price Breakdown & Tariffs</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">No Hidden Costs</span>
            </div>

            <div className="space-y-1.5">
              {place.pricing.signatureItems && place.pricing.signatureItems.length > 0 ? (
                place.pricing.signatureItems.map(item => (
                  <div key={item.name} className="flex justify-between items-center text-slate-200 border-b border-slate-900 pb-1">
                    <span>{item.name}</span>
                    <b className="text-yellow-400 font-mono">{item.price === 0 ? 'Free (₹0)' : `₹${item.price}`}</b>
                  </div>
                ))
              ) : (
                <div className="flex justify-between items-center text-slate-200">
                  <span>Standard Entry / Tariff:</span>
                  <b className="text-yellow-400 font-mono">₹{place.avgCostForTwo}</b>
                </div>
              )}
            </div>

            {place.pricing.notes && (
              <p className="text-[11px] text-slate-400 italic pt-1">{place.pricing.notes}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Overview</h3>
            <p className="text-sm text-slate-200 leading-relaxed">{place.description}</p>
          </div>

          {/* History & Culture */}
          {place.history && (
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 leading-relaxed">
              <span className="font-bold text-amber-300 block mb-1">📜 History & Cultural Significance:</span>
              {place.history}
            </div>
          )}

          {/* Local Insider Tip */}
          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200">
            <span className="font-bold text-cyan-300 block mb-1">💡 Punekar Insider Tip:</span>
            {place.localTip}
          </div>

          {/* Timing & Crowd Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-slate-800 pt-4">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock size={15} className="text-indigo-400" />
              <span>Best Visiting Window: <b>{place.bestTimeToVisit}</b></span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin size={15} className="text-rose-400" />
              <span>Current Crowd: <b>{place.crowdLevel} Footfall</b></span>
            </div>
          </div>

          {/* Security Features */}
          <div className="flex flex-wrap gap-2 pt-2">
            {place.cctvCovered && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <CheckCircle2 size={12} /> Monitored by CCTV
              </span>
            )}
            {place.wellLitStreet && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <CheckCircle2 size={12} /> High Lumen Streetlighting
              </span>
            )}
            {place.tags.map(t => (
              <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-400">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
