CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_name` text NOT NULL,
	`date_of_complete` text,
	`deadline` text,
	`size_name` text NOT NULL,
	`task_descr` text,
	`task_name` text NOT NULL,
	`task_status` text NOT NULL,
	`task_type` text NOT NULL,
	`time_for_complete` text
);
