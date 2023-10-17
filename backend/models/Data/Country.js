const Country = require("../Country");
const City = require("../City");

const CountryData = [
  {
    name: "United Arab Emirates",
    mainImage: "united_arab_emirates.jpg",
    description:
      "Marvel at the architectural wonders of Dubai, relax on Abu Dhabi's pristine beaches, and experience luxury in the desert.",
  },
  {
    name: "United States",
    mainImage: "united_states.jpg",
    description:
      "From the bustling streets of New York to the stunning landscapes of the Grand Canyon, experience the diversity of America's culture and nature.",
  },
  {
    name: "United Kingdom",
    mainImage: "united_kindom.jpg",
    description:
      "Embrace British elegance in London, absorb the history of Edinburgh's castles, and enjoy a cup of tea in traditional English style.",
  },
  {
    name: "India",
    mainImage: "india.jpg",
    description:
      "Experience the spiritual vibes of Varanasi, marvel at the Taj Mahal's grandeur, and enjoy the diverse cultures and landscapes of India.",
  },
  {
    name: "France",
    mainImage: "france.jpg",
    description:
      "Explore romantic Paris, stroll along the Seine River, and savor exquisite pastries while marveling at the Eiffel Tower's elegance.",
  },
  {
    name: "Spain",
    mainImage: "spain.jpg",
    description:
      "Immerse yourself in Spain's vibrant culture, from flamenco rhythms in Andalusia to iconic architecture in Barcelona and relaxing on Mediterranean beaches.",
  },
  {
    name: "Turkey",
    mainImage: "turkey.jpg",
    description:
      "Delve into Turkey's rich history by visiting the ancient city of Istanbul, exploring the Blue Mosque, and indulging in flavorful Turkish cuisine",
  },
  {
    name: "Italy",
    mainImage: "italy.jpg",
    description:
      "Wander through historic Rome, be enchanted by Venice's canals, and indulge in Italy's culinary delights and world-renowned gelato.",
  },
  {
    name: "Mexico",
    mainImage: "mexico.jpg",
    description:
      "Discover the Mayan ruins in Chichen Itza, unwind on the beautiful beaches of Cancun, and savor the spicy flavors of authentic Mexican dishes.",
  },
  {
    name: "Germany",
    mainImage: "germany.jpg",
    description:
      "Experience the lively atmosphere of Oktoberfest in Munich, explore the historic Berlin Wall, and immerse yourself in German culture.",
  },
  {
    name: "Greece",
    mainImage: "greece.jpg",
    description:
      "Explore ancient ruins in Athens, bask in the beauty of Santorini's sunsets, and savor Greek delicacies by the azure Aegean Sea.",
  },
  {
    name: "Austria",
    mainImage: "austria.jpg",
    description:
      "Take in the classical elegance of Vienna, enjoy Alpine landscapes in Salzburg, and treat yourself to a slice of Sachertorte.",
  },
  {
    name: "Egypt",
    mainImage: "egypt.jpg",
    description:
      "Uncover the mysteries of the Pyramids in Cairo, cruise the timeless Nile River, and immerse yourself in the land of ancient pharaohs.",
  },
  {
    name: "Morocco",
    mainImage: "morocco.jpg",
    description:
      "Get lost in the enchanting medinas of Marrakech, experience the Sahara Desert's tranquility, and savor the flavors of Moroccan spices.",
  },
  {
    name: "South Africa",
    mainImage: "south_africa.jpg",
    description:
      "Embark on a safari adventure in Kruger National Park, explore the vibrant city of Cape Town, and witness the stunning beauty of Table Mountain.",
  },
  {
    name: "Tunisia",
    mainImage: "tunisia.jpg",
    description:
      "Step into the past at the ancient ruins of Carthage, wander through the medina of Tunis, and relax on the Mediterranean's golden beaches.",
  },
  {
    name: "Algeria",
    mainImage: "algeria.jpg",
    description:
      "Discover the Roman ruins of Timgad, explore the Saharan landscapes of the Tassili n'Ajjer, and experience the unique culture of North Africa.",
  },
  {
    name: "Zimbabwe",
    mainImage: "zimbabwe.jpg",
    description:
      "Stand in awe of the majestic Victoria Falls, embark on a safari in Hwange National Park, and connect with the heart of Africa.",
  },
  {
    name: "Ivory Coast",
    mainImage: "ivory_coast.jpg",
    description:
      "Experience the vibrant culture of Abidjan, relax on the country's beautiful beaches, and explore the diverse landscapes of West Africa.",
  },
  {
    name: "Kenya",
    mainImage: "kenya.jpg",
    description:
      "Witness the Great Migration in the Maasai Mara, learn about Maasai culture, and take in the beauty of Kenya's diverse wildlife.",
  },
  {
    name: "Botswana",
    mainImage: "botswana.jpg",
    description:
      "Traverse the Okavango Delta's waterways, spot wildlife in Chobe National Park, and experience the untouched wilderness of Southern Africa.",
  },
  {
    name: "Mozambique",
    mainImage: "mozambique.jpg",
    description:
      "Dive into the crystal-clear waters of the Bazaruto Archipelago, unwind on pristine beaches, and explore the coastal charm of Maputo.",
  },
  {
    name: "Argentina",
    mainImage: "argentina.jpg",
    description:
      "Tango through the streets of Buenos Aires, hike in the Andes Mountains, and witness the stunning beauty of Patagonia's glaciers",
  },
  {
    name: "Canada",
    mainImage: "canada.jpg",
    description:
      "Embrace the vastness of the Rocky Mountains, explore cosmopolitan Toronto, and immerse yourself in Canada's natural wonders.",
  },
  {
    name: "Dominican Republic",
    mainImage: "dominican_republic.jpg",
    description:
      "Lounge on the Caribbean's white sandy beaches, explore the historic streets of Santo Domingo, and enjoy tropical vibes.",
  },
  {
    name: "Peru",
    mainImage: "peru.jpg",
    description:
      "Trek to the awe-inspiring Machu Picchu, sail on Lake Titicaca's blue waters, and savor the flavors of Peruvian cuisine.",
  },
  {
    name: "Chile",
    mainImage: "chile.jpg",
    description:
      "Embark on a safari adventure in Kruger National Park, explore the vibrant city of Cape Town, and witness the stunning beauty of Table Mountain.",
  },
  {
    name: "Colombia",
    mainImage: "colombia.jpg",
    description:
      "Wander through the charming streets of Cartagena, explore the lush coffee region, and experience Colombia's rich cultural heritage.",
  },
  {
    name: "Brazil",
    mainImage: "brazil.jpg",
    description:
      "Celebrate Carnival in Rio de Janeiro, stand in awe of Iguazu Falls, and relax on the stunning beaches of Copacabana and Ipanema.",
  },

  {
    name: "Iran",
    mainImage: "iran.jpg",
    description:
      "Discover the historical treasures of Isfahan, explore the ancient ruins of Persepolis, and experience the hospitality of Persian culture.",
  },
  {
    name: "Israel",
    mainImage: "israel.jpg",
    description:
      "Walk through the historic streets of Jerusalem, float in the Dead Sea's salty waters, and explore the vibrant city of Tel Aviv.",
  },
  {
    name: "Jordan",
    mainImage: "jordan.jpg",
    description:
      "Explore the rose-red city of Petra, float in the healing waters of the Dead Sea, and embark on a desert adventure in Wadi Rum.",
  },
  {
    name: "Bahrain",
    mainImage: "bahrain.jpg",
    description:
      "Witness the modern skyline of Manama, explore the ancient Qal'at al-Bahrain, and experience the blend of tradition and progress.",
  },
  {
    name: "Oman",
    mainImage: "oman.jpg",
    description:
      "Wander through the picturesque old town of Muscat, experience the beauty of Wahiba Sands, and discover the charm of Omani culture.",
  },
  {
    name: "Qatar",
    mainImage: "qatar.jpg",
    description:
      "Admire the futuristic architecture of Doha, explore the traditional Souq Waqif, and experience the opulence of Qatar's modernity.",
  },
  {
    name: "Lebanon",
    mainImage: "lebanon.jpg",
    description:
      "Immerse yourself in the vibrant streets of Beirut, explore ancient ruins in Baalbek, and indulge in Lebanese cuisine.",
  },

  {
    name: "South Korea",
    mainImage: "south_korea.jpg",
    description:
      "Dive into the futuristic cityscape of Seoul, discover the historic beauty of Gyeongju, and enjoy traditional Korean cuisine.",
  },
  {
    name: "Indonesia",
    mainImage: "indonesia.jpg",
    description:
      "Relax on Bali's paradise beaches, explore the cultural hub of Ubud, and dive into the underwater wonders of Raja Ampat.",
  },
  {
    name: "Vietnam",
    mainImage: "vietnam.jpg",
    description:
      "Cruise through the stunning landscapes of Halong Bay, explore the ancient town of Hoi An, and savor the flavors of Vietnamese street food.",
  },
  {
    name: "Macau",
    mainImage: "macau.jpg",
    description:
      "Experience the fusion of cultures in Macau's historic streets, try your luck at world-class casinos, and enjoy panoramic views.",
  },
  {
    name: "Hong Kong",
    mainImage: "hong_kong.jpg",
    description:
      "Embrace the energetic vibe of Hong Kong's cityscape, explore bustling markets, and savor authentic Cantonese cuisine.",
  },
  {
    name: "Malaysia",
    mainImage: "malaysia.jpg",
    description:
      "Wander through Kuala Lumpur's iconic Petronas Towers, relax on Langkawi's beaches, and experience the melting pot of cultures.",
  },
  {
    name: "Japan",
    mainImage: "japan.jpg",
    description:
      "Immerse yourself in Tokyo's high-tech cityscape, explore traditional temples in Kyoto, and indulge in the elegance of Japanese culture.",
  },
  {
    name: "Thailand",
    mainImage: "thailand.jpg",
    description:
      "Discover the vibrant nightlife of Bangkok, relax on the beautiful beaches of Phuket, and explore the ancient ruins of Ayutthaya.",
  },
  {
    name: "China",
    mainImage: "china.jpg",
    description:
      "Walk along the Great Wall's iconic path, explore the vibrant city of Shanghai, and discover the historic treasures of Beijing0.",
  },
  {
    name: "Pakistan",
    mainImage: "pakistan.jpg",
    description:
      "Pakistan is a diverse and vibrant country located in South Asia. It offers a rich cultural heritage, stunning landscapes, and warm hospitality. From bustling cities like Karachi and Lahore to the breathtaking mountains of the Karakoram and Himalayas, Pakistan has something for everyone. Some must-visit attractions include the ancient city of Taxila, the beautiful Hunza Valley, the historic Lahore Fort, and the UNESCO World Heritage Site of Makli Necropolis. Don't forget to try the delicious Pakistani cuisine, known for its flavorful curries and kebabs.",
  },
];

