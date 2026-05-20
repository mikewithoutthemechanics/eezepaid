import { create } from 'zustand'
import { Wallet, Transaction, VirtualCard } from '@/types'

interface WalletStore {
  wallet: Wallet
  transactions: Transaction[]
  cards: VirtualCard[]
  isLoading: boolean
  error: string | null
  
  // Actions
  setWallet: (wallet: Wallet) => void
  addTransaction: (transaction: Transaction) => void
  addCard: (card: VirtualCard) => void
  updateCard: (cardId: string, updates: Partial<VirtualCard>) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useWalletStore = create<WalletStore>((set) => ({
  wallet: {
    address: '',
    balance: 0,
    eRandBalance: 0,
    isConnected: false,
  },
  transactions: [],
  cards: [],
  isLoading: false,
  error: null,
  
  setWallet: (wallet) => set({ wallet }),
  
  addTransaction: (transaction) => set((state) => ({
    transactions: [transaction, ...state.transactions]
  })),
  
  addCard: (card) => set((state) => ({
    cards: [...state.cards, card]
  })),
  
  updateCard: (cardId, updates) => set((state) => ({
    cards: state.cards.map(card =>
      card.id === cardId ? { ...card, ...updates } : card
    )
  })),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  setError: (error) => set({ error }),
}))
