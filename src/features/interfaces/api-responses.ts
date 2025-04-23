import { User } from '../auth/interfaces/User'

export interface UpdateProfileResponse {
  success: boolean
  message: string
  user: User
}
