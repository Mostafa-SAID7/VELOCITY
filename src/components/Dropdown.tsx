import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  label?: string;
}

export default function Dropdown({ value, onChange, options, placeholder, className = '', label }: DropdownProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold mb-3 text-gray-300">{label}</label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 pr-10 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all appearance-none cursor-pointer hover:bg-gray-700 hover:border-gray-600 shadow-sm"
          style={{
            backgroundImage: 'none'
          }}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-gray-800 text-white py-2">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-lime-500" />
        </div>
      </div>
    </div>
  );
}
