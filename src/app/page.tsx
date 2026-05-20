'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { initLenis, initAllAnimations } from '@/lib/animations'
import ThreeCoin from '@/components/animations/ThreeCoin'
import { Wallet, Send, CreditCard, Shield, Zap, Globe, ArrowRight } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    initLenis()
    initAllAnimations()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                eezePaid
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
                How it Works
              </Link>
              <Link href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="hero-title space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                The Future of{' '}
                <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  South African
                </span>{' '}
                Payments
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70">
                Send, receive, and spend ZAR instantly with eRand - the digital rand built on blockchain technology.
              </p>
            </div>
            <div className="hero-subtitle space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full">
                  <Shield className="w-5 h-5 text-brand-primary" />
                  <span className="text-sm font-medium">Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-brand-accent/10 rounded-full">
                  <Zap className="w-5 h-5 text-brand-accent" />
                  <span className="text-sm font-medium">Instant Transfers</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-brand-secondary/10 rounded-full">
                  <Globe className="w-5 h-5 text-brand-secondary" />
                  <span className="text-sm font-medium">Global Access</span>
                </div>
              </div>
            </div>
            <div className="hero-cta flex flex-wrap gap-4">
              <Link
                href="/auth/register"
                className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-brand-primary/50 transition-all duration-300 flex items-center gap-2"
              >
                Start Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 border-2 border-foreground/20 rounded-full text-lg font-semibold hover:bg-foreground/5 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-3xl blur-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden glass-dark">
              <ThreeCoin />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">eezePaid</span>?
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Experience the next generation of digital payments in South Africa
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-list">
            {[
              {
                icon: <Send className="w-8 h-8" />,
                title: 'Instant Transfers',
                description: 'Send eRand to anyone in South Africa instantly, 24/7, with zero delays.',
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: 'Virtual Cards',
                description: 'Get instant virtual cards with Apple Pay integration for seamless spending.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Blockchain Security',
                description: 'Your funds protected by military-grade encryption and blockchain technology.',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Zero Fees',
                description: 'No hidden fees, no transaction costs. Send money for free.',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Access',
                description: 'Use your eRand anywhere in the world with our global network.',
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: 'Smart Wallet',
                description: 'AI-powered insights and automated savings to grow your wealth.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="stagger-item p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 flex items-center justify-center mb-6 text-brand-primary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get started in minutes with our simple 3-step process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Sign up in seconds with just your email. No paperwork, no hassle.',
              },
              {
                step: '02',
                title: 'Get Your Wallet',
                description: 'Instantly receive your eRand wallet and virtual card.',
              },
              {
                step: '03',
                title: 'Start Transacting',
                description: 'Send, receive, and spend eRand anywhere, anytime.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="reveal relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-8xl font-bold text-brand-primary/10 absolute top-4 right-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 reveal">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Experience the{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Future
            </span>{' '}
            of Payments?
          </h2>
          <p className="text-xl text-foreground/70">
            Join thousands of South Africans already using eezePaid
          </p>
          <Link
            href="/auth/register"
            className="inline-block px-12 py-5 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-brand-primary/50 transition-all duration-300"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-foreground/60">
          <p>&copy; 2024 eezePaid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
