import Navbar from '@/components/Navbar';
import PulsingGrid from '@/components/PulsingGrid';

export default function CreateSpecPage() {
  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <PulsingGrid />
      <Navbar />
      
      <main className="pt-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-6">Create New Spec</h1>
          <p className="text-xl text-black/70 mb-12">
            Define your executable specification and share it with the community.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Spec Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff]"
                placeholder="Enter spec name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Category</label>
              <select className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] focus:outline-none focus:border-[#306bff]">
                <option value="">Select a category</option>
                <option value="model-training">Model Training</option>
                <option value="forecasting">Forecasting</option>
                <option value="data-integration">Data Integration</option>
                <option value="research">Research</option>
                <option value="games">2D / 3D Games</option>
                <option value="smart-contracts">Smart Contracts</option>
                <option value="audio-video">Audio & Video</option>
                <option value="website">Website</option>
                <option value="microservices">Microservices</option>
                <option value="financial">Financial</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Description</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] resize-none"
                placeholder="Describe what this spec does..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Spec Definition</label>
              <textarea
                rows={12}
                className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] resize-none font-mono text-sm"
                placeholder="Enter your spec definition..."
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-black/80">
                <input type="checkbox" className="w-5 h-5 bg-white border border-black/10" />
                <span>Make this spec private</span>
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
              >
                Create Spec
              </button>
              <button
                type="button"
                className="px-6 py-4 text-lg font-semibold border border-black text-[#1a1a1a] hover:border-[#306bff] hover:text-[#306bff] transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
