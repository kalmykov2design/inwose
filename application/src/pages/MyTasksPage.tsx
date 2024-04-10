import React, { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { getAllTasks } from "../api/api";
import { UpcomingTask } from "../partials/UpcomingTask";
import { CompletedTask } from "../partials/CompletedTask";
import { TaskProps } from "../types/types";

export function MyTasksPage() {

  const [tasks, setTasks] = useState<TaskProps[]>([]); // Инициализируем состояние для хранения данных

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTasks(); // Вызываем функцию getAllTasks() для получения данных
        setTasks(data); // Сохраняем полученные данные в состоянии
      } catch (error) {
        console.error(error); // Обработка ошибок, если запрос не выполнен успешно
      }
    };

    fetchData(); // Вызываем функцию для загрузки данных при монтировании компонента
  }, []); // Пустой массив зависимостей для вызова useEffect только один раз

  const upcoming = tasks.filter(val => !val.dateOfComplete)
  const completed = tasks.filter(val => val.dateOfComplete)

  return (
    <PageWrapper>
      <div className="container-grid">
        <div className="grid grid-cols-2">
          <div>Время</div>
          <div>Размер</div>
        </div>
        <div>Задачи</div>
      </div>
      {tasks.length > 0 ? (
        <>
          {upcoming.map(task => (
            <UpcomingTask {...task} key={`${task.id}-${task.dateOfComplete}_${task.timeForComplete}`} />
          ))}
          <div className="container-grid">
            <div className=""></div>
            <div className="">Завершённые</div>
          </div>
          {completed.map(task => (
            <CompletedTask {...task}  key={`${task.id}-${task.dateOfComplete}_${task.timeForComplete}`} />
          ))}
        </>
      ) : (<p>Loading...</p>)}
    </PageWrapper>
  )
};