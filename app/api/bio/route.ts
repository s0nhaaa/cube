import { NextResponse } from 'next/server'

import prisma from '@/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { UpdateUser } from '@/types/update-user'

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) return NextResponse.error()

  const body: UpdateUser = await request.json()
  const { id, walletAddress, name } = body

  if (!id) return NextResponse.error()

  const updatedBio = await prisma.user.update({
    where: {
      id,
    },
    data: {
      walletAddress,
      name,
    },
  })

  return NextResponse.json(updatedBio)
}
