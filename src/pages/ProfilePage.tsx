import React from "react";
import AvatarSection from "@/components/profile/AvatarSection";
import RankCard from "@/components/profile/RankCard.tsx";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <AvatarSection
        avatarUrl="/images/myAvatar.png"
        username="Daramola"
        onEdit={() => alert("Edit Profile Clicked")}
      />

      <RankCard
        rank="Novice"
        iconUrl="public/images/style=detailed, rank name=novice.png"
        percentage={10}
        answered={11}
        total={2333}
        gradientClass="bg-gradient-to-b from-green-100 to-green-50"
      />
    </div>
  );
};

export default ProfilePage;
