-- Revert outsiders:10-init from pg

BEGIN;

DROP TABLE "role" CASCADE;
DROP TABLE "user" CASCADE;
DROP TABLE "message" CASCADE;
DROP TABLE "trip" CASCADE;
DROP TABLE "sport" CASCADE;
DROP TABLE "category" CASCADE;
DROP TABLE "m2m_user_participate_trip" CASCADE;

COMMIT;
