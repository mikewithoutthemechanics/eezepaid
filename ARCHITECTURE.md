# eezePaid - Architecture & Tech Stack

## Overview
eezePaid is a modern fintech application for South African Rand (ZAR) payments via blockchain, featuring:
- eRand digital currency (ZAR-pegged stablecoin)
- Virtual card issuing with tap & pay
- Apple Pay integration
- Stunning UI with GSAP, Lenis, Three.js, parallax effects
- Deployable on Vercel

## Tech Stack

### Frontend Framework
- **Next.js 14+** (App Router) - React framework with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### Animation & Visual Effects
- **GSAP (GreenSock)** - Professional-grade animations
- **Lenis** - Smooth scrolling
- **Three.js** - 3D graphics and effects
- **Framer Motion** - React animation library
- **React Spring** - Physics-based animations

### UI Components
- **shadcn/ui** - Modern component library (built on Radix UI)
- **Lucide React** - Icon library
- **Class Variance Authority (CVA)** - Component variants

### Blockchain & Payments
- **ethers.js** - Ethereum blockchain interaction
- **Web3.js** - Alternative blockchain library
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript interface for Ethereum

### Virtual Card & Apple Pay
- **Stripe** - Card issuing and Apple Pay integration
- **Plaid** - Bank account connection (optional)
- **Apple Pay JS** - Native Apple Pay integration

### Backend/API
- **Next.js API Routes** - Serverless functions
- **Supabase** - Database, Auth, Realtime (optional)
- **Prisma** - ORM if using PostgreSQL

### State Management
- **Zustand** - Lightweight state management
- **React Context** - For app-wide state
- **SWR/React Query** - Data fetching and caching

### Deployment
- **Vercel** - Hosting and deployment platform

## Project Structure

```
eezepaid/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/       # Dashboard group
│   │   │   ├── dashboard/
│   │   │   ├── wallet/
│   │   │   ├── cards/
│   │   │   ├── send/
│   │   │   ├── receive/
│   │   │   └── layout.tsx
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── animations/       # GSAP/Three.js components
│   │   ├── wallet/           # Wallet-specific components
│   │   ├── cards/            # Card components
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utilities
│   │   ├── blockchain/      # Blockchain utilities
│   │   ├── payments/         # Payment logic
│   │   ├── animations/       # Animation helpers
│   │   └── utils.ts
│   ├── hooks/                # Custom React hooks
│   │   ├── useBlockchain.ts
│   │   ├── useWallet.ts
│   │   └── useCard.ts
│   ├── store/                # Zustand stores
│   │   ├── walletStore.ts
│   │   └── userStore.ts
│   ├── types/                # TypeScript types
│   └── styles/               # Additional styles
├── public/                   # Static assets
├── contracts/                # Smart contracts (optional)
└── package.json
```

## Key Features Implementation Plan

### 1. eRand Digital Currency
- ERC-20 token contract (ZAR-pegged)
- Mint/burn mechanism
- Reserve backing system
- Blockchain integration layer

### 2. Virtual Card Issuing
- Stripe Issuing API integration
- Card creation UI
- Card activation flow
- Transaction history

### 3. Apple Pay Integration
- Apple Pay on the Web
- Digital wallet provisioning
- NFC tap & pay simulation
- Payment request API

### 4. Payment Flow
- Send eRand to other users
- Receive eRand via QR code/link
- Transaction history
- Real-time balance updates

### 5. Landing Page
- Hero section with 3D effects
- Parallax scrolling sections
- GSAP animations
- Interactive elements

## Security Considerations

- Wallet private key encryption
- Secure API key management (environment variables)
- Rate limiting on API endpoints
- Input validation and sanitization
- HTTPS only for production
- Web3 security best practices

## Compliance Notes

- South African Reserve Bank regulations
- FICA (Financial Intelligence Centre Act) compliance
- Data protection (POPIA)
- AML (Anti-Money Laundering) checks
