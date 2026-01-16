'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';

const highlightSpecs = [
  {
    title: '3D Point Particle Video/Audio Visualiser + Timeline with Keyframing [MM]',
    category: 'Audio & Video',
    tier: 'Tier 1',
    date: '15/01/2026',
    duration: '30m',
    likes: 1,
    comments: 0
  },
  {
    title: 'Neural Network Training Pipeline for Image Classification',
    category: 'Model Training',
    tier: 'Tier 2',
    date: '14/01/2026',
    duration: '45m',
    likes: 5,
    comments: 2
  },
  {
    title: 'Real-time Stock Price Forecasting with LSTM',
    category: 'Forecasting',
    tier: 'Tier 1',
    date: '13/01/2026',
    duration: '25m',
    likes: 3,
    comments: 1
  },
  {
    title: 'Multi-Database Integration System with ETL Pipeline',
    category: 'Data Integration',
    tier: 'Tier 3',
    date: '12/01/2026',
    duration: '60m',
    likes: 8,
    comments: 4
  },
  {
    title: 'Automated Literature Review and Summarization Tool',
    category: 'Research',
    tier: 'Tier 2',
    date: '11/01/2026',
    duration: '35m',
    likes: 2,
    comments: 0
  },
  {
    title: 'Physics-based 2D Platformer Game Engine',
    category: '2D / 3D Games',
    tier: 'Tier 2',
    date: '10/01/2026',
    duration: '50m',
    likes: 12,
    comments: 6
  },
  {
    title: 'Smart Contract Generator for ERC-20 Tokens',
    category: 'Smart Contracts',
    tier: 'Tier 1',
    date: '09/01/2026',
    duration: '20m',
    likes: 7,
    comments: 3
  },
  {
    title: 'Video Processing Pipeline with Object Detection',
    category: 'Audio & Video',
    tier: 'Tier 3',
    date: '08/01/2026',
    duration: '55m',
    likes: 4,
    comments: 2
  },
  {
    title: 'E-commerce Website with Payment Integration',
    category: 'Website',
    tier: 'Tier 2',
    date: '07/01/2026',
    duration: '40m',
    likes: 9,
    comments: 5
  },
  {
    title: 'Microservices Architecture with API Gateway',
    category: 'Microservices',
    tier: 'Tier 3',
    date: '06/01/2026',
    duration: '70m',
    likes: 6,
    comments: 3
  }
];

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <Image 
                  src="/A3 spacedSmall.svg" 
                  alt="A3" 
                  width={240} 
                  height={240}
                  className="h-60 w-auto"
                />
                <span className="text-6xl md:text-7xl font-bold text-white">Coder</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
                <span className="text-[#306bff]">Ship Real Code.</span>
                <br />
                From Specs That Actually Work.
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                A3Coder executes high-performing specs from the Spec Registry, turning research and ideas into deterministic implementations.
              </p>

              <div className="mb-12">
                <p className="text-sm text-white/60 mb-4">Powered by APEX:E3 Enterprise AI Technology</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link 
                  href="/specs" 
                  className="px-8 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors text-center"
                >
                  Browse Specs
                </Link>
                <Link 
                  href="/create-spec" 
                  className="px-8 py-4 text-lg font-semibold border border-white text-white hover:border-[#306bff] hover:text-[#306bff] transition-colors text-center"
                >
                  Create Spec
                </Link>
                <Link 
                  href="/pricing" 
                  className="px-8 py-4 text-lg font-semibold border border-white text-white hover:border-[#306bff] hover:text-[#306bff] transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Stop Prompting. Start Executing.
                </h2>
                <p className="text-lg text-white/70 max-w-2xl">
                  Transform your ideas into production-ready code with our spec-driven development platform. No more endless prompting—just clear, executable specifications.
                </p>
              </div>
            </div>

            <div className="lg:w-[450px]">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Specs</h3>
                <div className="bg-white/5 border border-white/10 p-4 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {highlightSpecs.map((spec, index) => (
                      <div 
                        key={index} 
                        className={`bg-white/5 border p-4 hover:border-[#306bff]/50 transition-colors relative ${
                          index === 0 ? 'border-[#306bff]' : 'border-white/10'
                        }`}
                      >
                        {index === 0 && (
                          <div className="absolute top-2 right-2 bg-[#306bff] p-1.5 shadow-lg z-10">
                            <img src="/A3 spacedSmall.svg" alt="A3" className="h-5 w-5" />
                          </div>
                        )}
                        <div className="flex gap-3">
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <h4 className="text-sm font-semibold text-white leading-tight">{spec.title}</h4>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-1 text-xs font-medium bg-[#306bff]/20 text-[#306bff]">{spec.category}</span>
                              <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/70">{spec.tier}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-white/50">
                              <span>{spec.date}</span>
                              <span>{spec.duration}</span>
                            </div>
                            <div className="flex items-center gap-4 mt-3 text-xs text-white/60">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                                {spec.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                </svg>
                                {spec.comments}
                              </span>
                            </div>
                          </div>
                          <div className="w-16 h-16 bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-white/30 text-xs">Thumb</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
