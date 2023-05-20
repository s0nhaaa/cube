import { User } from '@prisma/client'

export type UpdateUser = Pick<User, 'name' | 'walletAddress' | 'id'>
