import Login from '@/features/auth/login/login'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/login')({
  component: Login,
})
