import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { CalendarCheck, LayoutDashboardIcon, ClipboardList } from "lucide-react"
import Link from "next/link"
import { Separator } from "./ui/separator"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Personal Progress Tracker</SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarMenu>
             <SidebarMenuItem>
                <SidebarMenuButton>
                    <LayoutDashboardIcon/>
                    <Link href="/">Dashboard</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
                <SidebarMenuButton>
                    <CalendarCheck/>
                    <Link href="/weeklySubmissions">Weekly Submissions</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
                <SidebarMenuButton>
                    <ClipboardList/>
                    <Link href="/monthlyReviews">Monthly Reviews</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
