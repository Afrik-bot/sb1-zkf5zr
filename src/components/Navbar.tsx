import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-gold-600">
              {t('navigation.home')}
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-gold-600">
              {t('navigation.about')}
            </Link>
            <Link to="/products" className="text-gray-900 hover:text-gold-600">
              {t('navigation.products')}
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-gold-600">
              {t('navigation.services')}
            </Link>
            <Link to="/blog" className="text-gray-900 hover:text-gold-600">
              {t('navigation.blog')}
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-gold-600">
              {t('navigation.contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-900 hover:text-gold-600"
            >
              <Globe className="h-5 w-5 mr-1" />
              {i18n.language.toUpperCase()}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gold-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-900 hover:text-gold-600"
            >
              {t('navigation.home')}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-900 hover:text-gold-600"
            >
              {t('navigation.about')}
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-900 hover:text-gold-600"
            >
              {t('navigation.products')}
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-900 hover:text-gold-600"
            >
              {t('navigation.services')}
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-900 hover:text-gold-600"
            >
              {t('navigation.blog')}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-900 hover:text-gold-600"
            >
              {t('navigation.contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 text-gray-900 hover:text-gold-600"
            >
              <Globe className="h-5 w-5 mr-1" />
              {i18n.language.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;