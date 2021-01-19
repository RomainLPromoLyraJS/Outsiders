-- Deploy outsiders:10-init to pg

BEGIN;

DROP TABLE IF EXISTS "role", user, category, sport, trip, "message", m2m_user_participate_trip CASCADE; 

CREATE TABLE "role" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL
);

CREATE TABLE user (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  lastname TEXT NOT NULL,
  firstname TEXT NOT NULL,
  mail TEXT NOT NULL UNIQUE CHECK (VALUE ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),
  "password" TEXT NOT NULL CHECK (VALUE ~ '^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$'),
  pseudo TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL,
  role_id INT REFERENCES role(id) ON DELETE CASCADE
);

CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL
);

CREATE TABLE trip (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  "date" DATE WITH TIME ZONE NOT NULL,
  "time" TIME WITH TIME ZONE NOT NULL,
  "from" TEXT NOT NULL,
  "to" TEXT NOT NULL,
  places INT NOT NULL CHECK (VALUE > 1),
  minimum INT NOT NULL,
  price INT NOT NULL,
  duration REAL NOT NULL,
  sport_id INT REFERENCES sport(id) ON DELETE CASCADE,
  user_id INT REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE sport (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL,
  category_id INT REFERENCES category(id) ON DELETE CASCADE
);

CREATE TABLE "message" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  "date" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  content TEXT NOT NULL,
  user_id INT REFERENCES user(id) ON DELETE CASCADE,
  trip_id INT REFERENCES trip_id ON DELETE CASCADE
);

CREATE TABLE m2m_user_participate_trip (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id INT REFERENCES user(id) ON DELETE CASCADE,
  trip_id INT REFERENCES trip(id) ON DELETE CASCADE
);


COMMIT;
