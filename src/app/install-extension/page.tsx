import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimpleFooter from '@/components/SimpleFooter';
import Link from 'next/link';

export default function InstallExtensionPage() {
  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-6">Install A3Coder Extension</h1>
          <p className="text-xl text-black/70 mb-12">
            Get the A3Coder AI Agent VS Code extension to execute specs directly in your development environment.
          </p>

          <div className="bg-white border border-black/10 p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">VS Code Extension</h2>
            <p className="text-black/70 mb-6">
              Install the A3Coder AI Agent extension from the VS Code Marketplace to start executing specs in your local development environment.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
            >
              Install from VS Code Marketplace
            </a>
          </div>

          <div className="bg-white border border-black/10 p-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-black/80">
                <div className="w-2 h-2 bg-[#306bff] mt-2" />
                <span>Execute community and professional specs directly in VS Code</span>
              </li>
              <li className="flex items-start gap-3 text-black/80">
                <div className="w-2 h-2 bg-[#306bff] mt-2" />
                <span>AI-powered spec creation and review</span>
              </li>
              <li className="flex items-start gap-3 text-black/80">
                <div className="w-2 h-2 bg-[#306bff] mt-2" />
                <span>Seamless integration with the Spec Registry</span>
              </li>
              <li className="flex items-start gap-3 text-black/80">
                <div className="w-2 h-2 bg-[#306bff] mt-2" />
                <span>Real-time execution feedback and debugging</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-black/60 mb-4">
              Need help installing? Check our documentation.
            </p>
            <Link 
              href="/docs" 
              className="text-[#306bff] hover:underline"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </main>
      <div className="max-[767px]:hidden">
        <Footer />
      </div>
      <div className="hidden max-[767px]:block">
        <SimpleFooter />
      </div>
    </div>
  );
}
