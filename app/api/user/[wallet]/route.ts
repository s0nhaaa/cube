import CandyPaySDK from '@/configs/candypay'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

interface IParams {
  wallet?: string
}

export async function GET(res: Response, { params }: { params: IParams }) {
  const { wallet } = params

  if (!wallet) return NextResponse.error()

  if (!wallet || typeof wallet !== 'string') {
    throw new Error('Invalid ID')
  }

  const user = await prisma.user.findUnique({
    where: {
      walletAddress: wallet,
    },
  })

  if (!user) return NextResponse.json({ message: 'NO-USER' })

  return NextResponse.json(user)
}
