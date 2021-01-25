SELECT * FROM "trip" JOIN "sport" ON "trip"."sport_id"="sport"."id"  WHERE "trip"."date"=$1 AND "trip"."from"=$2 AND "sport"."title"=$3

SELECT t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, 
        UNNEST(ARRAY_AGG(s.title || ', '|| s.description) sport), 
        UNNEST(ARRAY_AGG(c. title || ', '|| c.description) category), 
        UNNEST(ARRAY_AGG(u.lastname ||', '|| u.firstname ||', '|| u.username ||', '||  u.email ||', '|| u.description) "user") 
FROM trip AS t 
JOIN sport AS s 
    ON t.sport_id=s.id 
JOIN category AS c 
    ON c.id=s.category_id 
JOIN "user" AS u 
    ON u.id=t.user_id 
WHERE t.date=$1 
    AND t.from=$2 
    AND s.title=$3 
GROUP BY t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration;

SELECT c.title AS category, ARRAY_AGG(s.title) sport FROM category AS c, sport AS s WHERE s.category_id=c.id GROUP BY c.title


select to_jsonb(c)||json_build_object('sport', json_agg(to_jsonb(s) - 'category_id')) from category c join sport s on s.category_id = c.id group by c.id;

SELECT c.title AS category, ARRAY_AGG(s.title) sport FROM category AS c, sport AS s WHERE s.category_id=c.id GROUP BY c.title

