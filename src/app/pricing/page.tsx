'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimpleFooter from '@/components/SimpleFooter';
import Link from 'next/link';
import ContactSalesModal from '@/components/ContactSalesModal';

export default function PricingPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'elite'>('free');
  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-4 max-[707px]:px-4 max-[707px]:pb-6">
          <div className="text-center mb-16 max-[707px]:mb-8">
            <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 max-[707px]:text-3xl max-[640px]:text-2xl max-[375px]:text-xl">Choose Your Plan</h1>
            <p className="text-xl text-black/70 max-w-2xl mx-auto max-[707px]:text-base max-[375px]:text-sm">
              Flexible pricing for spec-driven development. Start free and scale as you grow.
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 flex flex-col hover:border-[#306bff]/50 transition-colors">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Hobbyist</h2>
                <p className="text-4xl font-bold text-[#1a1a1a] mb-2">Free</p>
                <p className="text-black/60 text-sm">
                  For individuals exploring spec-driven development
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Access to community specs registry</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>A3Code AI Agent VS Code extension</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Download specs</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>View spec definitions</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>View community comments about specs</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Search for specs</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Filter by spec category</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Execute community specs directly in A3Code VS Code desktop</span>
                </li>
              </ul>

              <Link 
                href="/signup" 
                className="block w-full px-6 py-4 text-center font-semibold border border-black text-[#1a1a1a] hover:border-[#306bff] hover:text-[#306bff] transition-colors"
              >
                Get Started Free
              </Link>
            </div>

            <div className="bg-[#e4e4e4] shadow-lg border-2 border-[#306bff] p-8 flex flex-col relative hover:border-[#306bff]/50 transition-colors">
              <div className="absolute -top-4 right-6 bg-[#306bff] text-white text-xs font-bold px-4 py-1">
                MOST POPULAR
              </div>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Professional</h2>
                <p className="text-4xl font-bold text-[#306bff] mb-2">$20<span className="text-lg text-black/60">/month</span></p>
                <p className="text-black/60 text-sm">
                  Create/manage/share specs with AI-powered assistance
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>All Hobbyist features</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Create your own specs</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>AI-powered spec creation and review</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Create private specs</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Edit your specs</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Share specs with the community</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Run specs created by professionals</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Your shared specs will be eligible for ranking</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-[#306bff] flex-shrink-0 mt-1.5" />
                  <span>Execute professional specs directly in A3Code VS Code desktop</span>
                </li>
              </ul>

              <Link 
                href="/signup" 
                className="block w-full px-6 py-4 text-center font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
              >
                Upgrade to Professional
              </Link>
            </div>

            <div className="bg-[#e4e4e4] shadow-lg border-2 border-orange-500 p-8 flex flex-col relative hover:border-orange-500/50 transition-colors">
              <div className="absolute -top-4 right-6 bg-orange-500 text-white text-xs font-bold px-4 py-1">
                PREMIUM
              </div>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Elite</h2>
                <p className="text-4xl font-bold text-orange-500 mb-2">$50<span className="text-lg text-black/60">/month</span></p>
                <p className="text-black/60 text-sm">
                  Full virtual development environment with dedicated resources
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>All Professional features</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>Dedicated cloud CPU, memory, and storage</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>Run your own A3Code AI Agent in the cloud</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>LLM provider key management</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>Run A3Code AI Agent in separate browser tab</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>Download code & artifacts generated by AI Agent</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>Host and share dashboards created by AI Agent</span>
                </li>
                <li className="flex items-start gap-3 text-black/80">
                  <div className="w-2 h-2 bg-orange-500 flex-shrink-0 mt-1.5" />
                  <span>Execute any spec instantly in the A3Code VS Code cloud</span>
                </li>
              </ul>

              <Link 
                href="/signup" 
                className="block w-full px-6 py-4 text-center font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                Upgrade to Elite
              </Link>
            </div>
          </div>

          <div className="hidden md:block max-[649px]:hidden mb-16 overflow-x-auto">
            <table className="w-full min-w-[500px] bg-[#e4e4e4] shadow-lg border border-black/10">
              <thead>
                <tr>
                  <th className="p-3 text-left border-b border-black/10 text-xs font-semibold text-black/70">Feature</th>
                  <th className="p-2 text-center border-b border-black/10 border-l border-black/10">
                    <div className="text-base font-bold text-[#1a1a1a]">Free</div>
                  </th>
                  <th className="p-2 text-center border-b border-black/10 border-l border-black/10 bg-[#306bff]/5 relative">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#306bff] text-white text-[9px] font-bold px-1.5 py-0.5">POPULAR</div>
                    <div className="text-base font-bold text-[#306bff]">Pro</div>
                    <div className="text-lg font-bold text-[#306bff]">$20<span className="text-xs text-black/60">/mo</span></div>
                  </th>
                  <th className="p-2 text-center border-b border-black/10 border-l border-black/10 bg-orange-500/5 relative">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5">PREMIUM</div>
                    <div className="text-base font-bold text-orange-500">Elite</div>
                    <div className="text-lg font-bold text-orange-500">$50<span className="text-xs text-black/60">/mo</span></div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Access to community specs registry</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">A3Code AI Agent VS Code extension</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Download specs</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">View spec definitions</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">View community comments about specs</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Search for specs</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Filter by spec category</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Execute community specs in VS Code desktop</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Create your own specs</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">AI-powered spec creation and review</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Create private specs</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Edit your specs</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Share specs with the community</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Run specs created by professionals</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Your shared specs eligible for ranking</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Execute professional specs in VS Code desktop</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-[#306bff]">✓</span></td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Dedicated cloud CPU, memory, and storage</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Run your own A3Code AI Agent in the cloud</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">LLM provider key management</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Run A3Code AI Agent in separate browser tab</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Download code & artifacts generated by AI Agent</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Host and share dashboards created by AI Agent</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-black/10 text-black/80 max-w-[120px]">Execute any spec instantly in A3Code VS Code cloud</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center">-</td>
                  <td className="p-2 border-b border-black/10 border-l border-black/10 text-center"><span className="text-orange-500">✓</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-2"></td>
                  <td className="p-2 border-l border-black/10">
                    <Link href="/signup" className="block w-full px-2 py-1.5 text-center text-xs font-semibold border border-black text-[#1a1a1a] hover:border-[#306bff] hover:text-[#306bff] transition-colors">
                      Get Started Free
                    </Link>
                  </td>
                  <td className="p-2 border-l border-black/10">
                    <Link href="/signup" className="block w-full px-2 py-1.5 text-center text-xs font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors">
                      Upgrade
                    </Link>
                  </td>
                  <td className="p-2 border-l border-black/10">
                    <Link href="/signup" className="block w-full px-2 py-1.5 text-center text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                      Upgrade
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="md:hidden max-[649px]:block mb-16">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedPlan('free')}
                className={`flex-1 py-2 px-3 text-sm font-semibold transition-colors shadow-lg ${
                  selectedPlan === 'free'
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-[#e4e4e4] text-[#1a1a1a] border border-black/10'
                }`}
              >
                Free
              </button>
              <button
                onClick={() => setSelectedPlan('pro')}
                className={`flex-1 py-2 px-3 text-sm font-semibold transition-colors shadow-lg ${
                  selectedPlan === 'pro'
                    ? 'bg-[#306bff] text-white'
                    : 'bg-[#e4e4e4] text-[#1a1a1a] border border-[#306bff]'
                }`}
              >
                Pro
              </button>
              <button
                onClick={() => setSelectedPlan('elite')}
                className={`flex-1 py-2 px-3 text-sm font-semibold transition-colors shadow-lg ${
                  selectedPlan === 'elite'
                    ? 'bg-orange-500 text-white'
                    : 'bg-[#e4e4e4] text-[#1a1a1a] border border-orange-500'
                }`}
              >
                Elite
              </button>
            </div>

            {selectedPlan === 'free' && (
              <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Hobbyist</h2>
                  <p className="text-3xl font-bold text-[#1a1a1a] mb-1">Free</p>
                  <p className="text-black/60 text-xs">
                    For individuals exploring spec-driven development
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Access to community specs registry</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>A3Code AI Agent VS Code extension</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Download specs</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>View spec definitions</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>View community comments about specs</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Search for specs</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Filter by spec category</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Execute community specs directly in A3Code VS Code desktop</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className="block w-full px-4 py-3 text-center text-sm font-semibold border border-black text-[#1a1a1a] hover:border-[#306bff] hover:text-[#306bff] transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            )}

            {selectedPlan === 'pro' && (
              <div className="bg-[#e4e4e4] shadow-lg border-2 border-[#306bff] p-6 relative">
                <div className="absolute top-0 right-0 bg-[#306bff] text-white text-[10px] font-bold px-3 py-1">
                  MOST POPULAR
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Professional</h2>
                  <p className="text-3xl font-bold text-[#306bff] mb-1">$20<span className="text-sm text-black/60">/month</span></p>
                  <p className="text-black/60 text-xs">
                    Create/manage/share specs with AI-powered assistance
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>All Hobbyist features</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Create your own specs</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>AI-powered spec creation and review</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Create private specs</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Edit your specs</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Share specs with the community</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Run specs created by professionals</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Your shared specs will be eligible for ranking</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-[#306bff] mt-0.5">✓</span>
                    <span>Execute professional specs directly in A3Code VS Code desktop</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className="block w-full px-4 py-3 text-center text-sm font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
                >
                  Upgrade to Professional
                </Link>
              </div>
            )}

            {selectedPlan === 'elite' && (
              <div className="bg-[#e4e4e4] shadow-lg border-2 border-orange-500 p-6 relative">
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1">
                  PREMIUM
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Elite</h2>
                  <p className="text-3xl font-bold text-orange-500 mb-1">$50<span className="text-sm text-black/60">/month</span></p>
                  <p className="text-black/60 text-xs">
                    Full virtual development environment with dedicated resources
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>All Professional features</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>Dedicated cloud CPU, memory, and storage</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>Run your own A3Code AI Agent in the cloud</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>LLM provider key management</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>Run A3Code AI Agent in separate browser tab</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>Download code & artifacts generated by AI Agent</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>Host and share dashboards created by AI Agent</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>Execute any spec instantly in the A3Code VS Code cloud</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className="block w-full px-4 py-3 text-center text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                >
                  Upgrade to Elite
                </Link>
              </div>
            )}
          </div>

          <div className="text-center bg-[#e4e4e4] shadow-lg border border-black/10 p-12 hover:border-[#306bff]/50 transition-colors">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto mb-8">
              Not sure which plan is right for you? Contact our sales team for enterprise solutions and custom requirements.
            </p>
            <button 
              onClick={() => setShowContactModal(true)}
              className="inline-block px-8 py-4 text-lg font-semibold border border-[#306bff] text-[#306bff] hover:bg-[#306bff] hover:text-white transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </main>
      <div className="max-[707px]:hidden">
        <Footer />
      </div>
      <div className="hidden max-[707px]:block">
        <SimpleFooter />
      </div>
      <ContactSalesModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
}
