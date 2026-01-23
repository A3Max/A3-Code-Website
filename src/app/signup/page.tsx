'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import PulsingGrid from '@/components/PulsingGrid';

export default function SignupPage() {
  const { login, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    login({
      name: 'Demo User',
      email: 'demo@example.com',
    });
    
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <PulsingGrid />
      <Navbar />
      
      <main className="pt-24 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Create Account</h1>
          <p className="text-lg text-black/60">Sign up to get started with A3Code</p>
        </div>

        <div className="max-w-md mx-auto px-6">
          <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 hover:border-[#306bff]/50 transition-colors relative">
            <div className="absolute w-3 h-3 bg-[#306bff] animate-snake transition-all duration-300" />
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Create Account</h2>
            <p className="text-sm text-black/60 mb-6">Fill in the form to create your account</p>

            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full px-6 py-4 text-lg font-semibold bg-white border border-black/10 text-[#1a1a1a] hover:border-[#306bff]/50 transition-colors flex items-center justify-center gap-3 shadow-lg mb-6"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#e4e4e4] text-black/60">OR SIGN UP WITH EMAIL</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#e4e4e4] border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] shadow-lg"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#e4e4e4] border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] shadow-lg"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#e4e4e4] border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] shadow-lg"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-[#e4e4e4] border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] shadow-lg"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-[#e4e4e4] border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] shadow-lg"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors shadow-lg"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-black/60">
            Already have an account?{' '}
            <Link href="/login" className="text-[#306bff] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
