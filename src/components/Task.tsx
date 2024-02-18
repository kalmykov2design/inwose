import React from "react";
import { Coins } from "./Coins";

interface TaskProps {

}

export function Task(props: TaskProps) {
  return (
    <div className="container-grid mb-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between">
        <div className="">1 дн</div>
        <div className="">
          
          Large
          </div>
      </div>
      <div className="flex flex-col">
        <h3>Подизайнить</h3>
        <p>Нужно сделать дизайн главной страницы и страницы пари</p>
      </div>
      <div className="">
        <button>Выполнил</button>
        <Coins coinsAmount={3} hasPlus />
      </div>
    </div>
  )
};