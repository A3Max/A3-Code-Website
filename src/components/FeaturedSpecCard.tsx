'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

interface FeaturedSpecCardProps {
  title: string;
  category: string;
  tier: string;
  date: string;
  duration: string;
  likes: number;
  comments: number;
  index: number;
  isFeatured?: boolean;
  cardState?: 'compact' | 'full';
  onToggleState?: () => void;
  videoThumbnail?: string;
}

export default function FeaturedSpecCard({ title, category, tier, date, duration, likes, comments, index, isFeatured = false, cardState = 'compact', onToggleState, videoThumbnail }: FeaturedSpecCardProps) {
  const [showVideoPreview, setShowVideoPreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  if (typeof window !== 'undefined' && !mounted) {
    setMounted(true);
  }

  const isFullState = cardState === 'full';

  return (
    <div
      className={`bg-[#e4e4e4] shadow-md border p-4 max-[375px]:p-2 hover:border-[#306bff]/50 transition-colors relative ${
        isFeatured ? 'border-[#306bff]' : 'border-black/10'
      } ${isFullState ? 'overflow-hidden' : ''}`}
    >
      {isFeatured && (
        <div className="absolute top-2 right-2 bg-[#306bff] p-1.5 max-[375px]:p-1 shadow-lg z-10">
          <img src="/A3 spacedSmall.svg" alt="A3" className="h-5 w-5 max-[375px]:h-4 max-[375px]:w-4" />
        </div>
      )}
      <button
        onClick={onToggleState}
        className="absolute top-2 right-2 z-20 w-6 h-6 bg-black/10 hover:bg-black/20 rounded flex items-center justify-center transition-colors"
        title={isFullState ? 'Switch to compact view' : 'Switch to full view'}
        style={{ right: isFeatured ? '2.5rem' : '0.5rem' }}
      >
        {isFullState ? (
          <svg className="w-3 h-3 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>

      {isFullState ? (
        <div className="relative w-full h-[140px] max-[375px]:h-[100px] cursor-pointer" onClick={() => setShowVideoPreview(true)}>
          <video
            src={videoThumbnail || '/Faces.mov'}
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#306bff] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h4 className="text-sm font-semibold text-white mb-2 line-clamp-2">{title}</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-[#306bff]/80 text-white">{category}</span>
                <span className="px-2 py-1 text-xs font-medium bg-black/50 text-white">{tier}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                  {likes}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  {comments}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <div className="flex-1">
            <div className="flex items-start justify-between gap-3 mb-3 max-[375px]:mb-1.5">
              <h4 className="text-sm font-semibold text-[#1a1a1a] leading-tight">{title}</h4>
            </div>
            <div className="flex items-center gap-2 mb-3 max-[375px]:mb-1.5">
              <span className="px-2 py-1 max-[375px]:px-1.5 max-[375px]:py-0.5 text-xs font-medium bg-[#306bff]/20 text-[#306bff]">{category}</span>
              <span className="px-2 py-1 max-[375px]:px-1.5 max-[375px]:py-0.5 text-xs font-medium bg-black/10 text-black/70">{tier}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-black/50 mb-3 max-[375px]:mb-1.5">
              <span>{date}</span>
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-4 mt-3 max-[375px]:mt-1.5 text-xs text-black/60">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                {likes}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                {comments}
              </span>
            </div>
          </div>
          <div className="w-24 h-24 max-[375px]:w-16 max-[375px]:h-16 bg-black/10 border border-black/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <video
              src={videoThumbnail || '/Faces.mov'}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
            />
          </div>
        </div>
      )}
      {mounted && showVideoPreview && createPortal(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={() => setShowVideoPreview(false)}>
          <div className="bg-white border border-black/10 max-w-6xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-black/10 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#1a1a1a]">{title} - Video Preview</h3>
              <button onClick={() => setShowVideoPreview(false)} className="text-black/60 hover:text-black transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 flex items-center justify-center bg-black/5">
              <video
                src={videoThumbnail || '/Faces.mov'}
                controls
                autoPlay
                className="max-w-full max-h-[calc(90vh-8rem)]"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
