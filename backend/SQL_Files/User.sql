CREATE TABLE IF NOT EXISTS users (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    user_address VARCHAR(255) NOT NULL,
    major VARCHAR(255) NOT NULL,
    school VARCHAR(255),
    LinkedIn_URL VARCHAR(255),
);

INSERT INTO
    User (
        username,
        first_name,
        last_name,
        email,
        phone_number,
        user_address,
        major,
        school,
        LinkedIn_URL
    )
VALUES
    (
        'TEST',
        'TEST',
        'TEST',
        'TEST',
        'TEST',
        'TEST',
        'TEST',
        'TEST',
        'TEST'
    );