'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen bg-[#e4e4e4]">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <div className="flex flex-col items-start mb-2 group">
                <svg 
                  className="h-60 w-auto mb-6"
                  viewBox="0 0 450 250"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <style>
                    {`
                      .a3-rect {
                        fill: black;
                        transition: fill 0.3s ease;
                      }
                      .a3-rect:nth-of-type(odd):hover {
                        fill: #306bff;
                      }
                      .a3-rect:nth-of-type(even):hover {
                        fill: #f97316;
                      }
                      .a3-rect-blue:hover {
                        fill: #306bff;
                      }
                    `}
                  </style>
                  <g>
                    <rect className="a3-rect a3-rect-blue" x="400" y="50" width="50" height="50"/>
                    <rect className="a3-rect" x="250" y="0" width="150" height="50"/>
                    <rect className="a3-rect" x="400" y="150" width="50" height="50"/>
                    <rect className="a3-rect a3-rect-blue" x="250" y="100" width="150" height="50"/>
                    <rect className="a3-rect a3-rect-blue" x="250" y="200" width="150" height="50"/>
                  </g>
                  <g>
                    <rect className="a3-rect a3-rect-blue" x="50" width="100" height="50"/>
                    <rect className="a3-rect a3-rect-blue" x="49.48" y="99.85" width="100.96" height="50"/>
                    <rect className="a3-rect" x="-75" y="125" width="200" height="50" transform="translate(-125 175) rotate(-90)"/>
                    <rect className="a3-rect a3-rect-blue" x="75" y="125" width="200" height="50" transform="translate(25 325) rotate(-90)"/>
                  </g>
                </svg>
                <span className="text-8xl md:text-9xl font-bold text-black tracking-[0.15em]">Coder</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-[#1a1a1a] leading-tight mb-6">
                <span className="text-[#306bff]">Ship Real Code.</span>
                <br />
                From Specs That Actually Work.
              </h2>
              
              <p className="text-xl text-black/80 mb-8 max-w-2xl">
                A3Coder executes high-performing specs from the Spec Registry, turning research and ideas into deterministic implementations.
              </p>

              <div className="mb-12">
                <p className="text-sm text-black/60 mb-4">Powered by APEX:E3 Enterprise AI Technology</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/specs"
                  className="px-8 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors text-center"
                >
                  Browse Specs
                </Link>
                <Link
                  href="/create-spec"
                  className="px-8 py-4 text-lg font-semibold border border-black text-[#1a1a1a] hover:border-[#306bff] hover:text-[#306bff] transition-colors text-center"
                >
                  Create Spec
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 text-lg font-semibold border border-black text-[#1a1a1a] hover:border-[#306bff] hover:text-[#306bff] transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="lg:w-[450px]">
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Featured Specs</h3>
                <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-4 max-h-[600px] overflow-y-auto hover:border-[#306bff]/50 transition-colors">
                  <div className="space-y-4">
                    {highlightSpecs.map((spec, index) => (
                      <div
                        key={index}
                        className={`bg-[#e4e4e4] shadow-md border p-4 hover:border-[#306bff]/50 transition-colors relative ${
                          index === 0 ? 'border-[#306bff]' : 'border-black/10'
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
                              <h4 className="text-sm font-semibold text-[#1a1a1a] leading-tight">{spec.title}</h4>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-1 text-xs font-medium bg-[#306bff]/20 text-[#306bff]">{spec.category}</span>
                              <span className="px-2 py-1 text-xs font-medium bg-black/10 text-black/70">{spec.tier}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-black/50">
                              <span>{spec.date}</span>
                              <span>{spec.duration}</span>
                            </div>
                            <div className="flex items-center gap-4 mt-3 text-xs text-black/60">
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
                          <div className="w-24 h-24 bg-black/10 border border-black/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-black/30 text-xs">Thumb</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="bg-[#e4e4e4] shadow-lg border border-black/10 px-4 py-4 h-32 relative hover:border-[#306bff]/50 transition-colors">
                  <div className="absolute top-0 left-0 bg-[#306bff] px-3 py-0.5">
                    <span className="text-xs text-white font-medium">Compatible with</span>
                  </div>
                  <div className="flex items-center justify-between h-full gap-4 pt-4">
                    <div className="flex flex-col items-center justify-center gap-1 flex-1">
                      <svg className="w-8 h-8 text-black/70" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span className="text-xs text-black/70 font-medium">macOS</span>
                      <span className="text-[10px] text-black/50">Intel & Apple Silicon</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 flex-1">
                      <svg className="w-8 h-8 text-black/70" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                      </svg>
                      <span className="text-xs text-black/70 font-medium">Windows</span>
                      <span className="text-[10px] text-black/50">x64 & ARM</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 flex-1">
                      <svg className="w-8 h-8 text-black/70" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5l-1.41-1.41L6 12l2.59 2.59L10 13.17 7.83 11 10 8.83 8.59 7.41 6 10l2.59 2.59L10 11.17zm4 0l1.41-1.41L18 12l-2.59 2.59L14 13.17 16.17 11 14 8.83l1.41-1.41L18 10l-2.59 2.59L14 11.17z"/>
                      </svg>
                      <span className="text-xs text-black/70 font-medium">Linux</span>
                      <span className="text-[10px] text-black/50">x64 & ARM</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 flex-1">
                      <svg className="w-8 h-8 text-black/70" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span className="text-xs text-black/70 font-medium">NVIDIA DGX</span>
                      <span className="text-[10px] text-black/50">Spark Compatible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-4 group">
              <h2 className="text-3xl font-bold text-[#1a1a1a]">Join</h2>
              <svg 
                className="h-10 w-auto"
                viewBox="0 0 450 250"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>
                  {`
                    .a3-rect {
                      fill: black;
                      transition: fill 0.3s ease;
                    }
                    .a3-rect:nth-of-type(odd):hover {
                      fill: #306bff;
                    }
                    .a3-rect:nth-of-type(even):hover {
                      fill: #f97316;
                    }
                    .a3-rect-blue:hover {
                      fill: #306bff;
                    }
                  `}
                </style>
                <g>
                  <rect className="a3-rect a3-rect-blue" x="400" y="50" width="50" height="50"/>
                  <rect className="a3-rect" x="250" y="0" width="150" height="50"/>
                  <rect className="a3-rect" x="400" y="150" width="50" height="50"/>
                  <rect className="a3-rect a3-rect-blue" x="250" y="100" width="150" height="50"/>
                  <rect className="a3-rect a3-rect-blue" x="250" y="200" width="150" height="50"/>
                </g>
                <g>
                  <rect className="a3-rect a3-rect-blue" x="50" width="100" height="50"/>
                  <rect className="a3-rect a3-rect-blue" x="49.48" y="99.85" width="100.96" height="50"/>
                  <rect className="a3-rect" x="-75" y="125" width="200" height="50" transform="translate(-125 175) rotate(-90)"/>
                  <rect className="a3-rect a3-rect-blue" x="75" y="125" width="200" height="50" transform="translate(25 325) rotate(-90)"/>
                </g>
              </svg>
              <h2 className="text-3xl font-bold text-[#1a1a1a]">communities</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-4 hover:border-[#306bff]/50 transition-colors shadow-lg flex items-center gap-4">
              <svg className="w-8 h-8 text-black/70 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              <div>
                <span className="text-[#1a1a1a] font-medium">Reddit</span>
                <p className="text-xs text-black/50">Join our community</p>
              </div>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-4 hover:border-[#306bff]/50 transition-colors shadow-lg flex items-center gap-4">
              <svg className="w-8 h-8 text-black/70 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
              <div>
                <span className="text-[#1a1a1a] font-medium">Discord</span>
                <p className="text-xs text-black/50">Join our community</p>
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-4 hover:border-[#306bff]/50 transition-colors shadow-lg flex items-center gap-4">
              <svg className="w-8 h-8 text-black/70 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <div>
                <span className="text-[#1a1a1a] font-medium">YouTube</span>
                <p className="text-xs text-black/50">Watch tutorials</p>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-4 hover:border-[#306bff]/50 transition-colors shadow-lg flex items-center gap-4">
              <svg className="w-8 h-8 text-black/70 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div>
                <span className="text-[#1a1a1a] font-medium">LinkedIn</span>
                <p className="text-xs text-black/50">Connect with us</p>
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-4 hover:border-[#306bff]/50 transition-colors shadow-lg flex items-center gap-4">
              <svg className="w-8 h-8 text-black/70 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <div>
                <span className="text-[#1a1a1a] font-medium">Twitter</span>
                <p className="text-xs text-black/50">Follow for updates</p>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-4 hover:border-[#306bff]/50 transition-colors shadow-lg flex items-center gap-4">
              <svg className="w-8 h-8 text-black/70 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <div>
                <span className="text-[#1a1a1a] font-medium">GitHub</span>
                <p className="text-xs text-black/50">View our code</p>
              </div>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Built for real engineering output</h2>
                  <p className="text-lg text-black/70 max-w-2xl mx-auto">
                    Crisp execution primitives, strong defaults, and a registry that rewards correctness — not vibes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#306bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">From Paper to Production</h3>
                        <p className="text-sm text-black/70 mb-4">
                          Load research, PDFs, or designs. A3Code converts them into executable specs and ships real code — end to end.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#306bff] rounded-full" />
                          <span className="text-xs text-[#306bff] font-medium">Production-oriented defaults</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#306bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Plan Before You Execute</h3>
                        <p className="text-sm text-black/70 mb-4">
                          Explore safely in Plan mode, then execute deterministically in Build mode. No wasted runs. No guesswork.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#306bff] rounded-full" />
                          <span className="text-xs text-[#306bff] font-medium">Production-oriented defaults</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#306bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Model Freedom, Zero Lock-in</h3>
                        <p className="text-sm text-black/70 mb-4">
                          Use OpenRouter, Tensorix, or private deployments. Switch models without rewriting workflows.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#306bff] rounded-full" />
                          <span className="text-xs text-[#306bff] font-medium">Production-oriented defaults</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#306bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">MCP-Powered Data Access</h3>
                        <p className="text-sm text-black/70 mb-4">
                          Toggle structured data, filings, and market feeds through a dedicated MCP server when needed.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#306bff] rounded-full" />
                          <span className="text-xs text-[#306bff] font-medium">Production-oriented defaults</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#306bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Executes Like a Senior Engineer</h3>
                        <p className="text-sm text-black/70 mb-4">
                          Runs commands, manages git, executes scripts, and shows diffs before applying changes.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#306bff] rounded-full" />
                          <span className="text-xs text-[#306bff] font-medium">Production-oriented defaults</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#306bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Built for Quantitative Work</h3>
                        <p className="text-sm text-black/70 mb-4">
                          Data pipelines, statistical analysis, and spec-driven experimentation — not demo-ware.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#306bff] rounded-full" />
                          <span className="text-xs text-[#306bff] font-medium">Production-oriented defaults</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Works with leading LLM providers</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Bring your own model — hosted, routed, or private deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="https://tensorix.ai" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#306bff] rounded-none flex items-center justify-center">
                <span className="text-white font-bold text-sm">TX</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a]">Tensorix</h3>
                <p className="text-sm text-black/50">tensorix.ai</p>
              </div>
            </a>

            <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#306bff] rounded-none flex items-center justify-center">
                <span className="text-white font-bold text-sm">OR</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a]">OpenRouter</h3>
                <p className="text-sm text-black/50">openrouter.ai</p>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
