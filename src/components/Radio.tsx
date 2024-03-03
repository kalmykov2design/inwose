import React from "react";

interface RadioProps {
  value?: string;
  name: string;
  label: string;
}

export function Radio(props: RadioProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="w-6 h-6"
        type="radio"
        value={props.value}
        name={props.name}
        id={props.name + "id"} />
      <label htmlFor={props.name + "id"}>{props.label}</label>
    </div>
  )
};