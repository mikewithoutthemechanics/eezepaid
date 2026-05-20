import { PaymentRequest, QRCodeData } from '@/types'

export class PaymentService {
  /**
   * Generate QR code data for receiving payments
   */
  generateQRCode(walletAddress: string, amount?: number): QRCodeData {
    const data: QRCodeData = {
      walletAddress,
      amount,
      currency: 'eRand',
    }

    return data
  }

  /**
   * Parse QR code data
   */
  parseQRCode(qrString: string): QRCodeData {
    try {
      return JSON.parse(qrString)
    } catch {
      throw new Error('Invalid QR code format')
    }
  }

  /**
   * Validate payment request
   */
  validatePaymentRequest(request: PaymentRequest): boolean {
    if (!request.recipient) return false
    if (request.amount <= 0) return false
    if (request.amount > 1000000) return false // Reasonable limit

    return true
  }

  /**
   * Format currency for display
   */
  formatCurrency(amount: number, currency: 'ZAR' | 'eRand' = 'eRand'): string {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: currency === 'eRand' ? 'ZAR' : 'ZAR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  /**
   * Convert ZAR to eRand (1:1 peg)
   */
  zarToERand(amount: number): number {
    return amount // 1 ZAR = 1 eRand
  }

  /**
   * Convert eRand to ZAR (1:1 peg)
   */
  eRandToZar(amount: number): number {
    return amount // 1 eRand = 1 ZAR
  }
}

export const paymentService = new PaymentService()
