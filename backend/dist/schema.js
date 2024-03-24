"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = void 0;
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
exports.tasks = (0, sqlite_core_1.sqliteTable)("tasks", {
    id: (0, sqlite_core_1.integer)("id").primaryKey({ autoIncrement: true }),
    categoryName: (0, sqlite_core_1.text)('category_name').notNull(),
    dateOfComplete: (0, sqlite_core_1.text)('date_of_complete'),
    deadline: (0, sqlite_core_1.text)('deadline'),
    sizeName: (0, sqlite_core_1.text)('size_name').notNull(),
    taskDescr: (0, sqlite_core_1.text)('task_descr'),
    taskName: (0, sqlite_core_1.text)('task_name').notNull(),
    taskStatus: (0, sqlite_core_1.text)('task_status').notNull(),
    taskType: (0, sqlite_core_1.text)('task_type').notNull(),
    timeForComplete: (0, sqlite_core_1.text)('time_for_complete'),
});
