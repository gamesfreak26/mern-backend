# MERN Backend

This is the backend repo.  

Find the frontend repo here: https://github.com/rachelwong/mern-front

# Seeding local database

This project uses a local instance of MongoDB. I have included dummy data in `data/seed_example_list.json`

I used the following command:

`mongoimport --db medical_products --collection products --file data/seed_example_products.json`

which creates a database called medical_products and a collection called products and populates it with things inside `seed_example_list.json`