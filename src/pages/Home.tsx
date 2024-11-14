import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import WineCard from '../components/WineCard';
import SectionHeading from '../components/SectionHeading';
import { featuredWines } from '../data/wines';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8">
            {t('hero.subtitle')}
          </p>
          <Button size="lg" withArrow>
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Featured Wines Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured California Wines"
            subtitle="Discover our handpicked selection of premium wines from California's finest vineyards"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" withArrow>
              View All Wines
            </Button>
          </div>
        </div>
      </section>

      {/* Trade Routes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Trade Routes"
            subtitle="Connecting California's finest wines with African markets through established trade routes"
          />
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            {/* Map component will be added here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;