import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Radio } from "../components/Radio";
import { createTask } from "../api/api";

interface CreateTaskProps {

}

export function CreateTask(props: CreateTaskProps) {

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);    
    const obj: any = {}

    for (const [key, value] of formData) {
      obj[key] = value
    }

    console.log(obj);
   
    createTask(obj);
  }

  return (
    <>
      <div className="flex justify-between">
        <h3 className='text-2xl'>Создать дело</h3>
        <Button type='linkLike'>Подробное дело</Button>
      </div>
      <form action="/" onSubmit={e => formSubmit(e)}>
        <Input placeholder='Название дела' name='taskName' wide />
        <Input placeholder='Описание' name='taskDescr' wide textarea />
        <div className="flex gap-8 mt-4">
          <div className="flex flex-col">
            <h4>Категория</h4>
            <Radio options={[
              { label: 'Повышение квалификации', id: 'categoryRadio1', name: "categoryName", value: "qualification" },
              { label: 'Расширение кругозора', id: 'categoryRadio2', name: "categoryName", value: "outlook" }
            ]} />
          </div>
          <div className="flex flex-col">
            <h4>Значимость</h4>
            <Radio options={[
              { label: 'Большое', id: 'sizeRadio1', name: "sizeName", value: "lg" },
              { label: 'Среднее', id: 'sizeRadio2', name: "sizeName", value: "md" },
              { label: 'Маленькое', id: 'sizeRadio3', name: "sizeName", value: "sm" },
            ]} />
          </div>
        </div>
        <div className="mt-4 flex gap-2 items-end">
          <Input name='deadline' label='Дедлайн' placeholder='Выбрать дату' />
          <Input name='timeForTask' placeholder='Время на задачу' />
        </div>
        <div className="mt-4 flex justify-end">
          <Button type='submit'>Готово</Button>
        </div>
      </form>
    </>
  )
};