select jsonb_build_object(\'category\', jsonb_agg(to_jsonb(c)||sport)) from category c join (select category_id, jsonb_build_object(\'sport\', jsonb_agg(to_jsonb(s) - \'category_id\')) as sport from sport s group by s.category_id) s on s.category_id = c.id'

SELECT t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, ARRAY_AGG(s.title ||\'\, \'|| s.description) sport, ARRAY_AGG(c. title || \'\, \'|| c.description) category, ARRAY_AGG(u.lastname ||\'\, \'|| u.firstname ||\'\, \'|| u.username ||\'\, \'||  u.email ||\'\, \'|| u.description) "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND t.from=$2 AND s.title=$3 GROUP BY t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration

SELECT t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object('titl', s.title, 'descrip', s.description)) AS sport, JSON_AGG(JSON_build_object('tit', c. title, 'descri', c.description)) AS category, JSON_AGG(JSON_build_object('lastn', u.lastname, 'firstn', u.firstname, 'usern', u.username, 'userm', u.email, 'udescr', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date='2021-01-20' AND t.from='Lyon' AND s.title='Snowboard' GROUP BY t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration'


--requete $1+$2+$3
SELECT  t.id AS id_trip, 
        t.title, 
        t.description, 
        t.date, 
        t.time, 
        t.from, 
        t.to, 
        t.places, 
        t.minimum, 
        t.price, 
        t.duration, 
        JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, 
        JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, 
        JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" 
    FROM trip AS t 
    JOIN sport AS s ON t.sport_id=s.id 
    JOIN category AS c ON c.id=s.category_id 
    JOIN "user" AS u ON u.id=t.user_id 
    WHERE t.date=$1 AND t.from=$2 AND s.title=$3 
    GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration

--requete $1+$2
SELECT  t.id AS id_trip, 
        t.title, 
        t.description, 
        t.date, 
        t.time, 
        t.from, 
        t.to, 
        t.places, 
        t.minimum, 
        t.price, 
        t.duration, 
        JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, 
        JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, 
        JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" 
    FROM trip AS t 
    JOIN sport AS s ON t.sport_id=s.id 
    JOIN category AS c ON c.id=s.category_id 
    JOIN "user" AS u ON u.id=t.user_id 
    WHERE t.date=$1 AND t.from=$2
    GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration

--requete $1+$3
SELECT  t.id AS id_trip, 
        t.title, 
        t.description, 
        t.date, 
        t.time, 
        t.from, 
        t.to, 
        t.places, 
        t.minimum, 
        t.price, 
        t.duration, 
        JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, 
        JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, 
        JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" 
    FROM trip AS t 
    JOIN sport AS s ON t.sport_id=s.id 
    JOIN category AS c ON c.id=s.category_id 
    JOIN "user" AS u ON u.id=t.user_id 
    WHERE t.date=$1 AND s.title=$3 
    GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration

--requete $2+$3
SELECT  t.id AS id_trip, 
        t.title, 
        t.description, 
        t.date, 
        t.time, 
        t.from, 
        t.to, 
        t.places, 
        t.minimum, 
        t.price, 
        t.duration, 
        JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, 
        JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, 
        JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" 
    FROM trip AS t 
    JOIN sport AS s ON t.sport_id=s.id 
    JOIN category AS c ON c.id=s.category_id 
    JOIN "user" AS u ON u.id=t.user_id 
    WHERE t.from=$2 AND s.title=$3 
    GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration

--requete $1
SELECT  t.id AS id_trip, 
        t.title, 
        t.description, 
        t.date, 
        t.time, 
        t.from, 
        t.to, 
        t.places, 
        t.minimum, 
        t.price, 
        t.duration, 
        JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, 
        JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, 
        JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" 
    FROM trip AS t 
    JOIN sport AS s ON t.sport_id=s.id 
    JOIN category AS c ON c.id=s.category_id 
    JOIN "user" AS u ON u.id=t.user_id 
    WHERE t.date=$1
    GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration

--requete $2
SELECT  t.id AS id_trip, 
        t.title, 
        t.description, 
        t.date, 
        t.time, 
        t.from, 
        t.to, 
        t.places, 
        t.minimum, 
        t.price, 
        t.duration, 
        JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, 
        JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, 
        JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" 
    FROM trip AS t 
    JOIN sport AS s ON t.sport_id=s.id 
    JOIN category AS c ON c.id=s.category_id 
    JOIN "user" AS u ON u.id=t.user_id 
    WHERE t.from=$2 
    GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration

--requete $3
SELECT  t.id AS id_trip, 
        t.title, 
        t.description, 
        t.date, 
        t.time, 
        t.from, 
        t.to, 
        t.places, 
        t.minimum, 
        t.price, 
        t.duration, 
        JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, 
        JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c.title, \'description\', c.description)) AS category, 
        JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" 
    FROM trip AS t 
    JOIN sport AS s ON t.sport_id=s.id 
    JOIN category AS c ON c.id=s.category_id 
    JOIN "user" AS u ON u.id=t.user_id 
    WHERE s.title=$3 
    GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration


SELECT * FROM "trip" WHERE "trip".id = $1
--requete trip avec message et participant
SELECT * FROM "trip", "message", "sport" JOIN "message" ON "trip"."id"="message"."trip_id" JOIN "sport" ON "trip"."sport_id"="sport"."id" WHERE "trip"."id" = $1

SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, 
JSON_AGG(JSON_build_object('id', m.id, 'title', m.title, 'content', m.content, 'date', m.date, 'user_id', m.user_id)) AS "message" 
FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN "message" AS m on t.id=m.trip_id JOIN "user" ON m.user_id="user"."id" WHERE t.id='2' 
GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description;

--requete trip ok sans les participants
SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, JSON_AGG(JSON_build_object(\'id\', m.id, \'title\', m.title, \'content\', m.content, \'date\', m.date, \'user_id\', m.user_id, \'write_by\', "user".username)) AS "message" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN "message" AS m on t.id=m.trip_id JOIN "user" ON m.user_id="user"."id" WHERE t.id=$1 GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description

 'SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, 
 JSON_AGG(JSON_build_object(\'id\', m.id, \'title\', m.title, \'content\', m.content, \'date\', m.date, \'user_id\', m.user_id, \'write_by\', "user".username)) AS "message",
  JSON_AGG(JSON_build_object(\'username\', p.user_id) AS participant  
  FROM trip AS t 
  JOIN sport AS s ON t.sport_id=s.id 
  JOIN "message" AS m on t.id=m.trip_id 
  JOIN "user" ON m.user_id="user"."id" 
  JOIN "m2m_user_participate_trip" AS p ON t.user_id=p.user_id
  WHERE t.id=$1 GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description'

  SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, 
  JSON_AGG(JSON_build_object('id', m.id, 'title', m.title, 'content', m.content, 'date', m.date, 'user_id', m.user_id, 'write_by', "user".username)) AS "message", 
  JSON_AGG(JSON_build_object('username', p.user_id) AS participant 
  FROM trip AS t 
  JOIN sport AS s ON t.sport_id=s.id 
  JOIN "message" AS m on t.id=m.trip_id 
  JOIN "user" ON m.user_id="user"."id" 
  JOIN "m2m_user_participate_trip" AS p ON t.id=p.trip_id
  WHERE t.id=2 
  GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description

  SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, 
  JSON_AGG(JSON_build_object('id', m.id, 'title', m.title, 'content', m.content, 'date', m.date, 'user_id', m.user_id, 'write_by', "user".username)) AS "message",
  p.user_id
  FROM trip AS t 
  JOIN sport AS s ON t.sport_id=s.id 
  JOIN "message" AS m on t.id=m.trip_id 
  JOIN "user" ON m.user_id="user"."id" 
  JOIN "m2m_user_participate_trip" AS p ON t.id=p.trip_id
  WHERE t.id=2 
  GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description

  SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, JSON_AGG(JSON_build_object(\'id\', m.id, \'title\', m.title, \'content\', m.content, \'date\', m.date, \'user_id\', m.user_id, \'write_by\', "user".username)) AS "message" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN "message" AS m on t.id=m.trip_id JOIN "user" ON m.user_id="user"."id" ON t.id=p.trip_id WHERE t.id=2 GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description
  