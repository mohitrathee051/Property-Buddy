import { useState, useEffect } from 'react';
import { Home, TrendingUp, Calculator, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-[#1a365d]' : 'text-white'
            }`}>
              PropertyBuddy
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {[
                { icon: Home, label: 'Home' },
                { icon: Calculator, label: 'Price Predictor' },
                { icon: TrendingUp, label: 'Market Trends' },
                { icon: Mail, label: 'Contact' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(' ', '-')}`}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#2c7a7b] hover:text-white ${
                    scrolled ? 'text-[#1a365d]' : 'text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </a>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled ? 'text-[#1a365d]' : 'text-white'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { icon: Home, label: 'Home' },
              { icon: Calculator, label: 'Price Predictor' },
              { icon: TrendingUp, label: 'Market Trends' },
              { icon: Mail, label: 'Contact' }
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(' ', '-')}`}
                className="flex items-center px-4 py-3 text-[#1a365d] hover:bg-[#2c7a7b] hover:text-white rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-4 h-4 mr-3" />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}