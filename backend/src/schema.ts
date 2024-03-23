import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  categoryName: text('category_name').notNull(),
  deadline: text('deadline').notNull(),
  sizeName: text('size_name').notNull(),
  taskDescr: text('task_descr'),
  taskName: text('task_name').notNull(),
  timeForTask: text('time_for_task').notNull(),
  timeSpent: text('time_for_task').notNull(),
});
