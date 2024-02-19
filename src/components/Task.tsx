import React from "react";
import { Coins } from "./Coins";
import { Button } from "./Button";
import { Size } from "./Size";

interface TaskProps {

}

export function Task(props: TaskProps) {
  return (
    <div className="container-grid mb-4 bg-gray-100 rounded-lg">
      <div>
        <div className="font-medium">1 дн</div>
        <Size size="large" />
      </div>
      <div className="flex flex-col border-l-4 border-[#0066FF]">
        <h3 className="font-medium text-xl mb-4">Подизайнить</h3>
        <p>Нужно сделать дизайн главной страницы и страницы пари</p>
      </div>
      <div className="">
        <div className="flex justify-between items-center w-[290px]">
          <Button type="transparent" >Выполнил</Button>
          <Coins coinsAmount={3} hasPlus />
        </div>
      </div>
    </div>
  )
};