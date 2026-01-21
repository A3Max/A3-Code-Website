'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ContactSalesModal from '@/components/ContactSalesModal';

export default function PricingPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">Choose Your Plan</h1>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Flexible pricing for spec-driven development. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
      <Footer />
      <ContactSalesModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
}
