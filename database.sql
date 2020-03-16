-- Create postgres database
CREATE DATABASE file_upload_test;


CREATE TABLE "uploaded_images" (
    "id" serial PRIMARY KEY,
    "data" bytea,
    "name" varchar(150),
    "mime_type" varchar(150)
);

-- for axios get to database query
SELECT ENCODE(data, 'base64') as image, "name", "mime_type", "id" FROM "uploaded_images";