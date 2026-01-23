'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerConfig } from '@/config/footer';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      return;
    }

    if (email.length > 254) {
      setStatus('error');
      setMessage('Email is too long');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(footerConfig.newsletter.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="bg-[#e4e4e4] border-t border-black/10">
      <div className="px-6 py-8 max-[767px]:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 max-[767px]:gap-4">
          <div>
            <div className="flex items-baseline gap-2 mb-4 max-[767px]:mb-3">
              <Image
                src="/BlackA3.svg"
                alt="A3"
                width={40}
                height={40}
                className="h-10 w-auto max-[767px]:h-8"
              />
              <span className="text-xl font-bold text-[#1a1a1a] max-[767px]:text-lg">Coder</span>
            </div>
            <p className="text-sm text-black/60 mb-4 max-[767px]:text-xs max-[767px]:mb-3">
              Ship Real Code. From Specs That Actually Work.
            </p>
            {footerConfig.company.registrationNumber && (
              <p className="text-xs text-black/50 max-[767px]:hidden">
                {footerConfig.company.registrationNumber}
              </p>
            )}
            {footerConfig.company.vatNumber && (
              <p className="text-xs text-black/50 max-[767px]:hidden">
                VAT: {footerConfig.company.vatNumber}
              </p>
            )}
            {footerConfig.company.jurisdiction && (
              <p className="text-xs text-black/50 max-[767px]:hidden">
                {footerConfig.company.jurisdiction}
              </p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4 max-[767px]:text-xs max-[767px]:mb-3">Navigation</h3>
            <ul className="space-y-2 max-[767px]:space-y-1">
              {footerConfig.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors max-[767px]:text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4 max-[767px]:text-xs max-[767px]:mb-3">Support</h3>
            <ul className="space-y-2 max-[767px]:space-y-1">
              {footerConfig.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors max-[767px]:text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerConfig.contact.page && (
                <li>
                  <Link
                    href={footerConfig.contact.page}
                    className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors max-[767px]:text-xs"
                  >
                    Contact
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4 max-[767px]:text-xs max-[767px]:mb-3">Connect</h3>
            <div className="flex gap-4 mb-6 max-[767px]:gap-3 max-[767px]:mb-4">
              {footerConfig.social.linkedin && (
                <a
                  href={footerConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  <svg className="w-5 h-5 max-[767px]:w-4 max-[767px]:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {footerConfig.social.twitter && (
                <a
                  href={footerConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  <svg className="w-5 h-5 max-[767px]:w-4 max-[767px]:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {footerConfig.social.github && (
                <a
                  href={footerConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  <svg className="w-5 h-5 max-[767px]:w-4 max-[767px]:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {footerConfig.social.youtube && (
                <a
                  href={footerConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  <svg className="w-5 h-5 max-[767px]:w-4 max-[767px]:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
            </div>

            {footerConfig.contact.email && (
              <a
                href={`mailto:${footerConfig.contact.email}`}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors block mb-2 max-[767px]:text-xs max-[767px]:mb-1"
              >
                {footerConfig.contact.email}
              </a>
            )}
            {footerConfig.contact.phone && (
              <a
                href={`tel:${footerConfig.contact.phone}`}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors block mb-2 max-[767px]:text-xs max-[767px]:mb-1"
              >
                {footerConfig.contact.phone}
              </a>
            )}
            {footerConfig.contact.address && (
              <p className="text-sm text-black/60 max-[767px]:text-xs">
                {footerConfig.contact.address}
              </p>
            )}

            {footerConfig.newsletter.enabled && (
              <div className="mt-6 max-[767px]:mt-4">
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4 max-[767px]:text-xs max-[767px]:mb-3">Subscribe to our newsletter</h3>
                <form onSubmit={handleNewsletterSubmit}>
                  <div className="flex gap-2 max-[395px]:flex-col max-[767px]:gap-1.5">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-white border border-black/10 text-[#1a1a1a] placeholder:text-black/50 focus:outline-none focus:border-[#306bff] transition-colors shadow-lg max-[767px]:px-3 max-[767px]:py-1.5 max-[767px]:text-xs"
                      disabled={status === 'loading'}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-6 py-2 bg-[#306bff] text-white font-medium hover:bg-[#2555e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg max-[767px]:px-4 max-[767px]:py-1.5 max-[767px]:text-xs"
                    >
                      {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  {message && (
                    <p className={`text-sm mt-2 ${status === 'success' ? 'text-green-600' : 'text-red-600'} max-[767px]:text-xs`}>
                      {message}
                    </p>
                  )}
                  <p className="text-xs text-black/50 mt-2 max-[767px]:text-[10px]">
                    By subscribing, you agree to our{' '}
                    <Link href={footerConfig.legal.privacy} className="hover:text-[#1a1a1a] transition-colors">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-black/10 pt-4 pr-12 max-[707px]:pt-3 max-[707px]:pr-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-[707px]:gap-2">
            <p className="text-sm text-black/60 max-[707px]:text-xs">
              © {currentYear} {footerConfig.company.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-[707px]:gap-2">
              <Link 
                href={footerConfig.legal.privacy}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors max-[707px]:text-xs"
              >
                Privacy Policy
              </Link>
              <Link 
                href={footerConfig.legal.terms}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors max-[707px]:text-xs"
              >
                Terms of Service
              </Link>
              <Link 
                href={footerConfig.legal.cookies}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors max-[707px]:text-xs"
              >
                Cookie Policy
              </Link>
              {footerConfig.legal.disclaimer && (
                <Link 
                  href={footerConfig.legal.disclaimer}
                  className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors max-[707px]:text-xs"
                >
                  Disclaimer
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
