'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const EXAMPLE_TEXT = `APEX:E3 Demo Stock Watchlist Website
A proxy-safe, Express-served static admin UI that lets users manage a demo stock portfolio (add/remove tickers) and view live-ish quote data fetched from Yahoo Finance via a lightweight server endpoint, with a sophisticated responsive layout and dynamic asset loading compatible with workspace proxy URLs.

Financial
APEX:E3 Watchlist Dashboard
A proxy-safe, static admin-style stock watchlist dashboard with real-time quotes from the APEX:E3 API.
Designed to run correctly behind workspace proxies such as VS Code Simple Browser and code-server environments.

1. Overview
The APEX:E3 Watchlist Dashboard allows users to:

Track a customizable list of stock symbols
Fetch and display live quote data
View gainers, losers, and summary statistics
Open interactive TradingView charts
Persist watchlist, settings, and cached data across sessions
Run without breaking under proxy URLs
Example proxy URL:

https://ide.a3code.ai/u/{workspaceId}/proxy/3000
2. Key Design Principle (Critical)
Every local URL (CSS, JS, images, API calls) must be generated dynamically from window.location.

Hardcoded paths will break under proxy deployments.

This README documents the final, correct implementation.

3. Project Structure
.
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── images/
│       └── logo.svg
└── README.md
4. Server (server.js)
Responsibilities
Bind to 0.0.0.0:3000
Serve static files from public/
Proxy APEX:E3 API via /api/quotes
Cache API responses in memory (20s TTL)
Correct Implementation
import express from "express";
import fetch from "node-fetch";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// In-memory cache
const cache = new Map();
const CACHE_TTL = 20_000;

