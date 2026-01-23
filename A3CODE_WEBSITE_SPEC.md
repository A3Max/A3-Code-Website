# A3Coder Website - Project Specification

## Project Overview

A3Coder is a Next.js-based web platform for managing and executing AI coding specifications (specs). Users can browse, create, share, and execute executable specifications designed to be run, reused, and improved over time.

## Technology Stack

- **Node.js**: v24.13.0
- **Next.js**: 16.1.2
- **React**: 19.2.3
- **TypeScript**: ^5
- **Tailwind CSS**: ^4
- **NextAuth**: ^4.24.13 (mock implementation currently)
- **ESLint**: ^9

## Project Structure

```
a3code-website/
├── public/                          # Static assets (SVGs, images)
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── agent/                  # AI coding agent interface (placeholder)
│   │   ├── about/                  # About page (placeholder)
│   │   ├── api/                    # API routes
│   │   │   ├── auth/[...nextauth]/ # NextAuth endpoints
│   │   │   ├── contact-sales/      # Contact form API
│   │   │   └── newsletter/subscribe/ # Newsletter subscription
│   │   ├── contact/                # Contact page (placeholder)
│   │   ├── create-spec/            # Spec creation interface (placeholder)
│   │   ├── docs/                   # Documentation (placeholder)
│   │   ├── install/                # Installation instructions (placeholder)
│   │   ├── install-extension/      # Extension installation (placeholder)
│   │   ├── login/                  # Login page
│   │   ├── my-specs/               # Personal spec collection
│   │   ├── pricing/                # Pricing plans
│   │   ├── signup/                 # Registration page
│   │   ├── specs/                  # Specs registry
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   ├── components/                 # Reusable components
│   │   ├── ContactSalesModal.tsx   # Contact sales modal
│   │   ├── Footer.tsx              # Desktop footer
│   │   ├── MobileFilters.tsx       # Mobile filter component
│   │   ├── MySpecCard.tsx          # Personal spec card
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── Sidebar.tsx             # Sidebar with filters
│   │   ├── SimpleFooter.tsx        # Mobile footer
│   │   └── SpecCard.tsx            # Spec card component
│   ├── config/
│   │   └── footer.ts               # Footer links configuration
│   └── contexts/
│       └── AuthContext.tsx         # Authentication context (mock)
├── .gitignore
├── A3CODE_WEBSITE_SPEC.md          # This specification
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Core Features

### 1. Authentication (Mock Implementation)

**Files**: `src/contexts/AuthContext.tsx`, `src/app/login/page.tsx`, `src/app/signup/page.tsx`

- Login page with email/password form
- Signup page with registration form
- User session management via React Context
- Conditional UI based on authentication state
- Logout functionality
- User avatar display with initials

**AuthContext Interface**:
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

### 2. Specs Registry (`/specs`)

**Files**: `src/app/specs/page.tsx`, `src/components/SpecCard.tsx`, `src/components/Sidebar.tsx`

- Browse all available specs
- Search functionality
- Category filtering
- Spec cards with preview modal
- Responsive grid layout (2 cols logged out, 3 cols logged in)
- Sticky search/filter bar
- "Coder Community" sidebar (logged out only)
- "Create Spec" button (logged in only)

**SpecCard Props**:
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

### 3. My Specs (`/my-specs`)

**Files**: `src/app/my-specs/page.tsx`, `src/components/MySpecCard.tsx`

- Personal spec collection
- Search and filter functionality
- Spec cards with preview modal
- 3-column grid layout
- Sticky search/filter bar
- Title truncation (line-clamp-3)

### 4. Pricing (`/pricing`)

**Files**: `src/app/pricing/page.tsx`, `src/components/ContactSalesModal.tsx`

- Three pricing tiers: Free, Pro ($20/mo), Elite ($50/mo)
- Responsive layouts:
  - Desktop (≥1030px): 3-column card layout
  - Medium mobile (768px-649px): Compact comparison table
  - Small mobile (≤649px): Tabbed card layout
- Feature comparison
- Contact sales modal

**Plan Details**:

**Free (Hobbyist)**:
- Access to community specs registry
- A3Code AI Agent VS Code extension
- Download specs
- View spec definitions
- View community comments
- Search and filter specs
- Execute community specs in VS Code desktop

**Pro ($20/month)**:
- All Free features
- Create your own specs
- AI-powered spec creation and review
- Create private specs
- Edit your specs
- Share specs with community
- Run specs created by professionals
- Shared specs eligible for ranking
- Execute professional specs in VS Code desktop

**Elite ($50/month)**:
- All Pro features
- Dedicated cloud CPU, memory, and storage
- Run your own A3Code AI Agent in the cloud
- LLM provider key management
- Run A3Code AI Agent in separate browser tab
- Download code & artifacts generated by AI Agent
- Host and share dashboards created by AI Agent
- Execute any spec instantly in A3Code VS Code cloud

### 5. Other Pages (Placeholders)

- `/agent` - AI coding agent interface
- `/about` - About page
- `/contact` - Contact page
- `/create-spec` - Spec creation interface
- `/docs` - Documentation
- `/install` - Installation instructions
- `/install-extension` - Extension installation

## Component Library

### Navbar (`src/components/Navbar.tsx`)

- Fixed positioning at top
- Responsive design (desktop/mobile drawer)
- Authentication-aware (shows user info or login/signup)
- Links to all main pages
- "Install Extension" button
- Mobile menu with hamburger icon

**Responsive Breakpoints**:
- Desktop: ≥1030px
- Mobile: <1030px

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

- Displays spec information
- Thumbnail preview
- Category and tier badges
- Like and comment counts
- "Preview" button with modal
- "Run Spec" button
- Hover effects with orange cube animation
- Uses `createPortal` for preview modal (z-index fix)

### MySpecCard (`src/components/MySpecCard.tsx`)

- Same props as SpecCard
- Similar functionality but for personal specs
- Title truncation (line-clamp-3)

### Footer (`src/components/Footer.tsx`)

- Desktop footer with multiple columns
- Links organized by category
- Social media links
- Copyright information
- Hidden on mobile (<768px)

### SimpleFooter (`src/components/SimpleFooter.tsx`)

- Simplified footer for mobile
- Essential links only
- Social media links
- Copyright information
- Visible only on mobile (<768px)

### ContactSalesModal (`src/components/ContactSalesModal.tsx`)

**Props**:
```typescript
interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

