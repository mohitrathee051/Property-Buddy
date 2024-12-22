interface SquareFootageInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function SquareFootageInput({ value, onChange }: SquareFootageInputProps) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min={100}
      step={100}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
      placeholder="Enter square footage"
    />
  );
}