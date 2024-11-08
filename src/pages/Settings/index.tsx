// app/settings/page.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Pencil } from "lucide-react";

export default function Settings() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar as informações (ex: chamada para API)
    toast("Configurações salvas com sucesso!");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Card className="w-full max-w-lg p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center">Configurações do Perfil</h1>

        {/* Seção de Alterar Foto de Perfil */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-24 h-24 overflow-hidden rounded-full bg-muted">
            {profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="flex items-center justify-center h-full text-muted-foreground">
                Sem imagem
              </span>
            )}
            <label htmlFor="profile-image" className="absolute bottom-0 right-0 p-1 bg-gray-200 rounded-full cursor-pointer">
              <Pencil className="w-5 h-5 text-gray-600" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="profile-image"
              />
            </label>
          </div>
          <span className="text-sm text-gray-500">Alterar foto de perfil</span>
        </div>

        {/* Seção de Nome */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>

        {/* Seção de Bio */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Escreva sua bio"
            rows={4}
          />
        </div>

        {/* Botão de Salvar */}
        <div className="pt-4">
          <Button onClick={handleSave} className="w-full">
            Salvar Alterações
          </Button>
        </div>
      </Card>
    </div>
  );
}
