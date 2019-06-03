CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY, 
	"task" VARCHAR(250) NOT NULL,
	"priority" VARCHAR(150) NOT NULL,
	"is_complete" BOOLEAN DEFAULT false
	);
	
	
INSERT INTO "todo" ("task", "priority") 
VALUES ('oil change in accord', 'Not urgent, important'),
('burn brush pile', 'Not urgent, not important'),
('weekend challenge', 'Urgent, important'),
('pressure wash deck', 'Urgnet, not important');