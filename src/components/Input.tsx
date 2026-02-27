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
  // Generate a unique id if name is provided
  const inputId = name ? `input-${name}` : undefined;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          className={`w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
            icon ? 'pl-12' : 'pl-4'
          } pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-400 dark:hover:border-gray-500`}
        />
      </div>
    </div>
  );
}
