import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, HelpCircle, ChevronRight, CheckCircle2, Shield, Zap, Map, BarChart2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  quickAction?: {
    label: string;
    tabTarget?: string;
  };
}

interface CityPulseChatbotProps {
  onNavigateTab: (tab: 'map' | 'routes' | 'comparator' | 'feed' | 'tourist' | 'pricing' | 'blueprint') => void;
  onOpenReportModal: () => void;
  onToggleSOS: () => void;
}

export const CityPulseChatbot: React.FC<CityPulseChatbotProps> = ({
  onNavigateTab,
  onOpenReportModal,
  onToggleSOS
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 Welcome to CityPulse! I am your Platform Assistant. I'm here to show you how to use every feature on this website:\n\n• 🗺️ How to explore the map, EV hubs, and road types\n• 🛡️ How to calculate safest night walking routes\n• 📢 How to report civic hazards with AI triage\n• 💰 Where to find transparent prices for hotels, EV charging, and food\n• 📊 How to compare Pune neighborhoods\n\nWhat would you like to learn first?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query
    };

    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      const q = query.toLowerCase();
      let reply = '';
      let action: ChatMessage['quickAction'] = undefined;

      if (q.includes('safe route') || q.includes('route') || q.includes('night walk')) {
        reply = "🛡️ **How to Use the Safest Route Optimizer:**\n\n1. Click the **'Safest Route Optimizer'** tab.\n2. You'll see a side-by-side comparison between the **Fastest Route** (direct but unlit riverbank) and the **Safest Route** (illuminated arterial via Bund Garden & Koregaon Park).\n3. Check the **Safety Index (94/100)**, **LED lighting score (96%)**, CCTV density (92%), and active police chowkis.\n4. Click either card to instantly project the route polyline onto the Pune map!";
        action = { label: 'Go to Safest Route Optimizer', tabTarget: 'routes' };
      } else if (q.includes('ev') || q.includes('charging') || q.includes('electric')) {
        reply = "⚡ **How to Find EV Stations & Rates:**\n\n1. Open the **'Map & City Exploration'** tab.\n2. Ensure the **'EV Hubs'** toggle is enabled (top left).\n3. Look for the cyan ⚡ lightning markers on the map.\n4. Click any marker to view **Power (kW)**, **Connector types (CCS2/Type-2)**, **Available ports**, and exact **Cost per kWh (e.g. ₹18/kWh)** and full 4W/2W charge estimates!";
        action = { label: 'Explore EV Stations on Map', tabTarget: 'map' };
      } else if (q.includes('report') || q.includes('hazard') || q.includes('incident')) {
        reply = "📢 **How Citizen Incident Reporting Works:**\n\n1. Click the red **'Report Incident'** button on the map or header.\n2. Type what you see (e.g. 'Streetlights dark on Katraj bypass').\n3. Click **'Run NLP Classifier'** to watch the AI automatically detect category, severity, and extract the landmark!\n4. Attach a photo or voice note, then click **'Broadcast to Pune Live Map'** to alert other citizens in real time!";
        action = { label: 'Open Incident Report Modal' };
      } else if (q.includes('price') || q.includes('hotel') || q.includes('cost') || q.includes('ticket')) {
        reply = "💰 **How to View Transparent Pricing:**\n\nEvery landmark, stay, and service has explicit pricing:\n• **Hotels**: Per-night tariffs are badged on map pins (e.g. Zostel ₹650, Hotel Shreyas ₹2,200, The Westin ₹9,500).\n• **Heritage**: Entry fees (Shaniwar Wada ₹25 Indian / ₹300 Foreigner, Aga Khan ₹25, Pataleshwar ₹0 Free).\n• **EV Charging**: Per kWh rates displayed on cyan pins (~₹18/kWh).\n• **Transit**: Metro (₹10-₹35) and PMPML Day Pass (₹50) are listed in the Pricing Directory tab!";
        action = { label: 'View Comprehensive Price Directory', tabTarget: 'pricing' };
      } else if (q.includes('compare') || q.includes('best') || q.includes('worst') || q.includes('ward')) {
        reply = "📊 **How to Compare Pune Neighborhoods:**\n\n1. Open the **'Best vs. Worst Places'** tab.\n2. Select up to 3 localities (e.g. Koregaon Park, FC Road, Swargate, Hinjawadi).\n3. View comparative progress bars across 5 key dimensions: Safety Score, Cleanliness Index, Affordability, Traffic Congestion, and Transit Accessibility!";
        action = { label: 'Open Ward Comparator', tabTarget: 'comparator' };
      } else if (q.includes('theme') || q.includes('map') || q.includes('roads')) {
        reply = "🎨 **How to Switch Map Themes & View Roads:**\n\nOn the top-right corner of the map, tap any theme button:\n• **🌌 Cyber Dark**: Sleek nighttime aesthetic with illuminated heatmaps.\n• **🚦 Transit & Roads**: High-contrast mode highlighting human pedestrian walkways (green), PMPML bus routes (blue), metro lines (purple), and vehicle highways (orange).\n• **☀️ Daylight**: Crisp daytime OpenStreetMap tiles.";
        action = { label: 'Open Map Explorer', tabTarget: 'map' };
      } else {
        reply = "Here are the core sections of CityPulse you can explore:\n\n1. **Map & City Exploration**: Live interactive Pune map with custom themes, EV chargers, hotels, and human vs vehicle corridors.\n2. **Safest Route Optimizer**: Compares safest illuminated corridors against fastest shortcuts.\n3. **Tourist AI Guide**: Itinerary generator with transparent itemized bills.\n4. **Best vs Worst Places**: Side-by-side ward benchmark matrix.\n5. **Citizen Reports**: Live crowdsourced incident stream triaged by AI NLP.\n6. **Price Directory**: Itemized costs of everything in the city.\n\nClick any topic below or ask me directly!";
      }

      setMessages(prev => [...prev, {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: reply,
        quickAction: action
      }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-3 text-white font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-cyan-300/40"
      >
        <span className="text-lg">🤖</span>
        <span className="text-xs tracking-wide">How to Use Website</span>
        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
      </button>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-96 max-w-[calc(100vw-32px)] h-[540px] rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-100 animate-fade-in">
          {/* Header */}
          <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-bold text-sm">
                AI
              </div>
              <div>
                <h3 className="font-bold text-white text-xs">CityPulse Website Assistant</h3>
                <p className="text-[10px] text-slate-400">Interactive Guide & Feature Navigator</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[90%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-sm'
                      : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-sm whitespace-pre-line'
                  }`}
                >
                  {m.text}

                  {m.quickAction && (
                    <div className="mt-2.5 pt-2 border-t border-slate-800">
                      <button
                        onClick={() => {
                          if (m.quickAction?.tabTarget) {
                            onNavigateTab(m.quickAction.tabTarget as any);
                          } else {
                            onOpenReportModal();
                          }
                          setIsOpen(false);
                        }}
                        className="w-full py-1.5 px-2.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-bold text-[11px] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>{m.quickAction.label}</span>
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Guidance Prompt Chips */}
          <div className="p-2 border-t border-slate-800 bg-slate-950/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[10px]">
            <button
              onClick={() => handleSend('How do I choose the safest night route?')}
              className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap cursor-pointer"
            >
              🛡️ Safest Route Guide
            </button>
            <button
              onClick={() => handleSend('How to find EV stations and charging rates?')}
              className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap cursor-pointer"
            >
              ⚡ EV Charging Guide
            </button>
            <button
              onClick={() => handleSend('How do I submit an incident report with AI?')}
              className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap cursor-pointer"
            >
              📢 How to Report
            </button>
            <button
              onClick={() => handleSend('How to switch map themes and see vehicle vs human roads?')}
              className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap cursor-pointer"
            >
              🎨 Map Themes & Roads
            </button>
          </div>

          {/* Chat Input */}
          <div className="p-2.5 border-t border-slate-800 bg-slate-950 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask how any feature works..."
              className="flex-1 rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white transition-colors cursor-pointer"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
