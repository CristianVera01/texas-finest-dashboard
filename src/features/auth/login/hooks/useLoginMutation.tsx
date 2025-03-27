import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import { toast } from '@/hooks/use-toast'
import { login } from '../actions/login'

export const useLoginMutation = () => {
  const { setAuthentication } = useAuthStore()
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string
      password: string
    }) => {
      return await login(email, password)
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message

        toast({
          title: 'Error',
          description: errorMessage,
          variant: 'destructive',
        })
      } else {
        toast({
          title: 'Error',
          description: 'An error occurred',
          variant: 'destructive',
        })
      }
    },
    onSuccess: (data) => {
      setAuthentication(data.user, data.accessToken, data.refreshToken)
      navigate({
        to: '/',
        replace: true,
      })
    },
  })

  return {
    loginMutation,
  }
}
