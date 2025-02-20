import { Link } from "react-router-dom";
import { FC } from "react";
import { ArrowLeft } from "lucide-react"; // or any icon you prefer
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authStatus } from "@/redux/slices/authSlice";
import { useAppSelector } from "@/redux/storehooks";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

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
  const user = useAppSelector((state) => authStatus(state));
  let image = user.authenticated
    ? `${import.meta.env.VITE_BASE_URL + user.user_details.image}`
    : "";

  const navigate = useNavigate();

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
      {user.authenticated ? (
        <div className="flex w-16 items-center justify-end">
          {showAvatar && (
            <Link to="/profile" aria-label="User Profile">
              <Avatar className="h-8 w-8">
                <AvatarImage src={image} />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </Link>
          )}
        </div>
      ) : (
        <Button onClick={() => navigate("/login")}>Login</Button>
      )}
    </header>
  );
};

export default Header;
