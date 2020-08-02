# allesOverFilm-backend

This is a backend for allesOverFilm-Client.
It contains postgress DB, query scrips, some seed data and others. 

A few pointers

- index.js is the server script
- 2 router files price.js and review.js 
- Data Base has 10 sample data/reviews extracted from the website and itś displayed on the homeScreen
- DATABASE_URL is in the .env file
    # endpoints
- Fetch prices - `http://localhost:4000/films/price/${eau}`
- Fetch a list of reviews - `http://localhost:4000/films`
- Fetch review detail - `http://localhost:4000/films/${id}`

# DataStructure

[Data Structure](config/DataStracture.png)
