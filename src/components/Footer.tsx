import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <Logo variant="light" className="mb-3" />
            <p className="text-gray-400 text-xs">
              Bridging continents through exceptional wine trade
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-gray-400 hover:text-gold-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500">About</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-gold-500">Our Wines</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500">Export Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>1142 Florida Street, Suite 5</li>
              <li>San Francisco, CA 94110</li>
              <li>contact@neguswines.com</li>
              <li>+1(415)-678-7296</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-gold-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-xs italic">
          <p>&copy; {new Date().getFullYear()} NegusWines (A Negus Group Inc. company). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;