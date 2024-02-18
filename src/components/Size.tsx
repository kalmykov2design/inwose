import React from "react";

type SizeType = "small" | "medium" | "large";

interface SizeProps {
  size: SizeType;
}

export function Size(props: SizeProps) {
  const size = picSwitch(props.size);
  return (
    <div className="flex gap-2">
      <div className={`bg-[url(${size})] bg-center bg-no-repeat`}></div>
    </div>
  )
};

function picSwitch(size: SizeType) {
  switch (size) {
    case "small":
      return "/small_task.png"
    case "medium":
      return "/medium_task.png"
    case "large":
      return "/large_task.png"
    default:
      break;
  }
}