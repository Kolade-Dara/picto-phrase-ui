import React, { FC } from "react";

interface RankCardProps {
  rank: string;
  iconUrl: string;
  percentage: number;
  answered: number;
  total: number;
  gradientClass?: string;
}

const RankCard: FC<RankCardProps> = ({
  rank,
  iconUrl,
  percentage,
  answered,
  total,
  gradientClass = "bg-gradient-to-b from-white to-pink-100",
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-xs rounded-xl p-6 text-center shadow-lg ${gradientClass} flex flex-col items-center gap-3`}
    >
      <p className="text-sm text-gray-600">Current rank</p>
      <img
        src={iconUrl}
        alt={rank}
        className="h-12 w-12 md:h-16 md:w-16 object-contain"
      />
      <h2 className="text-xl md:text-2xl font-titan font-bold">{rank}</h2>
      <p className="text-lg md:text-xl font-medium">{percentage}%</p>
      <p className="mt-1 text-xs md:text-sm text-gray-500">
        {answered} of {total} Questions answered
      </p>
    </div>
  );
};

export default RankCard;
