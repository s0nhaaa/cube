'use client'

import { useEffect, useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { SolanaWalletProvider } from '@/components/solana-wallet-provider'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useRouter } from 'next/navigation'
import { User } from '@prisma/client'

interface Props {
  user?: User | null
}

export default function Sample({ user }: Props) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const createSession = async () => {
    setIsLoading(true)
    const response = await fetch('/api/create-session', {
      method: 'POST',
    })
    const data = await response.json()

    router.push(data.payment_url)
    setIsLoading(false)
  }

  return (
    <SolanaWalletProvider>
      <button className='btn' onClick={() => signIn('google')}>
        Login Google {user?.name}
      </button>
      <button className='btn' onClick={() => signOut()}>
        Out {user?.name}
      </button>
      <button disabled={isLoading} onClick={createSession} className='btn'>
        {isLoading ? 'Loading...' : 'Checkout'}
      </button>
      {/* <WalletMultiButton /> */}
    </SolanaWalletProvider>
  )
}
