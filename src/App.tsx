import { AxiosError } from 'axios'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import { handleServerError } from '@/utils/handle-server-error'
import { toast } from '@/hooks/use-toast'
import { FontProvider } from './context/font-context'
import { ThemeProvider } from './context/theme-context'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                // eslint-disable-next-line no-console
                if (import.meta.env.DEV) console.log({ failureCount, error })

                if (failureCount >= 0 && import.meta.env.DEV) return false
                if (failureCount > 3 && import.meta.env.PROD) return false

                return !(
                    error instanceof AxiosError &&
                    [401, 403].includes(error.response?.status ?? 0)
                )
            },
            refetchOnWindowFocus: import.meta.env.PROD,
            staleTime: 10 * 1000, // 10s
        },
        mutations: {
            onError: (error) => {
                handleServerError(error)

                if (error instanceof AxiosError) {
                    if (error.response?.status === 304) {
                        toast({
                            variant: 'destructive',
                            title: 'Content not modified!',
                        })
                    }
                }
            },
        },
    },
})

// Create a new router instance
const router = createRouter({
    routeTree,
    context: { queryClient, authentication: undefined! },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const App = () => {

    const auth = useAuthStore();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
                <FontProvider>
                    <RouterProvider router={router} context={{ authentication: auth }} />
                </FontProvider>
            </ThemeProvider>
        </QueryClientProvider>

    )
}