- Modal for contacting sales team
- Form with name, email, company, message fields
- Close button
- Click outside to close

### MobileFilters (`src/components/MobileFilters.tsx`)

- Mobile-friendly filter component
- Category selection
- Search functionality
- Collapsible design

### Sidebar (`src/components/Sidebar.tsx`)

- Category filters
- Search functionality
- "Coder Community" card
- Social media links
- Visible on Specs Registry (logged out only)

## Styling System

### Color Palette

- Background: `#e4e4e4` (light gray)
- Text Primary: `#1a1a1a` (dark gray)
- Text Secondary: `black/60` to `black/80`
- Accent Blue: `#306bff`
- Accent Orange: `#f97316`
- Border: `black/10`

### Typography

**Font**: Geist (Next.js default)

**Sizes**:
- Hero Title: `text-5xl` → `text-3xl` → `text-2xl` → `text-xl` (responsive)
- Section Title: `text-4xl` → `text-3xl` → `text-2xl` (responsive)
- Body Text: `text-xl` → `text-base` → `text-sm` (responsive)
- Small Text: `text-sm` → `text-xs` (responsive)

### Spacing

- Container: `px-6` → `px-4` (mobile)
- Cards: `p-6` → `p-4` → `p-2` (mobile)
- Buttons: `px-5 py-2.5` → `px-4 py-2` (mobile)
- Section spacing: `py-20` → `py-12` (mobile)

### Shadows

- `shadow-sm`: Subtle elevation
- `shadow-md`: Medium elevation
- `shadow-lg`: High elevation (cards, modals)
- `shadow-xl`: Very high elevation

### Z-Index Hierarchy

- Navbar: z-50
- Page headers: z-[45]
- Sticky search/filter bar: z-40
- Fixed black box (gap filler): z-[35]
- Spec cards: z-30
- Preview modal: z-[9999] (via portal)
- Mobile menu overlay: z-40
- Mobile menu drawer: z-40

## Responsive Design

### Breakpoints

- `max-[375px]`: Extra small mobile
- `max-[475px]`: Small mobile
- `max-[640px]`: Mobile
- `max-[649px]`: Small mobile (pricing)
- `max-[707px]`: Medium mobile
- `max-[767px]`: Mobile (footer)
- `max-[890px]`: Tablet
- `max-[1022px]`: Tablet (community links)
- `min-[1030px]`: Desktop

### Layout Strategies

**Desktop (≥1030px)**:
- Full navigation bar
- 3-column grid for specs
- Full footer
- Side-by-side layouts

**Tablet (768px-1029px)**:
- Compact navigation
- 2-column grid for specs
- Simplified footer

**Mobile (<768px)**:
- Hamburger menu
- Single column layouts
- Simple footer
- Tabbed pricing (≤649px)
- Comparison table (768px-649px)

## API Routes

### Current API Routes

**Authentication** (`/api/auth/[...nextauth]`):
- NextAuth configuration
- Currently using mock implementation

**Contact Sales** (`/api/contact-sales`):
- POST endpoint for contact form
- Validates and processes contact requests

**Newsletter** (`/api/newsletter/subscribe`):
- POST endpoint for newsletter subscription
- Email validation and subscription

### Future API Routes

**Specs**:
- `GET /api/specs`: List all specs
- `GET /api/specs/:id`: Get spec details
- `POST /api/specs`: Create new spec
- `PUT /api/specs/:id`: Update spec
- `DELETE /api/specs/:id`: Delete spec

**User**:
- `GET /api/user`: Get user profile
- `PUT /api/user`: Update user profile
- `GET /api/user/specs`: Get user's specs

**Execution**:
- `POST /api/execute`: Execute spec
- `GET /api/execute/:id`: Get execution status

## Development

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

**Required**:
```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com
DATABASE_URL=your-database-connection-string
```

**Optional**:
```
OPENROUTER_API_KEY=your-openrouter-key
TENSORIX_API_KEY=your-tensorix-key
```

## Deployment

### Recommended Platform: Vercel

- Native Next.js support
- Automatic deployments
- Edge functions
- CDN
- Preview deployments

### Deployment Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

## Git Repository

**Repository**: https://github.com/A3Max/A3-Code-Website

## Future Roadmap

### High Priority

1. Real Authentication with NextAuth
2. Spec Creation interface
3. Agent Implementation
4. Database Integration

### Medium Priority

1. User Profiles
2. Spec Versioning
3. Comments and Discussions
4. Rating System
5. Search Enhancement

### Low Priority

1. Theme Toggle
2. Admin Dashboard
3. Export/Import
4. Analytics
5. Mobile App

---

**Last Updated**: January 23, 2026
**Version**: 3.0.0
**Repository**: https://github.com/A3Max/A3-Code-Website
