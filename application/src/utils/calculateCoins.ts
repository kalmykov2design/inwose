import { CoinsProps } from "../components/Coins"
import { SizeType } from "../components/Size"
import { TaskCategory } from "../components/Task"

export function calculateCoins(size: SizeType, category: TaskCategory): CoinsProps {

  const calculatedCoins = determineCoinsAmount(size, category)

  const coins: CoinsProps = {
    coinsAmount: calculatedCoins,
    hasBg: false,
    hasPlus: true,
    coinColor: "green",
  }
  return coins
}

function determineCoinsAmount(size: SizeType, category: TaskCategory) {
  let categoryCost = 0;
  let sizeCost = 0;

  if (category === "qualification") {
    categoryCost = 5
  } else { categoryCost = 3 }

  if (size === "lg") {
    sizeCost = 4
  } else if (size === "md") {
    sizeCost = 3
  } else { sizeCost = 2 }

  return categoryCost * sizeCost
}