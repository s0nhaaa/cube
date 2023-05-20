import prisma from '@/libs/prismadb'
import { getSession } from './getCurrentUser'
import { UserOwner } from '@/types/user-owner'

export default async function getUserByWallet({ wallet }: { wallet: string }) {
  try {
    const session = await getSession()

    const user = await prisma.user.findUnique({
      where: {
        walletAddress: wallet,
      },
    })

    return { ...user, isOwner: user?.email === session?.user?.email } as UserOwner
  } catch (error) {
    return null
  }
}
