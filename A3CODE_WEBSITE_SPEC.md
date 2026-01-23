# A3Coder Website - Complete Project Specification

## Executive Summary

A3Coder is a Next.js-based web platform for managing and executing AI coding specifications (specs). The platform enables users to browse, create, share, and execute executable specifications designed to be run, reused, and improved over time. Built with modern web technologies, A3Coder provides a spec registry, user authentication, and a community-driven ecosystem for spec-driven development.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture](#architecture)
4. [Core Features](#core-features)
5. [User Flows](#user-flows)
6. [Component Library](#component-library)
7. [Styling System](#styling-system)
8. [Responsive Design](#responsive-design)
9. [State Management](#state-management)
10. [API Integration](#api-integration)
11. [Security Considerations](#security-considerations)
12. [Performance Optimization](#performance-optimization)
13. [Deployment](#deployment)
14. [AI Coding Agent Integration](#ai-coding-agent-integration)
15. [Future Roadmap](#future-roadmap)

---

## Project Overview

### Vision
A3Coder aims to transform how developers approach software development by providing a platform where specifications can be written, shared, and executed deterministically. The platform bridges the gap between high-level specifications and production-ready code.

### Target Users
- **Hobbyists**: Individuals exploring spec-driven development
- **Professionals**: Developers creating and managing specs with AI assistance
- **Elite Users**: Teams requiring dedicated cloud resources and advanced features

### Key Value Propositions
- **Spec Registry**: Community-driven library of executable specifications
- **AI-Powered Creation**: Leverage AI to create and review specs
- **Deterministic Execution**: Run specs with predictable, reproducible results
- **Model Freedom**: Use any LLM provider (OpenRouter, Tensorix, private deployments)
- **Production-Ready**: Built for real engineering output, not demos

---

## Technology Stack

### Frontend Framework
- **Next.js 16.1.2**: React framework with App Router for optimal performance
- **React 19.2.3**: UI library with latest features
- **TypeScript 5**: Type-safe development

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework
- **PostCSS**: CSS processing

### State Management
- **React Context API**: Global state for authentication and user data

### Authentication
- **NextAuth 4.24.13**: Authentication library (currently using mock implementation)

### Icons & Assets
- **Inline SVG**: Custom A3 logo and icons
- **Next.js Image**: Optimized image loading

### Development Tools
- **ESLint 9**: Code linting
- **TypeScript Compiler**: Type checking

---

## Architecture

### Project Structure

```
a3code-website/
├── public/                          # Static assets
│   ├── A3 spacedSmall.svg          # Logo
│   ├── BlackA3.svg                 # Alternative logo
│   └── [other assets]
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── agent/                  # AI coding agent interface
│   │   ├── about/                  # About page
│   │   ├── api/                    # API routes
│   │   │   ├── auth/               # NextAuth endpoints
│   │   │   ├── contact-sales/      # Contact form API
│   │   │   └── newsletter/         # Newsletter subscription
│   │   ├── contact/                # Contact page
│   │   ├── create-spec/            # Spec creation interface
│   │   ├── docs/                   # Documentation
│   │   ├── install/                # Installation instructions
│   │   ├── install-extension/      # Extension installation
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
│   ├── config/                     # Configuration files
│   │   └── footer.ts               # Footer links configuration
│   └── contexts/                   # React contexts
│       └── AuthContext.tsx         # Authentication context
├── .gitignore
├── A3CODER_WEBSITE_SPEC.md         # This specification
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

### Data Flow

```
User Interaction → Component → Context/State → API Route → External Service
                      ↓
                 UI Update
```

### Component Hierarchy

```
Layout (Root)
├── Navbar
├── Page Content
│   ├── Home
│   ├── Specs Registry
│   │   ├── Search/Filter Bar
│   │   ├── Spec Cards
│   │   └── Sidebar (logged out)
│   ├── My Specs
│   │   ├── Search/Filter Bar
│   │   └── MySpec Cards
│   ├── Pricing
│   ├── Agent
│   └── [Other Pages]
└── Footer / SimpleFooter
```

---

## Core Features

### 1. Authentication System

**Current Implementation**: Mock authentication using React Context

**Features**:
- Login page (`/login`) with email/password form
- Signup page (`/signup`) with registration form
- User session management
- Conditional UI based on authentication state
- Logout functionality
- User avatar display with initials

**Future Implementation**:
- Real authentication with NextAuth
- OAuth providers (Google, GitHub)
- Email verification
- Password reset
- Two-factor authentication

### 2. Specs Registry (`/specs`)

**Features**:
- Browse all available specs
- Search functionality
- Category filtering
- Spec cards with preview modal
- Responsive grid layout (2 cols logged out, 3 cols logged in)
- Sticky search/filter bar
- "Coder Community" sidebar (logged out only)
- "Create Spec" button (logged in only)

**Spec Card Information**:
- Title
- Category badge
- Tier badge (Tier 1, Tier 2, Tier 3)
- Date
- Duration
- Like count
- Comment count
- Thumbnail preview
- "Preview" button with modal
- "Run Spec" button

### 3. My Specs (`/my-specs`)

**Features**:
- Personal spec collection
- Search and filter functionality
- Spec cards with preview modal
- 3-column grid layout
- Sticky search/filter bar
- Title truncation (line-clamp-3)

### 4. Agent Page (`/agent`)

**Current Status**: Placeholder for future implementation

**Planned Features**:
- AI coding agent interface
- Real-time code generation
- Spec execution
- Diff preview
- Command execution
- Git integration

### 5. Create Spec (`/create-spec`)

**Current Status**: Placeholder for future implementation

**Planned Features**:
- Spec creation form
- AI-powered spec generation
- Spec preview
- Save as draft
- Publish to community

### 6. Pricing (`/pricing`)

**Features**:
- Three pricing tiers: Free, Pro ($20/mo), Elite ($50/mo)
- Responsive layouts:
  - Desktop: 3-column card layout
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

### 7. Contact (`/contact`)

**Current Status**: Placeholder for future implementation

**Planned Features**:
- Contact form
- Contact sales modal (implemented)
- FAQ section

### 8. Install (`/install`)

**Current Status**: Placeholder for future implementation

**Planned Features**:
- Extension installation instructions
- Platform-specific guides (macOS, Windows, Linux)
- Troubleshooting section

### 9. Install Extension (`/install-extension`)

**Current Status**: Placeholder for future implementation

**Planned Features**:
- VS Code extension installation
- Configuration guide
- API key setup

### 10. Docs (`/docs`)

**Current Status**: Placeholder for future implementation

**Planned Features**:
- User documentation
- API reference
- Spec format specification
- Tutorials

### 11. About (`/about`)

**Current Status**: Placeholder for future implementation

**Planned Features**:
- Company information
- Team
- Mission and vision
- Technology stack

---

## User Flows

### 1. New User Registration Flow

```
1. User visits homepage
2. Clicks "Sign Up" button
3. Redirected to /signup
4. Fills registration form
5. Submits form
6. Redirected to home page
7. UI shows logged-in state
```

### 2. Browse Specs Flow

```
1. User visits /specs
2. Views spec cards in grid
3. Uses search bar to find specific specs
4. Applies category filters
5. Clicks "Preview" on a spec
6. Preview modal opens with spec details
7. Closes modal
8. Clicks "Run Spec" to execute
```

### 3. Create Spec Flow (Future)

```
1. Logged-in user clicks "Create Spec"
2. Redirected to /create-spec
3. Fills spec creation form
4. Uses AI assistance to generate spec
5. Reviews and edits spec
6. Saves as draft or publishes
7. Spec appears in My Specs
```

### 4. Upgrade Plan Flow

```
1. User visits /pricing
2. Reviews plan features
3. Clicks "Upgrade" on desired plan
4. Redirected to signup/payment
5. Completes upgrade
6. Account updated with new plan
```

---

## Component Library

### Navbar

**Props**: None (uses AuthContext)

**Features**:
- Fixed positioning at top
- Responsive design (desktop/mobile drawer)
- Authentication-aware (shows user info or login/signup)
- Links to all main pages
- "Install Extension" button
- Mobile menu with hamburger icon

**Responsive Breakpoints**:
- Desktop: ≥1030px
- Mobile: <1030px

### SpecCard

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

### MySpecCard

**Props**: Same as SpecCard

**Features**:
- Similar to SpecCard but for personal specs
- Title truncation (line-clamp-3)
- Same preview modal functionality

### Footer

**Features**:
- Desktop footer with multiple columns
- Links organized by category
- Social media links
- Copyright information

**Responsive**: Hidden on mobile (<768px)

### SimpleFooter

**Features**:
- Simplified footer for mobile
- Essential links only
- Social media links
- Copyright information

**Responsive**: Visible only on mobile (<768px)

### ContactSalesModal

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

### MobileFilters

**Features**:
- Mobile-friendly filter component
- Category selection
- Search functionality
- Collapsible design

### Sidebar

**Features**:
- Category filters
- Search functionality
- "Coder Community" card
- Social media links
- Visible on Specs Registry (logged out only)

---

## Styling System

### Color Palette

**Primary Colors**:
- Background: `#e4e4e4` (light gray)
- Text Primary: `#1a1a1a` (dark gray)
- Text Secondary: `black/60` to `black/80`
- Accent Blue: `#306bff`
- Accent Orange: `#f97316`
- Border: `black/10`

**Semantic Usage**:
- Blue: Primary actions, links, active states
- Orange: Preview buttons, hover effects, Elite plan
- Black: Text, borders, icons

### Typography

**Font**: Geist (Next.js default)

**Sizes**:
- Hero Title: `text-5xl` → `text-3xl` → `text-2xl` → `text-xl` (responsive)
- Section Title: `text-4xl` → `text-3xl` → `text-2xl` (responsive)
- Body Text: `text-xl` → `text-base` → `text-sm` (responsive)
- Small Text: `text-sm` → `text-xs` (responsive)

**Weights**:
- Bold: `font-bold`
- Semibold: `font-semibold`
- Medium: `font-medium`
- Regular: default

### Spacing System

**Padding**:
- Container: `px-6` → `px-4` (mobile)
- Cards: `p-6` → `p-4` → `p-2` (mobile)
- Buttons: `px-5 py-2.5` → `px-4 py-2` (mobile)

**Margins**:
- Section spacing: `py-20` → `py-12` (mobile)
- Element spacing: `mb-16` → `mb-8` (mobile)

### Shadows

**Levels**:
- `shadow-sm`: Subtle elevation
- `shadow-md`: Medium elevation
- `shadow-lg`: High elevation (cards, modals)
- `shadow-xl`: Very high elevation

### Borders

**Styles**:
- `border`: 1px solid
- `border-2`: 2px solid
- `border-l-4`: Left border emphasis

**Colors**:
- `border-black/10`: Subtle border
- `border-[#306bff]`: Blue accent
- `border-orange-500`: Orange accent

### Animations

**Transitions**:
- `transition-colors`: Color changes
- `transition-transform`: Transform changes
- `duration-300`: 300ms duration
- `ease-in-out`: Smooth easing

**Custom Animations**:
- Orange cube snake animation (SpecCard hover)
- Logo hover effects (blue/orange)

### Z-Index Hierarchy

```
- Navbar: z-50
- Page headers: z-[45]
- Sticky search/filter bar: z-40
- Fixed black box (gap filler): z-[35]
- Spec cards: z-30
- Preview modal: z-[9999] (via portal)
- Mobile menu overlay: z-40
- Mobile menu drawer: z-40
```

---

## Responsive Design

### Breakpoints

**Custom Breakpoints**:
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

### Mobile-Specific Features

**Mobile Menu**:
- Drawer from right
- Overlay with blur
- Smooth slide animation
- Close on click outside

**Mobile Footer**:
- Simplified links
- Social media icons
- Copyright

**Mobile Pricing**:
- Tabbed interface (Free/Pro/Elite)
- One plan displayed at a time
- No horizontal scrolling

---

## State Management

### AuthContext

**Purpose**: Manage user authentication state

**State**:
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

### Component State

**Local State Examples**:
- `isMobileMenuOpen`: Navbar mobile menu
- `showContactModal`: Contact sales modal
- `selectedPlan`: Pricing page tab selection
- `searchQuery`: Search input
- `selectedCategory`: Category filter

---

## API Integration

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

---

## Security Considerations

### Current Implementation

**Authentication**:
- Mock authentication (not production-ready)
- No password hashing
- No session management

**Input Validation**:
- Basic form validation
- No server-side validation

### Future Security Measures

**Authentication**:
- Implement real authentication with NextAuth
- Password hashing (bcrypt)
- JWT tokens
- Session management
- OAuth providers
- Two-factor authentication

**API Security**:
- Rate limiting
- CSRF protection
- Input validation and sanitization
- SQL injection prevention
- XSS prevention

**Data Protection**:
- HTTPS only
- Secure cookies
- Environment variables for secrets
- API key encryption

**Authorization**:
- Role-based access control
- Spec ownership verification
- Plan-based feature access

---

## Performance Optimization

### Current Optimizations

**Next.js Features**:
- App Router for optimal performance
- Static generation where possible
- Client-side rendering for interactive components
- Image optimization with Next.js Image component

**Code Splitting**:
- Automatic code splitting by Next.js
- Dynamic imports for large components

### Future Optimizations

**Caching**:
- API response caching
- Static asset caching
- Service worker for offline support

**Bundle Size**:
- Tree shaking
- Code splitting
- Lazy loading
- Minification

**Rendering**:
- Server components where possible
- Streaming SSR
- Edge functions

**Images**:
- WebP format
- Responsive images
- Lazy loading
- CDN delivery

---

## Deployment

### Recommended Platform: Vercel

**Advantages**:
- Native Next.js support
- Automatic deployments
- Edge functions
- CDN
- Preview deployments

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

### Build Process

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Deployment Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

---

## AI Coding Agent Integration

### Overview

The A3Coder platform includes an AI coding agent that can be called to pull code from the git repository and execute specifications. This integration allows for automated code generation, review, and execution.

### Git Repository Integration

**Repository**: https://github.com/A3Max/A3-Code-Website

### AI Coding Agent Capabilities

The AI coding agent can:

1. **Pull from Git Repository**:
   - Clone the repository
   - Checkout specific branches
   - Pull latest changes
   - Access file contents

2. **Execute Specifications**:
   - Parse spec files
   - Generate code based on specs
   - Run tests
   - Validate outputs

3. **Code Review**:
   - Analyze code quality
   - Check for bugs
   - Suggest improvements
   - Generate documentation

4. **Git Operations**:
   - Create branches
   - Commit changes
   - Create pull requests
   - Merge branches

### Agent Integration Points

**1. Agent Page (`/agent`)**:
- Interface for interacting with the AI coding agent
- Real-time code generation display
- Execution status monitoring
- Diff preview for changes

**2. Create Spec (`/create-spec`)**:
- AI-assisted spec creation
- Code generation from specs
- Preview generated code
- Edit and refine

**3. Spec Execution**:
- Execute specs in cloud environment
- Monitor execution progress
- View results and artifacts
- Download generated code

### Agent API

**Pull from Repository**:
```typescript
POST /api/agent/pull
{
  "repository": "https://github.com/A3Max/A3-Code-Website",
  "branch": "main",
  "path": "/path/to/directory"
}
```

**Execute Spec**:
```typescript
POST /api/agent/execute
{
  "specId": "spec-id",
  "environment": "cloud" | "local",
  "options": {
    "model": "gpt-4",
    "timeout": 300
  }
}
```

**Get Execution Status**:
```typescript
GET /api/agent/execution/:id
```

**Download Artifacts**:
```typescript
GET /api/agent/artifacts/:id
```

### Agent Configuration

**Model Providers**:
- OpenRouter
- Tensorix
- Private deployments

**Environment**:
- Local (VS Code extension)
- Cloud (Elite plan)

**Resources**:
- CPU: Dedicated (Elite)
- Memory: Dedicated (Elite)
- Storage: Dedicated (Elite)

### Agent Workflow

```
1. User selects or creates spec
2. Agent pulls from git repository (if needed)
3. Agent parses spec
4. Agent generates code
5. Agent reviews code
6. Agent executes code
7. Agent validates results
8. User reviews and approves
9. Agent commits changes (optional)
```

### Agent Features by Plan

**Free**:
- Execute community specs in VS Code desktop
- View execution results

**Pro**:
- All Free features
- Execute professional specs in VS Code desktop
- AI-powered spec creation and review

**Elite**:
- All Pro features
- Run agent in cloud
- Dedicated resources
- Download artifacts
- Host dashboards

---

## Future Roadmap

### High Priority

1. **Real Authentication**:
   - Implement NextAuth with OAuth
   - Email verification
   - Password reset

2. **Spec Creation**:
   - Build spec creation form
   - AI-powered spec generation
   - Spec preview and editing

3. **Agent Implementation**:
   - Build agent interface
   - Implement spec execution
   - Add git integration

4. **Database Integration**:
   - Connect to PostgreSQL/MongoDB
   - Implement spec storage
   - User data management

### Medium Priority

1. **User Profiles**:
   - Profile pages
   - Spec history
   - Activity feed

2. **Spec Versioning**:
   - Version control for specs
   - Compare versions
   - Rollback functionality

3. **Comments and Discussions**:
   - Comment system
   - Reply threads
   - Notifications

4. **Rating System**:
   - Spec ratings
   - User reputation
   - Leaderboards

5. **Search Enhancement**:
   - Autocomplete
   - Advanced filters
   - Search history

### Low Priority

1. **Theme Toggle**:
   - Dark/light mode
   - Custom themes

2. **Admin Dashboard**:
   - User management
   - Spec moderation
   - Analytics

3. **Export/Import**:
   - Spec export
   - Bulk import
   - Backup/restore

4. **Analytics**:
   - Usage tracking
   - Spec performance
   - User insights

5. **Mobile App**:
   - React Native app
   - Push notifications
   - Offline support

---

## Contributing Guidelines

### Code Style

- Follow existing code conventions
- Use TypeScript for type safety
- Write responsive components
- Test on multiple screen sizes
- Ensure accessibility (ARIA labels, keyboard navigation)

### Git Workflow

1. Create feature branch from `main`
2. Make changes with clear commit messages
3. Test thoroughly
4. Create pull request
5. Code review
6. Merge to `main`

### Commit Message Format

```
type(scope): description

Examples:
feat(pricing): add tabbed mobile layout
fix(navbar): resolve mobile menu z-index issue
docs(readme): update installation instructions
```

---

## License

[Add your license here]

---

## Contact

[Add contact information]

---

**Last Updated**: January 23, 2026
**Version**: 2.0.0
**Repository**: https://github.com/A3Max/A3-Code-Website
