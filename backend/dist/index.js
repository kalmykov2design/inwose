"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const better_sqlite3_1 = require("drizzle-orm/better-sqlite3");
const schema_1 = require("./schema");
const better_sqlite3_2 = __importDefault(require("better-sqlite3"));
const migrator_1 = require("drizzle-orm/better-sqlite3/migrator");
const sqlite = new better_sqlite3_2.default("sqlite.db");
const db = (0, better_sqlite3_1.drizzle)(sqlite);
(0, migrator_1.migrate)(db, { migrationsFolder: "./migrations" });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Middleware для логирования входящих запросов
app.use((req, res, next) => {
    console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
    next();
});
// Создание карточки задачи
app.post("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryName, sizeName, taskDescr, taskName, taskStatus, taskType, createdAt, changetAt, deletedAt, deadline, deadlineTime, deadlineTimeMS, dateOfComplete, timeForComplete, coinsHasPlus, coinsHasBg, coinsAmount, coinsNotEarnedAmount, coinColor, } = req.body;
    const newTask = {
        categoryName,
        sizeName,
        taskDescr,
        taskName,
        taskStatus,
        taskType,
        createdAt,
        changetAt,
        deletedAt,
        deadline,
        deadlineTime,
        deadlineTimeMS,
        dateOfComplete,
        timeForComplete,
        coinsHasPlus,
        coinsHasBg,
        coinsAmount,
        coinsNotEarnedAmount,
        coinColor,
    };
    yield db.insert(schema_1.tasks).values(newTask);
    res.status(201).json(newTask);
}));
// Получение списка всех карточек задач
app.get("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Обработка запроса на получение списка задач");
    const x = yield db.select().from(schema_1.tasks);
    return res.json(x);
}));
// Изменение карточки задачи
// app.patch("/tasks/:id", (req, res) => {
//   const taskId = Number(req.params.id);
//   const { title, description, taskStatus, changetAt, deadline } = req.body;
//   const tasksArray = Object.keys(tasks).map(key => tasks[key]);
//   const taskIndex = tasksArray.findIndex(task => task.id === taskId);
//   if (taskIndex === -1) {
//     return res.status(404).json({ message: "Task not found" });
//   }
//   const updatedTask = { ...tasksArray[taskIndex], title, description, taskStatus, changetAt, deadline };
//   tasksArray[taskIndex] = updatedTask;
//   res.json(updatedTask);
// });
app.patch("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);
    const { title, description, taskStatus, changetAt, deadline } = req.body;
    const tasksArray = Object.keys(schema_1.tasks).map(key => schema_1.tasks[key]);
    const taskIndex = tasksArray.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }
    schema_1.tasks[taskIndex] = Object.assign(Object.assign({}, schema_1.tasks[taskIndex]), { title: title || schema_1.tasks[taskIndex].title, description: description || schema_1.tasks[taskIndex].description, taskStatus: taskStatus || schema_1.tasks[taskIndex].taskStatus, changetAt: changetAt || schema_1.tasks[taskIndex].changetAt, deadline: deadline || schema_1.tasks[taskIndex].deadline });
    res.json(schema_1.tasks[taskIndex]);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
