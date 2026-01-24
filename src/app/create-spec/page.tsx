'use client';

import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import PulsingGrid from '@/components/PulsingGrid';

export default function CreateSpecPage() {
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [specName, setSpecName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const videoInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleDeleteVideo = () => {
    setVideoPreview(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = '';
    }
  };

  const handleDeleteImage = () => {
    setImagePreview(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  };

  const categoryMap: Record<string, string> = {
    'model-training': 'Model Training',
    'forecasting': 'Forecasting',
    'data-integration': 'Data Integration',
    'research': 'Research',
    'games': '2D / 3D Games',
    'smart-contracts': 'Smart Contracts',
    'audio-video': 'Audio & Video',
    'website': 'Website',
    'microservices': 'Microservices',
    'financial': 'Financial',
    'other': 'Other'
  };

  const getCategoryLabel = (value: string) => categoryMap[value] || 'Other';
  return (
    <div className="min-h-screen bg-[#e4e4e4]">
      <PulsingGrid />
      <Navbar />
      
      <main className="pt-32 max-[707px]:pt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">Create New Spec</h1>
          <p className="text-lg text-black/70 mb-12">
            Define your executable specification and share it with the community.
          </p>

          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-[3] bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Spec Name</label>
                <input
                  type="text"
                  value={specName}
                  onChange={(e) => setSpecName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff]"
                  placeholder="Enter spec name"
                />
              </div>

              <div className="flex-1 bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] focus:outline-none focus:border-[#306bff]">
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
            </div>

            <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] resize-none"
                placeholder="Describe what this spec does..."
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1 bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Thumbnail Video</label>
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] focus:outline-none focus:border-[#306bff]"
                />
                <p className="text-xs text-black/50 mt-2">Upload a video to use as the spec thumbnail</p>
              </div>
              <div className="flex-1 bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Preview</label>
                <div className="w-full h-40 bg-white border border-black/10 flex items-center justify-center overflow-hidden relative">
                  {videoPreview ? (
                    <>
                      <video src={videoPreview} controls className="max-w-full max-h-full" />
                      <button
                        type="button"
                        onClick={handleDeleteVideo}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <span className="text-black/30 text-sm">No video selected</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Thumbnail Image</label>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] focus:outline-none focus:border-[#306bff]"
                />
                <p className="text-xs text-black/50 mt-2">Upload an image to use as the spec thumbnail</p>
              </div>
              <div className="flex-1 bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Preview</label>
                <div className="w-full h-40 bg-white border border-black/10 flex items-center justify-center overflow-hidden relative">
                  {imagePreview ? (
                    <>
                      <img src={imagePreview} alt="Preview" className="max-w-full max-h-full object-contain" />
                      <button
                        type="button"
                        onClick={handleDeleteImage}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <span className="text-black/30 text-sm">No image selected</span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Spec Definition</label>
              <textarea
                rows={12}
                className="w-full px-4 py-3 bg-white border border-black/10 text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] resize-none font-mono text-sm"
                placeholder="Enter your spec definition..."
              />
            </div>

            <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
              <label className="flex items-center gap-2 text-black/80">
                <input type="checkbox" className="w-5 h-5 bg-white border border-black/10" />
                <span>Make this spec private</span>
              </label>
            </div>

            <div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Spec Card Preview</h3>
              <div className="max-w-[500px]">
                <div className="group bg-[#e4e4e4] shadow-lg border border-black/10 hover:border-[#306bff]/50 transition-colors relative p-3">
                  <div className="absolute right-0 bottom-0 w-3 h-3 bg-orange-500 animate-snake group-hover:bg-[#306bff] transition-all duration-300" />
                  <div className="flex">
                    {(imagePreview || videoPreview) && (
                      <div className="w-40 flex-shrink-0">
                        <div className="w-40 h-40 overflow-hidden">
                          {imagePreview ? (
                            <img src={imagePreview} alt="Spec thumbnail" className="w-full h-full object-cover" />
                          ) : (
                            <video src={videoPreview!} className="w-full h-full object-cover" />
                          )}
                        </div>
                      </div>
                    )}
                    <div className="flex-1 pl-3 flex flex-col overflow-hidden">
                      <h4 className="text-sm font-semibold text-[#1a1a1a] leading-tight mb-3 line-clamp-3 overflow-hidden max-h-[3.3rem] w-full">
                        {specName || 'Your Spec Name'}
                      </h4>
                      <div className="flex-grow" />
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-medium bg-[#306bff]/20 text-[#306bff]">
                          {getCategoryLabel(category)}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-black/10 text-black/70">Tier 1</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-black/50 mb-3">
                        <span>{new Date().toLocaleDateString('en-GB')}</span>
                        <span>--</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-black/60 mt-auto">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                            0
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            0
                          </span>
                        </div>
                        <button className="px-4 py-1 text-xs font-medium bg-[#306bff]/20 text-[#306bff] hover:bg-[#306bff]/30 transition-colors whitespace-nowrap">
                          Run Spec
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-4 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors shadow-lg"
              >
                Create Spec
              </button>
              <button
                type="button"
                className="px-6 py-4 text-lg font-semibold bg-[#e4e4e4] border border-black text-[#1a1a1a] hover:border-[#306bff] hover:text-[#306bff] transition-colors shadow-lg"
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
