import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  categoryName: text('category_name').notNull(),
  dateOfComplete: text('date_of_complete'),
  deadline: text('deadline'),
  sizeName: text('size_name').notNull(),
  taskDescr: text('task_descr'),
  taskName: text('task_name').notNull(),
  taskStatus: text('task_status').notNull(),
  taskType: text('task_type').notNull(),
  timeForComplete: text('time_for_complete'),
});
