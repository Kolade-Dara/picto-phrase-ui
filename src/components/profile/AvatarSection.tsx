import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";
interface AvatarSectionProps {
  avatarUrl: string;
  username: string;
  onEdit?: () => void;
}

const AvatarSection: FC<AvatarSectionProps> = ({
  avatarUrl,
  username,
  onEdit,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white">
      <Avatar className="h-20 w-20">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>DO</AvatarFallback>
      </Avatar>

      <p className="font-titan font-bold 3xl">{username}</p>
      <Button variant="outline" onClick={onEdit}>
        <Pencil className="h-4 w-4" /> Edit profile
      </Button>
    </div>
  );
};

export default AvatarSection;
