import express from "express";
import cors from "cors";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { tasks } from "./schema";
import Database from "better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);
migrate(db, { migrationsFolder: "./migrations" });

const app = express();
app.use(express.json());
app.use(cors());

// Middleware для логирования входящих запросов
app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
  next();
});

// Создание карточки задачи
app.post("/tasks", async (req, res) => {
  const { 
    categoryName,
    deadline,
    dateOfComplete,
    sizeName,
    taskDescr,
    taskName,
    taskStatus,
    taskType,
    timeForComplete,
  } = req.body;
  const newTask = {
    categoryName,
    deadline,
    dateOfComplete,
    sizeName,
    taskDescr,
    taskName,
    taskStatus,
    taskType,
    timeForComplete,
  };
  await db.insert(tasks).values(newTask)
  res.status(201).json(newTask);
});

// Получение списка всех карточек задач
app.get("/tasks", async (req, res) => {
  console.log("Обработка запроса на получение списка задач");
  const x = await db.select().from(tasks)
  res.json(x);
});

// Изменение карточки задачи
// app.put("/tasks/:id", (req, res) => {
//   const taskId = Number(req.params.id);
//   const { title, description } = req.body;

//   const task = tasks.find((task) => task.id === taskId);
//   if (!task) {
//     return res.status(404).json({ message: "Task not found" });
//   }

//   task.title = title;
//   task.description = description;

//   res.json(task);
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
