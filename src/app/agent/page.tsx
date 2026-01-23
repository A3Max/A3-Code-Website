import Navbar from '@/components/Navbar';
import SimpleFooter from '@/components/SimpleFooter';
import Link from 'next/link';

export default function AgentPage() {
  return (
    <div className="min-h-screen bg-[#e4e4e4] flex flex-col">
      <Navbar />
      
      <main className="pt-24 max-[707px]:pt-6 flex-grow">
        <div className="max-w-7xl mx-auto px-6 max-[707px]:px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 max-[707px]:p-6 max-[640px]:p-4 mb-8 max-[707px]:mb-6 hover:border-[#306bff]/50 transition-colors">
              <h2 className="text-3xl max-[707px]:text-2xl max-[640px]:text-xl max-[375px]:text-lg font-bold text-[#1a1a1a] mb-6 max-[707px]:mb-4">
                Experience A3Coder AI Agent in the Cloud
              </h2>
              <p className="text-lg max-[707px]:text-base max-[375px]:text-sm text-black/70 mb-8 max-[707px]:mb-6">
                Unlock the power of dedicated cloud resources with your Elite subscription. Get instant access to a fully-configured development environment with dedicated CPU, memory, and persistent storage. Execute specs immediately without local setup, download generated code and artifacts, and host interactive dashboards—all from your browser.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-[707px]:gap-4 mb-8 max-[707px]:mb-6">
                <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-4 max-[707px]:p-3 hover:border-[#306bff]/50 transition-colors">
                  <h3 className="text-xl max-[707px]:text-lg font-bold text-[#306bff] mb-1">10Gi</h3>
                  <p className="text-black/70 text-sm">Storage</p>
                </div>
                <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-4 max-[707px]:p-3 hover:border-[#306bff]/50 transition-colors">
                  <h3 className="text-xl max-[707px]:text-lg font-bold text-[#306bff] mb-1">Dedicated</h3>
                  <p className="text-black/70 text-sm">Resources</p>
                </div>
                <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] shadow-lg border border-black/10 p-4 max-[707px]:p-3 hover:border-[#306bff]/50 transition-colors">
                  <h3 className="text-xl max-[707px]:text-lg font-bold text-[#306bff] mb-1">Instant</h3>
                  <p className="text-black/70 text-sm">Execution</p>
                </div>
              </div>

              <Link 
                href="/login" 
                className="inline-block px-8 py-4 text-lg max-[707px]:px-6 max-[707px]:py-3 max-[707px]:text-base font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
              >
                Login to Get Started
              </Link>
            </div>

            <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 max-[707px]:p-6 max-[640px]:p-4 hover:border-[#306bff]/50 transition-colors">
              <h2 className="text-2xl max-[707px]:text-xl max-[640px]:text-lg font-bold text-[#1a1a1a] mb-6 max-[707px]:mb-4">Agent Status</h2>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-red-500" />
                <span className="text-xl max-[707px]:text-lg max-[640px]:text-base text-black/70">Offline</span>
              </div>
              <p className="text-black/50 mt-4 max-[707px]:mt-3">
                Your AI Agent is currently offline. Sign in and upgrade to Elite to activate your cloud agent.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-auto pt-16">
        <SimpleFooter />
      </div>
    </div>
  );
}
