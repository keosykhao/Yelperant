    CREATE TABLE  reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id  BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check (rating >=1 and rating <=5)
    );

    insert into reviews (restaurant_id, name, review, rating) values (1, 'delena', 'food was meh', 2);

    -- this gets the average rating of a restaurant to 2 decimal places
    select trunc(AVG(rating),2) as avg_rating from reviews where restaurant_id = 18;

    -- this will group together the list of restaurants and the reviews and give average rating
    select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC (AVG(rating),1) 
    as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;