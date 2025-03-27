/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthRouteImport } from './routes/auth/route'
import { Route as AuthenticatedRouteImport } from './routes/_authenticated/route'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as Auth500Import } from './routes/auth/500'
import { Route as AuthenticatedUsersIndexImport } from './routes/_authenticated/users/index'

// Create Virtual Routes

const AuthLoginLazyImport = createFileRoute('/auth/login')()
const AuthForgotPasswordLazyImport = createFileRoute('/auth/forgot-password')()
const errors503LazyImport = createFileRoute('/(errors)/503')()
const errors500LazyImport = createFileRoute('/(errors)/500')()
const errors404LazyImport = createFileRoute('/(errors)/404')()
const errors403LazyImport = createFileRoute('/(errors)/403')()
const errors401LazyImport = createFileRoute('/(errors)/401')()
const AuthenticatedSettingsRouteLazyImport = createFileRoute(
  '/_authenticated/settings',
)()
const AuthenticatedSettingsIndexLazyImport = createFileRoute(
  '/_authenticated/settings/',
)()
const AuthenticatedAppointmentsIndexLazyImport = createFileRoute(
  '/_authenticated/appointments/',
)()
const AuthenticatedSettingsNotificationsLazyImport = createFileRoute(
  '/_authenticated/settings/notifications',
)()
const AuthenticatedSettingsDisplayLazyImport = createFileRoute(
  '/_authenticated/settings/display',
)()
const AuthenticatedSettingsAppearanceLazyImport = createFileRoute(
  '/_authenticated/settings/appearance',
)()
const AuthenticatedSettingsAccountLazyImport = createFileRoute(
  '/_authenticated/settings/account',
)()

// Create/Update Routes

const AuthRouteRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRouteRoute = AuthenticatedRouteImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRouteRoute,
} as any).lazy(() => import('./routes/auth/login.lazy').then((d) => d.Route))

const AuthForgotPasswordLazyRoute = AuthForgotPasswordLazyImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => AuthRouteRoute,
} as any).lazy(() =>
  import('./routes/auth/forgot-password.lazy').then((d) => d.Route),
)

