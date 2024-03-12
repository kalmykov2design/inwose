CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_name` text NOT NULL,
	`deadline` text NOT NULL,
	`size_name` text NOT NULL,
	`task_descr` text NOT NULL,
	`task_name` text NOT NULL,
	`time_for_task` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `users`;