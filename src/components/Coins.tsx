import React from "react";

type CoinColors = "green" | "red"

export interface CoinsProps {
  hasPlus?: boolean;
  hasBg?: boolean;
  coinsAmount: number;
  coinsNotEarnedAmount?: number;
  coinColor?: CoinColors;
}

export function Coins(props: {coins: CoinsProps}) {
  const { coinsAmount, coinsNotEarnedAmount, coinColor = "green", hasPlus = false, hasBg = false } = props.coins
  return (
    <div className={`flex flex-row items-center justify-center gap-1 font-semibold ${hasBg ? "px-8 py-3 rounded-full bg-gray-100" : "bg-transparent"}`}>
      {coinsNotEarnedAmount && <span className="opacity-30 line-through">+{coinsNotEarnedAmount}</span>}
      <span>{hasPlus && "+"}{coinsAmount}</span>
      <div className="w-6 h-6 bg-[url(/coin.png)] bg-center bg-no-repeat"></div>
    </div>
  )
};

