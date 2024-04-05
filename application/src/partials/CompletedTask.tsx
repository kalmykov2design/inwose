import React from "react";
import { Size } from "../components/Size";
import { determineButton } from "../utils/determineButton";
import { calculateCoins } from "../utils/calculateCoins";
import { Coins } from "../components/Coins";
import { determineCategory } from "../utils/determineCategory";
import { TaskProps } from "../types/types";



export function CompletedTask (props: TaskProps) {
  const { taskType = "personal" } = props;

  const formattedCategory = determineCategory(props.categoryName)

  return (
    <div className="relative container-grid mb-4 bg-gray-100 rounded-lg" key={`${props.dateOfComplete}_${props.deadline}`}>
      <div>
        <div className="grid grid-cols-2">
          {props.deadline && <div>Осталось: <br /><b>{props.deadline}</b></div>}
          {props.timeForComplete && <div>Прошло: <br /><b>{props.timeForComplete}</b></div>}
          {props.sizeName && <Size size={props.sizeName} />}
        </div>
        <div className="font-medium mt-4" style={{ color: formattedCategory?.color }}>{formattedCategory?.text}</div>
      </div>
      <div className="flex flex-col border-l-4 border-[#0066FF]">
        <h3 className="font-medium text-xl mb-4">{props.taskName}</h3>
        <p>{props.taskDescr}</p>
      </div>
      <div>
        <div className="flex justify-between items-center w-[290px]">
          {determineButton(taskType)}
          <Coins coins={calculateCoins(props.sizeName, props.categoryName)} />
        </div>
      </div>
      <div className="absolute w-full h-full rounded-lg bg-white opacity-50"></div>
    </div>
  )
};