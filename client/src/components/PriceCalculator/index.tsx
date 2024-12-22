import { useState } from 'react';
import RadioGroup from './RadioGroup';
import LocationSelect from './LocationSelect';
import SquareFootageInput from './SquareFootageInput';
import PriceDisplay from './PriceDisplay';
import { estimatePrice } from '../../services/api';

const LOCATIONS = [
  { id: 'electronic_city', name: 'Electronic City' },
  { id: 'rajaji_nagar', name: 'Rajaji Nagar' },
];

export default function PriceCalculator() {
  const [sqft, setSqft] = useState(1000);
  const [bhk, setBhk] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEstimatePrice = async () => {
    if (!location) {
      alert('Please select a location');
      return;
    }

    setIsLoading(true);
    try {
      const estimatedPrice = await estimatePrice({
        total_sqft: sqft,
        bhk,
        bath: bathrooms,
        location
      });
      setPrice(estimatedPrice);
    } catch (error) {
      console.error('Failed to estimate price:', error);
      alert('Failed to estimate price. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">Area (Square Feet)</h2>
            <SquareFootageInput value={sqft} onChange={setSqft} />
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">Location</h2>
            <LocationSelect
              locations={LOCATIONS}
              value={location}
              onChange={setLocation}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">BHK</h2>
          <RadioGroup
            name="bhk"
            values={[1, 2, 3, 4, 5]}
            defaultValue={2}
            onChange={setBhk}
          />
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">Bath</h2>
          <RadioGroup
            name="bath"
            values={[1, 2, 3, 4, 5]}
            defaultValue={2}
            onChange={setBathrooms}
          />
        </div>

        <button
          onClick={handleEstimatePrice}
          disabled={isLoading}
          className="w-full bg-[#2c7a7b] text-white py-4 rounded-lg font-medium hover:bg-[#2c7a7b]/90 transition-colors disabled:opacity-50 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
        >
          {isLoading ? 'Calculating...' : 'Estimate Price'}
        </button>

        <PriceDisplay price={price} isLoading={isLoading} />
      </div>
    </div>
  );
}