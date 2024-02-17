import React from "react";

type CoinColors = "green" | "red"

interface CoinsProps {
  hasPlus?: boolean;
  hasBg?: boolean;
  coinsAmount: number;
  coinsNotEarnedAmount?: number;
  coinColor?: CoinColors;
}

export function Coins(props: CoinsProps) {
  const { coinsAmount, coinsNotEarnedAmount, coinColor = "green", hasPlus = false, hasBg = false } = props
  return (
    <div className={`flex flex-row items-center justify-center gap-1 font-semibold ${hasBg ? "px-8 py-4 rounded-full bg-gray-100" : "bg-transparent"}`}>
      {coinsNotEarnedAmount && <span className="opacity-30 line-through">+{coinsNotEarnedAmount}</span>}
      <span>{hasPlus && "+"}{coinsAmount}</span>
      <div className="w-6 h-6 bg-[url(/public/coin.png)] bg-center bg-no-repeat"></div>
    </div>
  )
};

