import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '@/services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hi! I'm CJ's AI assistant. Ask me anything about his projects or skills." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (messageOverride?: string) => {
    const messageToSend = messageOverride || input;
    if (!messageToSend.trim()) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: messageToSend }]);
    setIsLoading(true);

    const response = await generateAIResponse(messageToSend);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const suggestions = [
    "Tell me about TaskFlow",
    "What is CJ's tech stack?",
    "How to contact CJ?"
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-lg shadow-primary/30 text-white transition-transform hover:scale-110 active:scale-95"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-36 right-4 z-50 w-80 h-[450px] bg-background border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          <div className="p-4 bg-primary/10 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
              <div>
                <h3 className="text-sm font-bold text-white">CJ's Assistant</h3>
                <p className="text-[10px] text-text-secondary">Ready to help ✨</p>
              </div>
            </div>
            <button onClick={() => setMessages([{ role: 'model', text: "Chat cleared. How can I help you now?" }])} className="text-[10px] text-text-secondary hover:text-white transition-colors">
              Clear
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background/50 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none shadow-sm' 
                      : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center h-8">
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce delay-150"></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length < 4 && !isLoading && (
            <div className="px-4 py-2 flex flex-wrap gap-2 bg-background/80">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300 hover:bg-primary/20 hover:border-primary/30 transition-all active:scale-95"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 bg-surface border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about projects..."
              className="flex-1 bg-black/20 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50"
            />
            <button 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-primary rounded-full text-white disabled:opacity-50 hover:shadow-glow transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
