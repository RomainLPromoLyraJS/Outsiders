-- Deploy outsiders:50-addPhoto to pg

BEGIN;

ALTER TABLE "user" ADD "picture" TEXT DEFAULT "/var/www/html/APO/Outsiders/projet-blablasport/outsiders-back/public/defaultpicture.png";

COMMIT;
