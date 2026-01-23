# A3Coder Website - Setup Guide

## Prerequisites

### ⚠️ Critical: Node.js Version Requirement

**Required**: Node.js >= 20.9.0 (Recommended: v24.13.0)

**Check your current version**:
```bash
node --version
```

If you see a version lower than 20.9.0, you must upgrade before proceeding.

### Installing the Correct Node.js Version

#### Using nvm (macOS/Linux)

```bash
# Install Node.js v24.13.0
nvm install 24.13.0

# Use Node.js v24.13.0
nvm use 24.13.0

# Set as default
nvm alias default 24.13.0
```

#### Using nvm-windows (Windows)

```bash
# Install Node.js v24.13.0
nvm install 24.13.0

# Use Node.js v24.13.0
nvm use 24.13.0
```

#### Manual Installation

Download and install from: https://nodejs.org/

## Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/A3Max/new-website-repo.git
   cd new-website-repo
   ```

2. **Verify Node.js version**:
   ```bash
   node --version
   # Should show v24.13.0 or higher
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and update the values:
   ```bash
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to http://localhost:3000

## Troubleshooting

### "Node.js version mismatch" Error

If you see this error when running `npm run dev`:

```
❌ ERROR: Node.js version mismatch!
Required: Node.js >= 20.9.0
Current:  Node.js v18.20.4
```

**Solution**: Install the correct Node.js version (see Prerequisites section above).

### Styles Not Loading

If the website appears unstyled:

1. Check Node.js version: `node --version`
2. Ensure it's >= 20.9.0
3. Stop the dev server (Ctrl+C)
4. Restart: `npm run dev`

### Build Errors

If you encounter build errors:

1. Clear the cache:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. Verify Node.js version is correct

## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Environment Variables

See `.env.example` for all available environment variables.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Support

If you encounter issues not covered here, please check the main specification document: `A3CODE_WEBSITE_SPEC.md`