app.get("/api/quotes", async (req, res) => {
  const symbols = req.query.symbols;
  if (!symbols) return res.status(400).json({ error: "symbols required" });

  const key = symbols.toUpperCase();
  const now = Date.now();

  if (cache.has(key)) {
    const { data, ts } = cache.get(key);
    if (now - ts < CACHE_TTL) return res.json(data);
  }

  try {
    const results = await Promise.all(
      key.split(",").map(async (symbol) => {
        const r = await fetch(
          \`https://alicev2.apexe3.ai/alice/apexe3/datahub/api/asset_price/\${symbol}\`,
          { timeout: 10_000 }
        );
        const j = await r.json();
        return {
          symbol: j.symbol,
          regularMarketPrice: j.current_price,
          regularMarketChange: j.change,
          regularMarketChangePercent: j.change_percent,
          regularMarketPreviousClose: j.previous_close,
          regularMarketOpen: j.open,
          regularMarketDayHigh: j.high,
          regularMarketDayLow: j.low,
          currency: j.currency,
          regularMarketTime: j.last_updated,
        };
      })
    );

    cache.set(key, { data: results, ts: now });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "API fetch failed" });
  }
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(\`Server running on 0.0.0.0:\${PORT}\`)
);
5. Frontend — Proxy-Safe Foundation
5.1 Canonical Base URL Logic (MANDATORY)
This must be the first script in public/index.html.

<script>
(function () {
  let path = window.location.pathname;

  // Remove filename if present
  if (path.endsWith(".html")) {
    path = path.replace(/\\/[^\\/]*$/, "");
  }

  // Normalize trailing slash
  path = path.replace(/\\/+$/, "");

  window.__BASE_PATH__ = path;
  window.__BASE_URL__ = window.location.origin + path;
})();
</script>
This supports:

/proxy/3000
/proxy/3000/
/proxy/3000/index.html
future nested routes
5.2 Dynamic Asset Loading (Required)
<script>
  document.write(
    '<link rel="stylesheet" href="' + __BASE_URL__ + '/style.css">'
  );
  document.write(
    '<script src="' + __BASE_URL__ + '/app.js"><\\/script>'
  );
</script>
❌ Do NOT use:

./style.css
/style.css
5.3 Proxy-Safe Logo
<img id="logo" alt="APEX:E3" />
<script>
  document.getElementById("logo").src =
    __BASE_URL__ + "/images/logo.svg";
</script>
(Inline SVG is also acceptable and avoids paths entirely.)

6. Frontend Logic (app.js)
6.1 Proxy-Safe API Helper (CRITICAL)
function apiUrl(path) {
  return window.__BASE_URL__ + path;
}
6.2 Correct API Call
fetch(apiUrl("/api/quotes?symbols=" + symbols.join(",")))
  .then(r => r.json())
  .then(renderQuotes);
❌ Never use:

fetch("/api/quotes");
7. Client-Side Caching
Storage
localStorage.quoteData
localStorage.quoteTimestamp
TTL
5 minutes (300,000 ms)
Logic
Use cached data if fresh
Manual refresh always fetches live data
Auto-refresh (optional): every 30s
8. TradingView Integration
TradingView must remain external:

<script src="https://s3.tradingview.com/tv.js"></script>
❌ Do not prefix with __BASE_URL__.

Theme:

theme: "dark"
Matches dashboard palette
9. Features Summary
Watchlist add/remove
Default symbols: AAPL, MSFT, GOOGL, AMZN, TSLA, NVDA
Live quotes via APEX:E3
Gain/Loss statistics
TradingView charts
Dark theme UI
Client + server caching
Fully proxy-safe
10. Running the App
Run it in the background on port 3000 and then show it.

Install
npm install
Run
npm start
Access
Local: http://localhost:3000
Proxy: https://ide.a3code.ai/u/{workspaceId}/proxy/3000
11. Proxy Safety Checklist
✅ Dynamic CSS/JS loading
✅ Dynamic image paths
✅ Dynamic API calls
✅ No absolute redirects
✅ No hardcoded root paths

Rule: If a local URL does not include __BASE_URL__, it is wrong.

12. Version
APEX:E3 Watchlist Dashboard — Fixed Proxy-Safe Release v1.1

This README represents the final, end-to-end corrected architecture.`;

interface SpecCardProps {
  title: string;
  category: string;
  tier: string;
  date: string;
  duration: string;
  likes: number;
  comments: number;
  thumbnail?: string;
  description?: string;
  index?: number;
  hoveredIndex?: number | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function SpecCard({ title, category, tier, date, duration, likes, comments, thumbnail, description, index = 0, hoveredIndex, onMouseEnter, onMouseLeave }: SpecCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

  if (typeof window !== 'undefined' && !mounted) {
    setMounted(true);
  }
  
  return (
    <div 
      className="group bg-white/5 border border-white/10 hover:border-[#306bff]/50 transition-colors overflow-hidden relative p-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="absolute w-3 h-3 bg-orange-500 animate-snake group-hover:bg-[#306bff] transition-all duration-300" 
        style={{ 
          animationDelay: `-${(index % 4)}s`,
          opacity: isDimmed ? 0.2 : 1
        }} 
      />
      <div className="flex">
        {thumbnail && (
          <div className="w-32 flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-to-br from-[#306bff]/20 to-[#306bff]/5 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-[#306bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <button onClick={() => setShowPreview(true)} className="w-full mt-2 px-2 py-1 text-xs font-medium bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 transition-colors">
              Preview
            </button>
          </div>
        )}
        <div className="flex-1 pl-3">
          <h4 className="text-sm font-semibold text-white leading-tight mb-3 min-h-[3.75rem]">{title}</h4>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 text-xs font-medium bg-[#306bff]/20 text-[#306bff]">{category}</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/70">{tier}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
            <span>{date}</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-white/60">
            <div className="flex items-center gap-4">
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
            <button className="px-4 py-1 text-xs font-medium bg-[#306bff]/20 text-[#306bff] hover:bg-[#306bff]/30 transition-colors">
              Run Spec
            </button>
          </div>
        </div>
      </div>
      {mounted && showPreview && createPortal(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={() => setShowPreview(false)}>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-[#0a0a0a] border-b border-white/10 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <button onClick={() => setShowPreview(false)} className="text-white/60 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-medium bg-[#306bff]/20 text-[#306bff]">{category}</span>
                <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/70">{tier}</span>
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-white/80 leading-relaxed">{EXAMPLE_TEXT}</div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
