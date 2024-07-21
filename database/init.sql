-- Create the institution_type table
CREATE TABLE institution_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the institution table
CREATE TABLE institution (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    institution_type_id INT NOT NULL,
    FOREIGN KEY (institution_type_id) REFERENCES institution_type(id)
);

-- Create the events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    startdate DATE NOT NULL,
    enddate DATE NOT NULL,
    active BOOLEAN NOT NULL,
    institution_id INT NOT NULL,
    FOREIGN KEY (institution_id) REFERENCES institution(id)
);

-- Insert institution types
INSERT INTO institution_type (name) VALUES ('Confederacao');
INSERT INTO institution_type (name) VALUES ('Singular');
INSERT INTO institution_type (name) VALUES ('Central');
INSERT INTO institution_type (name) VALUES ('Cooperativa');

-- Inser institutions
INSERT INTO institution (name, institution_type_id) VALUES ('Instituição 1', 1);
INSERT INTO institution (name, institution_type_id) VALUES ('Instituição 2', 2);
INSERT INTO institution (name, institution_type_id) VALUES ('Instituição 3', 3);
INSERT INTO institution (name, institution_type_id) VALUES ('Instituição 4', 4);

-- Insert events
INSERT INTO events (name, startdate, enddate, active, institution_id) VALUES ('Evento 1', '2024-07-20', '2024-07-21', true, 1);