import React from "react";
import { Size } from "../components/Size";
import { calculateCoins } from "../utils/calculateCoins";
import { Coins } from "../components/Coins";
import { determineCategory } from "../utils/determineCategory";
import { TaskProps } from "../types/types";
import 'moment/locale/ru';
import moment from "moment";
import { updateTask } from "../api/api";
import { Button } from "../components/Button";

export function UpcomingTask(props: TaskProps) {
  const { taskType = "personal" } = props;
  const formattedCategory = determineCategory(props.categoryName)
  const timeLeft = moment(props.deadline).fromNow()

  return (
    <div className="container-grid mb-4 bg-gray-100 rounded-lg">
      <div>
        <div className="grid grid-cols-2">
          {props.deadline && <div>Дедлайн: <br /><b>{timeLeft}</b></div>}
          {props.sizeName && <Size size={props.sizeName} />}
          {/* {props.deadlineTime && <div>Прошло: <br /><b>{props.deadlineTime}</b></div>} */}
        </div>
        <div className="font-medium mt-4" style={{ color: formattedCategory?.color }}>{formattedCategory?.text}</div>
      </div>
      <div className="flex flex-col border-l-4 border-[#0066FF]">
        <h3 className="font-medium text-xl mb-4">{props.taskName}</h3>
        <p>{props.taskDescr}</p>
      </div>
      <div className="flex flex-col !items-end !justify-between gap-4">
        <div className="flex justify-between items-center w-[290px]">
          <Button type={"transparent"} onClick={() => updateTask(props.id, {title: "Изменённое название"})} />
          <Coins coins={calculateCoins(props.sizeName, props.categoryName)} />
        </div>
        <div className="">{taskType}</div>
      </div>
    </div>
  )
};