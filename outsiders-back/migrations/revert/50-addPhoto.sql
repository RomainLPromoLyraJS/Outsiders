-- Revert outsiders:50-addPhoto from pg

BEGIN;

ALTER TABLE "user" DROP COLUMN "picture";

COMMIT;
