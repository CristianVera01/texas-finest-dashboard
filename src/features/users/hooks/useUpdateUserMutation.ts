import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from '@/hooks/use-toast'
import { User } from '@/features/auth/interfaces/User'
import { updateUser } from '../actions/updateUser'
import { UpdateUser } from '../actions/updateUser'

export function useUpdateUserMutation() {
  const queryClient = useQueryClient()

  const updateUserMutation = useMutation({
    mutationFn: async (user: UpdateUser) => await updateUser(user),
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['users'], (oldData: User[]) => {
        if (!oldData) return []

        const updatedData = oldData.map((user) =>
          user.id === variables.id ? { ...user, ...variables } : user
        )
        return updatedData
      })

      toast({
        title: 'User Updated',
        description: data!.message,
      })
    },
  })

  return {
    updateUserMutation,
  }
}
