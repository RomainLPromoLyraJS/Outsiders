-- Deploy outsiders:10-init to pg

BEGIN;

DROP TABLE IF EXISTS "role", "user", "category", "sport", "trip", "message", "m2m_user_participate_trip" CASCADE; 

CREATE TABLE "role" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL
);

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "lastname" TEXT NOT NULL,
  "firstname" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "username" TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL,
  "role_id" INT REFERENCES "role"(id) DEFAULT 1
);

CREATE TABLE "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL
);

CREATE TABLE "sport" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL,
  "category_id" INT REFERENCES "category"(id)
);

CREATE TABLE "trip" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "time" TIME WITH TIME ZONE NOT NULL,
  "from" TEXT NOT NULL,
  "to" TEXT NOT NULL,
  "places" INT NOT NULL,
  "minimum" INT NOT NULL,
  "price" INT NOT NULL,
  "duration" REAL NOT NULL,
  "sport_id" INT REFERENCES "sport"(id),
  "user_id" INT REFERENCES "user"(id)
);

CREATE TABLE "message" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "date" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "content" TEXT NOT NULL,
  "user_id" INT REFERENCES "user"(id),
  "trip_id" INT REFERENCES "trip"(id)
);

CREATE TABLE m2m_user_participate_trip (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" INT REFERENCES "user"(id) ON DELETE CASCADE,
  "trip_id" INT REFERENCES "trip"(id) ON DELETE CASCADE
);

