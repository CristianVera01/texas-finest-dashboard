import { User } from './User'

export interface LoginResponse {
  user: User
  type: string
  accessToken: string
  refreshToken: string
}
