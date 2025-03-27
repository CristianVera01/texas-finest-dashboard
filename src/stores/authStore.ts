import { create } from 'zustand'
import { User } from '@/features/auth/interfaces/User'

interface AuthState {
  loading: boolean
  isLoggedIn: boolean
  user: User | null
  accessToken: string
  refreshToken: string
  loadAuthentication: () => void
  setAuthentication: (user: User, accessToken: string, refreshToken: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  loading: false,
  isLoggedIn: false,
  user: null,
  accessToken: '',
  refreshToken: '',
  loadAuthentication: () => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    const user = localStorage.getItem('user')

    if (accessToken && refreshToken && user) {
      set({
        loading: false,
        isLoggedIn: true,
        user: JSON.parse(user),
      })
    } else {
      set({ loading: false, isLoggedIn: false, user: null })
    }
  },
  setAuthentication: (
    user: User,
    accessToken: string,
    refreshToken: string
  ) => {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    localStorage.setItem('user', JSON.stringify(user))
    set({ loading: false, isLoggedIn: true, user })
  },
  logout: () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    set({ loading: false, isLoggedIn: false, user: null })
  },
}))

export type AuthContext = typeof useAuthStore extends () => infer T ? T : never
