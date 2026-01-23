'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import SimpleFooter from '@/components/SimpleFooter';
import Link from 'next/link';
import MySpecCard from '@/components/MySpecCard';
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

const mySpecs = [
  {
    id: '1',
    title: 'Custom Neural Network Training Pipeline, This is a text line to create a three lined card title and this shouldbe enough',
    category: 'Model Training',
    tier: 'Tier 2',
    date: '15/01/2026',
    duration: '45m',
    likes: 5,
    comments: 2,
    thumbnail: 'neural'
  },
  {
    id: '2',
    title: 'Remixed: Real-time Stock Price Forecasting with LSTM',
    category: 'Forecasting',
    tier: 'Tier 1',
    date: '14/01/2026',
    duration: '25m',
    likes: 3,
    comments: 1,
    thumbnail: 'stock'
  },
  {
    id: '3',
    title: 'Personal Portfolio Website Generator',
    category: 'Website',
    tier: 'Tier 2',
    date: '13/01/2026',
    duration: '40m',
    likes: 9,
    comments: 5,
    thumbnail: 'portfolio'
  },
  {
    id: '4',
    title: 'Remixed: Physics-based 2D Platformer Game Engine',
    category: '2D / 3D Games',
    tier: 'Tier 2',
    date: '12/01/2026',
    duration: '50m',
    likes: 12,
    comments: 6,
    thumbnail: 'game'
  },
  {
    id: '5',
    title: 'Custom Smart Contract Generator for ERC-20 Tokens',
    category: 'Smart Contracts',
    tier: 'Tier 1',
    date: '11/01/2026',
    duration: '20m',
    likes: 7,
    comments: 3,
    thumbnail: 'contract'
  },
  {
    id: '6',
    title: 'Remixed: Video Processing Pipeline with Object Detection',
    category: 'Audio & Video',
    tier: 'Tier 3',
    date: '10/01/2026',
    duration: '55m',
    likes: 4,
    comments: 2,
    thumbnail: 'video'
  },
  {
    id: '7',
    title: 'Multi-Database Integration System with ETL Pipeline',
    category: 'Data Integration',
    tier: 'Tier 3',
    date: '09/01/2026',
    duration: '60m',
    likes: 8,
    comments: 4,
    thumbnail: 'database'
  },
  {
    id: '8',
    title: 'Automated Literature Review and Summarization Tool',
    category: 'Research',
    tier: 'Tier 2',
    date: '08/01/2026',
    duration: '35m',
    likes: 2,
    comments: 0,
    thumbnail: 'research'
  },
  {
    id: '9',
    title: '3D Point Particle Video/Audio Visualiser + Timeline with Keyframing',
    category: 'Audio & Video',
    tier: 'Tier 1',
    date: '07/01/2026',
    duration: '30m',
    likes: 1,
    comments: 0,
    thumbnail: 'visualizer'
  },
  {
    id: '10',
    title: 'E-commerce Website with Payment Integration',
    category: 'Website',
    tier: 'Tier 2',
    date: '06/01/2026',
    duration: '40m',
    likes: 9,
    comments: 5,
    thumbnail: 'ecommerce'
  },
  {
    id: '11',
    title: 'Microservices Architecture with API Gateway',
    category: 'Microservices',
    tier: 'Tier 3',
    date: '05/01/2026',
    duration: '70m',
    likes: 6,
    comments: 3,
    thumbnail: 'microservices'
  },
  {
    id: '12',
    title: 'Portfolio Optimization Algorithm for Crypto Assets',
    category: 'Financial',
    tier: 'Tier 2',
    date: '04/01/2026',
    duration: '30m',
    likes: 3,
    comments: 1,
    thumbnail: 'portfolio'
  },
  {
    id: '13',
    title: 'Natural Language Processing for Sentiment Analysis',
    category: 'Model Training',
    tier: 'Tier 2',
    date: '03/01/2026',
    duration: '45m',
    likes: 11,
    comments: 7,
    thumbnail: 'nlp'
  },
  {
    id: '14',
    title: 'Time Series Analysis for Sales Prediction',
    category: 'Forecasting',
    tier: 'Tier 1',
    date: '02/01/2026',
    duration: '25m',
    likes: 2,
    comments: 0,
    thumbnail: 'timeseries'
  },
  {
    id: '15',
    title: '3D Racing Game with Multiplayer Support',
    category: '2D / 3D Games',
    tier: 'Tier 3',
    date: '01/01/2026',
    duration: '80m',
    likes: 15,
    comments: 8,
    thumbnail: 'racing'
  },
  {
    id: '16',
    title: 'DeFi Yield Farming Strategy Optimizer',
    category: 'Financial',
    tier: 'Tier 3',
    date: '31/12/2025',
    duration: '65m',
    likes: 10,
    comments: 4,
    thumbnail: 'defi'
  },
  {
    id: '17',
    title: 'Custom Chatbot with RAG Implementation',
    category: 'Model Training',
    tier: 'Tier 2',
    date: '30/12/2025',
    duration: '50m',
    likes: 8,
    comments: 3,
    thumbnail: 'chatbot'
  },
  {
    id: '18',
    title: 'Real-time Data Visualization Dashboard',
    category: 'Website',
    tier: 'Tier 2',
    date: '29/12/2025',
    duration: '35m',
    likes: 6,
    comments: 2,
    thumbnail: 'dashboard'
  },
  {
    id: '19',
    title: 'Automated Testing Framework for Web Applications',
    category: 'Research',
    tier: 'Tier 1',
    date: '28/12/2025',
    duration: '30m',
    likes: 4,
    comments: 1,
    thumbnail: 'testing'
  },
  {
    id: '20',
    title: 'Blockchain-based Supply Chain Tracker',
    category: 'Smart Contracts',
    tier: 'Tier 3',
    date: '27/12/2025',
    duration: '75m',
    likes: 9,
    comments: 5,
    thumbnail: 'blockchain'
  },
  {
    id: '21',
    title: 'Image Recognition API with TensorFlow',
    category: 'Model Training',
    tier: 'Tier 2',
    date: '26/12/2025',
    duration: '40m',
    likes: 7,
    comments: 3,
    thumbnail: 'image'
  },
  {
    id: '22',
    title: 'Voice Assistant with Speech Recognition',
    category: 'Audio & Video',
    tier: 'Tier 2',
    date: '25/12/2025',
    duration: '45m',
    likes: 5,
    comments: 2,
    thumbnail: 'voice'
  },
  {
    id: '23',
    title: 'Social Media Analytics Platform',
    category: 'Data Integration',
    tier: 'Tier 2',
    date: '24/12/2025',
    duration: '55m',
    likes: 8,
    comments: 4,
    thumbnail: 'social'
  },
  {
    id: '24',
    title: 'Mobile App Backend with GraphQL',
    category: 'Microservices',
    tier: 'Tier 2',
    date: '23/12/2025',
    duration: '50m',
    likes: 6,
    comments: 3,
    thumbnail: 'mobile'
  }
];

