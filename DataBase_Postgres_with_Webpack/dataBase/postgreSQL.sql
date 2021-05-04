CREATE table persons(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    age INTEGER,
    id_Street INTEGER,
    FOREIGN KEY (id_Street) REFERENCES street (id)
);

CREATE table street(
    id SERIAL PRIMARY KEY,
    namestreet VARCHAR(100)
);


INSERT INTO street (namestreet) VALUES ('пр.Правды');
INSERT INTO street (namestreet) VALUES ('пр.Победы');
INSERT INTO street (namestreet) VALUES ('пр.Свободы');

INSERT INTO persons (firstname, lastname, age, id_Street) VALUES ('Иван', 'Иванов', 26, null);
INSERT INTO persons (firstname, lastname, age, id_Street) VALUES ('Петр', 'Петров', 32, null);
INSERT INTO persons (firstname, lastname, age, id_Street) VALUES ('Сан', 'Саныч', 41, null);

INSERT INTO persons (firstname, lastname, age, id_Street) VALUES ('Бан', 'Сабыч', 41, 1);
INSERT INTO persons (firstname, lastname, age, id_Street) VALUES ('Жаб', 'Жабыч', 39, 2);


INSERT INTO persons (firstname, lastname, age, id_Street) VALUES ('Джим', 'Джимыч', 17, 1);
INSERT INTO persons (firstname, lastname, age, id_Street) VALUES ('Сэм', 'Сэмыч', 15, 1);


SELECT COUNT(*) FROM Persons; /* 1. Вывести общее число жителей */
SELECT AVG(Age) FROM Persons; /* 2. Вывести средний возраст жителей */
SELECT lastname FROM Persons ORDER BY lastname; /* 3. Вывести отсортированный по алфавиту список фамилий без повторений */
SELECT lastname, COUNT(*) FROM Persons GROUP BY lastname; /* 4. Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке*/ 
SELECT lastname FROM Persons WHERE lastname LIKE '_%б%_' GROUP BY lastname; /* 5. Вывести фамилии, которые содержат в середине букву «б» */
SELECT * FROM Persons WHERE id_Street IS null; /* 6. Вывести список бомжей */
SELECT * FROM Persons INNER JOIN Street ON Persons.id_Street = Street.Id And Age < 18 AND namestreet like 'пр.Правды'; /* 7. Вывести список несовершеннолетних, проживающих на проспекте Правды */
SELECT Street.Id, Street.namestreet, COUNT(Persons.Id) FROM Street JOIN Persons ON  Street.Id = Persons.Id_Street GROUP BY Street.Id, Street.namestreet; /* 8. Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице */
SELECT * FROM Street WHERE length(namestreet) > 6; /* 9. Вывести список улиц, название которых состоит из 6-ти букв */
SELECT Street.Id, Street.namestreet FROM Street JOIN Persons ON  Street.Id = Persons.Id_Street GROUP BY Street.Id, Street.namestreet HAVING COUNT(*) < 3; /* 10. Вывести список улиц с количеством жильцов на них меньше 3 */