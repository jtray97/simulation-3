INSERT INTO users (username, password, avatar)
VALUES ($1, $2, $3);
select * from users
where username = $1;