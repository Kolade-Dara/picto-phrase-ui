import { FC } from "react";
import { Button } from "@/components/ui/button";

interface UseHintItemProps {
  hintName: string;
  description: string;
  cost: number;
  coinIconUrl?: string;
  onUse: () => void;
}

const UseHintItem: FC<UseHintItemProps> = ({
  hintName,
  description,
  cost,
  coinIconUrl = "/images/hintcoin.png",
  onUse,
}) => {

  return (
    <div className="flex flex-col rounded-xl bg-white p-4 shadow-sm h-auto w-full gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{hintName}</h3>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">{cost} hint coins</span>
          <img
            src={coinIconUrl}
            alt="Hint coin"
            className="h-5 w-5 object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className=" text-sm text-gray-600">{description}</p>

        <Button variant="outline" onClick={onUse}>
          Use hint
        </Button>
      </div>
    </div>
  );
};

export default UseHintItem;
