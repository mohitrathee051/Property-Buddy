interface PriceDisplayProps {
  price: number | null;
  isLoading: boolean;
}

export default function PriceDisplay({ price, isLoading }: PriceDisplayProps) {
  if (isLoading) {
    return (
      <div className="mt-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#2c7a7b] border-t-transparent"></div>
        <div className="mt-4 text-xl font-medium text-gray-600">Calculating your estimate...</div>
      </div>
    );
  }

  if (price === null) {
    return null;
  }

  return (
    <div className="mt-8 text-center bg-[#2c7a7b]/10 rounded-xl p-6 animate-fade-in">
      <div className="text-sm text-[#2c7a7b] font-medium mb-2">Estimated Price</div>
      <div className="text-4xl font-bold text-[#2c7a7b]">
        {price.toFixed(2)} Lakh
      </div>
    </div>
  );
}