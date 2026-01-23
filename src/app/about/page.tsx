import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimpleFooter from '@/components/SimpleFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e4e4e4] flex flex-col">
      <Navbar />
      
      <main className="pt-24 flex-grow">
        <div className="max-w-4xl mx-auto px-6 max-[707px]:px-4 py-12">
          <h1 className="text-5xl max-[707px]:text-4xl max-[640px]:text-3xl max-[375px]:text-2xl font-bold text-[#1a1a1a] mb-6">About A3Coder</h1>
          <p className="text-xl max-[707px]:text-lg max-[375px]:text-base text-black/70 mb-12">
            Ship Real Code. From Specs That Actually Work.
          </p>

          <div className="bg-[#e4e4e4] shadow-lg border border-black/10 p-8 max-[707px]:p-6 max-[640px]:p-4 mb-8">
            <h2 className="text-2xl max-[707px]:text-xl max-[640px]:text-lg font-bold text-[#1a1a1a] mb-4">Our Mission</h2>
            <p className="text-black/70">
              A3Coder is revolutionizing software development with spec-driven development. We believe that clear, executable specifications are the future of building software.
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
