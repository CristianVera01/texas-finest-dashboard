import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/hooks/use-toast'
import { User } from '@/features/auth/interfaces/User'
import { createUserFromPanel, UserCreate } from '../actions/createUser'

export function useCreateUserMutation() {
  const queryClient = useQueryClient()

  const createUserMutation = useMutation({
    mutationFn: async (user: UserCreate) => createUserFromPanel(user),
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
      queryClient.setQueryData(['users'], (oldData: User[]) => {
        if (!oldData) return []

        return [...oldData, data!.user]
      });

      toast({
        title: 'User Created',
        description: data!.message,
      })
    },
  })

  return {
    createUserMutation,
  }
}
