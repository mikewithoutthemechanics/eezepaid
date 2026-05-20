'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  Wallet, Send, CreditCard, Shield, Zap, Globe, ArrowRight, 
  CheckCircle2, Star, Users, TrendingUp, Lock, Smartphone,
  Apple, Play, ChevronDown, QrCode, Clock, DollarSign,
  Banknote, SmartphoneIcon, RefreshCw, Eye
} from 'lucide-react'
import { initLenis, initAllAnimations } from '@/lib/animations'
import ThreeCoin from '@/components/animations/ThreeCoin'

export default function Home() {
  const [activeTab, setActiveTab] = useState('send')
  const [demoBalance, setDemoBalance] = useState(12500)

  useEffect(() => {
    initLenis()
    initAllAnimations()
  }, [])

  const demoSteps = [
    { step: 1, title: 'Create Account', desc: 'Sign up in 30 seconds', icon: Users },
    { step: 2, title: 'Get Your Card', desc: 'Instant virtual card', icon: CreditCard },
    { step: 3, title: 'Start Spending', desc: 'Use anywhere Apple Pay is accepted', icon: Smartphone },
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Transfers',
      desc: 'Send eRand to anyone in South Africa instantly, 24/7. No waiting, no delays.',
      highlight: 'Zero wait time'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Virtual Cards',
      desc: 'Get instant virtual cards with Apple Pay integration. Tap, pay, done.',
      highlight: 'Apple Pay ready'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Bank-Grade Security',
      desc: 'Military-grade encryption and blockchain technology protect your funds.',
      highlight: '256-bit encryption'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Zero Fees',
      desc: 'No hidden fees, no transaction costs. Send money for free, forever.',
      highlight: '100% free'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Access',
      desc: 'Use your eRand anywhere in the world with our global merchant network.',
      highlight: 'Worldwide acceptance'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Smart Savings',
      desc: 'AI-powered insights and automated savings to grow your wealth effortlessly.',
      highlight: 'Auto-save'
    },
  ]

  const testimonials = [
    {
      name: 'Thabo Mokoena',
      role: 'Small Business Owner',
      content: 'eezePaid transformed how I handle payments. My clients can pay me instantly, and I can spend the money right away with my virtual card.',
      rating: 5
    },
    {
      name: 'Sarah Naidoo',
      role: 'Freelance Designer',
      content: 'Finally, a payment app that actually works in South Africa! No more waiting days for bank transfers. eezePaid is instant.',
      rating: 5
    },
    {
      name: 'James Van Der Berg',
      role: 'Tech Entrepreneur',
      content: 'The blockchain integration gives me confidence that my money is secure. Plus, the Apple Pay integration is seamless.',
      rating: 5
    },
  ]

  const faqs = [
    {
      question: 'What is eRand?',
      answer: 'eRand is a digital currency pegged 1:1 to the South African Rand. It combines the stability of traditional currency with the speed and efficiency of blockchain technology.'
    },
    {
      question: 'Is eezePaid safe?',
      answer: 'Absolutely. We use military-grade encryption, blockchain technology, and comply with all South African financial regulations. Your funds are always protected.'
    },
    {
      question: 'How do I get a virtual card?',
      answer: 'Simply sign up, complete quick verification, and you can instantly generate a virtual card. It works with Apple Pay and can be used anywhere online.'
    },
    {
      question: 'Are there really no fees?',
      answer: 'Yes! eezePaid is completely free to use. No monthly fees, no transaction fees, no hidden charges. Send and receive money for free.'
    },
    {
      question: 'How long do transfers take?',
      answer: 'Transfers are instant. Send eRand to anyone and they receive it within seconds, 24/7, including weekends and holidays.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                eezePaid
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Features
              </Link>
              <Link href="#demo" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Demo
              </Link>
              <Link href="#fees" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Fees
              </Link>
              <Link href="#faq" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                FAQ
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="px-6 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="hero-title space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-success/10 rounded-full text-brand-success font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Trusted by 50,000+ South Africans</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Send Money in{' '}
                <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  Seconds
                </span>{' '}
                Not Days
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                The future of South African payments. Instant transfers, virtual cards, and zero fees. 
                Powered by blockchain technology.
              </p>
            </div>
            <div className="hero-subtitle flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <Zap className="w-5 h-5 text-brand-primary" />
                <span className="font-medium">Instant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <Shield className="w-5 h-5 text-brand-success" />
                <span className="font-medium">Secure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <DollarSign className="w-5 h-5 text-brand-accent" />
                <span className="font-medium">Free Forever</span>
              </div>
            </div>
            <div className="hero-cta flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-brand-primary/50 transition-all duration-300 flex items-center gap-2"
              >
                Start Now - It's Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#demo"
                className="px-8 py-4 border-2 border-foreground/20 rounded-full text-lg font-semibold hover:bg-foreground/5 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-3xl blur-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden glass-dark p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">See eezePaid in Action</h3>
                <p className="text-white/70">Experience the future of payments</p>
              </div>
              <ThreeCoin />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-white">50K+</div>
                  <div className="text-sm text-white/70">Users</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-white">R2B+</div>
                  <div className="text-sm text-white/70">Transacted</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 px-6 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-foreground/60">
              <Shield className="w-6 h-6" />
              <span className="font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/60">
              <Lock className="w-6 h-6" />
              <span className="font-medium">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/60">
              <Banknote className="w-6 h-6" />
              <span className="font-medium">FICA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/60">
              <Globe className="w-6 h-6" />
              <span className="font-medium">South African Reserve Bank Regulated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why South Africans Love{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">eezePaid</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Built for South Africa, powered by technology. Experience payments like never before.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-list">
            {features.map((feature, index) => (
              <div
                key={index}
                className="stagger-item p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 mb-4">{feature.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-medium">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Card Showcase */}
      <section className="py-24 px-6 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Wallet,{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Reimagined</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get instant virtual cards that work everywhere Apple Pay is accepted
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-2xl text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <Wallet className="w-8 h-8" />
                      <span className="font-bold text-lg">eezePaid</span>
                    </div>
                    <Apple className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-mono tracking-wider mb-6">
                    •••• •••• •••• 4532
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-white/70 mb-1">Cardholder</div>
                      <div className="font-medium">John Doe</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/70 mb-1">Expires</div>
                      <div className="font-medium">12/27</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                  <Smartphone className="w-8 h-8 text-brand-primary mb-4" />
                  <h4 className="font-bold mb-2">Apple Pay Ready</h4>
                  <p className="text-sm text-foreground/70">Add to Apple Wallet in seconds</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                  <Lock className="w-8 h-8 text-brand-success mb-4" />
                  <h4 className="font-bold mb-2">Freeze Instantly</h4>
                  <p className="text-sm text-foreground/70">Freeze/unfreeze your card anytime</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Virtual Cards That Work Everywhere</h3>
              <p className="text-lg text-foreground/70">
                Get instant virtual cards that work with Apple Pay, online merchants, and in-store NFC payments. 
                No waiting for physical cards - start spending immediately.
              </p>
              <div className="space-y-4">
                {[
                  'Instant issuance - no waiting',
                  'Apple Pay integration',
                  'Freeze/unfreeze instantly',
                  'Real-time transaction notifications',
                  'Set spending limits',
                  'Multiple cards for different purposes'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-success flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-brand-primary/50 transition-all duration-300"
              >
                Get Your Virtual Card
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              See How It{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Three simple steps to start sending money instantly
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className="reveal relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <div className="pt-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 flex items-center justify-center mb-6 text-brand-primary">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Try the Demo</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('send')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'send'
                        ? 'bg-brand-primary text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-foreground/70'
                    }`}
                  >
                    Send
                  </button>
                  <button
                    onClick={() => setActiveTab('receive')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'receive'
                        ? 'bg-brand-primary text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-foreground/70'
                    }`}
                  >
                    Receive
                  </button>
                </div>
              </div>

              {activeTab === 'send' ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Recipient</label>
                    <input
                      type="text"
                      placeholder="Enter wallet address or phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Amount (eRand)</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-primary/50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send eRand
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-8 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <QrCode className="w-32 h-32 mx-auto mb-4 text-brand-primary" />
                      <p className="text-sm text-foreground/70">Scan to send eRand</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Wallet Address</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value="0x1234...5678"
                        readOnly
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-foreground/70 font-mono text-sm"
                      />
                      <button className="px-4 py-3 bg-brand-primary text-white rounded-xl hover:bg-brand-primary/90 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-24 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Simple,{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Transparent</span>{' '}
              Pricing
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              No hidden fees. No surprises. Just free payments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-brand-primary/50 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Free</h3>
                <p className="text-foreground/70">Forever</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Send Money</span>
                  <span className="font-bold text-brand-success">Free</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Receive Money</span>
                  <span className="font-bold text-brand-success">Free</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Virtual Card</span>
                  <span className="font-bold text-brand-success">Free</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-foreground/70">Apple Pay</span>
                  <span className="font-bold text-brand-success">Free</span>
                </div>
              </div>
              <Link
                href="/dashboard"
                className="block w-full py-4 text-center border-2 border-brand-primary text-brand-primary rounded-xl font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                Get Started Free
              </Link>
            </div>
            <div className="p-8 rounded-2xl border-2 border-brand-primary bg-brand-primary/5 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Premium</h3>
                <p className="text-foreground/70">Coming Soon</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Everything in Free</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Physical Card</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Priority Support</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-foreground/70">Higher Limits</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
              </div>
              <button
                disabled
                className="block w-full py-4 text-center border-2 border-slate-300 text-slate-500 rounded-xl font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
            <div className="p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-brand-primary/50 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Business</h3>
                <p className="text-foreground/70">Contact Us</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Multi-user Access</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">API Access</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-foreground/70">Custom Integration</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-foreground/70">Dedicated Support</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                </div>
              </div>
              <button className="block w-full py-4 text-center border-2 border-brand-primary text-brand-primary rounded-xl font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Loved by{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">South Africans</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Join thousands of happy users who have transformed how they handle money
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-list">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="stagger-item p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/70 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/50">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 reveal"
              >
                <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                  <ChevronDown className="w-5 h-5 text-brand-primary" />
                  {faq.question}
                </h3>
                <p className="text-foreground/70 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-4xl mx-auto text-center space-y-8 reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Ready to Experience the Future of Payments?
          </h2>
          <p className="text-xl text-white/90">
            Join 50,000+ South Africans who are already sending money instantly
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-12 py-5 bg-white text-brand-primary rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="#demo"
              className="px-12 py-5 border-2 border-white text-white rounded-full text-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-6 h-6" />
              Watch Demo
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Setup in 30 seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">eezePaid</span>
              </div>
              <p className="text-foreground/70 text-sm">
                The future of South African payments. Instant, secure, and free.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="#features" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#fees" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="#demo" className="hover:text-foreground">Demo</Link></li>
                <li><Link href="#faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-foreground">Security</Link></li>
                <li><Link href="#" className="hover:text-foreground">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-foreground/60 text-sm">
            <p>&copy; 2024 eezePaid. All rights reserved. Made with ❤️ in South Africa.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
