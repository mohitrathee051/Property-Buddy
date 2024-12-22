import { Home, TrendingUp, Calculator, Mail, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a365d] text-white fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">PropertyBuddy</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Home
              </a>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
                <Calculator className="w-4 h-4 mr-2" />
                Price Predictor
              </a>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
                <TrendingUp className="w-4 h-4 mr-2" />
                Market Trends
              </a>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
              <Home className="w-4 h-4 mr-2" />
              Home
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
              <Calculator className="w-4 h-4 mr-2" />
              Price Predictor
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
              <TrendingUp className="w-4 h-4 mr-2" />
              Market Trends
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2c7a7b] transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}