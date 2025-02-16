import { FC } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import to your Button's location

interface AdBannerProps {
  imageUrl: string;
  buttonText: string;
  onClick?: () => void;
}

const AdBanner: FC<AdBannerProps> = ({ imageUrl, buttonText, onClick }) => {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      {/* Button on top */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default AdBanner;
