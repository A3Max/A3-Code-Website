import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AgentPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <div className="bg-white/5 border border-white/10 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experience A3Coder AI Agent in the Cloud
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Unlock the power of dedicated cloud resources with your Elite subscription. Get instant access to a fully-configured development environment with dedicated CPU, memory, and persistent storage. Execute specs immediately without local setup, download generated code and artifacts, and host interactive dashboards—all from your browser.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-2xl font-bold text-[#306bff] mb-2">10Gi</h3>
                  <p className="text-white/70">Storage</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-2xl font-bold text-[#306bff] mb-2">Dedicated</h3>
                  <p className="text-white/70">Resources</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-2xl font-bold text-[#306bff] mb-2">Instant</h3>
                  <p className="text-white/70">Execution</p>
                </div>
              </div>

              <Link 
                href="/login" 
                className="inline-block px-8 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
              >
                Login to Get Started
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Agent Status</h2>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-red-500" />
                <span className="text-xl text-white/70">Offline</span>
              </div>
              <p className="text-white/50 mt-4">
                Your AI Agent is currently offline. Sign in and upgrade to Elite to activate your cloud agent.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
