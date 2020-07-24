"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          summary: "America is involved in a space race with the Soviet Union. The Russians have just sent the first human into orbit around the Earth. NASA is committed to be the next. To calculate all that properly, a lot of manual calculations are required. Much of that math is done by black women, who are led temporarily by Dorothy Vaughn (Octavia Spencer). Katherine Coleman (Taraji P. Henson) and Mary Jackson (Janelle Monáe) are on that team. Katherine has developed a talent for mathematics from an early age and is invited to join the Spacecraft Controls department. Here is working on the Redstone project, to get the first American into space. This department is quite conservative and black people are viewed with suspicion. Team leader, Al Harrison (Kevin Costner), discovers Katherine's qualities and grows more and more confident. Mary Jackson would like to work on the missiles as a technician, but that requires special training at a university. Her problem is that only white people are admitted to this university. Meanwhile, Dorothy notices that the technology is not standing still and that computers are going to take over their work. If you do not act now, you will soon be without a job. For a black woman, however, it is twice as difficult to convince the white bosses.",
          conclusion: "A large number of African-American women work at NASA, who manually perform a lot of calculations. One of them, Katherine Coleman, will have the opportunity to participate in the major space project: bringing the first American into space. Hidden Figures is a telling of the true story of three of these women. Although the film has a very thick theme of racial segregation and contains some stereotypical characters, it is certainly an entertaining film with good acting. The Blu-ray Disc edition has excellent image and sound quality and the extras provide more background information about this special and long-hidden story.",
          rating: 8.5,
          filmId: 9,
          mediumId: 3,
          createdAt: new Date(),
          updatedAt: new Date(), 
        },{
          summary: "April 1917. De Eerste Wereldoorlog is in volle gang. Ergens op het platteland van Frankrijk worden de Britse korporaals Blake (Dean-Charles Chapman) en Schofield (George MacKay) door generaal Erinmore (Colin Firth) op gevaarlijke missie gestuurd. Ze moeten een brief bezorgen aan kolonel MacKenzie. De geplande aanval van de volgende ochtend moet direct worden afgeblazen. Het grote probleem voor Blake en Schofield is dat de divisie van MacKenzie voorbij de frontlinie ligt. Ze moeten door een groot stuk niemandsland, waarbij de kans groot is dat de Duitsers op de loer liggen. Slaagt hun missie niet, dan lopen 1600 soldaten, waaronder de broer van Blake, in een dodelijke val.",
          conclusion: "Twee soldaten worden op een missie gestuurd om een divisie, die gelegerd is voorbij de frontlinie, met de opdracht om de aanval van de volgende ochtend af te blazen. De gevolgen zijn groot als de twee hun doel niet bereiken. 1917 is een imponerende, spannende en zenuwslopende oorlogsfilm van Sam Mendes, die niet alleen qua verhaal, maar ook visueel een zeer bijzondere film heeft gemaakt. De één-take techniek is bijna tot in de perfectie uitgevoerd. De film op 4K-UHD heeft een goede, maar zeker niet briljante beeldkwaliteit. Het geluid is wel bijzonder fraai en komt, mede door Dolby Atmos, heel fraai over. De extra’s zijn over het algemeen boeiend en vooral de commentaartracks springen er uit. Gaat dat zien!",
          rating: 7.8,
          filmId: 1,
          mediumId: 5,
          createdAt: new Date(),
          updatedAt: new Date(), 
        }, 
        {
          summary: "Dom (Vin Diesel) and Brian (Paul Walker) have a pretty good life. They have not always taken the law too literally but have become rich with it. They take it good in a sunny destination. But then they meet their old friend Hobbs (Dwayne Johnson) again. He does have a very attractive offer for these gentlemen. A mastermind named Shaw (Luke Evans) is in charge of controlling illegal racers in as many as twelve countries. Law enforcement officers are eager to get this heavy boy behind bars and need the help of Dom, Brian and their old teammates. What do they get in exchange for their cooperation? A blank criminal record for all of them. They are not doomed to live in a country that has no extradition treaty with the US and Brian can live with Mia (Jordana Brewster) and their newborn in their home country. However, Dom is not quite convinced until Hobbs shows a current photo of someone who has been considered dead so far. This personal mission ensures that the whole gang under the leadership of Dom and Brian takes action as usual. ",
          conclusion: "In this sixth part of the Fast saga, the entire group is back together and in complete harmony. They work together to do a big job but are soon followed by Luke Hobbs. But that's not their only threat, as supervillain Shaw (Luke Evans) is a size too big for the group, and they have to pull out all the stops to stop Shaw. This sixth part of the Fast saga is bigger than big, but that shouldn't spoil the fun. The cast is visibly having fun and the story is quite nice. the action scenes are big and impressive, but even Justin Lin exaggerates a bit too much at the end. Still, it's a good part of the whole saga so far. the UHD + BD edition contains a Blu-ray Disc with excellent image, sound and extras. The UHD also contains both versions of the film, fine image but unfortunately only the 5.1 track on the extended version of the film. That extended version does not add much to the whole, but it is unfortunate. Nevertheless, this UHD + BD-from Furious 6 edition is highly recommended.",
          rating: 8.5,
          filmId: 2,
          mediumId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "After Neo (Keanu Reeves) is rescued from the virtual grip of the Matrix by Morpheus (Laurence Fishburne), he ends up in a world where machines and people compete against each other. And humanity, which is used by the machines as an inexhaustible source of energy, is on the losing side. However, Morpheus is convinced that Neo is their destined savior, as this has been predicted to him by the Oracle (Mary Alice). However, in the fight for this freedom, which takes place inside, but also outside the Matrix, Neo has fallen into a kind of coma. It is located in 'the train station', the twilight zone between the real and the virtual world. Escape seems impossible, but Neo's beloved Trinity (Carrie-Ann Moss) is doing everything he can to get him back. Meanwhile, the machines are drilling their way to the underground city of Zion, humanity's last safe haven. There is only 20 hours to go before the never-ending stream of devastating Sentinels will reach the city. Was the Oracle's prediction a lie?",
          conclusion: "The Matrix Revolutions is the closing part of the Matrix trilogy. The film is a well-made science fiction action film, but it was not the all-enlightening 'revolutionary' ending of the trilogy. The main focus of The Matrix Revolutions is the impressive action scenes, where the philosophical character is now hardly present. The Matrix Revolutions is the ultimate climax of The Matrix Trilogie. The UHD + BD edition of The Matrix Revolutions is a real hit with fantastic images and audio in both formats and a large package of extras that only the Trailer and TV spots are missing. Recommended.",
          rating: 8,
          filmId: 6,
          mediumId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "It is 1977 in New York. Jonah (Logan Lerman) lives with his grandmother Ruth (Jeannie Berlin). One night, Ruth is shot to death in her house. Jonah goes after the perpetrator, but does not know where to find it. It is a mystery to him why his grandmother is murdered. Jonah is taken care of by Meyer Offerman (Al Pacino), a close friend of Ruth's and who has promised to look after Jonah should anything happen to her. Jonah searches for his grandmother's killer and gets help from Meyer. It turns out that Meyer and his team, who call themselves The Hunters, are on to something big. Indeed, it appears that thousands of Nazis live in America, who plan to start the Fourth Reich under the leadership of The Colonel. The Jewish community expects that people will not be believed if they go to the police or FBI with this, the group around Meyer itself investigates. Some of the Nazis are already targeted, they just need to be traced. And when they are found, there is only one option: death. But FBI agent Millie Morris (Jerrika Hinton) gets wind of these murders and gets on the trail of Meyer and his group. What Morris doesn't know, however, is that the Nazis are also targeting her.",
          conclusion: "After World War II, nearly 1,600 Nazis are secretly brought to America by the United States government. In the 1970s there is a group of Jewish New Yorkers who singlehandedly hunt these Nazis. Hunters is a ten-episode Amazon Prime series that follows this group, starring young Jonah. The acting is excellent, the tempo at times too slow. The storylines are well worked out, sometimes surprising and at times the series is hard, sometimes gripping and emotional. However, Al Pacino takes the cake and for him alone it is worth watching the series.",
          rating: 7,
          filmId: 3,
          mediumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "Arthur Fleck has been deeply depressed and dejected all his life, but always laughs excessively.",
          conclusion: "Arthur Fleck has been deeply depressed and dejected all his life, but always laughs excessively. Arthur has a deviation that makes him laugh with any kind of emotion, appropriate or inappropriate. As a result, he feels misunderstood by his environment and it constantly puts him in awkward situations, where he usually does not come off unharmed. Joker is a special drama of an icon from the world of Batman, but does not feel like a superhero film. Yet there are enough references that make you discover that it all takes place in that world. A great film that will draw full houses.",
          rating: 9.3,
          filmId: 4,
          mediumId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "Sigmund Freud (Robert Finster) is a young doctor in the Viennese clinic of Professor Meynert (Rainer Bock). Freud has quirky new ideas about hypnotherapies, but is dismissed by his colleagues and Meynert. A friend takes Freud to a meeting, where he is a spectator at a seance by Fleur Salome (Ella Rumpf). Fleur goes completely into a trance and Freud's interest in the character Fleur is aroused. Fleur appears to be under the influence of the Hungarian nationalists Sophia (Anja Kling) and Viktor (Philipp Hochmair) von Szápáry. They use Fleur's gift to influence the Austrian emperor. However, Freud wants to understand Fleur's character and tries to help her break free from the Von Szápárys.",
          conclusion: "A young Sigmund Freud is confronted with medium Fleur Salome during a visit to a séance. He becomes obsessed with the character of Fleur, who is under the influence of Hungarian nationalists. Freud tries to get Fleur out of their hands, but gets a lot of resistance. Freud is an Austrian television series, also shown on Netflix, that only sporadically shows the true life of Sigmund Freud. The storyline is largely fictional and contains many mystical and occult elements. With that, the person who is looking for a story about the career and the person Sigmund Freud at Freud is in the wrong place. That is not to say that this series is not interesting, but it does know what you are getting into.",
          rating: 7,
          filmId: 5,
          mediumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "Avengers: Infinity War is the first part of the final chapter of 10 years of Marvel. A big, bombastic film with a big, bombastic villain where every character has been expertly ensured that it serves a purpose and everything is in the service of a coherent, streamlined story. Outside of Thanos, there is rarely real character development, and the humor undercuts the dramatic moments, but these are probably not even disturbing things for most viewers. The final part of a movie is darker than any Marvel movie so far. It is not until May 2019 that the diptych reaches its conclusion",
          conclusion: "Avengers: Infinity War is the first part of the final chapter of 10 years of Marvel. A big, bombastic film with a big, bombastic villain where every character has been expertly ensured that it serves a purpose and everything is in the service of a coherent, streamlined story. Outside of Thanos, there is rarely real character development, and the humor undercuts the dramatic moments, but these are probably not even disturbing things for most viewers. The final part of a movie is darker than any Marvel movie so far. It is not until May 2019 that the diptych reaches its conclusion",
          rating: 8.1,
          filmId: 8,
          mediumId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "Elton John was addicted to alcohol, drugs and sex. This almost cost him his life. In the end, he manages to get away from his troubled youth, but this was not without a struggle. The world star himself has contributed to Rocketman, the film adaptation of his life so far and is not afraid to show his less positive sides. Some of the people around him seem very black and white, possibly to reduce his own role and responsibility. But this is only a small blot on an otherwise very expertly made film. Rocketman knows how to perfectly combine style and content in a flamboyant and emotional film with a star role for protagonist Taron Egerton.",
          conclusion: "Elton John was addicted to alcohol, drugs and sex. This almost cost him his life. In the end, he manages to get away from his troubled youth, but this was not without a struggle. The world star himself has contributed to Rocketman, the film adaptation of his life so far and is not afraid to show his less positive sides. Some of the people around him seem very black and white, possibly to reduce his own role and responsibility. But this is only a small blot on an otherwise very expertly made film. Rocketman knows how to perfectly combine style and content in a flamboyant and emotional film with a star role for protagonist Taron Egerton.",
          rating: 7.8,
          filmId: 7,
          mediumId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        summary: "Als paus Johannes Paulus II in 2005 overlijdt moet er een nieuwe paus worden gekozen. De kardinalen komen bij elkaar in de Sixtijnse kapel en houden een conclaaf, totdat er een opvolger van Johannes Paulus II is gekozen.",
        conclusion: "In 2005 wordt de conservatieve Ratzinger gekozen als de nieuwe paus. Jaren later wil kardinaal Bergoglio terugtreden om zo dichter bij het volk te kunnen zijn. Op uitnodiging van de paus gaat hij naar Rome, denkende dat het om zijn ontslag zal gaan. Maar de paus heeft een heel ander verhaal te vertellen. The Two Popes is een sterke film over een – fictieve – discussie tussen de paus en kardinaal, vlak voordat bekend wordt dat paus Benedictus zal aftreden. Vooral het interessante script en het goede acteerwerk tillen deze film naar een hoger niveau. Deze Netflixfilm heeft ook in de bioscoop gedraaid en mag daarom ook meedoen met de diverse filmaward-uitreikingen. De kans op prijzen zijn daarbij zeker aanwezig.",
        rating: 7.8,
        filmId: 10,
        mediumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
