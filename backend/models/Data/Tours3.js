const Tours = require("../Tours");

const ToursDataMexicoEvent = [
  {
    country: "650ee03d37f8a07bef51b837",
    name: "Mexico's Day of the Dead in Oaxaca",
    description:
      "The trip Mexico's Day Of The Dead In Oaxaca starts and ends in Oaxaca. It is a festivals and events trip that takes 7 days taking you through Oaxaca in Mexico. Mexico's Day Of The Dead In Oaxaca is a guided small group trip that includes accommodation in hotels, transport, meals and others.",
    mainImage: "The Fallas.jpg",
    time: "EVENING",
    type: "event-visit",
  },
  {
    country: "650ee03d37f8a07bef51b837",
    name: "Hot Air Balloon Flight over Teotihuacan, from Mexico City",
    description:
      "Fly in a hot air balloon over one of the most spectacular places in Mexico, the Teotihuacán Valley, and enjoy one of the most impressive hot air balloon experiences in the world just 45 minutes from Mexico City.",
    mainImage: "Hot Air Balloon Flight over Teotihuacan, from Mexico City.jpg",
    time: "MORNING",
    type: "event-visit",
  },
  {
    country: "650ee03d37f8a07bef51b837",
    name: "Hip Hop Sessions Boat Party Cancun (Adults only)",
    description:
      "Join a hip hop cruise in Cancun and enjoy hours of fun as you sail along the Mexican coastline. DJs blast R&B and hip hop music while you dance the day away and enjoy drinks from the open bar. Stop to snorkel and swim in the warm blue-green waters or stay on board and keep dancing.",
    mainImage: "Hip Hop Sessions Boat Party Cancun (Adults only).jpg",
    time: "Evening",
    type: "event-visit",
  },
];

