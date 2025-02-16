import React, { FC } from "react";
import { ArrowLeft } from "lucide-react"; // or any icon you prefer
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  showHintCoin?: boolean;
  hintIconUrl?: string;
  onHintClick?: () => void;
  showAvatar?: boolean;
  avatarUrl?: string;
  onAvatarClick?: () => void;
}

const Header: FC<HeaderProps> = ({
  title = "Picto Phrase",
  showBackButton = false,
  onBack,
  showHintCoin = false,
  hintIconUrl,
  onHintClick,
  showAvatar = false,
  avatarUrl,
  onAvatarClick,
}) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm w-full">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {showBackButton && (
          <button onClick={onBack} aria-label="Go Back">
            <ArrowLeft className="h-6 w-6" />
          </button>
        )}
        {showHintCoin && (
          <img
            onClick={onHintClick}
            src={hintIconUrl}
            alt="Hint coin"
            className="h-12 w-12 object-contain"
          />
        )}
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold font-titan text-center flex-1">
        {title}
      </h1>

      {/* Right Section */}
      <div className="flex items-center justify-end w-16">
        {showAvatar && (
          <Avatar
            onClick={onAvatarClick}
            className="h-12 w-12 border-2 border-[#f7f7f7] rounded-full"
          >
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>DO</AvatarFallback>
          </Avatar>
        )}
      </div>
    </header>
  );
};

export default Header;
