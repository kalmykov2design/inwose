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
