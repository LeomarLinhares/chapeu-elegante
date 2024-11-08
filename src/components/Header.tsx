// src/components/Header.tsx
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"


const Header: React.FC = () => {
  return (
    <header className="fixed flex items-center w-full h-16 gap-2 px-4 bg-white border-b shadow-sm">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="h-4 mr-2" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">
              Início
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default Header;
