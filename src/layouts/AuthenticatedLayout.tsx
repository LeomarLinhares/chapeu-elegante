import { Outlet } from 'react-router-dom'; // se estiver usando react-router-dom
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';


export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex w-[100vw]">
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

// // src/layouts/AuthenticatedLayout.tsx
// import React from 'react';
// import Header from '../components/Header'; // Assumindo que você tenha um componente Header

// const AuthenticatedLayout: React.FC = () => {
//   return (
//     <div>
//       <Header /> {/* Header que aparecerá em todas as páginas */}
//       <main>
//       </main>
//     </div>
//   );
// };

// export default AuthenticatedLayout;
