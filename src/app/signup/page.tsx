'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const { login } = useAuth();
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
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 hover:border-[#306bff]/50 transition-colors">
            <h1 className="text-3xl font-bold text-[#1a1a1a] mb-6">Create Account</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff]"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff]"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-black/60 mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-[#306bff] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
