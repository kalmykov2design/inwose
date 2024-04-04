import React from "react";
import { Coins, CoinsProps } from "./Coins";
import { Size, SizeType } from "./Size";
import { calculateCoins } from "../utils/calculateCoins";
import { determineButton } from "../utils/determineButton";
import { determineCategory } from "../utils/determineCategory";
import { UpcomingTask } from "../partials/UpcomingTask";
import { CompletedTask } from "../partials/CompletedTask";

export type TaskType = "personal" | "pari" | "team"
export type TaskCategory = "qualification" | "outlook"

export interface TaskProps {
  sizeName: SizeType;
  taskType: TaskType;
  coins: CoinsProps;
  categoryName: TaskCategory;
  taskName: string;
  taskDescr?: string;
  deadline?: number;
  dateOfComplete?: string;
  taskStatus: string;
  timeForComplete?: string;
}


export function Task(props: TaskProps) {

  console.log(props);

  return (
    <>
      {!props.dateOfComplete && (
        <UpcomingTask {...props} />
      )}
      {props.dateOfComplete && (
        <CompletedTask {...props} />
      )}
    </>
  )
};
