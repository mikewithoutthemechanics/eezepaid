'use client'

import { useState } from 'react'
import { CreditCard, Plus, Apple, Lock, Unlock, Eye, EyeOff } from 'lucide-react'
import { VirtualCard as VirtualCardType, CardRequest } from '@/types'
import { cardService } from '@/lib/cards/cardService'

export default function VirtualCard() {
  const [cards, setCards] = useState<VirtualCardType[]>([
    {
      id: 'card_1',
      lastFour: '4532',
      expiryDate: '12/27',
      cardholder: 'John Doe',
      balance: 5000,
      isActive: true,
      isApplePayEnabled: true,
      createdAt: new Date(),
    },
  ])
  const [showBalance, setShowBalance] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [cardholderName, setCardholderName] = useState('')
  const [initialBalance, setInitialBalance] = useState('')

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const request: CardRequest = {
      cardholderName: cardholderName,
      initialBalance: parseFloat(initialBalance),
      enableApplePay: true,
    }

    setIsCreating(true)
    
    const newCard = await cardService.createVirtualCard(request)
    setCards([...cards, newCard])
    
    setIsCreating(false)
    setCardholderName('')
    setInitialBalance('')
  }

  const handleToggleFreeze = (cardId: string) => {
    setCards(cards.map(card =>
      card.id === cardId ? { ...card, isActive: !card.isActive } : card
    ))
  }

  const handleToggleApplePay = async (cardId: string) => {
    const card = cards.find(c => c.id === cardId)
    if (!card) return

    if (card.isApplePayEnabled) {
      await cardService.disableApplePay(cardId)
    } else {
      await cardService.enableApplePay(cardId)
    }

    setCards(cards.map(c =>
      c.id === cardId ? { ...c, isApplePayEnabled: !c.isApplePayEnabled } : c
    ))
  }

  return (
    <div className="space-y-6">
      {/* Create Card Form */}
      <div className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-accent to-brand-primary flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Create New Card</h3>
              <p className="text-sm text-foreground/70">Get a virtual card instantly</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleCreateCard} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Cardholder Name</label>
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Initial Balance (eRand)</label>
            <input
              type="number"
              value={initialBalance}
              onChange={(e) => setInitialBalance(e.target.value)}
              placeholder="0.00"
              step="0.01"
              min="0"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="w-full py-3 bg-gradient-to-r from-brand-accent to-brand-primary text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreating ? 'Creating Card...' : 'Create Virtual Card'}
          </button>
        </form>
      </div>

      {/* Existing Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Your Cards</h3>
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-6 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-2xl text-white relative overflow-hidden"
          >
            {/* Card Design Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-8 h-8" />
                  <span className="font-bold text-lg">eezePaid</span>
                </div>
                <div className="flex items-center gap-2">
                  {card.isApplePayEnabled && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-lg">
                      <Apple className="w-4 h-4" />
                      <span className="text-xs font-medium">Pay</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Number */}
              <div className="mb-6">
                <div className="text-2xl font-mono tracking-wider">
                  •••• •••• •••• {card.lastFour}
                </div>
              </div>

              {/* Card Details */}
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-white/70 mb-1">Cardholder</div>
                  <div className="font-medium">{card.cardholder}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/70 mb-1">Expires</div>
                  <div className="font-medium">{card.expiryDate}</div>
                </div>
              </div>

              {/* Balance */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/70 mb-1">Available Balance</div>
                    <div className="text-2xl font-bold flex items-center gap-2">
                      {showBalance ? (
                        <>
                          R {card.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </>
                      ) : (
                        '••••••'
                      )}
                      <button
                        onClick={() => setShowBalance(!showBalance)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleFreeze(card.id)}
                      className={`p-2 rounded-lg transition-colors ${card.isActive ? 'bg-white/20 hover:bg-white/30' : 'bg-red-500/50 hover:bg-red-500/70'}`}
                      title={card.isActive ? 'Freeze Card' : 'Unfreeze Card'}
                    >
                      {card.isActive ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => handleToggleApplePay(card.id)}
                      className={`p-2 rounded-lg transition-colors ${card.isApplePayEnabled ? 'bg-white/20 hover:bg-white/30' : 'bg-white/10 hover:bg-white/20'}`}
                      title={card.isApplePayEnabled ? 'Disable Apple Pay' : 'Enable Apple Pay'}
                    >
                      <Apple className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
