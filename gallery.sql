--make table
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(500) NOT NULL,
	"description" VARCHAR(500),
	"likes" INT);


--starting data
INSERT INTO "gallery"
	("path", "description", "likes")
	VALUES
	('images/dog_asleep_in_car.jpg', 
    'Photo of Bennett on a road trip through the Upper Penninsula of Michigan.', 
    1 ),
    ('images/dog_in_canoe.jpg',
    'Photo of Bennett during a paddle around a lake in Cuyuna County Recreational Area.', 
    2 ),
    ('images/dog_first_hike.jpg',
    'Photo of Bennett on his first hike in Lebanon Hills Regional Park.', 
    0 );