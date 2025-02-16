import { Link } from "react-router-dom";
import { FC } from "react";
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
  showHintCoin = false,
  hintIconUrl,

  showAvatar = false,
  avatarUrl,
}) => {
  return (
    <header className="flex items-center justify-between p-4 w-full">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Link to="/" aria-label="Buy Hint Coins">
            <ArrowLeft className="h-10 w-10" />
          </Link>
        )}

        {showHintCoin && (
          <Link to="/buycoins" aria-label="Buy Hint Coins">
            <img
              src={hintIconUrl}
              alt="Hint coin"
              className="h-10 w-10 object-contain"
            />
          </Link>
        )}
      </div>

      {/* Title */}
      <Link to="/" aria-label="Buy Hint Coins" className="text-black">
        <h1 className="flex-1 text-center  align-self-center font-titan text-2xl font-bold">
          {title}
        </h1>
      </Link>

      {/* Right Section */}
      <div className="flex w-16 items-center justify-end">
        {showAvatar && (
          <Link to="/profile" aria-label="User Profile">
            <Avatar className="h-8 w-8">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