const CitiesData = [
  {
    name: "Cape Town",
    country: "650ee03d37f8a07bef51b83d",
    status: 1,
  },
  {
    name: "Muscat",
    country: "650ee03d37f8a07bef51b850",
    status: 1,
  },
  {
    name: "Salalah",
    country: "650ee03d37f8a07bef51b850",
    status: 1,
  },
  {
    name: "Mexico City",
    country: "650ee03d37f8a07bef51b837",
    status: 1,
  },
  {
    name: "Karachi",
    country: "650ee03d37f8a07bef51b85c",
    status: 1,
  },
  {
    name: "Lahore",
    country: "650ee03d37f8a07bef51b85c",
    status: 1,
  },
  {
    name: "Jakarta",
    country: "650ee03d37f8a07bef51b854",
    status: 1,
  },
  {
    name: "Kuala Lumpur's",
    country: "650ee03d37f8a07bef51b858",
    status: 1,
  },
  {
    name: "Tokyo",
    country: "650ee03d37f8a07bef51b859",
    status: 1,
  },
  {
    name: "Bankok",
    country: "650ee03d37f8a07bef51b85a",
    status: 1,
  },
  {
    name: "Pattaya",
    country: "650ee03d37f8a07bef51b85a",
    status: 1,
  },
  {
    name: "Istanbul",
    country: "650ee03d37f8a07bef51b835",
    status: 1,
  },
  {
    name: "Lima",
    country: "650ee03d37f8a07bef51b848",
    status: 1,
  },
  {
    name: "New York",
    country: "650ee03d37f8a07bef51b82f",
    status: 1,
  },
  {
    name: "Washington",
    country: "650ee03d37f8a07bef51b82f",
    status: 1,
  },
  {
    name: "Los Angeles",
    country: "650ee03d37f8a07bef51b82f",
    status: 1,
  },
  {
    name: "Florida",
    country: "650ee03d37f8a07bef51b82f",
    status: 1,
  },
  {
    name: "Santo Domingo",
    country: "650ee03d37f8a07bef51b847",
    status: 1,
  },
  {
    name: "Colombia",
    country: "650ee03d37f8a07bef51b84a",
    status: 1,
  },
  {
    name: "Madrid",
    country: "650ee03d37f8a07bef51b834",
    status: 1,
  },
  {
    name: "Barcelona",
    country: "650ee03d37f8a07bef51b834",
    status: 1,
  },
  {
    name: "Seoul",
    country: "650ee03d37f8a07bef51b853",
    status: 1,
  },
  {
    name: "Rome",
    country: "650ee03d37f8a07bef51b836",
    status: 1,
  },
  {
    name: "Milan",
    country: "650ee03d37f8a07bef51b836",
    status: 1,
  },
  {
    name: "Paris",
    country: "650ee03d37f8a07bef51b833",
    status: 1,
  },
  {
    name: "Lyon",
    country: "650ee03d37f8a07bef51b833",
    status: 1,
  },
];

const insertCountry = async () => {
  try {
    /*
    await Country.insertMany(CountryData);
    console.log("Country data inserted successfully");
    */
    await City.insertMany(CitiesData);
    console.log("City data inserted successfully");
  } catch (error) {
    console.log("Error inserting demo data:", error);
  }
};

module.exports = insertCountry;
