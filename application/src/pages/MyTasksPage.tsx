import React, { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Task, TaskProps } from "../components/Task";
import { getAllTasks } from "../api/api";
interface MyTasksPageProps {
  data: TaskProps[];
}

export function MyTasksPage(props: MyTasksPageProps) {

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

  tasks.length > 0 ? console.log(tasks) : console.log("Loading..."); // Выводим данные в консоль, если задачи есть
  
  

  return (
    <PageWrapper>
      <div className="container-grid">
        <div className="grid grid-cols-2">
          <div>время</div>
          <div>размер</div>
        </div>
        <div>задачи</div>
      </div>
      {tasks.length > 0 ? tasks.map(task => (
        <Task
          {...task}
        />

      )) : (<p>Loading...</p>)}
    </PageWrapper>
  )
};