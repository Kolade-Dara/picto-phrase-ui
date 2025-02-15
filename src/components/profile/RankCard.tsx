import React, { FC } from "react";

interface RankCardProps {
  rank: string;
  iconUrl: string;
  percentage: number;
  answered: number;
  total: number;
  gradientClass?: string; // e.g. "bg-gradient-to-b from-green-100 to-green-50"
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
    <div className={`rounded-md p-4 text-center shadow-sm ${gradientClass}`}>
      <p className="text-sm text-gray-600">Current rank</p>
      <img src={iconUrl} alt={rank} className="mx-auto my-2 h-12 w-12" />
      <h2 className="text-xl font-bold">{rank}</h2>
      <p className="text-lg font-medium">{percentage}%</p>
      <p className="mt-2 text-xs text-gray-500">
        {answered} of {total} Questions answered
      </p>
    </div>
  );
};

export default RankCard;
