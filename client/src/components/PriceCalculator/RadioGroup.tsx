import { useState } from 'react';

interface RadioGroupProps {
  name: string;
  values: number[];
  defaultValue: number;
  onChange: (value: number) => void;
}

export default function RadioGroup({ name, values, defaultValue, onChange }: RadioGroupProps) {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: number) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="switch-field flex gap-2">
      {values.map((value) => (
        <div key={value} className="flex-1">
          <input
            type="radio"
            id={`radio-${name}-${value}`}
            name={name}
            value={value}
            checked={selected === value}
            onChange={() => handleChange(value)}
            className="hidden"
          />
          <label
            htmlFor={`radio-${name}-${value}`}
            className={`
              block text-center px-4 py-3 cursor-pointer rounded-lg transition-all duration-200
              hover:shadow-md transform hover:-translate-y-0.5
              ${selected === value 
                ? 'bg-[#2c7a7b] text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
            `}
          >
            {value}
          </label>
        </div>
      ))}
    </div>
  );
}