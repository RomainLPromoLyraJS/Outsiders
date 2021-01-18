-- Revert outsiders:10-init from pg

BEGIN;

DROP TABLE "role";
DROP TABLE user;
DROP TABLE "message";
DROP TABLE trip;
DROP TABLE sport;
DROP TABLE category;

COMMIT;
