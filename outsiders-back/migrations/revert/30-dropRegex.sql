-- Revert outsiders:30-dropRegex from pg

BEGIN;

CREATE DOMAIN PASSWORD_VERIFY AS TEXT CHECK(VALUE ~ '^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$');

ALTER TABLE "user" ALTER "password" TYPE PASSWORD_VERIFY;

COMMIT;
