const pool = require('./db');

class PersonsController{

    async getPersons(req, res){
        const pers = await pool.query('SELECT * FROM persons');
        res.json(pers.rows);
    }

    async getPersons1(req, res){
        const pers = await pool.query('SELECT COUNT(*) FROM Persons');
        res.json(pers.rows);
    }

    async getPersons2(req, res){
        const pers = await pool.query('SELECT AVG(Age) FROM Persons');
        res.json(pers.rows);
    }

    async getPersons3(req, res){
        const pers = await pool.query('SELECT lastname FROM Persons ORDER BY lastname');
        res.json(pers.rows);
    }

    async getPersons4(req, res){
        const pers = await pool.query('SELECT lastname, COUNT(*) FROM Persons GROUP BY lastname');
        res.json(pers.rows);
    }

    async getPersons5(req, res){
        const pers = await pool.query('SELECT lastname FROM Persons WHERE lastname LIKE \'_%б%_\' GROUP BY lastname');
        res.json(pers.rows);
    }

    async getPersons6(req, res){
        const pers = await pool.query('SELECT * FROM Persons WHERE id_Street IS null');
        res.json(pers.rows);
    }

    async getPersons7(req, res){
        const pers = await pool.query("SELECT * FROM Persons INNER JOIN Street ON Persons.id_Street = Street.Id And Age < 18 AND namestreet like 'пр.Правды'");
        res.json(pers.rows);
    }

    async getPersons8(req, res){
        const pers = await pool.query('SELECT Street.Id, Street.namestreet, COUNT(Persons.Id) FROM Street JOIN Persons ON  Street.Id = Persons.Id_Street GROUP BY Street.Id, Street.namestreet');
        res.json(pers.rows);
    }

    async getPersons9(req, res){
        const pers = await pool.query('SELECT * FROM Street WHERE length(namestreet) > 6');
        res.json(pers.rows);
    }

    async getPersons10(req, res){
        const pers = await pool.query('SELECT Street.Id, Street.namestreet FROM Street JOIN Persons ON  Street.Id = Persons.Id_Street GROUP BY Street.Id, Street.namestreet HAVING COUNT(*) < 3');
        res.json(pers.rows);
    }

}



module.exports = new PersonsController();