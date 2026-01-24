'use client';

import Link from 'next/link';

interface SidebarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  categories: string[];
  isAuthenticated: boolean;
  showCommunityCard?: boolean;
}

export default function Sidebar({
  searchQuery,
  setSearchQuery,
  selectedCategories,
  toggleCategory,
  categories,
  isAuthenticated,
  showCommunityCard = true
}: SidebarProps) {
  return (
    <div className="w-[280px] flex-shrink-0 fixed top-[72px] left-0 h-[calc(100vh-72px)] flex flex-col px-6 border-r border-black/10 z-40 max-[707px]:hidden">
      <div className="h-[20px]"></div>
      <Link 
        href={isAuthenticated ? "/create-spec" : "/login"}
        className="block w-full px-6 py-3 text-center font-bold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors mb-6 h-[52px] flex items-center justify-center shadow-lg"
      >
        {isAuthenticated ? "Create Spec" : "Log In to Create Spec"}
      </Link>
      
      <input
        type="text"
        placeholder="Search specs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 h-[52px] bg-[#e4e4e4] shadow-lg border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] hover:border-[#306bff]/50 transition-colors mb-6"
      />
      
      <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">FILTER BY CATEGORY</h3>
      <div className="relative" style={{ maxHeight: isAuthenticated ? '780px' : '415px' }}>
        <div className="overflow-y-auto flex flex-col gap-2 px-2 pb-[50px] h-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`w-full px-4 py-2 text-sm font-medium transition-colors text-left ${
                (category === 'All' && selectedCategories.length === 0) || selectedCategories.includes(category)
                  ? 'bg-[#306bff] text-white shadow-lg'
                  : 'bg-[#e4e4e4] shadow-lg text-[#1a1a1a] hover:border-[#306bff]/50 border border-black/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[50px] pointer-events-none" style={{ background: 'linear-gradient(to top, #e4e4e4 0%, rgba(228, 228, 228, 0) 100%)' }}></div>
      </div>
      {!isAuthenticated && showCommunityCard && (
        <div className="mt-4 mb-4 bg-[#e4e4e4] border border-black/10 p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <img src="/BlackA3.svg" alt="A3" className="w-5 h-5" />
            <h3 className="text-sm font-semibold text-[#1a1a1a]">Join the A3Code Community</h3>
          </div>
          <p className="text-xs text-black/70 mb-4 leading-relaxed">
            Sign in to explore our curated registry of executable specifications. View specs, download them, and discover how A3Code can help you build faster. Upgrade to Elite to execute specs frictionlessly in the cloud with dedicated resources.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-xs text-[#1a1a1a] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#306bff] rounded-full"></span>
              Browse Specs
            </li>
            <li className="text-xs text-[#1a1a1a] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#306bff] rounded-full"></span>
              Download Specs
            </li>
            <li className="text-xs text-[#1a1a1a] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#306bff] rounded-full"></span>
              Cloud Execution
            </li>
          </ul>
          <Link 
            href="/login"
            className="block w-full px-4 py-2 text-center text-sm font-bold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors shadow-lg"
          >
            Sign In to Get Started
          </Link>
        </div>
      )}
    </div>
  );
}
