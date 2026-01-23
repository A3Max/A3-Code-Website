import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimpleFooter from '@/components/SimpleFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-6">About A3Coder</h1>
          <p className="text-xl text-black/70 mb-12">
            Ship Real Code. From Specs That Actually Work.
          </p>

          <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Our Mission</h2>
            <p className="text-black/70">
              A3Coder is revolutionizing software development with spec-driven development. We believe that clear, executable specifications are the future of building software.
            </p>
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
