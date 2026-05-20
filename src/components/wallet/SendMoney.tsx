'use client'

import { useState } from 'react'
import { Send, ArrowRight, CheckCircle2 } from 'lucide-react'
import { paymentService } from '@/lib/payments/paymentService'
import { PaymentRequest } from '@/types'

export default function SendMoney() {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const request: PaymentRequest = {
      recipient,
      amount: parseFloat(amount),
      currency: 'eRand',
      description,
    }

    if (!paymentService.validatePaymentRequest(request)) {
      alert('Invalid payment request')
      return
    }

    setIsProcessing(true)
    
    // Simulate blockchain transaction
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setIsSuccess(true)
    
    // Reset form after delay
    setTimeout(() => {
      setIsSuccess(false)
      setRecipient('')
      setAmount('')
      setDescription('')
    }, 3000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center">
          <Send className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Send eRand</h2>
          <p className="text-foreground/70">Transfer eRand instantly</p>
        </div>
      </div>

      {isSuccess ? (
        <div className="text-center py-12">
          <CheckCircle2 className="w-20 h-20 text-brand-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
          <p className="text-foreground/70">Your eRand has been sent successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSend} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Recipient Address or Email</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="0x... or email@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Amount (eRand)</label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
                eRand
              </span>
            </div>
            <p className="text-sm text-foreground/50 mt-2">
              ≈ {paymentService.formatCurrency(parseFloat(amount) || 0, 'ZAR')}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description (Optional)</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's this for?"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
            />
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Send eRand
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