const ToursDataIndia = [
  {
    country: "650ee03d37f8a07bef51b832",
    name: "Mysore Palace (Mysuru Palace)",
    description:
      "Start your day by visiting the magnificent Mysore Palace (Mysuru Palace). Marvel at the stunning architecture and learn about the rich history of the Wodeyar dynasty. Afterward, head to Indian Accent for a delicious breakfast.",
    mainImage: "Mysore Palace (Mysuru Palace)",
    Day: 1,
    time: "MORNING",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    Day: 1,
    name: "Devaraja Market",
    description:
      "Take a trip to Devaraja Market, a bustling local market where you can find a variety of fresh produce, spices, and handicrafts. Enjoy a traditional South Indian lunch at Rajdhani Thali Restaurant.",
    mainImage: "Devaraja Market.jpg",
    time: "AFTERNOON",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    name: "Hip Hop Sessions Boat Party Cancun (Adults only)",
    description:
      "Visit Tipu Sultan's Summer Palace (Daria Daulat Bagh) and explore the beautiful gardens and intricate artwork. End the day with a dinner at Masala Library, known for its innovative Indian cuisine.",
    Day: 1,
    mainImage: "Tipu Sultan's Summer Palace (Daria Daulat Bagh).jpg",
    time: "EVENING",
  },

  {
    country: "650ee03d37f8a07bef51b832",
    name: "Srirangapatna",
    description:
      "Start your day by visiting Srirangapatna, a historic town known for its ancient temples and monuments. Explore the Ranganathaswamy Temple and the Daria Daulat Bagh. Enjoy a traditional breakfast at Karim's.",
    mainImage: "Srirangapatna.jpg",
    Day: 2,
    time: "MORNING",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    Day: 2,
    name: "GRS Fantasy Park",
    description:
      "Spend the afternoon at GRS Fantasy Park, a popular amusement park with thrilling rides and water slides. Grab a quick snack at Bhukkad before continuing your adventure.",
    mainImage: "GRS Fantasy Park.jpg",
    time: "AFTERNOON",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    name: "Hip Hop Sessions Boat Party Cancun (Adults only)",
    description:
      "Head to Thunderzone for some go-karting and other exciting activities. Enjoy dinner at Dum Pukht, a restaurant known for its authentic Awadhi cuisine.",
    Day: 2,
    mainImage: "",
    time: "EVENING",
  },

  {
    country: "650ee03d37f8a07bef51b832",
    name: "Gregory Lake",
    description:
      "Start your day with a visit to Gregory Lake, a serene lake surrounded by lush greenery. Take a boat ride and enjoy the peaceful atmosphere. Grab a coffee and breakfast at Cafe Lota.",
    mainImage: "Gregory Lake.jpg",
    Day: 3,
    time: "MORNING",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    Day: 3,
    name: "GRS Fantasy Park",
    description:
      "Explore the beautiful Chamundi Hill and visit the Chamundeshwari Temple. Enjoy a picnic lunch at the hilltop while taking in the panoramic views. Head back to the city and have a late lunch at Farzi Cafe.",
    mainImage: "",
    time: "AFTERNOON",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    name: "Hip Hop Sessions Boat Party Cancun (Adults only)",
    description:
      "Relax and unwind at Aqua Village, a water park with pools, slides, and water activities. Enjoy dinner at The Great Kabab Factory, known for its delicious kebabs and Indian cuisine.",
    Day: 3,
    mainImage: "",
    time: "EVENING",
  },

  {
    country: "650ee03d37f8a07bef51b832",
    name: "Gregory Lake",
    description:
      "Travel to Bengaluru and start your day with a visit to Cubbon Park, a beautiful park in the heart of the city. Take a leisurely walk and enjoy the green surroundings. Grab a coffee and breakfast at Cafe Delhi Heights.",
    mainImage: "Gregory Lake.jpg",
    Day: 4,
    time: "MORNING",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    Day: 4,
    name: "GRS Fantasy Park",
    description:
      "Explore the vibrant streets of MG Road and indulge in some shopping at the various boutiques and stores. Enjoy a delicious lunch at Oh! Calcutta, known for its Bengali cuisine.",
    mainImage: "",
    time: "AFTERNOON",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    name: "Hip Hop Sessions Boat Party Cancun (Adults only)",
    description:
      "Visit Lalbagh Botanical Garden, a stunning garden with a variety of plants and flowers. Take a relaxing stroll and enjoy the peaceful ambiance. End the day with dinner at Bombay Brasserie, known for its fusion of Indian and international flavors.",
    Day: 4,
    mainImage: "",
    time: "EVENING",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    name: "Gregory Lake",
    description:
      "Travel to Coorg and start your day with a visit to Abbey Falls, a picturesque waterfall surrounded by lush greenery. Enjoy the tranquility of the surroundings and take some beautiful photos. Grab a quick breakfast at Naturals Ice Cream.",
    mainImage: "",
    Day: 5,
    time: "MORNING",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    Day: 5,
    name: "GRS Fantasy Park",
    description:
      "Explore the coffee plantations of Coorg and learn about the coffee-making process. Enjoy a traditional Coorgi lunch at Kailash Parbat. Visit Namdroling Monastery, a Tibetan Buddhist monastery known for its stunning architecture.",
    mainImage: "",
    time: "AFTERNOON",
  },
  {
    country: "650ee03d37f8a07bef51b832",
    name: "Hip Hop Sessions Boat Party Cancun (Adults only)",
    description:
      "Head to Talacauvery, the birthplace of the Cauvery River. Enjoy the scenic views and take a walk around the temple. End the day with dinner at Moti Mahal Delux, known for its North Indian cuisine.",
    Day: 5,
    mainImage: "",
    time: "EVENING",
  },
];

const TourInsert3 = async () => {
  try {
    await Tours.insertMany(ToursDataMexicoEvent);
    console.log("ToursDataMexicoEvent data inserted successfully");

    await Tours.insertMany(ToursDataIndia);
    console.log("ToursDataIndia data inserted successfully");
  } catch (error) {
    console.log("Error inserting demo data:", error);
  }
};

module.exports = TourInsert3;
