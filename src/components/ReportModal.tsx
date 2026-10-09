import React, { useState } from 'react';
import { SafetyIncident, IncidentCategory, IncidentSeverity } from '../types/citypulse';
import { Camera, Mic, Sparkles, AlertTriangle, CheckCircle2, X } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReport: (report: SafetyIncident) => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, onSubmitReport }) => {
  const [description, setDescription] = useState('');
  const [locationName, setLocationName] = useState('FC Road, Deccan Gymkhana');
  const [category, setCategory] = useState<IncidentCategory>('safety');
  const [severity, setSeverity] = useState<IncidentSeverity>('high');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  const [hasVoice, setHasVoice] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [nlpAnalysis, setNlpAnalysis] = useState<{
    category: IncidentCategory;
    severity: IncidentSeverity;
    extractedLocation: string;
    extractedTime: string;
    actionableAdvice: string;
    confidence: number;
  } | null>(null);

  if (!isOpen) return null;

  // Run client-side NLP / entity extraction simulation
  const handleAnalyzeText = () => {
    if (!description.trim()) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const lower = description.toLowerCase();
      let detectedCat: IncidentCategory = 'safety';
      let detectedSev: IncidentSeverity = 'medium';
      let detectedLoc = locationName;
      let advice = 'Forwarding alert to Pune Municipal Emergency Dispatch.';

      if (lower.includes('water') || lower.includes('flood') || lower.includes('rain') || lower.includes('river')) {
        detectedCat = 'weather';
        detectedSev = 'critical';
        advice = 'Avoid causeway roads. Alerting PMC Disaster Management.';
      } else if (lower.includes('dark') || lower.includes('light') || lower.includes('pothole') || lower.includes('dig') || lower.includes('wire')) {
        detectedCat = 'infrastructure';
        detectedSev = 'high';
        advice = 'Dispatched to Mahavitaran / PMC Electrical division.';
      } else if (lower.includes('jam') || lower.includes('signal') || lower.includes('traffic') || lower.includes('accident')) {
        detectedCat = 'traffic';
        detectedSev = 'high';
        advice = 'Pune Traffic Police automated notification sent to Ward Chowki.';
      } else if (lower.includes('safe') || lower.includes('patrol') || lower.includes('damini')) {
        detectedCat = 'event';
        detectedSev = 'low';
        advice = 'Verified Safe Zone presence logged into safe route graph.';
      }

      if (lower.includes('swargate')) detectedLoc = 'Swargate Bus Terminal';
      else if (lower.includes('fc road') || lower.includes('fergusson')) detectedLoc = 'FC Road Deccan';
      else if (lower.includes('katraj')) detectedLoc = 'Katraj Bypass Tunnel';
      else if (lower.includes('koregaon')) detectedLoc = 'Koregaon Park North Main Rd';
      else if (lower.includes('hinjawadi')) detectedLoc = 'Hinjawadi Phase 1 Circle';

      setCategory(detectedCat);
      setSeverity(detectedSev);
      setNlpAnalysis({
        category: detectedCat,
        severity: detectedSev,
        extractedLocation: detectedLoc,
        extractedTime: 'Just now (' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ')',
        actionableAdvice: advice,
        confidence: 0.94
      });
      setIsAnalyzing(false);
    }, 600);
  };

  const handleApplyPreset = (text: string, loc: string) => {
    setDescription(text);
    setLocationName(loc);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newIncident: SafetyIncident = {
      id: 'inc-' + Date.now(),
      title: description.slice(0, 50) + (description.length > 50 ? '...' : ''),
      category,
      severity,
      lat: 18.5204 + (Math.random() - 0.5) * 0.04,
      lng: 73.8567 + (Math.random() - 0.5) * 0.04,
      locationName: nlpAnalysis?.extractedLocation || locationName,
      description,
      timestamp: 'Just now',
      verified: true,
      verifiedBy: 'CityPulse AI Automated Triage & Citizen Consensus',
      upvotes: 1,
      hasPhoto,
      hasVoice,
      extractedEntities: {
        location: nlpAnalysis?.extractedLocation || locationName,
        time: nlpAnalysis?.extractedTime || 'Immediate',
        severityScore: severity === 'critical' ? 95 : severity === 'high' ? 80 : 50,
        recommendedAction: nlpAnalysis?.actionableAdvice || 'Exercise situational awareness.'
      }
    };

    onSubmitReport(newIncident);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Report City Incident / Hazard</h2>
            <p className="text-xs text-slate-400">Pune Smart Citizen Network with Real-Time AI NLP Triage</p>
          </div>
        </div>

        {/* Quick presets for testing */}
        <div className="mb-4">
          <div className="text-xs font-medium text-slate-400 mb-2">Try sample real-world Pune scenarios:</div>
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleApplyPreset('Streetlights are completely out for 500m on Katraj bypass near the old tunnel, road is pitch black and dangerous.', 'Katraj Bypass')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
            >
              💡 Dark Street (Katraj)
            </button>
            <button
              type="button"
              onClick={() => handleApplyPreset('Heavy waterlogging at Baba Bhide causeway, Mutha river water is overflowing over bridge parapet.', 'Baba Bhide Causeway')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
            >
              🌊 Flood Alert (Mutha River)
            </button>
            <button
              type="button"
              onClick={() => handleApplyPreset('Massive rush and suspicious pickpocket activity near Swargate bus platform 3, need police deployment.', 'Swargate Bus Station')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
            >
              🚨 Crowd/Theft (Swargate)
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Location / Landmark
            </label>
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              placeholder="e.g. Fergusson College Road, Deccan Gymkhana"
              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Incident Description & Details
              </label>
              <button
                type="button"
                onClick={handleAnalyzeText}
                disabled={isAnalyzing || !description.trim()}
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium disabled:opacity-50 cursor-pointer"
              >
                <Sparkles size={14} className={isAnalyzing ? 'animate-spin' : ''} />
                <span>{isAnalyzing ? 'Analyzing with NLP...' : 'Run NLP Classifier'}</span>
              </button>
            </div>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you see: e.g. open drain, blackout, flooded causeway, harassment, or traffic gridlock..."
              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          {/* Media Attachments: Simulated Camera & Voice Note */}
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => setHasPhoto(!hasPhoto)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                hasPhoto 
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Camera size={15} />
              <span>{hasPhoto ? 'Photo Attached (1)' : 'Attach Geo-Tagged Photo'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (!isRecordingVoice && !hasVoice) {
                  setIsRecordingVoice(true);
                  setTimeout(() => {
                    setIsRecordingVoice(false);
                    setHasVoice(true);
                  }, 1200);
                } else {
                  setHasVoice(false);
                }
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                isRecordingVoice
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse'
                  : hasVoice
                  ? 'bg-purple-500/10 border-purple-500/40 text-purple-400'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Mic size={15} />
              <span>
                {isRecordingVoice ? 'Transcribing Voice Note...' : hasVoice ? 'Voice Note Attached (0:14)' : 'Record Voice Note'}
              </span>
            </button>
          </div>

          {/* AI NLP Pipeline Inspection Result */}
          {nlpAnalysis && (
            <div className="rounded-xl bg-cyan-950/30 border border-cyan-800/50 p-3.5 text-xs text-slate-200 space-y-2">
              <div className="flex items-center justify-between text-cyan-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>NLP Triage Output (NER + Intent Classification)</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                  Confidence: {Math.round(nlpAnalysis.confidence * 100)}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                <div>
                  <span className="text-slate-400">Classified Category: </span>
                  <span className="font-semibold capitalize text-white">{nlpAnalysis.category}</span>
                </div>
                <div>
                  <span className="text-slate-400">Assessed Severity: </span>
                  <span className={`font-semibold uppercase ${
                    nlpAnalysis.severity === 'critical' ? 'text-rose-400' :
                    nlpAnalysis.severity === 'high' ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {nlpAnalysis.severity}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400">Extracted Location: </span>
                  <span className="text-slate-100 font-medium">{nlpAnalysis.extractedLocation}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400">Smart Dispatch: </span>
                  <span className="text-cyan-200">{nlpAnalysis.actionableAdvice}</span>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Override Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as IncidentCategory)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="safety">Safety & Security</option>
                <option value="infrastructure">Infrastructure & Utilities</option>
                <option value="traffic">Traffic & Signals</option>
                <option value="weather">Weather & Flooding</option>
                <option value="event">Safe Corridor / Civic Event</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Severity Level</label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value as IncidentSeverity)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="low">Low (Civic Notice)</option>
                <option value="medium">Medium (Moderate Delay/Risk)</option>
                <option value="high">High (Hazardous)</option>
                <option value="critical">Critical (Immediate Danger)</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 transition-all cursor-pointer"
            >
              <CheckCircle2 size={16} />
              <span>Broadcast to Pune Live Map</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
