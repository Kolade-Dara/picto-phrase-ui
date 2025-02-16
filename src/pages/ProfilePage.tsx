import AvatarSection from "../components/profile/AvatarSection";
import RankCard from "../components/profile/RankCard";
import AdBanner from "../components/utility/AdBanner";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFCFC]">
      <header className="mt-4">
        <h1 className="text-3xl font-bold font-titan">Picto Phrase</h1>
      </header>
      <div className="mt-6 mb-4 flex flex-col items-center">
        <AvatarSection
          avatarUrl="/images/Artboard 1@300x-100.jpg"
          username="PLAYER"
          onEdit={() => alert("Edit profile clicked")}
        />
      </div>
      <div className="mb-8 w-full max-w-md">
        <RankCard
          rank="Advanced"
          iconUrl="/images/Advanced.png"
          percentage={70}
          answered={1098}
          total={2333}
          gradientClass="bg-gradient-to-b from-[#FAF6C3] to-[#FDC3D1]"
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
