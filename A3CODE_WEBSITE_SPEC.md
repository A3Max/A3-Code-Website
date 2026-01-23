# A3Coder Website - Complete Replication Specification

## ⚠️ CRITICAL PREREQUISITES

### Node.js Version Requirement

**REQUIRED**: Node.js >= 20.9.0 (Recommended: v24.13.0)

**Before starting, verify your Node.js version**:
```bash
node --version
```

If your version is lower than 20.9.0, you MUST upgrade before proceeding.

**Installation Instructions**:

Using nvm (macOS/Linux):
```bash
nvm install 24.13.0
nvm use 24.13.0
nvm alias default 24.13.0
```

Using nvm-windows (Windows):
```bash
nvm install 24.13.0
nvm use 24.13.0
```

Manual installation: https://nodejs.org/

**Note**: The project includes an automatic version check. If you try to run `npm run dev` with an incorrect Node.js version, it will fail with a clear error message.

---

## Git Repository

**Repository**: https://github.com/A3Max/new-website-repo
**Branch**: main

**AI Agent Instructions**:
1. Clone the repository: `git clone https://github.com/A3Max/new-website-repo.git`
2. Navigate to project: `cd new-website-repo`
3. Install dependencies: `npm install`
4. Copy environment variables: `cp .env.example .env.local`
5. Update `.env.local` with actual values
6. Run development server: `npm run dev`

## Technology Stack

**Exact Versions**:
- **Node.js**: v24.13.0 (required)
- **Next.js**: 16.1.2
- **React**: 19.2.3
- **React DOM**: 19.2.3
- **TypeScript**: ^5
- **Tailwind CSS**: ^4
- **NextAuth**: ^4.24.13
- **ESLint**: ^9

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
# Required
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Optional - OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Required for production
DATABASE_URL=your-database-connection-string

# Optional - LLM Providers
OPENROUTER_API_KEY=your-openrouter-key
TENSORIX_API_KEY=your-tensorix-key
```

## Design System

### Color Palette

**CSS Variables** (defined in `src/app/globals.css`):
```css
--background: #e4e4e4
--foreground: #1a1a1a
--highlight: #306bff
```

**Tailwind Color Usage**:
- Background: `#e4e4e4` or `bg-[#e4e4e4]`
- Text Primary: `#1a1a1a` or `text-[#1a1a1a]`
- Accent Blue: `#306bff` or `text-[#306bff]`, `bg-[#306bff]`
- Accent Orange: `#f97316` or `text-orange-500`, `bg-orange-500`
- Border: `black/10` or `border-black/10`
- Text Secondary: `black/60` to `black/80`

### Typography

**Font**: Urbanist (Google Fonts)
```css
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap');
```

**Font Weights**:
- Regular: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)
- Extra Bold: `font-extrabold` (800)

**Font Sizes** (responsive):
- Hero Title: `text-5xl` → `text-3xl` → `text-2xl` → `text-xl`
- Section Title: `text-4xl` → `text-3xl` → `text-2xl`
- Body Text: `text-xl` → `text-base` → `text-sm`
- Small Text: `text-sm` → `text-xs`

### Border Radius (Critical Design Pattern)

**Rounded Corners** (default):
- `rounded-lg` - Medium rounded corners (most common)
  - Feature icon backgrounds
  - Modal containers
  - Error messages

**Circular**:
- `rounded-full` - Perfect circles
  - Bullet points (small blue dots)
  - Success icons

**Hard Corners** (rare, specific use):
- `rounded-none` - No border radius
  - Tensorix logo box
  - OpenRouter logo box

**Rule**: Use `rounded-lg` as default. Only use `rounded-none` for partner logo boxes.

### Spacing System

**Padding**:
- Container: `px-6` → `px-4` (mobile)
- Cards: `p-6` → `p-4` → `p-2` (mobile)
- Buttons: `px-5 py-2.5` → `px-4 py-2` (mobile)

**Margins**:
- Section spacing: `py-20` → `py-12` (mobile)
- Element spacing: `mb-16` → `mb-8` (mobile)

### Shadows

- `shadow-sm` - Subtle elevation
- `shadow-md` - Medium elevation
- `shadow-lg` - High elevation (cards, modals)
- `shadow-xl` - Very high elevation

### Borders

**Styles**:
- `border` - 1px solid
- `border-2` - 2px solid
- `border-l-4` - Left border emphasis (4px)

**Colors**:
- `border-black/10` - Subtle border (default)
- `border-[#306bff]` - Blue accent
- `border-orange-500` - Orange accent

### Animations

**Snake Animation** (defined in `src/app/globals.css`):
```css
@keyframes snake {
  0% { top: 0; left: 0; }
  25% { top: 0; left: calc(100% - var(--snake-size)); }
  50% { top: calc(100% - var(--snake-size)); left: calc(100% - var(--snake-size)); }
  75% { top: calc(100% - var(--snake-size)); left: 0; }
  100% { top: 0; left: 0; }
}

.animate-snake {
  animation: snake 8s linear infinite;
}
```

