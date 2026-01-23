interface MobileFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  categories: string[];
}

export default function MobileFilters({
  searchQuery,
  setSearchQuery,
  selectedCategories,
  toggleCategory,
  categories,
}: MobileFiltersProps) {
  return (
    <div className="max-[707px]:block hidden space-y-3">
      <input
        type="text"
        placeholder="Search specs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2.5 bg-[#e4e4e4] border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
      />
      <div className="flex gap-2 overflow-x-auto overflow-y-visible scrollbar-hide">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category);
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium transition-colors shadow-lg ${
                isSelected
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#e4e4e4] border border-black/10 text-gray-700 hover:border-gray-300'
              } max-[375px]:px-2 max-[375px]:py-1 max-[375px]:text-[10px]`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
