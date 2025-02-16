import { FC } from "react";

interface BuyHintItemProps {
  priceNaira: number;
  coins: number;
  coinIconUrl?: string;
  onClick?: () => void;
}

const BuyHintItem: FC<BuyHintItemProps> = ({
  priceNaira,
  coins,
  coinIconUrl = "/images/hintcoin.png",
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm w-full"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Price in Naira */}
      <span className="text-lg font-bold">{priceNaira}N</span>

      {/* Dashed Divider */}
      <div className="mx-2 flex-1 border-t border-dashed border-gray-300" />

      {/* Coins + Icon */}
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">{coins} hint coins</span>
        <img
          src={coinIconUrl}
          alt="Hint coin"
          className="h-5 w-5 object-contain"
        />
      </div>
    </div>
  );
};

export default BuyHintItem;