export default function MySpecsPage() {
  const { isAuthenticated } = useAuth();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [specs, setSpecs] = useState(mySpecs);
  const specsGridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  console.log('MySpecsPage rendered, isAuthenticated:', isAuthenticated);

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

  const filteredSpecs = specs.filter(spec => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(spec.category);
    const matchesSearch = spec.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDelete = (id: string) => {
    setSpecs(prev => prev.filter(spec => spec.id !== id));
  };

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
          showCommunityCard={true}
        />
        
        <div className="pl-[280px] max-[707px]:pl-0">
          <div className="sticky top-[72px] z-30 bg-[#e4e4e4] pt-12 max-[707px]:pt-6 overflow-visible">
            <div className="px-6 pb-4 max-[707px]:px-4 max-[707px]:pb-6 overflow-visible">
              <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4 max-[707px]:text-3xl max-[640px]:text-2xl max-[375px]:text-xl">My Specs</h1>
              <p className="text-lg text-black/70 max-[707px]:text-base max-[375px]:text-sm max-[707px]:mb-4">
                Your personal collection of designed and remixed specifications.
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
            <div ref={specsGridRef} className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-[707px]:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[640px]:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-[375px]:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              {filteredSpecs.map((spec, index) => (
                <MySpecCard
                  key={spec.id}
                  {...spec}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  isOwner={true}
                  onDelete={handleDelete}
                />
              ))}
            </div>

            {filteredSpecs.length === 0 && (
              <div className="border-t border-black/10 pt-8">
                <p className="text-black/50 text-center py-12">
                  No specs found. Start creating or remixing specs to build your collection!
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
