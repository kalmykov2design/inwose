import React from "react";
import { Size } from "../components/Size";
import { determineButton } from "../utils/determineButton";
import { calculateCoins } from "../utils/calculateCoins";
import { Coins } from "../components/Coins";
import { determineCategory } from "../utils/determineCategory";
import { TaskProps } from "../types/types";
import moment from "moment";
import { formatTime } from "../utils/formatTime";



export function CompletedTask (props: TaskProps) {
  const { taskType = "personal" } = props;
  const formattedCategory = determineCategory(props.categoryName)

  console.log("date of complete",props.dateOfComplete)
  console.log("time for complete",props.timeForComplete)
  
  const daysPassed = moment(props.dateOfComplete).fromNow()
  // const timePassed = moment(props.timeForComplete).hours()
  const timePassed = props.timeForComplete ? formatTime(props.timeForComplete) : 0

  return (
    <div className="relative container-grid mb-4 bg-gray-100 rounded-lg" key={`${props.dateOfComplete}_${props.deadline}`}>
      <div>
        <div className="grid grid-cols-2">
          {props.dateOfComplete && <div>Вполнено: <br /><b>{daysPassed}</b></div>}
          {props.sizeName && <Size size={props.sizeName} />}
          {props.timeForComplete && <div className="mt-3">Время: <br /><b>{timePassed}</b></div>}
        </div>
        <div className="font-medium mt-4" style={{ color: formattedCategory?.color }}>{formattedCategory?.text}</div>
      </div>
      <div className="flex flex-col border-l-4 border-[#0066FF]">
        <h3 className="font-medium text-xl mb-4">{props.taskName}</h3>
        <p>{props.taskDescr}</p>
      </div>
      <div>
        <div className="w-full translate-x-4 flex justify-between items-center border border-gray-600 rounded-full pl-10 pr-4 py-3">
          Получил
          <Coins coins={calculateCoins(props.sizeName, props.categoryName)} />
        </div>
      </div>
      <div className="absolute w-full h-full rounded-lg bg-white opacity-50"></div>
    </div>
  )
};