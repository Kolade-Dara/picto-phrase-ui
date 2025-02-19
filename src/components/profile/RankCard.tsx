import { FC, useState, useEffect } from "react";

interface Rank {
  name: string;
  url: string;
  textColor: string;
  gradientStart: string;
  gradientEnd: string;
}

interface RankCardProps {
  answered: number;
  total: number;
}

// Define your 10 rank levels
const ranks: Rank[] = [
  {
    name: "Novice",
    url: "/images/rank/Novice.svg",
    textColor: "#ffffff",
    gradientStart: "#D8FF8F",
    gradientEnd: "#68A32C",
  },
  {
    name: "Apprentice",
    url: "/images/rank/Apprentice.svg",
    textColor: "#ffffff",
    gradientStart: "#59CDFF",
    gradientEnd: "#336EB5",
  },
  {
    name: "Level 3",
    url: "/images/rank/Developing.svg",
    textColor: "#ffffff",
    gradientStart: "#DBB4EA",
    gradientEnd: "#93619B",
  },
  {
    name: "Level 4",
    url: "/images/rank/Emerging.svg",
    textColor: "#ffffff",
    gradientStart: "#F49524",
    gradientEnd: "#E63B11",
  },
  {
    name: "Skilled",
    url: "/images/rank/Skilled.svg",
    textColor: "#ffffff",
    gradientStart: "#FFE671",
    gradientEnd: "#E88700",
  },
  {
    name: "Accomplished",
    url: "/images/rank/Accomplished.svg",
    textColor: "#ffffff",
    gradientStart: "#48ECA6",
    gradientEnd: "#5872B3",
  },
  {
    name: "Advanced",
    url: "/images/rank/Advanced.svg",
    textColor: "#ffffff",
    gradientStart: "#FFC83E",
    gradientEnd: "#E01747",
  },
  {
    name: "Elite",
    url: "/images/rank/Elite.svg",
    textColor: "#ffffff",
    gradientStart: "#E7207C",
    gradientEnd: "#DD9726",
  },
  {
    name: "Prodigy",
    url: "/images/rank/Prodigy.svg",
    textColor: "#ffffff",
    gradientStart: "#2FADC4",
    gradientEnd: "#FFAB3E",
  },
  {
    name: "Legend",
    url: "/images/rank/Legend.svg",
    textColor: "#ffffff",
    gradientStart: "#FF144C",
    gradientEnd: "#5B29F0",
  },
];

const RankCard: FC<RankCardProps> = ({ answered, total }) => {
  const [rank, setRank] = useState<Rank>(ranks[0]);
  const [percentage, setPercentage] = useState(0);

  // Compute percentage whenever answered or total change
  useEffect(() => {
    const computedPercentage = (answered / total) * 100;
    setPercentage(computedPercentage);
  }, [answered, total]);

  // Update rank based on percentage (1-10% -> index 0, 11-20% -> index 1, etc.)
  useEffect(() => {
    const rankIndex = Math.floor(percentage / 10);
    const clampedIndex = Math.max(0, Math.min(9, rankIndex));
    setRank(ranks[clampedIndex]);
  }, [percentage]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, ${rank.gradientStart}, ${rank.gradientEnd})`,
      }}
      className="w-full max-w-xs rounded-xl p-6 text-center shadow-lg flex flex-col items-center gap-3 shadow-md"
    >
      <p className="text-sm" style={{ color: rank.textColor }}>
        Current rank
      </p>
      <img
        src={rank.url}
        alt={rank.name}
        className="h-20 w-20 md:h-16 md:w-16 object-contain animate-float "
      />
      <h2
        className="text-xl md:text-2xl font-titan font-bold"
        style={{ color: rank.textColor }}
      >
        {rank.name}
      </h2>
      <p
        className="text-lg md:text-xl font-titan font-medium"
        style={{ color: rank.textColor }}
      >
        {percentage.toFixed(0)}%
      </p>
      <div className="m-2 w-full border bg-slate-50/20 border-white rounded-md p-2 text-center">
        <p
          className="mt-1 text-xs md:text-sm text-white"
          style={{ color: rank.textColor }}
        >
          {answered} of {total} <br /> Questions answered
        </p>
      </div>
    </div>
  );
};

export default RankCard;
