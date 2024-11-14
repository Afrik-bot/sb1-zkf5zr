import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import { Wine, Grape, Truck, Users } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Wine, label: 'Premium Wines', value: '50+' },
    { icon: Grape, label: 'Partner Vineyards', value: '25+' },
    { icon: Truck, label: 'African Markets', value: '10+' },
    { icon: Users, label: 'Happy Clients', value: '100+' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-primary-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Vineyard"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-gold-600 mx-auto mb-4" />
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Mission"
            subtitle="To bridge the gap between California's finest wineries and African markets, creating lasting partnerships and delivering exceptional value."
            centered={false}
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-gold-600 mr-2">•</span>
                  <span>Quality and authenticity in every bottle</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-gold-600 mr-2">•</span>
                  <span>Sustainable and ethical trade practices</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-gold-600 mr-2">•</span>
                  <span>Long-term partnerships with wineries and importers</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-gold-600 mr-2">•</span>
                  <span>Cultural understanding and respect</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-4">
                We carefully select premium wines from California's most prestigious regions,
                ensuring each bottle meets our strict quality standards. Our deep understanding
                of both markets allows us to create seamless trade connections.
              </p>
              <p className="text-gray-600">
                Through our established logistics network and trade expertise, we ensure
                reliable and efficient delivery to our partners across Africa, maintaining
                the highest standards of quality throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;