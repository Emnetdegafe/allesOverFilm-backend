"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "films",
      [
        {
          title: "1917",
          image:
            "https://allesoverfilm.nl/media/temp/files/2020-06-08-09-28/140/1917.jpg",
          director: "Sam Mendes",
          actors: [
            "Andrew Scott",
            "Benedict Cumberbatch",
            "Claire Duburcq",
            "Colin Firth",
            "Mark Strong",
          ],
          year: 2019,
          genre: ["Drama", "War"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 5,
          eau: 8713045250492,
        },
        {
          title: "FAST & FURIOUS 6",
          image:
            "https://allesoverfilm.nl/media/temp/files/2020-03-03-08-52/140/Fast%206.jpg",
          director: "Justin Lin",
          actors: [
            "Dwayne Johnson",
            "Gal Gadot",
            "Ludacris",
            "Michelle Rodriguez",
            "Paul Walker",
            "Sung Kang",
            "Tyrese Gibson",
            "Vin Diesel",
          ],
          year: 2013,
          genre: ["Action", "Thriller", "Adventure"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 4,
          eau: 5053083106911,
        },
        {
          title: "HUNTERS",
          image:
            "https://allesoverfilm.nl/media/temp/files/2020-03-18-23-45/136/hunters_amazon_poster.jpg",
          director: "NA",
          actors: [
            "Al Pacino",
            "Carol Kane",
            "Dylan Baker",
            "Greg Austin",
            "Jeannie Berlin",
          ],
          year: 2019,
          genre: ["Crime", "Drama", "Mystery"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 1,
          eau: 222
        },
        {
          title: "Joker",
          image:
            "https://allesoverfilm.nl/media/temp/files/2020-02-05-09-57/140/Joker%20UHD.jpg",
          director: "Todd Phillips",
          actors: [
            "Bill Camp",
            "Brett Cullen",
            "Frances Conroy",
            "Joaquin Phoenix",
            "Robert De Niro",
            "Zazie Beetz",
          ],
          year: 2020,
          genre: ["Drama", "Thriller"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 4,
          eau: 5051888249970
        },
        {
          title: "GAME OF THRONES - SEIZOEN 8",
          image:
            "https://allesoverfilm.nl/media/temp/files/2020-04-27-00-03/136/Freud_netflix_poster.jpg",
          director: "Different directors",
          actors: [
            "Carice van Houten",
            "Emilia Clarke",
            "Gwendoline Christie",
            "Isaac Hempstead Wright",
            "Jacob Anderson",
            "John Bradley",
            "Kit Harington",
            "Peter Dinklage"

          ],
          year: 2019,
          genre: ["Action", "Adventure", "Drama"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 5,
          eau: 5051888246634,
        },
        {
          title: "MATRIX REVOLUTIONS",
          image:
            "https://allesoverfilm.nl/media/temp/files/2020-02-25-13-15/140/Matrix%20Revolutions.jpg",
          director: "The Wachowski's",
          actors: [
            "Laurence Fishburne",
            "Jada Pinkett Smith",
            "Keanu Reeves",
            "Carrie-Anne Moss",
            "Gloria Foster",
          ],
          year: 2003,
          genre: ["Action", "Sci-Fi"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 2,
          eau: 7321931332095,
        },
        {
          title: "ROCKET MAN",
          image:
            "https://allesoverfilm.nl/media/temp/files/2019-05-30-21-54/144/Rocketman.jpg",
          director: "Dexter Fletcher",
          actors: [
            "Taron Egerton",
            "Jamie Bell",
            "Richard Madden",
            "Bryce Dallas Howard",
          ],
          year: 2019,
          genre: ["Biography", "Musical", "Drama"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 4,
          eau: 5053083195069,
        },
        {
          title: "AVENGERS: INFINITY WAR",
          image:
            "https://lumiere-a.akamaihd.net/v1/images/p_marvel_avengers_infinity_war_5ecb49d0.png",
          director: "Anthony Russo & Joe Russo",
          actors: [
            "Benedict Cumberbatch",
            "Chadwick Boseman",
            "Chris Evans",
            "Chris Hemsworth",
            "Zoë Saldana",
            "Scarlett Johansson",
            "Elizabeth Olsen",
          ],
          year: 2018,
          genre: ["Action", "Adventure", "Sci-Fi", "Super hero"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 3,
          eau: 222
        },
        {
          title: "HIDDEN FIGURES",
          image:
            "https://allesoverfilm.nl/media/temp/files/2017-06-27-23-11/136/hidden_figures_blu-ray_cover.jpg",
          director: "Theodore Melfi",
          actors: [
            "Taraji P. Henson",
            "Octavia Spencer",
            "Janelle Monáe",
            "Kevin Costner",
            "Mahershala Ali",
          ],
          year: 2013,
          genre: ["Biography", "History", "Drama"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 5,
          eau: 8712626049210 
        },
        {
          title: "TWO POPES",
          image:
            "https://m.media-amazon.com/images/M/MV5BY2RiOTc1YmYtMDk0Yy00ZWI4LTgzN2YtYTg2ZDZmOGIwNTA1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          director: "Fernando Meirelles",
          actors: [
            "Anthony Hopkins",
            "Jonathan Pryce",
            "Juan Minujín",
            "Luis Gnecco",
            "Cristina Banegas",
          ],
          year: 2017,
          genre: ["Biography", "Drama"],
          createdAt: new Date(),
          updatedAt: new Date(),
          mediumId: 1,
          eau: 222
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("films", null, {});
  },
};
