import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/authStore'
import { toast } from '@/hooks/use-toast'
import { updateProfile } from '../actions/updateProfile'

export function useUpdateProfileMutation() {
  const { updateUser } = useAuthStore()

  const updateProfileMutation = useMutation({
    mutationFn: async (params: {
      firstName: string
      lastName: string
      userId: string
    }) => {
      return await updateProfile(params)
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
          description: error.message,
          variant: 'destructive',
        })
      }
    },
    onSuccess: (data) => {
      updateUser(data.user)
      toast({
        title: 'Profile Updated',
        description: data!.message,
      })
    },
  })

  return {
    updateProfileMutation,
  }
}