**CSS Variable**:
```css
--snake-size: 12px; /* desktop */
--snake-size: 8px; /* mobile, max-width: 707px */
```

**Transitions**:
- `transition-colors` - Color changes
- `transition-transform` - Transform changes
- `duration-300` - 300ms duration
- `ease-in-out` - Smooth easing

### Scrollbar Styling

**Custom Scrollbar** (defined in `src/app/globals.css`):
```css
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: rgba(48, 107, 255, 0.5);
  border-radius: 6px;
  border: 2px solid rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(48, 107, 255, 0.7);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(48, 107, 255, 0.5) rgba(0, 0, 0, 0.05);
}
```

### Z-Index Hierarchy

- Navbar: `z-50`
- Page headers: `z-[45]`
- Sticky search/filter bar: `z-40`
- Fixed black box (gap filler): `z-[35]`
- Spec cards: `z-30`
- Preview modal: `z-[9999]` (via portal)
- Mobile menu overlay: `z-40`
- Mobile menu drawer: `z-40`

## Responsive Breakpoints

**Custom Breakpoints**:
- `max-[375px]` - Extra small mobile
- `max-[475px]` - Small mobile
- `max-[640px]` - Mobile
- `max-[649px]` - Small mobile (pricing)
- `max-[707px]` - Medium mobile (snake size changes)
- `max-[767px]` - Mobile (footer)
- `max-[890px]` - Tablet
- `max-[1022px]` - Tablet (community links)
- `min-[1030px]` - Desktop

## Project Structure

