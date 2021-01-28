-- Deploy outsiders:20-addReviews to pg

BEGIN;

CREATE TABLE "reviews"(
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "score" INT NOT NULL,
  "date" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "publisher_id" INT REFERENCES "user"(id) ON DELETE CASCADE,
  "evaluated_id" INT REFERENCES "user"(id) ON DELETE CASCADE
);

GRANT ALL PRIVILEGES ON reviews TO outsiders;

ALTER TABLE "reviews"
ADD CONSTRAINT score_gt_0 CHECK(score > 0);

ALTER TABLE "reviews"
ADD CONSTRAINT score_st_6 CHECK(score < 6);

INSERT INTO "reviews"("score", "date", "title", "content", "publisher_id", "evaluated_id") VALUES 
('4', '2021/12/5', 'super sortie', 'tout était bien organisé, ponctuel au lieu de render-vous, sympa les gateaux pendant le voyage', '2', '6');

COMMIT;
