import React from "react";
import { Coins, CoinsProps } from "./Coins";
import { Button } from "./Button";
import { Size, SizeType } from "./Size";

export type TaskType = "personal" | "pari" | "team"
export type TaskCategory = "qualification" | "outlook"

export interface TaskProps {
  taskName: string;
  taskDescr?: string;
  deadline?: number;
  sizeName: SizeType;
  coins: CoinsProps;
  taskType: TaskType;
  dateOfComplete: string;
  categoryName: TaskCategory;
  taskStatus: string;
  timeForComplete?: string;
}


export function Task(taskProps: {data: TaskProps}) {
  const { taskType = "personal" } = taskProps.data;
  const props = taskProps.data;

  const formattedCategory = drawCategory(props.categoryName)
  console.log(props);

  return (
    <div className="container-grid mb-4 bg-gray-100 rounded-lg">
      <div>
        <div className="grid grid-cols-2">
          {props.deadline && <div>Осталось: <br /><b>{props.deadline}</b></div>}
          {props.timeForComplete && <div>Прошло: <br /><b>{props.timeForComplete}</b></div>}
          {props.sizeName && <Size size={props.sizeName} />}
        </div>
        <div className="font-medium mt-4" style={{ color: formattedCategory.color }}>{formattedCategory.text}</div>
      </div>
      <div className="flex flex-col border-l-4 border-[#0066FF]">
        <h3 className="font-medium text-xl mb-4">{props.taskName}</h3>
        <p>{props.taskDescr}</p>
      </div>
      <div>
        <div className="flex justify-between items-center w-[290px]">
          {createButtons(taskType)}
          <Coins coins={calculateCoins()} />
        </div>
      </div>
    </div>
  )
};



function calculateCoins(): CoinsProps {
  
  const coins: CoinsProps = {
    coinsAmount: 10,
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

function drawCategory(categoryName: TaskCategory) {
  switch (categoryName) {
    case "qualification":
      return { text: "Повышение квалификации", color: "#0066ff" }
    case "outlook":
      return { text: "Расширение кругозора", color: "#08b908" }
  }
}