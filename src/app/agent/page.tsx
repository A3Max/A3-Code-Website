import Navbar from '@/components/Navbar';
import SimpleFooter from '@/components/SimpleFooter';
import Link from 'next/link';

export default function AgentPage() {
  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 mb-8 hover:border-[#306bff]/50 transition-colors">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
                Experience A3Coder AI Agent in the Cloud
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Unlock the power of dedicated cloud resources with your Elite subscription. Get instant access to a fully-configured development environment with dedicated CPU, memory, and persistent storage. Execute specs immediately without local setup, download generated code and artifacts, and host interactive dashboards—all from your browser.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors">
                  <h3 className="text-2xl font-bold text-[#306bff] mb-2">10Gi</h3>
                  <p className="text-black/70">Storage</p>
                </div>
                <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors">
                  <h3 className="text-2xl font-bold text-[#306bff] mb-2">Dedicated</h3>
                  <p className="text-black/70">Resources</p>
                </div>
                <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors">
                  <h3 className="text-2xl font-bold text-[#306bff] mb-2">Instant</h3>
                  <p className="text-black/70">Execution</p>
                </div>
              </div>

              <Link 
                href="/login" 
                className="inline-block px-8 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
              >
                Login to Get Started
              </Link>
            </div>

            <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 hover:border-[#306bff]/50 transition-colors">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Agent Status</h2>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-red-500" />
                <span className="text-xl text-black/70">Offline</span>
              </div>
              <p className="text-black/50 mt-4">
                Your AI Agent is currently offline. Sign in and upgrade to Elite to activate your cloud agent.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="pt-16">
        <SimpleFooter />
      </div>
    </div>
  );
}
