// Blockchain & Wallet Types
export interface Wallet {
  address: string
  balance: number
  eRandBalance: number
  isConnected: boolean
}

export interface Transaction {
  id: string
  type: 'send' | 'receive' | 'card_payment'
  amount: number
  currency: 'ZAR' | 'eRand'
  from: string
  to: string
  timestamp: Date
  status: 'pending' | 'completed' | 'failed'
  description?: string
}

// Card Types
export interface VirtualCard {
  id: string
  lastFour: string
  expiryDate: string
  cardholder: string
  balance: number
  isActive: boolean
  isApplePayEnabled: boolean
  createdAt: Date
}

export interface CardRequest {
  cardholderName: string
  initialBalance: number
  enableApplePay: boolean
}

// eRand Token
export interface ERandToken {
  symbol: 'eRand'
  name: 'Digital Rand'
  decimals: 18
  totalSupply: number
  peggedTo: 'ZAR'
  pegRate: number // 1 eRand = 1 ZAR
}

// User Types
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  isVerified: boolean
  kycStatus: 'pending' | 'approved' | 'rejected'
  createdAt: Date
}

// Payment Types
export interface PaymentRequest {
  recipient: string // wallet address or email
  amount: number
  currency: 'ZAR' | 'eRand'
  description?: string
}

export interface QRCodeData {
  walletAddress: string
  amount?: number
  currency?: 'ZAR' | 'eRand'
  message?: string
}
