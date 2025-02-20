import { useAppSelector, useAppDispatch } from "@/redux/storehooks";
import AvatarSection from "../components/profile/AvatarSection";
import RankCard from "../components/profile/RankCard";
import AdBanner from "../components/utility/AdBanner";
import Header from "@/components/utility/Header";
import { authStatus, logout } from "@/redux/slices/authSlice";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const user = useAppSelector((state) => authStatus(state));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const image = user.authenticated
    ? `${import.meta.env.VITE_BASE_URL + user.user_details.image}`
    : "";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen p-4 justify-start gap-6 bg-slate-100">
      <Header
        showHintCoin={true}
        onHintClick={() => console.log("Hint clicked")}
        showAvatar={false}
        hintIconUrl="/images/hintcoin.png"
        avatarUrl="/images/Artboard 1@300x-100.jpg"
        onAvatarClick={() => console.log("Avatar clicked")}
      />

      <div className="flex flex-col items-center">
        <AvatarSection
          avatarUrl={image}
          username={user.user_details.username}
          onEdit={() => alert("Edit profile clicked")}
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-md">
        <RankCard answered={user.user_details.games_won} total={34} />
      </div>
      <Button onClick={() => handleLogout()}>Logout</Button>
      <div className="mb-8 w-full max-w-md">
        <AdBanner
          imageUrl="/images/cocacola-banner.jpg"
          buttonText="Learn More"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
