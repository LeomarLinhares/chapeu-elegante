import { Outlet } from 'react-router-dom'; // se estiver usando react-router-dom
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';


export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className='w-full mt-20'>
            <Outlet />
          </main>
        </div>
      </div>
      
      <Toaster />
    </SidebarProvider>
  )
}
