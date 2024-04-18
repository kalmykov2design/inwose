import React, { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Radio } from "../components/Radio";
import moment from "moment";
import { createTask } from "../api/api";

export function CreateTask() {

  const now = Date.now();
  const dateNow = new Date(now).toLocaleString();
  const dateUpcoming = new Date(now + 604800000).toLocaleString();
  const dateNowStr = dateNow
  const dateUpcomingStr = dateUpcoming.toLocaleString();

  const [isUpcoming, setIsUpcoming] = useState(false)

  function onTypeChange(value: string) {
    setIsUpcoming(value === "upcoming" ? true : false)
  }

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const obj = {
      createdAt: 0,
      changetAt: 0,
      deletedAt: 0,

      deadline: 0,
      deadlineTime: "",
      deadlineTimeMS: 0,
      dateOfComplete: 0,
      timeForComplete: 0,

      coinsHasPlus: 0,
      coinsHasBg: 0,
      coinsAmount: 0,
      coinsNotEarnedAmount: 0,
      coinColor: "green",
    }

    for (const [key, value] of formData) {
      obj[key] = value
    }

    obj.deadlineTimeMS = Number(obj.deadlineTime?.split(':')[0]) * 360000 + Number(obj.deadlineTime?.split(':')[1]) * 6000 + Number(obj.deadlineTime?.split(':')[2]) * 100
    obj.deadline = obj.deadline ? moment(obj.deadline, 'DDMMYYYY').valueOf() + obj.deadlineTimeMS : 0;
    obj.dateOfComplete = obj.dateOfComplete ? moment(obj.dateOfComplete, 'DDMMYYYY').valueOf() : 0;
    obj.timeForComplete = obj.timeForComplete ? obj.timeForComplete * 360000 : 0;
    obj.createdAt = moment().valueOf();

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
            <Input name='deadline' label='Дедлайн' defaultValue={dateUpcomingStr.split(',')[0]} placeholder='Выбрать дату' />
            <Input name='deadlineTime' label='Время' defaultValue={dateUpcomingStr.split(',')[1]} placeholder='Выбрать дату' />
          </div>
        )}
        {!isUpcoming && (
          <div className="mt-4 flex gap-2 items-end">
            <Input name='dateOfComplete' label='Дата выполнения' defaultValue={dateNowStr.split(',')[0]} placeholder='Выбрать дату' />
            <Input name='timeForComplete' label='Время (ч)' defaultValue="1" placeholder='Затраченное время' />
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <Button type='submit'>Готово</Button>
        </div>
      </form>
    </>
  )
};