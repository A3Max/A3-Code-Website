'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2">
            <Image 
              src="/A3 spacedSmall.svg" 
              alt="A3" 
              width={40} 
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-white">Coder</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-[#306bff]' : 'text-white hover:text-[#306bff]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/specs" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/specs' ? 'text-[#306bff]' : 'text-white hover:text-[#306bff]'
              }`}
            >
              Specs Registry
            </Link>
            <Link 
              href="/my-specs" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/my-specs' ? 'text-[#306bff]' : 'text-white hover:text-[#306bff]'
              }`}
            >
              My Specs
            </Link>
            <Link 
              href="/agent" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/agent' ? 'text-[#306bff]' : 'text-white hover:text-[#306bff]'
              }`}
            >
              Agent
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/pricing' ? 'text-[#306bff]' : 'text-white hover:text-[#306bff]'
              }`}
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#306bff] rounded flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white">{user.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-sm font-medium text-white hover:text-[#306bff] transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 text-sm font-medium text-white border border-white hover:border-[#306bff] hover:text-[#306bff] transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
            <Link 
              href="/install" 
              className="px-4 py-2 text-sm font-medium bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
            >
              Install Extension
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
