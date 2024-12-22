import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import PricePredictor from './components/PricePredictor';
import MarketTrends from './components/MarketTrends';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <PricePredictor />
        <MarketTrends />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;