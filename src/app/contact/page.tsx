import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-2xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Sales</h1>
          <p className="text-xl text-white/70 mb-12">
            Interested in enterprise solutions or custom requirements? Get in touch with our sales team.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#306bff]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#306bff]"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#306bff]"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#306bff] resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
