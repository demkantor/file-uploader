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



--Create mongoDB setup