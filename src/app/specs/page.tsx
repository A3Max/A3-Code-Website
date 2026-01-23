'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import SimpleFooter from '@/components/SimpleFooter';
import Link from 'next/link';
import SpecCard from '@/components/SpecCard';
import MobileFilters from '@/components/MobileFilters';
import Sidebar from '@/components/Sidebar';
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
  'Other',
  'Machine Learning',
  'DevOps',
  'Security',
  'Testing',
  'Documentation',
  'UI/UX',
  'Mobile',
  'Cloud',
  'Blockchain',
  'IoT',
  'AR/VR',
  'Automation',
  'Analytics',
  'Database',
  'API',
  'Performance',
  'Accessibility',
  'Localization',
  'Monitoring'
];

const sampleSpecs = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
    id: '9',
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
    id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
    id: '15',
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
  const [specs, setSpecs] = useState(sampleSpecs);
  const specsGridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (specsGridRef.current) {
      specsGridRef.current.scrollTop = 0;
    }
  }, [searchQuery, selectedCategories]);

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

  const handleDelete = (id: string) => {
    setSpecs(prev => prev.filter(spec => spec.id !== id));
  };

  const filteredSpecs = sampleSpecs.filter(spec => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(spec.category);
    const matchesSearch = spec.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="h-screen flex flex-col bg-[#e4e4e4]">
      <Navbar />
      
      <main className="flex-1 overflow-y-auto pb-32 max-[707px]:overflow-visible">
        <Sidebar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          categories={categories}
          isAuthenticated={isAuthenticated}
        />
        
        <div className="pl-[280px] max-[707px]:pl-0">
          <div className="sticky top-[72px] z-30 bg-[#e4e4e4] pt-12 max-[707px]:pt-6 overflow-visible">
            <div className="px-6 pb-4 max-[707px]:px-4 max-[707px]:pb-6 overflow-visible">
              <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4 max-[707px]:text-3xl max-[640px]:text-2xl max-[375px]:text-xl">Specs Registry</h1>
              <p className="text-lg text-black/70 max-[707px]:text-base max-[375px]:text-sm max-[707px]:mb-4">
                A curated registry of executable specifications, designed to be run, reused, and improved over time.
              </p>
              <MobileFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                categories={categories}
              />
            </div>
          </div>

          <div className="px-6 pt-20 pb-12 max-[707px]:px-4 z-20">
            <div ref={specsGridRef} className={`grid gap-6 grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-[707px]:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[640px]:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-[375px]:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]`}>
              {filteredSpecs.map((spec, index) => (
                <SpecCard
                  key={index}
                  {...spec}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  isOwner={false}
                  onDelete={handleDelete}
                />
              ))}
            </div>

            {filteredSpecs.length === 0 && (
              <div className="border-t border-black/10 pt-8">
                <p className="text-black/50 text-center py-12">
                  No specs found. Be the first to create one!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <div className="pl-[280px] max-[707px]:pl-0">
        <SimpleFooter />
      </div>
    </div>
  );
}
