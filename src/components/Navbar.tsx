'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e4e4e4] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex flex-col items-center group my-auto">
                <svg 
                  className="h-8 w-auto"
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
                <span className="text-lg font-bold text-black tracking-[0.15em] leading-none -mb-0.5">Coder</span>
              </Link>
            </div>

            <div className="hidden min-[1030px]:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/specs" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/specs' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              Specs Registry
            </Link>
            <Link 
              href="/my-specs" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/my-specs' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              My Specs
            </Link>
            <Link 
              href="/agent" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/agent' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              Agent
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/pricing' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              Pricing
            </Link>
            <Link 
              href="/install" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/install' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              Install
            </Link>
            <Link 
              href="/docs" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/docs' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              Docs
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/about' ? 'text-[#306bff]' : 'text-[#1a1a1a] hover:text-[#306bff]'
              }`}
            >
              About
            </Link>
          </div>

          <div className="hidden min-[1030px]:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#306bff] flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[#1a1a1a]">{user.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="text-sm font-medium text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-sm font-medium text-[#1a1a1a] hover:text-[#306bff] transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 text-sm font-medium text-[#1a1a1a] border border-black hover:border-[#306bff] hover:text-[#306bff] transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
            <Link 
              href="/install-extension" 
              className="px-4 py-2 text-sm font-medium bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
            >
              Install Extension
            </Link>
          </div>
          <button
            className="min-[1030px]:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div 
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 min-[1030px]:hidden ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Mobile Menu Drawer */}
    <div 
      className={`fixed inset-y-0 right-0 z-40 w-[280px] bg-[#e4e4e4] border-l border-black/10 transition-transform duration-300 ease-in-out min-[1030px]:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6 pt-24">
        <div className="flex flex-col gap-4">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/specs" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Specs Registry
          </Link>
          <Link 
            href="/my-specs" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Specs
          </Link>
          <Link 
            href="/agent" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agent
          </Link>
          <Link 
            href="/pricing" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/install" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Install
          </Link>
          <Link 
            href="/docs" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Docs
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>
        <div className="border-t border-black/10 pt-4 mt-4">
          {user ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#306bff] flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-[#1a1a1a]">{user.name}</span>
              </div>
              <button 
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-black/60 hover:text-[#1a1a1a] transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="block text-sm font-medium text-[#1a1a1a] hover:text-[#306bff] transition-colors mb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="block px-4 py-2 text-sm font-medium text-[#1a1a1a] border border-black hover:border-[#306bff] hover:text-[#306bff] transition-colors mb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
          <Link 
            href="/install-extension" 
            className="block px-4 py-2 text-sm font-medium bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Install Extension
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
