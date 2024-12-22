interface Location {
  id: string;
  name: string;
}

interface LocationSelectProps {
  locations: Location[];
  value: string;
  onChange: (value: string) => void;
}

export default function LocationSelect({ locations, value, onChange }: LocationSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
    >
      <option value="" disabled>Choose a Location</option>
      {locations.map((location) => (
        <option key={location.id} value={location.id}>
          {location.name}
        </option>
      ))}
    </select>
  );
}