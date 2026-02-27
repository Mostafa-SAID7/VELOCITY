import { ReactNode } from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: ReactNode;
  className?: string;
  required?: boolean;
  name?: string;
  min?: string;
  max?: string;
  label?: string;
}

export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  className = '',
  required = false,
  name,
  min,
  max,
  label
}: InputProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold mb-2 text-gray-300">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          className={`w-full bg-gray-700 text-white ${
            icon ? 'pl-12' : 'pl-4'
          } pr-4 py-3 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-500`}
        />
      </div>
    </div>
  );
}
