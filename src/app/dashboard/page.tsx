'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Wallet, ArrowUpRight, ArrowDownLeft, CreditCard, History, Settings, LogOut, Bell } from 'lucide-react'
import SendMoney from '@/components/wallet/SendMoney'
import ReceiveMoney from '@/components/wallet/ReceiveMoney'
import VirtualCard from '@/components/cards/VirtualCard'

type Tab = 'overview' | 'send' | 'receive' | 'cards'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [balance] = useState(10000) // Mock balance in eRand

  const transactions = [
    { id: 1, type: 'receive', amount: 500, from: '0x1234...5678', date: '2024-01-15' },
    { id: 2, type: 'send', amount: -200, to: '0xabcd...efgh', date: '2024-01-14' },
    { id: 3, type: 'receive', amount: 1500, from: '0x9876...5432', date: '2024-01-13' },
    { id: 4, type: 'card_payment', amount: -150, merchant: 'Shoprite', date: '2024-01-12' },
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
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-red-500">
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Balance Card */}
          <div className="mb-8 p-8 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white/80 text-sm mb-1">Total Balance</p>
                  <h1 className="text-5xl font-bold">
                    R {balance.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </h1>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Wallet className="w-8 h-8" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-medium">+2,500 this month</span>
                </div>
                <div className="text-white/80 text-sm">
                  1 eRand = 1 ZAR
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { id: 'overview' as Tab, label: 'Overview', icon: Wallet },
              { id: 'send' as Tab, label: 'Send', icon: ArrowUpRight },
              { id: 'receive' as Tab, label: 'Receive', icon: ArrowDownLeft },
              { id: 'cards' as Tab, label: 'Cards', icon: CreditCard },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/50'
                    : 'bg-white dark:bg-slate-800/50 text-foreground/70 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <button
                    onClick={() => setActiveTab('send')}
                    className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-brand-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold">Send eRand</h3>
                        <p className="text-sm text-foreground/70">Transfer to anyone</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('receive')}
                    className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-brand-secondary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowDownLeft className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold">Receive eRand</h3>
                        <p className="text-sm text-foreground/70">Get paid instantly</p>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Recent Transactions */}
                <div className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <History className="w-6 h-6 text-brand-primary" />
                      <h3 className="text-xl font-bold">Recent Transactions</h3>
                    </div>
                    <button className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                      View All
                    </button>
                  </div>

                  <div className="space-y-4">
                    {transactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              tx.type === 'receive'
                                ? 'bg-brand-success/20 text-brand-success'
                                : tx.type === 'card_payment'
                                ? 'bg-brand-warning/20 text-brand-warning'
                                : 'bg-brand-primary/20 text-brand-primary'
                            }`}
                          >
                            {tx.type === 'receive' ? (
                              <ArrowDownLeft className="w-5 h-5" />
                            ) : tx.type === 'card_payment' ? (
                              <CreditCard className="w-5 h-5" />
                            ) : (
                              <ArrowUpRight className="w-5 h-5" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">
                              {tx.type === 'receive'
                                ? `Received from ${tx.from}`
                                : tx.type === 'card_payment'
                                ? `Payment at ${tx.merchant}`
                                : `Sent to ${tx.to}`}
                            </div>
                            <div className="text-sm text-foreground/50">{tx.date}</div>
                          </div>
                        </div>
                        <div
                          className={`font-bold ${
                            tx.amount > 0 ? 'text-brand-success' : 'text-foreground'
                          }`}
                        >
                          {tx.amount > 0 ? '+' : ''}
                          R {Math.abs(tx.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'send' && <SendMoney />}
            {activeTab === 'receive' && <ReceiveMoney />}
            {activeTab === 'cards' && <VirtualCard />}
          </div>
        </div>
      </div>
    </div>
  )
}
