import { useState } from 'react';
import PriceCalculator from './PriceCalculator';

export default function PricePredictor() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
          Property Price Predictor
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get accurate property price estimates using our advanced prediction model. Enter your property details below.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <PriceCalculator />
      </div>
    </div>
  );
}