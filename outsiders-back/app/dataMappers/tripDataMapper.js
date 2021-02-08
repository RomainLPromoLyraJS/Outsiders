const client = require('./client');

module.exports = {
    async getAllTrips() {
        const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c.title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date >= current_date GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date');
        if (result.rowCount == 0) {
            return null
        }
        return result.rows;
    },

    async tripRegistered(userId) {
        const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c.title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM m2m_user_participate_trip m JOIN trip t ON m.trip_id=t.id JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE m.user_id=$1 AND t.date >= current_date GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [userId]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows;
    },

    async postNewTrip(tripToCreate) {
        console.log(tripToCreate);
        const result = await client.query('INSERT INTO "trip"("title", "description", "date", "time", "from", "to", "places", "minimum", "price", "duration", "sport_id", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *', [tripToCreate.title, tripToCreate.description, tripToCreate.date, tripToCreate.time, tripToCreate.from, tripToCreate.to, tripToCreate.places, tripToCreate.minimum, tripToCreate.price, tripToCreate.duration, tripToCreate.sport_id, tripToCreate.user_id]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];

    },

    async postNewTrip2(tripId, userId) {
        const result = await client.query('INSERT INTO "m2m_user_participate_trip"("trip_id", "user_id") VALUES ($1, $2) RETURNING *', [tripId, userId]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];
    },

    async searchTrips(trips) {
        if (! trips.from && ! trips.date && ! trips.sport) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c.title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date >= current_date GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date');
            if (result.rowCount == 0) {
                return null
            }
            return result.rows;
        } else if (! trips.from && ! trips.date) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c.title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE s.title=$1 AND t.date >= current_date GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [trips.sport])
            if (result.rowCount == 0) {
                return null
            }
            return result.rows;
        } else if (! trips.date && ! trips.sport) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.from=$1 AND t.date >= current_date GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [trips.from])
            if (result.rowCount == 0) {
                return null
            }
            return result.rows;
        } else if (! trips.from && ! trips.sport) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND t.date >= CURRENT_DATE GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [trips.date]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows;
        } else if (! trips.date) {
            const result = await client.query('SELECT t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.from=$1 AND s.title=$2 AND t.date >= CURRENT_DATE GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [trips.from, trips.sport]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows; 
        } else if (! trips.from) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND s.title=$2 AND t.date >= current_date GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [trips.date, trips.sport]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows; 
        } else if (! trips.sport) {
            const result = await client.query('SELECT  t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND t.from=$2 AND t.date >= CURRENT_DATE GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [trips.date, trips.from]);
            if (result.rowCount == 0) {
                return null
            }
            return result.rows; 
        } else {
        const result = await client.query('SELECT t.id AS id_trip, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, JSON_AGG(JSON_build_object(\'id_sport\', s.id, \'title\', s.title, \'description\', s.description)) AS sport, JSON_AGG(JSON_build_object(\'id_category\', c.id, \'title\', c. title, \'description\', c.description)) AS category, JSON_AGG(JSON_build_object(\'id_creator\', u.id, \'lastname\', u.lastname, \'firstname\', u.firstname, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "user" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN category AS c ON c.id=s.category_id JOIN "user" AS u ON u.id=t.user_id WHERE t.date=$1 AND t.from=$2 AND s.title=$3 AND t.date >= current_date GROUP BY t.id, t.title, t.description, t.date, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration ORDER BY t.date', [trips.date, trips.from, trips.sport]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows;
        }
    },

    async getOneTrip1(tripId) {
        const result = await client.query('SELECT t.id as trip_id, t.title as trip_title, t.description as trip_description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id AS sport_id, s.title AS sport_title, s.description AS sport_description, JSON_AGG(JSON_build_object(\'id\', u.id, \'username\', u.username, \'email\', u.email, \'description\', u.description)) AS "creator" FROM trip AS t JOIN sport AS s ON t.sport_id=s.id JOIN "user" AS u ON t.user_id=u.id WHERE t.id=$1 GROUP BY t.id, t.title, t.description, t.date, t.time, t.from, t.to, t.places, t.minimum, t.price, t.duration, s.id, s.title, s.description', [tripId]);
        
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getOneTrip3(tripId) {
        const result = await client.query('SELECT JSON_AGG(JSON_build_object(\'id\', m.id, \'title\', m.title, \'content\', m.content, \'date\', m.date, \'user_id\', m.user_id, \'username\', "user".username) ORDER BY m.id) AS "message" FROM trip AS t JOIN "message" AS m on t.id=m.trip_id JOIN "user" ON m.user_id="user".id WHERE t.id=$1', [tripId]);
        
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getOneTrip2(tripId) {
        const result = await client.query('SELECT json_agg(json_build_object(\'username\', "user".username)) AS participants FROM "user" JOIN m2m_user_participate_trip AS p ON "user".id=p.user_id JOIN trip ON trip.id=p.trip_id WHERE trip.id=$1', [tripId]);
        
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getCreatorTrip(tripId) {

        const result = await client.query('SELECT user_id FROM trip WHERE id=$1', [tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateOneTrip(tripId, tripToUpdate) {

        const result = await client.query('UPDATE "trip" SET "title"=$1, "description"=$2, "date"=$3, "time"=$4, "from"=$5, "to"=$6, "places"=$7, "minimum"=$8, "price"=$9, "duration"=$10, "sport_id"=$11 WHERE "id"=$12 RETURNING *', [tripToUpdate.title, tripToUpdate.description, tripToUpdate.date, tripToUpdate.time, tripToUpdate.from, tripToUpdate.to, tripToUpdate.places, tripToUpdate.minimum, tripToUpdate.price, tripToUpdate.duration, tripToUpdate.sport_id, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async checkAssociation(userId, tripId) {
        const result = await client.query('SELECT * FROM "m2m_user_participate_trip" WHERE user_id=$1 AND trip_id=$2', [userId, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async associateUserParticipateTrip(userId, tripId) {
        const result = await client.query('INSERT INTO "m2m_user_participate_trip"("user_id", "trip_id") VALUES($1, $2) RETURNING *', [userId, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async deleteOneTrip(tripId) {
        const result = await client.query('DELETE FROM "trip" WHERE id=$1 RETURNING *', [tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async dissociateUserParticipateTrip(userId, tripId) {
        const result = await client.query('DELETE FROM "m2m_user_participate_trip" WHERE "user_id"=$1 AND "trip_id"=$2 RETURNING *', [userId, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async allComments(tripId) {
        const result = await client.query('SELECT m.id, m.title, m.date, m.content, m.trip_id, u.username FROM "message" m JOIN "user" u ON u.id=m.user_id WHERE "trip_id"=$1 ORDER BY m.id', [tripId]);
        return result.rows;
    },

    async postNewCommentOnThisTrip(commentToCreate, userId) {
        const result = await client.query('INSERT INTO "message"("title", "content", "user_id", "trip_id") VALUES ($1, $2, $3, $4) RETURNING *', [commentToCreate.title, commentToCreate.content, userId, commentToCreate.trip_id]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];
    }
    

};