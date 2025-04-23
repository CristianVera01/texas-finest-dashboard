import { Link } from '@tanstack/react-router'
import {
  ChevronsUpDown,
  LogOut,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { useAuthStore } from '@/stores/authStore'
import { IconUserCircle } from '@tabler/icons-react'
import { DialogLogout } from '../dialog-logout'
import { useState } from 'react'

const roleMapping: Record<string, string> = {
  ROLE_ADMINISTRATOR: 'Administrator',
  ROLE_OWNER: 'Owner',
  ROLE_BARBER: 'Barber',
  ROLE_TATTOOER: 'Tattooer',
}

export function NavUser() {
  const { isMobile } = useSidebar()

  const auth = useAuthStore();
  const { user } = auth;
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size='lg'
                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
              >
                <Avatar className='h-8 w-8 rounded-lg'>

                  <AvatarFallback className='rounded-lg'>{user!.firstName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>{user!.firstName} {user!.lastName}</span>
                  <span className='truncate text-xs'>{roleMapping[user!.role]}</span>
                </div>
                <ChevronsUpDown className='ml-auto size-4' />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
              side={isMobile ? 'bottom' : 'right'}
              align='end'
              sideOffset={4}
            >
              <DropdownMenuLabel className='p-0 font-normal'>
                <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                  <Avatar className='h-8 w-8 rounded-lg'>
                    {/* <AvatarImage src={user.avatar} alt={user!.name} /> */}
                    <AvatarFallback className='rounded-lg'>{user!.firstName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-semibold'>{user!.firstName} {user!.lastName}</span>
                    <span className='truncate text-xs'>{roleMapping[user!.role]}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link to='/settings'>
                    <IconUserCircle />
                    Profile
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setIsOpen(true)}
                className='cursor-pointer'
              >
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      <DialogLogout open={isOpen} setOpen={() => setIsOpen(false)} />
    </>
  )
}
