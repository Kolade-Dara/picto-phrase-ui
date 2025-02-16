import AvatarSection from "../components/profile/AvatarSection";
import RankCard from "../components/profile/RankCard";
import AdBanner from "../components/utility/AdBanner";
import Header from "@/components/utility/Header";

const ProfilePage = () => {
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
          avatarUrl="/images/Artboard 1@300x-100.jpg"
          username="Daramola"
          onEdit={() => alert("Edit profile clicked")}
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-md">
        <RankCard
          rank="Advanced"
          iconUrl="/images/Advanced.png"
          percentage={70}
          answered={1098}
          total={2333}
          gradientClass="bg-gradient-to-b from-[#FFF894FF] to-[#C6647BFF]"
        />
      </div>
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
