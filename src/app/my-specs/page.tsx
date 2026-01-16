'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import MySpecCard from '@/components/MySpecCard';

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

const mySpecs = [
  {
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

  const filteredSpecs = mySpecs.filter(spec => {
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
            <h1 className="text-4xl font-bold text-white mb-4">My Specs</h1>
            <p className="text-lg text-white/70">
              Your personal collection of designed and remixed specifications.
            </p>
          </div>

          <div className="fixed top-[72px] left-0 right-0 h-[24px] bg-black z-[35] pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="sticky top-24 bg-black z-40 pb-6 mb-6">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search your specs..."
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-30">
                {filteredSpecs.map((spec, index) => (
                  <MySpecCard 
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
                    No specs found. Start creating or remixing specs to build your collection!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
