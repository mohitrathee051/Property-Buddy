import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80"
          alt="Modern house"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 to-[#2c7a7b]/80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Predict Your Property's Value
        </h1>
        <p className="text-xl text-white/90 mb-8 animate-fade-in-delay">
          Get instant, accurate property valuations powered by advanced AI
        </p>
        
        
      </div>
    </div>
  );
}