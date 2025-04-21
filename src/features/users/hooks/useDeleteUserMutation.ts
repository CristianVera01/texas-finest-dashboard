import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/hooks/use-toast'
import { User } from '@/features/auth/interfaces/User'
import { deleteUser } from '../actions/deleteUser'

export function useDeleteUserMutation() {
  const queryClient = useQueryClient()

  const deleteUserMutation = useMutation({
    mutationFn: async (id: string) => await deleteUser(id),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['users'], (oldData: User[]) => {
        if (!oldData) return []

        return oldData.filter((user: User) => user.id !== variables)
      })

      toast({
        title: 'User Deleted',
        description: data!.message,
        variant: 'destructive',
      })
    },
  })

  return {
    deleteUserMutation,
  }
}
