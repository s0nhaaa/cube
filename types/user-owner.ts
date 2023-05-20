import { User } from '@prisma/client'

export type UserOwner = User & { isOwner: boolean }