CREATE DOMAIN EMAIL_VERIFY AS TEXT CHECK(VALUE ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');
CREATE DOMAIN PASSWORD_VERIFY AS TEXT CHECK(VALUE ~ '^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$');

ALTER TABLE "user"
ALTER "email" TYPE EMAIL_VERIFY;

ALTER TABLE "user"
ALTER "password" TYPE PASSWORD_VERIFY;

ALTER TABLE "trip"
ADD CONSTRAINT places_gt_1 CHECK(places > 1);

GRANT ALL PRIVILEGES ON "role", "user", "message", "trip", "sport", "category", "m2m_user_participate_trip" TO outsiders;

INSERT INTO "role"("name") VALUES 
('member'),
('administrator');

INSERT INTO "user"("lastname", "firstname", "email", "password", "username", "description", "role_id") VALUES 
('John','Back','jbk@gmail.com','ggJOHNn12b!','Trail Mania','Hi, i???m TrailMania', '1'),
('Jane','Doe','jde@gmail.com','ggJANEn12b!','Surf Mania','Hi, i???m SurfMania', '1'),
('Eve','Sina','esa@gmail.com','ggEVEn12b!','Paddle Mania','Hi, i???m PaddleMania', '1'),
('Anne','Blow','abw@gmail.com','ggANEn12b!','Kite Mania','Hi, i???m KiteMania', '1'),
('Katy','Wick','kwk@gmail.com','ggKATYn12b!','Hydro Mania','Hi, i???m HydroMania', '1'),
('Jack','Johnson','jjn@gmail.com','ggJACKn12b!','Snow Mania','Hi, i???m SnowMania', '1'),
('Machin', 'Bidule','poipoip@gmail.com','Truc123$','admin 1','etc','2');

INSERT INTO "category"("title", "description") VALUES
('Eau', 'en rivi??re, en mer, en lac'),
('Air', 'le bon air pur en montagne et peut-??tre dans les nuages'),
('Terre', 'en for??t, en montagne et pourquoi pas dans le d??sert' ),
('Neige', 'en montagne, en qu??te de poudreuse fra??che');

INSERT INTO "sport"("title", "description", "category_id") VALUES 
('Cano??-kayak', 'Le cano??-kayak est une activit?? physique de loisir ou sportive, pratiqu??e avec des embarcations propuls??es ?? la pagaie ou ?? la main, notamment le cano??, le kayak, le raft, ou la pirogue.', '1'),
('Canyoning', 'Le canyoning ou descente de canyon, est un sport de pleine nature apparent?? ?? la sp??l??ologie, ?? la randonn??e p??destre, ?? l''escalade et ?? l''alpinisme d''une part, et aux sports d''eaux vives d''autre part.', '1'),
('Hydro-speed', 'La nage en eau vive est une activit?? sportive de glisse et de pleine nature n??e dans les ann??es 1950 dans laquelle les nageurs descendent le cours d''une rivi??re, ?? l''aide d''un flotteur (planche d''eau vive) en se propulsant et dirigeant ?? l''aide de palmes.', '1'),
('Kite-surf', 'Le kitesurf, ou planche a??rotract??e ou encore kiteboarding, est un sport de glisse consistant ?? ??voluer avec une planche ?? la surface d''une ??tendue d''eau en ??tant tract?? par un cerf-volant (kite en anglais) sp??cialement adapt??, nomm?? aile ou voile. Ce sport a pris son essor au d??but des ann??es 2000.', '1'),
('Paddleboarding', 'Les participants au paddleboard sont propuls??s par un mouvement de nage en utilisant leurs bras en position couch??e ou ?? genoux sur un paddleboard ou une planche de surf dans l''oc??an.', '1' ),
('Plong??e', 'La plong??e en apn??e peut ??tre pratiqu??e comme simple activit?? de loisir ou en comp??tition. Elle peut se combiner ?? d''autres pratiques subaquatiques dans le cadre de la randonn??e subaquatique (en alternance avec l''utilisation d''un tuba une fois en surface), de la photographie sous-marine, de la p??che sous-marine ou du tir sur cible subaquatique.', '1'),
('Rafting', 'Le rafting (de l''anglais to raft ?? traverser, descendre (un fleuve) en radeau ??), ou le raft (abr??viation famili??re), est une activit?? de loisir ou un sport qui consiste ?? descendre des sections de rivi??re ?? rapides dans un radeau pneumatique.', '1'),
('Snorkeling', 'Le snorkeling ou la randonn??e palm??e ou l''exploration ?? la palme ou la randonn??e subaquatique ou la nage PMT (avec palmes, masque et tuba), est une activit?? de loisir aquatique d''observation des fonds et des esp??ces vivantes sous-marines.', '1' ),
('Surf', 'Le surf (abr??viation fran??aise de l''anglais surf-riding, o?? riding signifie ?? monter ?? et surf ?? (vagues) d??ferlantes ??) est une action ou une pratique physique individuelle de glisse sur les vagues, au bord de l''oc??an.', '1'),
('Nautisme ?? la voile', 'Le nautisme ?? la voile est l''art de naviguer avec l''aide du vent comme force propulsive. Il s''agit d''une activit?? de loisir ou de comp??tition, voire un art de vivre, qui se pratique avec diff??rents types d''engins, du simple flotteur comme dans le cas de la planche ?? voile, au v??ritable bateau, sur lac ou sur mer.', '1'),
('Windsurf', 'La planche ?? voile (parfois d??sign??e par son nom anglais, windsurf) est un type d''embarcation ?? voile minimaliste, c''est aussi le sport de glisse pratiqu?? avec cette embarcation.', '1' ),
('Wake-board', 'Le wakeboard (de l''anglais wake, sillage, et board, planche) est un sport nautique qui appara??t au d??but des ann??es 1980 apr??s l''av??nement du skiboard (qui est d??sormais le snowboard) ?? partir d''une combinaison de techniques de ski nautique, de snowboard et de surf.', '1'),
('Parapente', 'Le parapente est un a??ronef d??riv?? du parachute, permettant la pratique du vol libre ou du paramoteur.', '2' ),
('Base-jump', 'Le base-jump ou saut extr??me est un sport extr??me consistant ?? sauter en parachute ?? partir d''immeubles, d''antennes, de ponts ou de falaises (et non depuis des a??ronefs).', '2' ),
('ULM', 'Un planeur ultra-l??ger motoris??, couramment appel?? ULM, est un a??ronef ultra-l??ger muni d''un moteur et dont les conditions de navigabilit?? sp??cifiques sont simplifi??es par rapport la certification d''un avion l??ger et soumis ?? une licence de pilotage plus simple que la licence de pilote priv??.', '2'),
('Enduro', 'L''enduro est une discipline de comp??tition de moto tout-terrain. Comme pour le rallye automobile, l''??preuve se compose d''un parcours ?? r??aliser dans un temps imparti, g??n??ralement sur des chemins ouverts ?? la circulation et appel??s ?? liaisons ??, et de secteurs chronom??tr??s appel??s ?? sp??ciales ??.', '3'),
('Escalade', 'L???escalade, ou grimpe, parfois appel??e varappe (d??suet), est une pratique et un sport consistant ?? progresser le long d''une paroi pour atteindre le haut d''un relief ou d''une structure artificielle par un cheminement appel?? voie, avec ou sans l''aide de mat??riel.', '3' ),
('Rando', 'La randonn??e p??destre est une activit?? de plein air qui s''effectue ?? pied en suivant un itin??raire, balis?? ou non, seul ou en groupe. C''est ?? la fois un sport et un loisir de d??couverte et de contemplation.', '3' ),
('Trail', 'Le trail, la course nature ou plus rarement la course en sentier, est un sport de course ?? pied, sur longue distance, en milieu naturel, g??n??ralement sur des chemins de terre et des sentiers de randonn??e en plaine, en for??t ou en montagne.', '3'),
('VTT', 'Le v??lo tout-terrain, souvent abr??g?? en VTT, plus rarement appel?? v??lo de montagne par traduction de l''anglais mountain bike, est un v??lo destin?? ?? une utilisation sur terrain accident??, hors des routes goudronn??es. Il sert pour diverses activit??s de loisirs individuelles et collectives ainsi que pour des pratiques sportives r??glement??es par l''Union cycliste internationale.', '3' ),
('Ski', 'Le ski est un moyen de locomotion individuel de glisse pratiqu?? ?? l''aide de patins longs et ??troits appel??s skis, fix??s aux pieds, et un ensemble de disciplines sportives essentiellement hivernales.', '4' ),
('Ski de fond', 'Le ski de fond est un sport d''hiver de la famille du ski nordique, populaire notamment en Europe, au Canada, en Russie et plus largement l''ensemble de l''Europe de l''Est ou l''Alaska, qui se pratique sur des domaines enneig??s et dam??s.', '4'),
('Snowboard', 'Le snowboard, surf des neiges, planche ?? neige au Canada ou plus rarement planche de neige, est un sport de glisse sur neige.', '4' );

INSERT INTO "trip"("title", "description", "date", "time", "from", "to", "places", "minimum", "price", "duration", "sport_id", "user_id") VALUES
('Mountain Trail', 'BestTrailEver', '2021/01/30', '09:00', 'Lyon', 'Grenoble', '4', '2', '15','0.5','19', '1'),
('Surf Lacanau', 'BestSpotEver', '2021/01/29', '05:00', 'Lyon', 'Lacanau', '8', '2', '20','1', '9', '2'),
('Chill With My Paddle', 'Need test my new paddle', '2021/01/31', '09:00', 'Lyon', 'Grenoble','4', '2', '15','0.5','5', '3'),
('Wind + board = fun', 'NiceTitleMyFriend', '2021/01/28', '09:00', 'Lyon', 'Grenoble','4', '2', '15','0.5','11', '4'),
('HydroBoost', 'Be a good Fish', '2021/01/27', '09:00', 'Lyon', 'Grenoble','4', '2', '15','0.5','3', '5'),
('HappySnowing', 'RIDING MY BEST SPOT', '2021/01/25', '09:00', 'Lyon', 'Grenoble','6', '2', '15','0.5','23', '6');

INSERT INTO "message"("title", "date", "content", "user_id", "trip_id") VALUES 
('Super journ??e de trail qui s???annonce !', '2021/02/01', 'Hello, je participe ?? la sortie, ca va ??tre cool cette journ??e de Trail', '2', '1'),
('Super journ??e de snow qui s???annonce !', '2021/02/02', 'Hello, je participe ?? la sortie, ca va ??tre cool cette journ??e de Snow', '2', '6'),
('Super journ??e de surf qui s???annonce !', '2021/02/03', 'Hello, je participe ?? la sortie, ca va ??tre cool cette journ??e de surf ! Sinon...c???est pas un peu cher 15 balles pour s???allonger sur une planche en bois dans une eau ?? 5 degr??s ?', '1', '2'),
('Re:Super journ??e surf qui s???annon??ait...', '2021/02/04', 'Ca sera toujours mieux que de passer la journ??e dans ton 9m2 sans double vitrage', '2', '2'),
('Bonne ambiance !', '2021/01/05', 'ca fait 30 min que j???attends sur le parking et toujours pas de Jane...', '1', '2'),
('Super journ??e de hydro-boost qui s???annonce !', '2021/02/06', 'Hello, je participe ?? la sortie, ca va ??tre cool cette journ??e de hydro-boost', '3', '5');

INSERT INTO "m2m_user_participate_trip"("user_id", "trip_id") VALUES
('1', '1'),
('2', '2'),
('3', '3'),
('4', '4'),
('5', '5'),
('6', '6'),
('2', '1'),
('2', '6'),
('1', '2'),
('3', '5'),
('4', '5'),
('4', '3'),
('4', '6'),
('1', '5');

COMMIT;
