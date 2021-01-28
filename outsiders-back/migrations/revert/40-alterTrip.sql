-- Revert outsiders:40-alterTrip from pg

BEGIN;

ALTER TABLE trip ALTER COLUMN sport_id DROP NOT NULL;
ALTER TABLE trip ALTER COLUMN user_id DROP NOT NULL;

COMMIT;
