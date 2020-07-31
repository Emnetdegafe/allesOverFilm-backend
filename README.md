# allesOverFilm-backend

This is a backend for allesOverFilm-Client.
It contains postgress DB, query scrips, some seed data and others. 

A few pointers

- index.js is the server script
- 2 router files price and review (price.js is the one we fetch everything from, for now, review.js is there for possible future use).
- 10 dummy data in the DB, as I was not able to use the DB of the site so I made my own DB
- DATABASE_URL is in the .env file
    # endpoints
- Fetch prices - `http://localhost:4000/films/price/${eau}`
- Fetch a list of reviews - `http://localhost:4000/films`
- Fetch review detail - `http://localhost:4000/films/${id}`
