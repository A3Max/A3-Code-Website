# A3Coder Website - Project Specification

## Overview
A3Coder is a Next.js-based website for managing and executing AI coding specifications (specs). The platform allows users to browse, create, and manage executable specifications designed to be run, reused, and improved over time.

## Tech Stack
- **Framework**: Next.js 16.1.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: SVG (inline)
- **Deployment**: Vercel (recommended)

## Current Features

### Authentication System
- Mock authentication using React Context
- Login page (`/login`) with email/password form
- Signup page (`/signup`) with registration form
- User session management
- Conditional UI based on authentication state
- Logout functionality

### Pages

#### Home Page (`/`)
- Hero section with A3Coder branding
- Featured Specs section (always visible)
- Navigation to main features
- Responsive design

#### Specs Registry (`/specs`)
- Browse all available specs
- Search functionality
- Category filtering
- Spec cards with preview modal
- Responsive grid layout (2 cols logged out, 3 cols logged in)
- Sticky search/filter bar
- "Coder Community" sidebar (logged out only)
- "Create Spec" button (logged in only)

#### My Specs (`/my-specs`)
- Personal spec collection
- Search and filter functionality
- Spec cards with preview modal
- 3-column grid layout
- Sticky search/filter bar

#### Agent Page (`/agent`)
- AI coding agent interface
- Placeholder for future implementation

#### Create Spec (`/create-spec`)
- Spec creation interface
- Placeholder for future implementation

#### Pricing (`/pricing`)
- Pricing plans information
- Placeholder for future implementation

#### Contact (`/contact`)
- Contact form
- Placeholder for future implementation

#### Install (`/install`)
- Extension installation instructions
- Placeholder for future implementation

### Components

#### Navbar
- Fixed navigation bar
- Responsive design
- Authentication-aware (shows user info or login/signup)
- Links to all main pages
- "Install Extension" button

#### SpecCard
- Displays spec information
- Thumbnail preview
- Category and tier badges
- Like and comment counts
- "Preview" button with modal
- "Run Spec" button
- Hover effects with orange cube animation
- Uses `createPortal` for preview modal (z-index fix)

#### MySpecCard
- Similar to SpecCard but for personal specs
- Title truncation (line-clamp-3)
- Same preview modal functionality

### Styling
- Dark theme (black background)
- Blue accent color (#306bff)
- Orange accent for preview buttons
- Responsive design with Tailwind CSS
- Custom animations (snake animation for orange cubes)
- Backdrop blur effects

## Project Structure

```
a3code-website/
├── public/
│   └── A3 spacedSmall.svg          # Logo
├── src/
│   ├── app/
│   │   ├── agent/page.tsx          # Agent page
│   │   ├── contact/page.tsx        # Contact page
│   │   ├── create-spec/page.tsx    # Create spec page
│   │   ├── install/page.tsx        # Install page
│   │   ├── login/page.tsx          # Login page
│   │   ├── my-specs/page.tsx       # My specs page
│   │   ├── pricing/page.tsx        # Pricing page
│   │   ├── signup/page.tsx         # Signup page
│   │   ├── specs/page.tsx          # Specs registry
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   ├── components/
│   │   ├── MySpecCard.tsx          # My spec card component
│   │   ├── Navbar.tsx              # Navigation bar
│   │   └── SpecCard.tsx            # Spec card component
│   └── contexts/
│       └── AuthContext.tsx         # Authentication context
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Key Implementation Details

### Authentication Flow
1. User navigates to `/login` or `/signup`
2. Enters credentials (mock validation)
3. On success, `AuthContext` updates `isAuthenticated` state
4. User is redirected to home page
5. UI updates to show logged-in state

### Sticky Search/Filter Bar
- Uses `sticky top-24` positioning
- Background: `bg-black` (fully opaque)
- Z-index: `z-40`
- Fixed black box at `z-[35]` covers gap between navbar and sticky bar
- Prevents content from showing through when scrolling

### Preview Modal
- Uses `createPortal` to render in `document.body`
- Z-index: `z-[9999]` for maximum priority
- Backdrop blur effect
- Click outside to close
- Sticky header with close button

### Responsive Grid Layout
- Specs Registry: 2 columns (logged out), 3 columns (logged in)
- My Specs: 3 columns (always)
- Uses Tailwind's responsive breakpoints

### Z-Index Hierarchy
- Navbar: `z-50`
- Page headers: `z-[45]`
- Sticky search/filter bar: `z-40`
- Fixed black box (gap filler): `z-[35]`
- Spec cards: `z-30`
- Preview modal: `z-[9999]` (via portal)

## Known Issues & Solutions

### Issue: Preview modal appearing behind other elements
**Solution**: Used `createPortal` to render modal in `document.body` with `z-[9999]`

### Issue: Spec cards showing between navbar and sticky bar when scrolling
**Solution**: Added fixed black box at `z-[35]` to cover the gap

### Issue: Orange cube animation going outside card boundaries
**Solution**: Fixed animation keyframes to keep cubes inside cards

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
git clone https://github.com/A3Max/A3-Code-Website.git
cd A3-Code-Website
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:3000 in your browser

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

## Future Work

### High Priority
- Implement real authentication (backend integration)
- Create spec creation form
- Implement spec execution functionality
- Add spec remixing feature
- Connect to actual spec database

### Medium Priority
- Add user profiles
- Implement spec versioning
- Add spec comments and discussions
- Create spec rating system
- Add search autocomplete

### Low Priority
- Add dark/light theme toggle
- Implement spec categories management
- Add spec analytics
- Create admin dashboard
- Add spec export/import functionality

## Environment Variables
Currently using mock authentication. Future implementation will require:
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- Database connection strings
- API keys for external services

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations
- Next.js App Router for optimal performance
- Static generation where possible
- Client-side rendering for interactive components
- Image optimization with Next.js Image component

## Security Notes
- Currently using mock authentication (not production-ready)
- Implement proper authentication before production deployment
- Add rate limiting for API endpoints
- Implement CSRF protection
- Add input validation and sanitization

## Contributing Guidelines
1. Follow existing code style
2. Use TypeScript for type safety
3. Write responsive components
4. Test on multiple screen sizes
5. Ensure accessibility (ARIA labels, keyboard navigation)

## License
[Add your license here]

## Contact
[Add contact information]

---

**Last Updated**: January 16, 2026
**Version**: 1.0.0
