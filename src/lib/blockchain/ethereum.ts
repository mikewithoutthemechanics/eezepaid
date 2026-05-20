import { ethers } from 'ethers'
import { ERandToken } from '@/types'

// eRand Token ABI (simplified ERC-20)
const ERAND_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
]

// Mock contract address (replace with actual deployed contract)
const ERAND_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_ERAND_CONTRACT_ADDRESS || ''

export class BlockchainService {
  private provider: ethers.BrowserProvider | null = null
  private signer: ethers.JsonRpcSigner | null = null
  private contract: ethers.Contract | null = null

  async initialize() {
    if (typeof window !== 'undefined' && window.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum)
    }
  }

  async connectWallet(): Promise<string> {
    if (!this.provider) {
      throw new Error('MetaMask not installed')
    }

    await this.provider.send('eth_requestAccounts', [])
    this.signer = await this.provider.getSigner()
    const address = await this.signer.getAddress()
    
    // Initialize contract
    if (ERAND_CONTRACT_ADDRESS) {
      this.contract = new ethers.Contract(
        ERAND_CONTRACT_ADDRESS,
        ERAND_ABI,
        this.signer
      )
    }

    return address
  }

  async getERandBalance(address: string): Promise<number> {
    if (!this.contract) {
      // Return mock balance for demo
      return 10000 // 10,000 eRand
    }

    const balance = await this.contract.balanceOf(address)
    return parseFloat(ethers.formatEther(balance))
  }

  async transferERand(to: string, amount: number): Promise<string> {
    if (!this.contract || !this.signer) {
      throw new Error('Wallet not connected')
    }

    const amountWei = ethers.parseEther(amount.toString())
    const tx = await this.contract.transfer(to, amountWei)
    return tx.hash
  }

  async getTransaction(txHash: string): Promise<any> {
    if (!this.provider) {
      throw new Error('Provider not initialized')
    }

    return await this.provider.getTransaction(txHash)
  }

  isWalletConnected(): boolean {
    return this.signer !== null
  }

  async getNetwork(): Promise<string> {
    if (!this.provider) {
      throw new Error('Provider not initialized')
    }

    const network = await this.provider.getNetwork()
    return network.name
  }
}

export const blockchainService = new BlockchainService()
