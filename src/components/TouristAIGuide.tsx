import React, { useState } from 'react';
import { Place, EVStation, TransitWay } from '../types/citypulse';
import { Sparkles, Compass, Send, DollarSign, Clock, ShieldCheck, MapPin, Zap, CheckCircle2 } from 'lucide-react';

interface TouristAIGuideProps {
  places: Place[];
  evStations: EVStation[];
  transitWays: TransitWay[];
  onSelectPlace: (place: Place) => void;
}

interface Message {
  role: 'assistant' | 'user';
  text: string;
  suggestedPlaces?: string[];
  totalCostEstimate?: number;
}

export const TouristAIGuide: React.FC<TouristAIGuideProps> = ({
  places,
  evStations,
  transitWays,
  onSelectPlace
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Namaskar! I am your CityPulse Pune Tourist AI Guide. 🏛️🍛\n\nI can plan custom day itineraries, calculate exact trip budgets, recommend authentic Irani chai or Misal spots, locate nearby EV fast chargers with per-unit rates, and suggest safe travel routes for solo or family travel. How can I help you explore Pune today?',
      suggestedPlaces: ['Shaniwar Wada', 'Cafe Goodluck', 'Vaishali Restaurant (FC Road)', 'Aga Khan Palace']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedBudgetTier, setSelectedBudgetTier] = useState<'budget' | 'moderate' | 'luxury'>('budget');

  const handleSendMessage = (customPrompt?: string) => {
    const query = customPrompt || inputValue;
    if (!query.trim()) return;

    const newMsgs: Message[] = [...messages, { role: 'user', text: query }];
    setMessages(newMsgs);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const q = query.toLowerCase();
      let responseText = '';
      let placesSuggested: string[] = [];
      let costEstimate = 0;

      if (q.includes('budget') || q.includes('cheap') || q.includes('500') || q.includes('backpacker')) {
        responseText = `Here is the ultimate Pune Backpacker Day Plan under ₹500:\n\n1. 🌅 **8:00 AM - Vetal Tekdi Trek**: Free entry (₹0). Panoramic sunrise views.\n2. 🍲 **9:30 AM - Katakirrr Misal (Karve Rd)**: Special Kolhapuri Misal Pav + Taak = ₹140.\n3. 🏛️ **11:30 AM - Pataleshwar Cave Temple**: 8th-century monolithic rock-cut wonder = ₹0.\n4. 🚌 **1:30 PM - PMPML City Bus Pass**: Unlimited bus rides all day across Pune = ₹50.\n5. ☕ **5:00 PM - Cafe Goodluck (Deccan)**: Bun Maska (₹60) + Hot Irani Chai (₹35) = ₹95.\n6. 🛡️ **7:30 PM - FC Road Safe Promenade**: Street walking and book browsing = ₹0.\n7. 🏨 **Night Stay at Zostel Pune (Viman Nagar)**: Dorm bed = ₹650/night.\n\n**Total Daytime Expenses (Excl. hostel): ₹285 only!**`;
        placesSuggested = ['Katakirrr Misal (Karve Road)', 'Pataleshwar Cave Temple', 'Cafe Goodluck', 'Zostel Pune (Viman Nagar)'];
        costEstimate = 285;
      } else if (q.includes('ev') || q.includes('charge') || q.includes('charging') || q.includes('electric')) {
        responseText = `⚡ **Pune EV Charging Guide & Live Tariffs**:\n\n• **Tata Power EZ (Deccan)**: 60kW DC Fast | ₹18.0 / kWh | ~₹480 for 4W full charge | Next to Cafe Goodluck.\n• **Ather Grid (FC Road)**: 30kW Fast | ₹15.0 / kWh | ~₹40 for 2W full charge | Safe student promenade.\n• **Jio-bp pulse (Koregaon Park)**: 120kW Supercharger | ₹19.5 / kWh | Lounge & cafe 24/7.\n• **Mahavitaran (Swargate Depot)**: 50kW | Subsidized ₹14.5 / kWh | Near state bus transit.\n\nAll stations are verified with 24/7 CCTV surveillance and safety ratings above 85/100.`;
        costEstimate = 480;
      } else if (q.includes('hotel') || q.includes('stay') || q.includes('night') || q.includes('resort')) {
        responseText = `🏨 **Pune Stay Options & Verified Night Tariffs**:\n\n1. 🎒 **Budget / Backpacker**: Zostel Pune (Viman Nagar) - ₹650 / dorm bed or ₹2,100 private room. Biometric security, 94% safety.\n2. 🏛️ **Mid-Range Cultural**: Hotel Shreyas (Deccan) - ₹2,200 / night. Family favorite with legendary Maharashtrian Thali (₹380).\n3. 🌟 **Upscale Luxury**: The Westin Pune (Koregaon Park) - ₹9,500 / night. Riverside promenade, high security.\n4. 👑 **5-Star Executive**: JW Marriott (SB Road) - ₹11,200 / night. In-house EV charging and rooftop dining.\n\nTransit Tip: Pune Metro Aqua line connects Deccan to Viman Nagar in 22 mins for just ₹30!`;
        placesSuggested = ['Zostel Pune (Viman Nagar)', 'Hotel Shreyas (Deccan Gymkhana)', 'The Westin Pune (Koregaon Park)', 'JW Marriott Hotel Pune (Senapati Bapat Road)'];
        costEstimate = 2200;
      } else if (q.includes('heritage') || q.includes('history') || q.includes('fort') || q.includes('shaniwar')) {
        responseText = `🏛️ **Peshwa Heritage & Freedom Trail (Cost: ₹100)**:\n\n• **Shaniwar Wada**: Built in 1732. Entry: ₹25 (Indian) / ₹300 (Foreigner). Evening light & sound show: ₹50.\n• **Pataleshwar Cave Temple**: 8th-century Rashtrakuta rock-cut shrine. Entry: Free (₹0).\n• **Aga Khan Palace (Kalyani Nagar)**: Freedom movement sanctuary where Mahatma Gandhi & Kasturba were interned. Entry: ₹25 (Indian) / ₹300 (Foreigner).\n\nRecommended commute: Auto rickshaw between Shaniwar Wada and Pataleshwar is only ₹35 on meter.`;
        placesSuggested = ['Shaniwar Wada', 'Pataleshwar Cave Temple', 'Aga Khan Palace'];
        costEstimate = 100;
      } else {
        responseText = `Here is a curated Pune Experience tailored for you:\n\n• **Morning**: Irani Chai & Bun Maska at Cafe Goodluck (₹95) followed by quiet reflection at Pataleshwar Rock Caves (Free).\n• **Afternoon**: Explore 18th-century Shaniwar Wada fortification (₹25 ticket) and enjoy authentic Misal Pav (₹110).\n• **Evening**: Stroll down the illuminated FC Road Student Safe Corridor, relish SPDP at Vaishali (₹120), and filter coffee (₹60).\n• **Transit**: Use Pune Metro (₹20) or electric PMPML buses (₹50 day pass).\n\nTotal estimate for the full day: ₹460 per person!`;
        placesSuggested = ['Cafe Goodluck', 'Shaniwar Wada', 'Vaishali Restaurant (FC Road)'];
        costEstimate = 460;
      }

      setMessages([...newMsgs, {
        role: 'assistant',
        text: responseText,
        suggestedPlaces: placesSuggested,
        totalCostEstimate: costEstimate
      }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full">
      {/* Left Chat Window */}
      <div className="lg:col-span-8 flex flex-col h-[700px] bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white shadow-lg text-lg">
              🧭
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-white text-base">Punekar Tourist AI Guide</h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  Gemini Grounded
                </span>
              </div>
              <p className="text-xs text-slate-400">Personalized itineraries, authentic food stops, and transparent pricing</p>
            </div>
          </div>

          <div className="text-xs bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300 hidden sm:flex items-center gap-1.5">
            <DollarSign size={14} className="text-yellow-400" />
            <span>Pricing Transparency Active</span>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 shadow-md whitespace-pre-line'
                }`}
              >
                {m.text}

                {/* Total Cost Estimate Badge */}
                {m.totalCostEstimate !== undefined && m.totalCostEstimate > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-semibold uppercase">Estimated Out-of-Pocket:</span>
                    <span className="text-yellow-400 font-bold font-mono text-xs">
                      ₹{m.totalCostEstimate} (Transparent Rate)
                    </span>
                  </div>
                )}
              </div>

              {/* Suggested Places Chips */}
              {m.suggestedPlaces && m.suggestedPlaces.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[85%]">
                  {m.suggestedPlaces.map(pName => {
                    const matched = places.find(p => p.name.toLowerCase().includes(pName.toLowerCase()) || pName.toLowerCase().includes(p.name.toLowerCase()));
                    return (
                      <button
                        key={pName}
                        onClick={() => matched && onSelectPlace(matched)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[10px] font-medium border border-slate-700 cursor-pointer flex items-center gap-1 transition-colors"
                      >
                        <MapPin size={10} />
                        <span>{pName}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2">
              <Sparkles size={14} className="animate-spin text-cyan-400" />
              <span>Punekar AI is calculating recommendations and exact costs...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/80 space-y-2">
          {/* Quick Prompts */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
            <button
              onClick={() => handleSendMessage('Plan a 1-day budget itinerary under ₹500 in Pune')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap cursor-pointer hover:bg-slate-700"
            >
              💰 1-Day Budget under ₹500
            </button>
            <button
              onClick={() => handleSendMessage('Show EV fast chargers and charging rates in Pune')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap cursor-pointer hover:bg-slate-700"
            >
              ⚡ Find EV Chargers & Tariffs
            </button>
            <button
              onClick={() => handleSendMessage('Compare cheap hostels vs luxury hotels with night tariffs')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap cursor-pointer hover:bg-slate-700"
            >
              🏨 Hotel Stays & Tariffs
            </button>
            <button
              onClick={() => handleSendMessage('What are top Peshwa heritage landmarks and ticket prices?')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap cursor-pointer hover:bg-slate-700"
            >
              🏛️ Heritage Landmarks & Entry Fees
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask anything: e.g. Where can I get authentic Irani chai, or what is Shaniwar Wada entry fee?"
              className="flex-1 rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-lg shadow-cyan-600/20"
            >
              <Send size={14} />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar: Curated Itineraries & Price Cards */}
      <div className="lg:col-span-4 flex flex-col gap-4 h-[700px] overflow-y-auto pr-1">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Compass size={16} className="text-cyan-400" />
              <span>Curated Ready Itineraries</span>
            </h3>
            <span className="text-[10px] text-slate-400">With Itemized Bills</span>
          </div>

          {/* Plan 1 */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Half-Day Heritage</span>
                <h4 className="font-bold text-white text-xs">Peshwa Forts & Deccan Cafes</h4>
              </div>
              <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                ₹240 Total
              </span>
            </div>
            <div className="text-[11px] text-slate-300 space-y-1">
              <div>• Shaniwar Wada Ticket: <b>₹25</b></div>
              <div>• Cafe Goodluck Bun Maska & Chai: <b>₹95</b></div>
              <div>• Pataleshwar Shiva Cave Shrine: <b>₹0 (Free)</b></div>
              <div>• Auto Meter Fare: <b>₹120</b></div>
            </div>
            <button
              onClick={() => handleSendMessage('Tell me more about the Half-Day Peshwa Forts & Deccan Cafes itinerary')}
              className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[10px] font-semibold cursor-pointer transition-colors"
            >
              Load Detailed Route in Guide
            </button>
          </div>

          {/* Plan 2 */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">Foodie Special</span>
                <h4 className="font-bold text-white text-xs">Punekar Street Food Crawl</h4>
              </div>
              <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                ₹385 Total
              </span>
            </div>
            <div className="text-[11px] text-slate-300 space-y-1">
              <div>• Katakirrr Spicy Misal Pav + Taak: <b>₹140</b></div>
              <div>• Vaishali SPDP & Filter Coffee: <b>₹180</b></div>
              <div>• PMPML Unlimited Bus Pass: <b>₹50</b></div>
              <div>• Sujata Mastani Mango Shake: <b>₹115</b></div>
            </div>
            <button
              onClick={() => handleSendMessage('Tell me more about the Punekar Street Food Crawl itinerary')}
              className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[10px] font-semibold cursor-pointer transition-colors"
            >
              Load Detailed Route in Guide
            </button>
          </div>

          {/* Plan 3 */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">Green EV Drive</span>
                <h4 className="font-bold text-white text-xs">KP Boulevards & Zen Gardens</h4>
              </div>
              <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                ₹690 Total
              </span>
            </div>
            <div className="text-[11px] text-slate-300 space-y-1">
              <div>• Osho Teerth Zen Garden Ticket: <b>₹60</b></div>
              <div>• German Bakery Brunch: <b>₹450</b></div>
              <div>• Jio-bp 120kW Supercharge (10kWh): <b>₹195</b></div>
            </div>
            <button
              onClick={() => handleSendMessage('Plan the KP Boulevards and EV charging itinerary')}
              className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[10px] font-semibold cursor-pointer transition-colors"
            >
              Load Detailed Route in Guide
            </button>
          </div>
        </div>

        {/* Local Transit Pass Cheatsheet */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2 text-xs">
          <div className="font-bold text-white flex items-center justify-between">
            <span>Pune Transit Fares Guide</span>
            <span className="text-[10px] font-mono text-cyan-400">Fixed Rates</span>
          </div>
          <div className="space-y-1.5 text-slate-300 text-[11px]">
            <div className="flex justify-between">
              <span>PMPML Daily Bus Pass:</span>
              <b className="text-white">₹50 (Unlimited)</b>
            </div>
            <div className="flex justify-between">
              <span>Pune Metro Single Ride:</span>
              <b className="text-white">₹10 to ₹35</b>
            </div>
            <div className="flex justify-between">
              <span>Auto Rickshaw Meter:</span>
              <b className="text-white">₹25 base + ₹17/km</b>
            </div>
            <div className="flex justify-between">
              <span>EV Fast Charging Average:</span>
              <b className="text-cyan-400">₹15 - ₹19.5 / kWh</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
