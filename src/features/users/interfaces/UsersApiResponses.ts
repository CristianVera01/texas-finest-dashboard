import { GeneralSuccessResponse } from '@/interfaces/GeneralSuccessResponse'
import { User } from '@/features/auth/interfaces/User'

export interface UserCreateResponse {
  message: string
  user: User
  success: boolean
}

export interface UserUpdateResponse extends GeneralSuccessResponse {
  user: User
}