```
a3code-website/
├── public/
│   ├── A3 spacedSmall.svg
│   ├── BlackA3.svg
│   ├── Screenshot 2026-01-21 at 11.31.08.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── agent/page.tsx
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── contact-sales/route.ts
│   │   │   └── newsletter/subscribe/route.ts
│   │   ├── contact/page.tsx
│   │   ├── create-spec/page.tsx
│   │   ├── docs/page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── install-extension/page.tsx
│   │   ├── install/page.tsx
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   ├── my-specs/page.tsx
│   │   ├── page.tsx
│   │   ├── page.tsx.backup
│   │   ├── pricing/page.tsx
│   │   ├── providers.tsx
│   │   ├── signup/page.tsx
│   │   ├── specs/page.tsx
│   │   └── test.tsx
│   ├── components/
│   │   ├── ContactSalesModal.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileFilters.tsx
│   │   ├── MySpecCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SimpleFooter.tsx
│   │   └── SpecCard.tsx
│   ├── config/
│   │   └── footer.ts
│   └── contexts/
│       └── AuthContext.tsx
├── .env.example
├── .gitignore
├── A3CODE_WEBSITE_SPEC.md
├── A3CODER_WEBSITE_SPEC.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Component Specifications

### Navbar (`src/components/Navbar.tsx`)

**Features**:
- Fixed positioning at top
- Responsive design (desktop/mobile drawer)
- Authentication-aware (shows user info or login/signup)
- Links to all main pages
- "Install Extension" button
- Mobile menu with hamburger icon (w-9 h-9, stroke-width 1)

**Responsive Breakpoints**:
- Desktop: ≥1030px
- Mobile: <1030px

**Design**:
- Background: `bg-[#e4e4e4]`
- Border: `border-b border-black/10`
- Logo: BlackA3.svg or A3 spacedSmall.svg
- Hamburger menu: `w-9 h-9` with `strokeWidth={1}`

### SpecCard (`src/components/SpecCard.tsx`)

**Props**:
```typescript
interface SpecCardProps {
  title: string;
  category: string;
  tier: string;
  date: string;
  duration: string;
  likes: number;
  comments: number;
}
```

**Features**:
- Displays spec information
- Thumbnail preview
- Category and tier badges
- Like and comment counts
- "Preview" button with modal
- "Run Spec" button
- Hover effects with orange cube animation
- Uses `createPortal` for preview modal (z-index fix)

**Design**:
- Background: `bg-[#e4e4e4]`
- Border: `border border-black/10`
- Shadow: `shadow-lg`
- Hover: `hover:border-[#306bff]/50`
- Border Radius: `rounded-lg`

### MySpecCard (`src/components/MySpecCard.tsx`)

**Props**: Same as SpecCard

**Features**:
- Similar to SpecCard but for personal specs
- Title truncation: `line-clamp-3`
- Same preview modal functionality

### Footer (`src/components/Footer.tsx`)

**Features**:
- Desktop footer with multiple columns
- Links organized by category
- Social media links
- Copyright information

**Responsive**: Hidden on mobile (<768px)

### SimpleFooter (`src/components/SimpleFooter.tsx`)

**Features**:
- Simplified footer for mobile
- Essential links only
- Social media links
- Copyright information

**Responsive**: Visible only on mobile (<768px)

### ContactSalesModal (`src/components/ContactSalesModal.tsx`)

**Props**:
```typescript
interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Features**:
- Modal for contacting sales team
- Form with name, email, company, message fields
- Close button
- Click outside to close
- Success and error states

**Design**:
- Overlay: `bg-black/80 backdrop-blur-sm`
- Container: `bg-white border border-black/10 rounded-lg`
- Success Icon: `bg-green-500/20 rounded-full`
- Error Message: `bg-red-500/10 border border-red-500/30 rounded`

### MobileFilters (`src/components/MobileFilters.tsx`)

**Features**:
- Mobile-friendly filter component
- Category selection
- Search functionality
- Collapsible design

### Sidebar (`src/components/Sidebar.tsx`)

**Features**:
- Category filters
- Search functionality
- "Coder Community" card
- Social media links
- Visible on Specs Registry (logged out only)

**Design**:
- Bullet points: `w-1.5 h-1.5 bg-[#306bff] rounded-full`

## Page Specifications

### Home Page (`src/app/page.tsx`)

**Sections**:
1. Hero section with title and description
2. Feature cards (6 cards) with icons
3. Community links (Tensorix, OpenRouter)

**Feature Card Design**:
```tsx
<div className="bg-[#e4e4e4] border-l-4 border-l-[#306bff] border border-black/10 p-6 hover:border-[#306bff]/50 transition-colors shadow-lg">
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-[#306bff]/20 rounded-lg flex items-center justify-center">
      {/* Icon */}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-[#1a1a1a]">Title</h3>
      <p className="text-base text-black/70">Description</p>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-[#306bff] rounded-full" />
        <span className="text-xs text-[#306bff] font-medium">Production-oriented defaults</span>
      </div>
    </div>
  </div>
</div>
```

**Partner Logo Design** (Hard Corners):
```tsx
<div className="flex-shrink-0 w-12 h-12 bg-[#306bff] rounded-none flex items-center justify-center">
  <span className="text-white font-bold text-sm">TX</span>
</div>
```

### Specs Registry (`src/app/specs/page.tsx`)

**Features**:
- Browse all available specs
- Search functionality
- Category filtering
- Spec cards with preview modal
- Responsive grid layout (2 cols logged out, 3 cols logged in)
- Sticky search/filter bar
- "Coder Community" sidebar (logged out only)
- "Create Spec" button (logged in only)

### My Specs (`src/app/my-specs/page.tsx`)

**Features**:
- Personal spec collection
- Search and filter functionality
- Spec cards with preview modal
- 3-column grid layout
- Sticky search/filter bar
- Title truncation (line-clamp-3)

### Pricing (`src/app/pricing/page.tsx`)

**Features**:
- Three pricing tiers: Free, Pro ($20/mo), Elite ($50/mo)
- Responsive layouts:
  - Desktop (≥1030px): 3-column card layout
  - Medium mobile (768px-649px): Compact comparison table
  - Small mobile (≤649px): Tabbed card layout
- Feature comparison
- Contact sales modal

### Other Pages (Placeholders)

- `/agent` - AI coding agent interface
- `/about` - About page (flex layout with footer positioning)
- `/contact` - Contact page
- `/create-spec` - Spec creation interface
- `/docs` - Documentation (flex layout with footer positioning)
- `/install` - Installation instructions
- `/install-extension` - Extension installation

**Footer Positioning**:
- Docs and About pages use `flex flex-col` layout with `flex-grow` on main and `mt-auto pt-16` on footer
- This ensures footer stays at bottom of page even with minimal content

## Authentication

**Current Implementation**: Mock authentication using React Context

**File**: `src/contexts/AuthContext.tsx`

**Interface**:
```typescript
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (name: string, email: string, password: string) => void;
}

interface User {
  name: string;
  email: string;
}
```

**Usage**:
```typescript
const { isAuthenticated, user, login, logout, signup } = useAuth();
```

## API Routes

### Current API Routes

**Authentication** (`/api/auth/[...nextauth]/route.ts`):
- NextAuth configuration
- Currently using mock implementation

**Contact Sales** (`/api/contact-sales/route.ts`):
- POST endpoint for contact form
- Validates and processes contact requests

**Newsletter** (`/api/newsletter/subscribe/route.ts`):
- POST endpoint for newsletter subscription
- Email validation and subscription

## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Critical Design Rules

1. **Border Radius**: Use `rounded-lg` as default. Only use `rounded-none` for partner logo boxes (Tensorix, OpenRouter).

2. **Colors**: Always use exact hex codes:
   - Background: `#e4e4e4`
   - Text: `#1a1a1a`
   - Accent Blue: `#306bff`
   - Accent Orange: `#f97316`

3. **Font**: Always use Urbanist font family.

4. **Snake Animation**: Use `animate-snake` class with `--snake-size` CSS variable.

5. **Scrollbar**: Custom scrollbar styling is defined in globals.css.

6. **Z-Index**: Follow the z-index hierarchy strictly.

7. **Responsive**: Use the custom breakpoints defined above.

8. **Transitions**: Use `transition-colors duration-300 ease-in-out` for color changes.

9. **Shadows**: Use `shadow-lg` for cards and modals.

10. **Borders**: Use `border-black/10` for subtle borders.

## Deployment

### Recommended Platform: Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

---

**Last Updated**: January 23, 2026
**Version**: 4.0.0
**Repository**: https://github.com/A3Max/new-website-repo
