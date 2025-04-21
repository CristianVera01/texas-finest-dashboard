import { createFileRoute, redirect } from '@tanstack/react-router'
import Users from '@/features/users'

export const Route = createFileRoute('/_authenticated/users/')({
  component: Users,
  beforeLoad: ({ context }) => {
    const { authentication } = context;

    if (authentication.user.role !== 'ROLE_ADMINISTRATOR' && authentication.user.role !== 'ROLE_OWNER') {
      throw redirect({
        to: '/',
      })
    }
  }
})
