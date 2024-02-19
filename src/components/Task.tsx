import React from "react";
import { Coins, CoinsProps } from "./Coins";
import { Button, ButtonType } from "./Button";
import { Size, SizeType } from "./Size";

export interface TaskProps {
  title: string;
  text?: string;
  timeLeft?: number;
  size: SizeType;
  button?: ButtonType;
  buttonText?: string;
  coins: CoinsProps;
}

export function Task(props: TaskProps) {
  const { button = "transparent", } = props;
  const time = formatTime(props.timeLeft ? props.timeLeft : 0);

  return (
    <div className="container-grid mb-4 bg-gray-100 rounded-lg">
      <div>
        <div className="font-medium">{time}</div>
        <Size size={props.size} />
      </div>
      <div className="flex flex-col border-l-4 border-[#0066FF]">
        <h3 className="font-medium text-xl mb-4">{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div className="">
        <div className="flex justify-between items-center w-[290px]">
          <Button type={button}>{props.buttonText}</Button>
          <Coins coins={props.coins} />
        </div>
      </div>
    </div>
  )
};

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
