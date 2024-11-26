import React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

const UserDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      {/* Trigger: Botão de Usuário */}
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow hover:bg-gray-300 focus:outline-none">
          {/* Avatar (ou ícone de usuário) */}
          <Avatar>
            <AvatarFallback><UserIcon /></AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      {/* Conteúdo do Dropdown */}
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem onClick={() => console.log("Perfil")}>
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Configurações")}>
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log("Sair")}>
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
