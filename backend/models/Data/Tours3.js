const Tours = require("../Tours");

const ToursDataMexicoEvent = [
  {
    country: "6501edaa2784281adf085113",
    name: "Mexico's Day of the Dead in Oaxaca",
    description:
      "The trip Mexico's Day Of The Dead In Oaxaca starts and ends in Oaxaca. It is a festivals and events trip that takes 7 days taking you through Oaxaca in Mexico. Mexico's Day Of The Dead In Oaxaca is a guided small group trip that includes accommodation in hotels, transport, meals and others.",
    mainImage: "The Fallas.jpg",
    time: "EVENING",
    type: "event-visit",
  },
  {
    country: "6501edaa2784281adf085113",
    name: "Hot Air Balloon Flight over Teotihuacan, from Mexico City",
    description:
      "Fly in a hot air balloon over one of the most spectacular places in Mexico, the Teotihuacán Valley, and enjoy one of the most impressive hot air balloon experiences in the world just 45 minutes from Mexico City.",
    mainImage: "Hot Air Balloon Flight over Teotihuacan, from Mexico City.jpg",
    time: "MORNING",
    type: "event-visit",
  },
  {
    country: "6501edaa2784281adf085113",
    name: "Hip Hop Sessions Boat Party Cancun (Adults only)",
    description:
      "Join a hip hop cruise in Cancun and enjoy hours of fun as you sail along the Mexican coastline. DJs blast R&B and hip hop music while you dance the day away and enjoy drinks from the open bar. Stop to snorkel and swim in the warm blue-green waters or stay on board and keep dancing.",
    mainImage: "Hip Hop Sessions Boat Party Cancun (Adults only).jpg",
    time: "Evening",
    type: "event-visit",
  },
];

const TourInsert3 = async () => {
  try {
    await Tours.insertMany(ToursDataMexicoEvent);
    console.log("ToursDataMexicoEvent data inserted successfully");
  } catch (error) {
    console.log("Error inserting demo data:", error);
  }
};

module.exports = TourInsert3;
