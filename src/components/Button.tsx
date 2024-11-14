import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  onClick,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-300';
  
  const variants = {
    primary: 'bg-gold-600 text-white hover:bg-gold-700',
    secondary: 'bg-primary-600 text-white hover:bg-primary-700',
    outline: 'border-2 border-gold-600 text-gold-600 hover:bg-gold-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
};

export default Button;