const errors503LazyRoute = errors503LazyImport
  .update({
    id: '/(errors)/503',
    path: '/503',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/503.lazy').then((d) => d.Route))

const errors500LazyRoute = errors500LazyImport
  .update({
    id: '/(errors)/500',
    path: '/500',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/500.lazy').then((d) => d.Route))

const errors404LazyRoute = errors404LazyImport
  .update({
    id: '/(errors)/404',
    path: '/404',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/404.lazy').then((d) => d.Route))

const errors403LazyRoute = errors403LazyImport
  .update({
    id: '/(errors)/403',
    path: '/403',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/403.lazy').then((d) => d.Route))

const errors401LazyRoute = errors401LazyImport
  .update({
    id: '/(errors)/401',
    path: '/401',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/401.lazy').then((d) => d.Route))

const AuthenticatedSettingsRouteLazyRoute =
  AuthenticatedSettingsRouteLazyImport.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/route.lazy').then((d) => d.Route),
  )

const Auth500Route = Auth500Import.update({
  id: '/500',
  path: '/500',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthenticatedSettingsIndexLazyRoute =
  AuthenticatedSettingsIndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/index.lazy').then((d) => d.Route),
  )

const AuthenticatedAppointmentsIndexLazyRoute =
  AuthenticatedAppointmentsIndexLazyImport.update({
    id: '/appointments/',
    path: '/appointments/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/appointments/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedUsersIndexRoute = AuthenticatedUsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)

const AuthenticatedSettingsNotificationsLazyRoute =
  AuthenticatedSettingsNotificationsLazyImport.update({
    id: '/notifications',
    path: '/notifications',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/notifications.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedSettingsDisplayLazyRoute =
  AuthenticatedSettingsDisplayLazyImport.update({
    id: '/display',
    path: '/display',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/display.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedSettingsAppearanceLazyRoute =
  AuthenticatedSettingsAppearanceLazyImport.update({
    id: '/appearance',
    path: '/appearance',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/appearance.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedSettingsAccountLazyRoute =
  AuthenticatedSettingsAccountLazyImport.update({
    id: '/account',
    path: '/account',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/account.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth/500': {
      id: '/auth/500'
      path: '/500'
      fullPath: '/auth/500'
      preLoaderRoute: typeof Auth500Import
      parentRoute: typeof AuthRouteImport
    }
    '/_authenticated/settings': {
      id: '/_authenticated/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticatedSettingsRouteLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/(errors)/401': {
      id: '/(errors)/401'
      path: '/401'
      fullPath: '/401'
      preLoaderRoute: typeof errors401LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/403': {
      id: '/(errors)/403'
      path: '/403'
      fullPath: '/403'
      preLoaderRoute: typeof errors403LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/404': {
      id: '/(errors)/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof errors404LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/500': {
      id: '/(errors)/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof errors500LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/503': {
      id: '/(errors)/503'
      path: '/503'
      fullPath: '/503'
      preLoaderRoute: typeof errors503LazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/forgot-password': {
      id: '/auth/forgot-password'
      path: '/forgot-password'
      fullPath: '/auth/forgot-password'
      preLoaderRoute: typeof AuthForgotPasswordLazyImport
      parentRoute: typeof AuthRouteImport
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof AuthRouteImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/settings/account': {
      id: '/_authenticated/settings/account'
      path: '/account'
      fullPath: '/settings/account'
      preLoaderRoute: typeof AuthenticatedSettingsAccountLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/settings/appearance': {
      id: '/_authenticated/settings/appearance'
      path: '/appearance'
      fullPath: '/settings/appearance'
      preLoaderRoute: typeof AuthenticatedSettingsAppearanceLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/settings/display': {
      id: '/_authenticated/settings/display'
      path: '/display'
      fullPath: '/settings/display'
      preLoaderRoute: typeof AuthenticatedSettingsDisplayLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/settings/notifications': {
      id: '/_authenticated/settings/notifications'
      path: '/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof AuthenticatedSettingsNotificationsLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/users/': {
      id: '/_authenticated/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof AuthenticatedUsersIndexImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/appointments/': {
      id: '/_authenticated/appointments/'
      path: '/appointments'
      fullPath: '/appointments'
      preLoaderRoute: typeof AuthenticatedAppointmentsIndexLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/settings/': {
      id: '/_authenticated/settings/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof AuthenticatedSettingsIndexLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedSettingsRouteLazyRouteChildren {
  AuthenticatedSettingsAccountLazyRoute: typeof AuthenticatedSettingsAccountLazyRoute
  AuthenticatedSettingsAppearanceLazyRoute: typeof AuthenticatedSettingsAppearanceLazyRoute
  AuthenticatedSettingsDisplayLazyRoute: typeof AuthenticatedSettingsDisplayLazyRoute
  AuthenticatedSettingsNotificationsLazyRoute: typeof AuthenticatedSettingsNotificationsLazyRoute
  AuthenticatedSettingsIndexLazyRoute: typeof AuthenticatedSettingsIndexLazyRoute
}

const AuthenticatedSettingsRouteLazyRouteChildren: AuthenticatedSettingsRouteLazyRouteChildren =
  {
    AuthenticatedSettingsAccountLazyRoute:
      AuthenticatedSettingsAccountLazyRoute,
    AuthenticatedSettingsAppearanceLazyRoute:
      AuthenticatedSettingsAppearanceLazyRoute,
    AuthenticatedSettingsDisplayLazyRoute:
      AuthenticatedSettingsDisplayLazyRoute,
    AuthenticatedSettingsNotificationsLazyRoute:
      AuthenticatedSettingsNotificationsLazyRoute,
    AuthenticatedSettingsIndexLazyRoute: AuthenticatedSettingsIndexLazyRoute,
  }

const AuthenticatedSettingsRouteLazyRouteWithChildren =
  AuthenticatedSettingsRouteLazyRoute._addFileChildren(
    AuthenticatedSettingsRouteLazyRouteChildren,
  )

interface AuthenticatedRouteRouteChildren {
  AuthenticatedSettingsRouteLazyRoute: typeof AuthenticatedSettingsRouteLazyRouteWithChildren
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedUsersIndexRoute: typeof AuthenticatedUsersIndexRoute
  AuthenticatedAppointmentsIndexLazyRoute: typeof AuthenticatedAppointmentsIndexLazyRoute
}

const AuthenticatedRouteRouteChildren: AuthenticatedRouteRouteChildren = {
  AuthenticatedSettingsRouteLazyRoute:
    AuthenticatedSettingsRouteLazyRouteWithChildren,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedUsersIndexRoute: AuthenticatedUsersIndexRoute,
  AuthenticatedAppointmentsIndexLazyRoute:
    AuthenticatedAppointmentsIndexLazyRoute,
}

const AuthenticatedRouteRouteWithChildren =
  AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren)

interface AuthRouteRouteChildren {
  Auth500Route: typeof Auth500Route
  AuthForgotPasswordLazyRoute: typeof AuthForgotPasswordLazyRoute
  AuthLoginLazyRoute: typeof AuthLoginLazyRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  Auth500Route: Auth500Route,
  AuthForgotPasswordLazyRoute: AuthForgotPasswordLazyRoute,
  AuthLoginLazyRoute: AuthLoginLazyRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/auth/500': typeof Auth500Route
  '/settings': typeof AuthenticatedSettingsRouteLazyRouteWithChildren
  '/401': typeof errors401LazyRoute
  '/403': typeof errors403LazyRoute
  '/404': typeof errors404LazyRoute
  '/500': typeof errors500LazyRoute
  '/503': typeof errors503LazyRoute
  '/auth/forgot-password': typeof AuthForgotPasswordLazyRoute
  '/auth/login': typeof AuthLoginLazyRoute
  '/': typeof AuthenticatedIndexRoute
  '/settings/account': typeof AuthenticatedSettingsAccountLazyRoute
  '/settings/appearance': typeof AuthenticatedSettingsAppearanceLazyRoute
  '/settings/display': typeof AuthenticatedSettingsDisplayLazyRoute
  '/settings/notifications': typeof AuthenticatedSettingsNotificationsLazyRoute
  '/users': typeof AuthenticatedUsersIndexRoute
  '/appointments': typeof AuthenticatedAppointmentsIndexLazyRoute
  '/settings/': typeof AuthenticatedSettingsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/auth': typeof AuthRouteRouteWithChildren
  '/auth/500': typeof Auth500Route
  '/401': typeof errors401LazyRoute
  '/403': typeof errors403LazyRoute
  '/404': typeof errors404LazyRoute
  '/500': typeof errors500LazyRoute
  '/503': typeof errors503LazyRoute
  '/auth/forgot-password': typeof AuthForgotPasswordLazyRoute
  '/auth/login': typeof AuthLoginLazyRoute
  '/': typeof AuthenticatedIndexRoute
  '/settings/account': typeof AuthenticatedSettingsAccountLazyRoute
  '/settings/appearance': typeof AuthenticatedSettingsAppearanceLazyRoute
  '/settings/display': typeof AuthenticatedSettingsDisplayLazyRoute
  '/settings/notifications': typeof AuthenticatedSettingsNotificationsLazyRoute
  '/users': typeof AuthenticatedUsersIndexRoute
  '/appointments': typeof AuthenticatedAppointmentsIndexLazyRoute
  '/settings': typeof AuthenticatedSettingsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/auth/500': typeof Auth500Route
  '/_authenticated/settings': typeof AuthenticatedSettingsRouteLazyRouteWithChildren
  '/(errors)/401': typeof errors401LazyRoute
  '/(errors)/403': typeof errors403LazyRoute
  '/(errors)/404': typeof errors404LazyRoute
  '/(errors)/500': typeof errors500LazyRoute
  '/(errors)/503': typeof errors503LazyRoute
  '/auth/forgot-password': typeof AuthForgotPasswordLazyRoute
  '/auth/login': typeof AuthLoginLazyRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/settings/account': typeof AuthenticatedSettingsAccountLazyRoute
  '/_authenticated/settings/appearance': typeof AuthenticatedSettingsAppearanceLazyRoute
  '/_authenticated/settings/display': typeof AuthenticatedSettingsDisplayLazyRoute
  '/_authenticated/settings/notifications': typeof AuthenticatedSettingsNotificationsLazyRoute
  '/_authenticated/users/': typeof AuthenticatedUsersIndexRoute
  '/_authenticated/appointments/': typeof AuthenticatedAppointmentsIndexLazyRoute
  '/_authenticated/settings/': typeof AuthenticatedSettingsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/auth'
    | '/auth/500'
    | '/settings'
    | '/401'
    | '/403'
    | '/404'
    | '/500'
    | '/503'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/users'
    | '/appointments'
    | '/settings/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/auth'
    | '/auth/500'
    | '/401'
    | '/403'
    | '/404'
    | '/500'
    | '/503'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/users'
    | '/appointments'
    | '/settings'
  id:
    | '__root__'
    | '/_authenticated'
    | '/auth'
    | '/auth/500'
    | '/_authenticated/settings'
    | '/(errors)/401'
    | '/(errors)/403'
    | '/(errors)/404'
    | '/(errors)/500'
    | '/(errors)/503'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/_authenticated/'
    | '/_authenticated/settings/account'
    | '/_authenticated/settings/appearance'
    | '/_authenticated/settings/display'
    | '/_authenticated/settings/notifications'
    | '/_authenticated/users/'
    | '/_authenticated/appointments/'
    | '/_authenticated/settings/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRouteRoute: typeof AuthenticatedRouteRouteWithChildren
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
  errors401LazyRoute: typeof errors401LazyRoute
  errors403LazyRoute: typeof errors403LazyRoute
  errors404LazyRoute: typeof errors404LazyRoute
  errors500LazyRoute: typeof errors500LazyRoute
  errors503LazyRoute: typeof errors503LazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  AuthRouteRoute: AuthRouteRouteWithChildren,
  errors401LazyRoute: errors401LazyRoute,
  errors403LazyRoute: errors403LazyRoute,
  errors404LazyRoute: errors404LazyRoute,
  errors500LazyRoute: errors500LazyRoute,
  errors503LazyRoute: errors503LazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/auth",
        "/(errors)/401",
        "/(errors)/403",
        "/(errors)/404",
        "/(errors)/500",
        "/(errors)/503"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated/route.tsx",
      "children": [
        "/_authenticated/settings",
        "/_authenticated/",
        "/_authenticated/users/",
        "/_authenticated/appointments/"
      ]
    },
    "/auth": {
      "filePath": "auth/route.tsx",
      "children": [
        "/auth/500",
        "/auth/forgot-password",
        "/auth/login"
      ]
    },
    "/auth/500": {
      "filePath": "auth/500.tsx",
      "parent": "/auth"
    },
    "/_authenticated/settings": {
      "filePath": "_authenticated/settings/route.lazy.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/settings/account",
        "/_authenticated/settings/appearance",
        "/_authenticated/settings/display",
        "/_authenticated/settings/notifications",
        "/_authenticated/settings/"
      ]
    },
    "/(errors)/401": {
      "filePath": "(errors)/401.lazy.tsx"
    },
    "/(errors)/403": {
      "filePath": "(errors)/403.lazy.tsx"
    },
    "/(errors)/404": {
      "filePath": "(errors)/404.lazy.tsx"
    },
    "/(errors)/500": {
      "filePath": "(errors)/500.lazy.tsx"
    },
    "/(errors)/503": {
      "filePath": "(errors)/503.lazy.tsx"
    },
    "/auth/forgot-password": {
      "filePath": "auth/forgot-password.lazy.tsx",
      "parent": "/auth"
    },
    "/auth/login": {
      "filePath": "auth/login.lazy.tsx",
      "parent": "/auth"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/settings/account": {
      "filePath": "_authenticated/settings/account.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/settings/appearance": {
      "filePath": "_authenticated/settings/appearance.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/settings/display": {
      "filePath": "_authenticated/settings/display.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/settings/notifications": {
      "filePath": "_authenticated/settings/notifications.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/users/": {
      "filePath": "_authenticated/users/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/appointments/": {
      "filePath": "_authenticated/appointments/index.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/settings/": {
      "filePath": "_authenticated/settings/index.lazy.tsx",
      "parent": "/_authenticated/settings"
    }
  }
}
ROUTE_MANIFEST_END */
