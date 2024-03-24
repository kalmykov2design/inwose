import React from "react";
import { Coins, CoinsProps } from "./Coins";
import { Button } from "./Button";
import { Size, SizeType } from "./Size";

export type TaskType = "personal" | "pari" | "team"
export type TaskCategory = "qualification" | "outlook"

export interface TaskProps {
  title: string;
  text?: string;
  timeLeft?: number;
  timePassed?: number;
  size: SizeType;
  coins: CoinsProps;
  type: TaskType;
  category: TaskCategory;
}

export function Task(props: TaskProps) {
  const { type = "personal" } = props;
  const timeLeft = formatTime(props.timeLeft ? props.timeLeft : 0);
  const timePassed = formatTime(props.timePassed ? props.timePassed : 0);
  const category = drawCategory(props.category)
  const coins = props.coins;
  coins.coinsAmount = coinsAmount(props.size, props.category)

  return (
    <div className="container-grid mb-4 bg-gray-100 rounded-lg">
      <div>
        <div className="grid grid-cols-2">
          {props.timeLeft && <div>Осталось: <br /><b>{timeLeft}</b></div>}
          {props.timePassed && <div>Прошло: <br /><b>{timePassed}</b></div>}
          <Size size={props.size} />
        </div>
        <div className="font-medium mt-4" style={{ color: category.color }}>{category.text}</div>
      </div>
      <div className="flex flex-col border-l-4 border-[#0066FF]">
        <h3 className="font-medium text-xl mb-4">{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div>
        <div className="flex justify-between items-center w-[290px]">
          {createButtons(type)}
          <Coins coins={props.coins} />
        </div>
      </div>
    </div>
  )
};

function coinsAmount(size: SizeType, category: TaskCategory) {
  let categoryCost = 0;
  let sizeCost = 0;

  if (category === "qualification") {
    categoryCost = 5
  } else { categoryCost = 3 }

  if (size === "large") {
    sizeCost = 4
  } else if (size === "medium") {
    sizeCost = 3
  } else { sizeCost = 2 }

  return categoryCost * sizeCost
}

function formatTime(seconds: number) {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const remainingSeconds = seconds % 60;

  let formattedTime = "";

  if (days > 0) {
    formattedTime += days + " д";
    if (hours > 0) {
      formattedTime += ", " + hours + " ч";
    }
  } else {
    if (hours > 0) {
      formattedTime += hours + " ч";
      if (minutes > 0) {
        formattedTime += ", " + minutes + " м";
      } else {
        formattedTime += ", " + remainingSeconds + " с";
      }
    } else {
      if (minutes > 0) {
        formattedTime += minutes + " м";
      } else {
        formattedTime += remainingSeconds + " с";
      }
    }
  }

  return formattedTime;
}

function createButtons(type: TaskType) {
  switch (type) {
    case "personal":
      return <Button type={"transparent"} />

    case "pari":
      return (
        <div className="flex flex-col gap-2">
          <Button type={"blue"} />
          <Button type={"gray"} />
        </div>
      )

    case "team":
      return <Button type={"transparent"} />

    default:
      break;
  }
}

function drawCategory(category: TaskCategory) {
  switch (category) {
    case "qualification":
      return { text: "Повышение квалификации", color: "#0066ff" }
    case "outlook":
      return { text: "Расширение кругозора", color: "#08b908" }
  }
}