import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { sidebarData } from './data/sidebar-data'
import { NavUser } from './nav-user';
import { useAuthStore } from '@/stores/authStore';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const auth = useAuthStore();

  return (
    <Sidebar collapsible='icon' variant='sidebar' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground bg-gray-800'>

              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>
                  Texas Finest Barbershop
                </span>
                <span className='truncate text-xs'>
                  Admin Dashboard
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => {

          if (props.title === 'Administration') {
            return <NavGroup key={props.title} {...props} visible={auth.user!.role === 'ROLE_ADMINISTRATOR' || auth.user!.role === 'ROLE_OWNER'} />
          }

          return <NavGroup key={props.title} {...props} />
        })}   
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
