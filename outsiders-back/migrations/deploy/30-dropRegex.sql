-- Deploy outsiders:30-dropRegex to pg

BEGIN;

ALTER TABLE "user" ALTER "password" TYPE TEXT;

DROP DOMAIN PASSWORD_VERIFY; 

COMMIT;
