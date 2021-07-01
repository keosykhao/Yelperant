    CREATE TABLE  reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id  BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check (rating >=1 and rating <=5)
    );

    insert into reviews (restaurant_id, name, review, rating) values (19, 'amia', 'the best food', 5);