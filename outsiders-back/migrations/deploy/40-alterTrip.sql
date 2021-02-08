-- Deploy outsiders:40-alterTrip to pg

BEGIN;

ALTER TABLE trip ALTER COLUMN sport_id SET NOT NULL;
ALTER TABLE trip ALTER COLUMN user_id SET NOT NULL;

COMMIT;
