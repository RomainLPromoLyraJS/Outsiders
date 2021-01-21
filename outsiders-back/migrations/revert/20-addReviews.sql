-- Revert outsiders:20-addReviews from pg

BEGIN;


DROP TABLE "reviews" CASCADE;


COMMIT;
