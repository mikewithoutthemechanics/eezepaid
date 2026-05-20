'use client'

import { useState } from 'react'
import { Download, Share2, Copy, Check } from 'lucide-react'
import { paymentService } from '@/lib/payments/paymentService'

export default function ReceiveMoney() {
  const [amount, setAmount] = useState('')
  const [walletAddress] = useState('0x1234567890abcdef1234567890abcdef12345678') // Mock address
  const [copied, setCopied] = useState(false)

  const qrData = paymentService.generateQRCode(walletAddress, parseFloat(amount) || undefined)

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Send me eRand',
          text: `Send eRand to ${walletAddress}`,
          url: window.location.href,
        })
      } catch (err) {
        console.error('Share failed:', err)
      }
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent flex items-center justify-center">
          <Download className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Receive eRand</h2>
          <p className="text-foreground/70">Share your QR code or wallet address</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* QR Code Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            {/* Mock QR Code - in production, use a QR code library */}
            <div className="w-48 h-48 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-sm text-foreground/70">QR Code</div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={handleShare}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium mb-2">Request Amount (Optional)</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              step="0.01"
              min="0"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
              eRand
            </span>
          </div>
        </div>

        {/* Wallet Address */}
        <div>
          <label className="block text-sm font-medium mb-2">Your Wallet Address</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={walletAddress}
              readOnly
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-foreground/70 font-mono text-sm"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-3 bg-brand-primary text-white rounded-xl hover:bg-brand-primary/90 transition-colors flex items-center gap-2"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-xl">
          <p className="text-sm text-foreground/70">
            <strong>Tip:</strong> Share this QR code or wallet address to receive eRand payments instantly.
            The sender can scan the QR code or copy the address to send you eRand.
          </p>
        </div>
      </div>
    </div>
  )
}
