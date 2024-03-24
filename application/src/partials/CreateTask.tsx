import React, { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Radio } from "../components/Radio";
import { createTask } from "../api/api";

interface CreateTaskProps {

}

export function CreateTask(props: CreateTaskProps) {

  const now = new Date();
  const dateNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateUpcoming = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
  const dateNowStr = dateNow.toLocaleDateString();
  const dateUpcomingStr = dateUpcoming.toLocaleDateString();

  const [isUpcoming, setIsUpcoming] = useState(false)

  function onTypeChange(value: string) {
    setIsUpcoming(value === "upcoming" ? true : false)
  }

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
        <h2>Создать задачу</h2>
        <Button type='linkLike'>Подробное дело</Button>
      </div>
      <form action="/" onSubmit={e => formSubmit(e)}>
        <Input placeholder='Название дела' name='taskName' wide />
        <Input placeholder='Описание' name='taskDescr' wide textarea />
        <div className="grid grid-cols-2 gap-8 mt-4">
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
              { label: 'Большая', id: 'sizeRadio1', name: "sizeName", value: "lg" },
              { label: 'Средняя', id: 'sizeRadio2', name: "sizeName", value: "md" },
              { label: 'Маленькая', id: 'sizeRadio3', name: "sizeName", value: "sm" },
            ]} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col">
            <h4>Вид</h4>
            <Radio onChange={(value) => onTypeChange(value)} options={[
              { label: 'Предстоящая', id: 'taskStatusRadio1', name: "taskStatus", value: "upcoming" },
              { label: 'Завершённая', id: 'taskStatusRadio2', name: "taskStatus", value: "completed" }
            ]} />
          </div>
          <div className="flex flex-col">
            <h4>Тип задачи</h4>
            <Radio options={[
              { label: 'Личная', id: 'taskTypeRadio1', name: "taskType", value: "personal" },
              { label: 'Пари', id: 'taskTypeRadio2', name: "taskType", value: "pari" },
              { label: 'Командная', id: 'taskTypeRadio3', name: "taskType", value: "team" }
            ]} />
          </div>

        </div>
        {isUpcoming && (
          <div className="mt-4 flex gap-2 items-end">
            <Input name='deadline' label='Дедлайн' defaultValue={dateUpcomingStr} placeholder='Выбрать дату' />
          </div>
        )}
        {!isUpcoming && (
          <div className="mt-4 flex gap-2 items-end">
            <Input name='dateOfComplete' label='Дата выполнения' defaultValue={dateNowStr} placeholder='Выбрать дату' />
            <Input name='timeForCompleted' label='Время (ч)' placeholder='Затраченное время' />
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <Button type='submit'>Готово</Button>
        </div>
      </form>
    </>
  )
};