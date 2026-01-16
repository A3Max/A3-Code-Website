'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import SpecCard from '@/components/SpecCard';
import { useAuth } from '@/contexts/AuthContext';

const categories = [
  'All',
  'Model Training',
  'Forecasting',
  'Data Integration',
  'Research',
  '2D / 3D Games',
  'Smart Contracts',
  'Audio & Video',
  'Website',
  'Microservices',
  'Financial',
  'Other'
];

const sampleSpecs = [
  {
    title: '3D Point Particle Video/Audio Visualiser + Timeline with Keyframing [MM]',
    category: 'Audio & Video',
    tier: 'Tier 1',
    date: '15/01/2026',
    duration: '30m',
    likes: 1,
    comments: 0,
    thumbnail: 'visualizer'
  },
  {
    title: 'Neural Network Training Pipeline for Image Classification',
    category: 'Model Training',
    tier: 'Tier 2',
    date: '14/01/2026',
    duration: '45m',
    likes: 5,
    comments: 2,
    thumbnail: 'neural'
  },
  {
    title: 'Real-time Stock Price Forecasting with LSTM',
    category: 'Forecasting',
    tier: 'Tier 1',
    date: '13/01/2026',
    duration: '25m',
    likes: 3,
    comments: 1,
    thumbnail: 'stock'
  },
  {
    title: 'Multi-Database Integration System with ETL Pipeline',
    category: 'Data Integration',
    tier: 'Tier 3',
    date: '12/01/2026',
    duration: '60m',
    likes: 8,
    comments: 4,
    thumbnail: 'database'
  },
  {
    title: 'Automated Literature Review and Summarization Tool',
    category: 'Research',
    tier: 'Tier 2',
    date: '11/01/2026',
    duration: '35m',
    likes: 2,
    comments: 0,
    thumbnail: 'research'
  },
  {
    title: 'Physics-based 2D Platformer Game Engine',
    category: '2D / 3D Games',
    tier: 'Tier 2',
    date: '10/01/2026',
    duration: '50m',
    likes: 12,
    comments: 6,
    thumbnail: 'game'
  },
  {
    title: 'Smart Contract Generator for ERC-20 Tokens',
    category: 'Smart Contracts',
    tier: 'Tier 1',
    date: '09/01/2026',
    duration: '20m',
    likes: 7,
    comments: 3,
    thumbnail: 'contract'
  },
  {
    title: 'Video Processing Pipeline with Object Detection',
    category: 'Audio & Video',
    tier: 'Tier 3',
    date: '08/01/2026',
    duration: '55m',
    likes: 4,
    comments: 2,
    thumbnail: 'video'
  },
  {
    title: 'E-commerce Website with Payment Integration',
    category: 'Website',
    tier: 'Tier 2',
    date: '07/01/2026',
    duration: '40m',
    likes: 9,
    comments: 5,
    thumbnail: 'ecommerce'
  },
  {
    title: 'Microservices Architecture with API Gateway',
    category: 'Microservices',
    tier: 'Tier 3',
    date: '06/01/2026',
    duration: '70m',
    likes: 6,
    comments: 3,
    thumbnail: 'microservices'
  },
  {
    title: 'Portfolio Optimization Algorithm for Crypto Assets',
    category: 'Financial',
    tier: 'Tier 2',
    date: '05/01/2026',
    duration: '30m',
    likes: 3,
    comments: 1,
    thumbnail: 'portfolio'
  },
  {
    title: 'Natural Language Processing for Sentiment Analysis',
    category: 'Model Training',
    tier: 'Tier 2',
    date: '04/01/2026',
    duration: '45m',
    likes: 11,
    comments: 7,
    thumbnail: 'nlp'
  },
  {
    title: 'Time Series Analysis for Sales Prediction',
    category: 'Forecasting',
    tier: 'Tier 1',
    date: '03/01/2026',
    duration: '25m',
    likes: 2,
    comments: 0,
    thumbnail: 'timeseries'
  },
  {
    title: '3D Racing Game with Multiplayer Support',
    category: '2D / 3D Games',
    tier: 'Tier 3',
    date: '02/01/2026',
    duration: '80m',
    likes: 15,
    comments: 8,
    thumbnail: 'racing'
  },
  {
    title: 'DeFi Yield Farming Strategy Optimizer',
    category: 'Financial',
    tier: 'Tier 3',
    date: '01/01/2026',
    duration: '65m',
    likes: 10,
    comments: 4,
    thumbnail: 'defi'
  }
];

export default function SpecsPage() {
  const { isAuthenticated } = useAuth();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleCategory = (category: string) => {
    if (category === 'All') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(prev => 
        prev.includes(category) 
          ? prev.filter(c => c !== category)
          : [...prev, category]
      );
    }
  };

  const filteredSpecs = sampleSpecs.filter(spec => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(spec.category);
    const matchesSearch = spec.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8 relative z-[45]">
            <h1 className="text-4xl font-bold text-white mb-4">Specs Registry</h1>
            <p className="text-lg text-white/70">
              A curated registry of executable specifications, designed to be run, reused, and improved over time.
            </p>
          </div>

          <div className="fixed top-[72px] left-0 right-0 h-[24px] bg-black z-[35] pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className={`${isAuthenticated ? 'w-full' : 'flex-1'}`}>
              <div className="sticky top-24 bg-black z-40 pb-6 mb-6">
                {isAuthenticated && (
                  <div className="mb-6">
                    <Link 
                      href="/create-spec" 
                      className="block w-full px-6 py-3 text-center font-bold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors h-[52px] flex items-center justify-center"
                    >
                      Create Spec
                    </Link>
                  </div>
                )}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search specs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 h-[52px] bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#306bff]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">FILTER BY CATEGORY</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          (category === 'All' && selectedCategories.length === 0) || selectedCategories.includes(category)
                            ? 'bg-[#306bff] text-white'
                            : 'bg-white/5 text-white hover:bg-white/10'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`grid gap-6 relative z-30 ${isAuthenticated ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {filteredSpecs.map((spec, index) => (
                  <SpecCard 
                    key={index} 
                    {...spec} 
                    index={index} 
                    hoveredIndex={hoveredIndex}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                ))}
              </div>

              {filteredSpecs.length === 0 && (
                <div className="border-t border-white/10 pt-8">
                  <p className="text-white/50 text-center py-12">
                    No specs found. Be the first to create one!
                  </p>
                </div>
              )}
            </div>

            {!isAuthenticated && (
              <div className="lg:w-96">
                <Link 
                  href="/create-spec" 
                  className="block w-full px-6 py-3 text-center font-bold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors mb-6 sticky top-24 h-[52px] flex items-center justify-center"
                >
                  Create Spec
                </Link>
                
                <div className="bg-white/5 border border-white/10 p-6 mb-6 sticky top-[172px]">
                  <div className="flex items-baseline gap-2 mb-4">
                    <img src="/A3 spacedSmall.svg" alt="A3" className="h-8" />
                    <h3 className="text-xl font-bold text-white">Coder Community</h3>
                  </div>
                  <p className="text-white/70 mb-6">
                    Sign in to explore our curated registry of executable specifications. View specs, download them, and discover how A3Coder can help you build faster. Upgrade to Elite to execute specs frictionlessly in the cloud with dedicated resources.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-[#306bff]" />
                      Browse Specs
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-[#306bff]" />
                      Download Specs
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-[#306bff]" />
                      Cloud Execution
                    </li>
                  </ul>
                  <Link 
                    href="/login" 
                    className="block w-full px-6 py-3 text-center font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
                  >
                    Sign In to Get Started
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
