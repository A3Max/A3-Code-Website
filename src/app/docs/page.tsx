import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimpleFooter from '@/components/SimpleFooter';
import PulsingGrid from '@/components/PulsingGrid';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#e4e4e4] flex flex-col">
      <PulsingGrid />
      <Navbar />
      
      <main className="pt-24 flex-grow relative z-10">
        <div className="max-w-4xl mx-auto px-6 max-[707px]:px-4 py-12">
          <h1 className="text-5xl max-[707px]:text-4xl max-[640px]:text-3xl max-[375px]:text-2xl font-bold text-[#1a1a1a] mb-6">Documentation</h1>
          <p className="text-xl max-[707px]:text-lg max-[375px]:text-base text-black/70 mb-12">
            Learn how to use A3Coder to build with spec-driven development.
          </p>

          <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 max-[707px]:p-6 max-[640px]:p-4 mb-8">
            <h2 className="text-2xl max-[707px]:text-xl max-[640px]:text-lg font-bold text-[#1a1a1a] mb-4">Getting Started</h2>
            <p className="text-black/70">
              Welcome to the A3Coder documentation. Here you'll find everything you need to get started with spec-driven development.
            </p>
          </div>
        </div>
      </main>
      <div className="mt-auto pt-16 max-[767px]:hidden">
        <Footer />
      </div>
      <div className="mt-auto pt-16 hidden max-[767px]:block">
        <SimpleFooter />
      </div>
    </div>
  );
}
