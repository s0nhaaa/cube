import { getServerSession } from 'next-auth/next'

import prisma from '@/libs/prismadb'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { UserOwner } from '@/types/user-owner'

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession()

    if (!session?.user?.email) return null

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    })

    if (!currentUser) return null

    return { ...currentUser, isOwner: true } as UserOwner
  } catch (error) {
    return null
  }
}
