import React from "react";
import { SizeType } from "../types/types";

interface SizeProps {
  size: SizeType;
}

export function Size(props: SizeProps) {
  return (
    <div className="flex gap-2 font-medium">
      {picSwitch(props.size)}
    </div>
  )
};

function picSwitch(size: SizeType) {
  switch (size) {
    case "sm":
      return (<>
        <div className={`bg-[url(/small_task.png)] bg-center bg-no-repeat w-6 h-6`}></div>
        <span>Small</span>
      </>
      )
    case "md":
      return (<>
        <div className={`bg-[url(/medium_task.png)] bg-center bg-no-repeat w-6 h-6`}></div>
        <span>Medium</span>
      </>
      )
    case "lg":
      return (<>
        <div className={`bg-[url(/large_task.png)] bg-center bg-no-repeat w-6 h-6`}></div>
        <span>Large</span>
      </>
      )
    default:
      break;
  }
}