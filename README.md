# eezePaid - The Future of South African Payments

A modern fintech application for South African Rand (ZAR) payments via blockchain, featuring eRand digital currency, virtual card issuing with Apple Pay integration, and stunning UI with GSAP, Lenis, Three.js, and parallax effects.

## 🚀 Features

- **eRand Digital Currency**: ZAR-pegged stablecoin built on blockchain technology
- **Instant Transfers**: Send and receive eRand 24/7 with zero delays
- **Virtual Cards**: Get instant virtual cards with tap & pay functionality
- **Apple Pay Integration**: Seamless mobile payments with Apple Pay
- **Stunning UI**: Modern, animated interface with GSAP, Lenis, Three.js, and parallax effects
- **Blockchain Security**: Military-grade encryption and blockchain technology
- **Zero Fees**: No hidden fees or transaction costs

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Animations**: GSAP, Lenis, Three.js, Framer Motion
- **Blockchain**: ethers.js, Wagmi, Viem
- **Payments**: Stripe (card issuing), Apple Pay
- **State Management**: Zustand
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eezepaid
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```env
NEXT_PUBLIC_ERAND_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_NETWORK_ID=1
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
# Add other required variables
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
eezepaid/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   ├── dashboard/         # Dashboard pages
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── animations/        # GSAP/Three.js components
│   │   ├── wallet/            # Wallet components
│   │   └── cards/             # Card components
│   ├── lib/                   # Utilities
│   │   ├── blockchain/        # Blockchain utilities
│   │   ├── payments/          # Payment logic
│   │   └── animations/        # Animation helpers
│   ├── store/                 # Zustand stores
│   └── types/                 # TypeScript types
├── public/                    # Static assets
└── contracts/                 # Smart contracts (optional)
```

## 🎨 UI/UX Features

- **Glassmorphism Design**: Modern glass-like effects
- **Smooth Scrolling**: Lenis-powered smooth scroll
- **3D Animations**: Three.js 3D coin animation
- **Parallax Effects**: GSAP ScrollTrigger parallax
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Full dark mode support
- **Accessibility**: WCAG AA compliant

## 💳 Payment Flow

### Sending eRand
1. Navigate to Dashboard → Send
2. Enter recipient address or email
3. Enter amount in eRand
4. Add optional description
5. Confirm and send

### Receiving eRand
1. Navigate to Dashboard → Receive
2. Share your QR code or wallet address
3. Set optional request amount
4. Wait for sender to complete transaction

### Virtual Cards
1. Navigate to Dashboard → Cards
2. Click "Create New Card"
3. Enter cardholder name and initial balance
4. Enable Apple Pay (optional)
5. Use your virtual card instantly

## 🔒 Security

- Private key encryption
- Secure API key management
- Rate limiting on API endpoints
- Input validation and sanitization
- HTTPS only for production
- Web3 security best practices

## 🌍 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy

The `vercel.json` file includes optimized configuration for deployment.

### Environment Variables

Make sure to set these environment variables in your deployment:

- `NEXT_PUBLIC_ERAND_CONTRACT_ADDRESS` - Your eRand smart contract address
- `NEXT_PUBLIC_NETWORK_ID` - Blockchain network ID
- `STRIPE_SECRET_KEY` - Stripe secret key for card issuing
- `STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_ISSUING_API_KEY` - Stripe Issuing API key
- `APPLE_PAY_MERCHANT_ID` - Apple Pay merchant ID
- `NEXT_PUBLIC_APP_URL` - Your application URL

## 📝 Compliance Notes

This application is designed for South African market and should comply with:

- South African Reserve Bank regulations
- FICA (Financial Intelligence Centre Act) compliance
- Data protection (POPIA)
- AML (Anti-Money Laundering) checks

**Important**: This is a demonstration/prototype. For production use, you must:
- Implement proper KYC/FICA verification
- Obtain necessary financial licenses
- Complete security audits
- Implement proper compliance measures
- Work with legal counsel

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- GSAP for powerful animations
- Three.js for 3D graphics
- Stripe for payment infrastructure
- The South African fintech community

---

Built with ❤️ for the future of South African payments
