const client = require('./client');

module.exports = {
    async getAllTrips() {
        const result = await client.query('SELECT * FROM "trip"');
        return result.rows;
    },

    async postNewTrip(tripToCreate) {
        const result = await client.query('INSERT INTO "trip"("title", "description", "date", "time", "from", "to", "places", "minimum", "price", "duration", "sport_id", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *', [tripToCreate.title, tripToCreate.description, tripToCreate.date, tripToCreate.time, tripToCreate.from, tripToCreate.to, tripToCreate.places, tripToCreate.minimum, tripToCreate.price, tripToCreate.duration, tripToCreate.sport_id, tripToCreate.user_id]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];

    },

    async searchTrips(trips) {
        if (! trips.from && ! trips.date) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c.title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE s.title=$1 GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration', [trips.sport])
            if (result.rowCount == 0) {
                return null
            }
            return result.rows;
        } else if (! trips.date && ! trips.sport) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.from=$1 GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration', [trips.from])
            if (result.rowCount == 0) {
                return null
            }
            return result.rows;
        } else if (! trips.from && ! trips.sport) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration', [trips.date]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows;
        } else if (! trips.date) {
            const result = await client.query('SELECT t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.from=$1 AND s.title=$2 GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration', [trips.from, trips.sport]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows; 
        } else if (! trips.from) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND s.title=$2 GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration', [trips.date, trips.sport]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows; 
        } else if (! trips.sport) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND t.from=$2 GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration', [trips.date, trips.from]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows; 
        } else {
        const result = await client.query('SELECT t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND t.from=$2 AND s.title=$3 GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration', [trips.date, trips.from, trips.sport]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows;
        }
    },

    async getOneTrip(tripId) {
        const result = await client.query('SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, JSON_AGG(JSON_build_object(\'id\', m.id, \'title\', m.title, \'content\', m.content, \'date\', m.date, \'user_id\', m.user_id, \'write_by\', "user".username) ORDER BY m.id) AS "message", p.user_id FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN "message" AS m on t.id=m.trip_id JOIN "user" ON m.user_id="user"."id" JOIN "m2m_user_participate_trip" AS p ON t.id=p.trip_id WHERE t.id=$1 GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, p.user_id', [tripId]);
        
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getOneTrip1(tripId) {
        const result = await client.query('SELECT t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description, JSON_AGG(JSON_build_object(\'id\', m.id, \'title\', m.title, \'content\', m.content, \'date\', m.date, \'user_id\', m.user_id, \'username\', "user".username) ORDER BY m.id) AS "message" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN "message" AS m on t.id=m.trip_id JOIN "user" ON m.user_id="user"."id" WHERE t.id=$1 GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description', [tripId]);
        
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getOneTrip2(tripId) {
        const result = await client.query('SELECT  json_agg(json_build_object(\'username\', "user".username)) AS particpants FROM "user" JOIN m2m_user_participate_trip AS p ON "user".id=p.user_id JOIN trip ON trip.id=p.trip_id WHERE trip.id=$1', [tripId]);
        
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async updateOneTrip(tripId, tripToUpdate) {

        const result = await client.query('UPDATE "trip" SET "title"=$1, "description"=$2, "date"=$3, "time"=$4, "from"=$5, "to"=$6, "places"=$7, "minimum"=$8, "price"=$9, "duration"=$10, "sport_id"=$11 WHERE "id"=$12 RETURNING *', [tripToUpdate.title, tripToUpdate.description, tripToUpdate.date, tripToUpdate.time, tripToUpdate.from, tripToUpdate.to, tripToUpdate.places, tripToUpdate.minimum, tripToUpdate.price, tripToUpdate.duration, tripToUpdate.sport_id, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async associateUserParticipateTrip(userId, tripId) {
        const result = await client.query('INSERT INTO "m2m_user_particpate_trip"("user_id", "trip_id") VALUES($1, $2) RETURNING *', [userId, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async deleteOneTrip(idTripToDelete) {
        const result = await client.query('DELETE FROM "trip" WHERE id=$1 RETURNING *', [idTripToDelete]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async dissociateUserParticipateTrip(userId, tripId) {
        const result = await client.query('DELETE FROM "m2m_user_participate_trip" WHERE "user_id"=$1 AND "trip_id"=$2', [userId, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async allComments(tripId) {
        const result = await client.query('SELECT * FROM "message" WHERE "trip_id"=$1', [tripId]);
        return result.rows;
    },

    async postNewCommentOnThisTrip(commentToCreate) {
        const result = await client.query('INSERT INTO "message"("title", "content", "user_id", "trip_id") VALUES ($1, $2, $3, $4) RETURNING *', [commentToCreate.title, commentToCreate.content, commentToCreate.user_id, commentToCreate.trip_id]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];
    }
    

};