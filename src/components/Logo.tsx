import React from 'react';
import '../styles/logo.css';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  return (
    <img
      src={variant === 'dark' ? '/logo.svg' : '/logo-white.svg'}
      alt="NegusWines - From California to Africa"
      className={`h-12 w-auto logo-hover ${className}`}
    />
  );
};

export default Logo;