-- Create postgres database
CREATE DATABASE file_upload_test;

-- create postgres table for storing images, other info availbele to us like file size and we could date stamp are ideas
CREATE TABLE "uploaded_images" (
    "id" serial PRIMARY KEY,
    "data" bytea,
    "name" varchar(150),
    "mime_type" varchar(150)
);

-- for axios get to database query
SELECT ENCODE(data, 'base64') as image, "name", "mime_type", "id" FROM "uploaded_images";



--Create mongoDB 
use file_upload_test
--the above is all we need for this project, the below is just examples

--make a collection (similar idea to table but far from the same)
-- this may look familiar, like a json object... well thats because it is
db.new_collection.insert({ some_key: "some_value" })
-- so to make an object similar to what we need here...
db.new_collection.insert({ 
    "image": "this waould be the datavalue of the image",
    "name": "this would be the file name given to it",
    "mimetype": "this would be the file extention"
     })
--create this object is not needed but an example of how we will be setting up each object in our databse via express/axios
--i suggest downloading ROBO 3T, it is a GUI for mongoDB and similar how many use postico for postgres