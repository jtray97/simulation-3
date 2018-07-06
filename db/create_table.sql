CREATE TABLE users (
    id serial primary key,
    username varchar(100),
    password varchar(100),
    avatar text
);

INSERT INTO users
(username, password, avatar)
VALUES ('test2', 'password', 'no Avatar')