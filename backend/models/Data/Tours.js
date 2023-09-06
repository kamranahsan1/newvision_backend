const Tours = require("../Tours");

const TourInsert = async () => {
  const ToursDataFrance1 = [
    {
      country: "64f58abceab052732025293d",
      name: "Mont-Saint-Michel",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day with a visit to the picturesque village of Mont-Saint-Michel, located on a rocky island in Normandy. Explore the medieval abbey and wander through the narrow streets lined with shops and restaurants.",
      mainImage: "Mont-Saint-Michel.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Villers-Bretonneux",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Head to Villers-Bretonneux, a small town in the Somme region that played a significant role in World War I. Visit the Australian National Memorial and pay your respects to the soldiers who lost their lives in the Battle of Villers-Bretonneux.",
      mainImage: "Villers-Bretonneux.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Villers-Bretonneux",
      Day: 1,
      time: "EVENING",
      description:
        "Enjoy a delicious dinner at a local restaurant in Villers-Bretonneux, where you can sample traditional French cuisine.",
      mainImage: "",
    },
  ];

  const ToursDataFrance2 = [
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 2,
      time: "MORNING",
      description:
        "Take a trip to the Champagne region and visit the Champagne Mercier in Epernay. Explore the cellars and learn about the Champagne production process. Don't miss the opportunity to taste some of their finest Champagnes.",
      mainImage: "champagne_mercier.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "UNESCO World Heritage site",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Explore the picturesque town of Reims and visit the famous Reims Cathedral, a UNESCO World Heritage site. Afterward, head to the Moët & Chandon Champagne Cellars for another Champagne tasting experience.",
      mainImage: "UNESCO World Heritage site france.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "UNESCO World Heritage site",
      Day: 2,
      time: "EVENING",
      description:
        "Enjoy a leisurely dinner at a Local restaurant in Reims, where you can savor the flavors of the region.",
      mainImage: "",
    },
  ];

  const ToursDataFrance3 = [
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 3,
      time: "MORNING",
      description:
        "Start your day with a visit to the Basilica of Our Lady of the Pillar, a magnificent church located on the banks of the Ebro River. Explore the stunning architecture and learn about the religious significance of this iconic landmark.",
      mainImage: "UNESCO World Heritage site france.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Visit the Zaragoza Aquarium, home to a wide variety of marine species from around the world. Take a leisurely stroll along the riverfront and admire the beautiful bridges and architecture.",
      mainImage: "Zaragoza Aquarium.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 3,
      time: "EVENING",
      description:
        "Indulge in a traditional Spanish dinner at a local restaurant in Zaragoza, where you can savor tapas and regional specialties.",
      mainImage: "spanish-food.jpg",
    },
  ];

  const ToursDataFrance4 = [
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 4,
      time: "MORNING",
      description:
        "Take a trip to the city of Baden-Baden, known for its thermal baths and beautiful architecture. Spend the morning relaxing at one of the luxurious spas and rejuvenate your body and mind.",
      mainImage: "Baden-Baden.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Explore the charming town of Grotte de la Madeleine and take a guided tour of the Cauberg Cavern, an underground network of tunnels and caves.",
      mainImage: "Cauberg Cavern.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 4,
      time: "EVENING",
      description:
        "Enjoy a relaxing dinner at a Local restaurant in Baden-Baden, where you can savor the flavors of the region.",
      mainImage: "Cauberg Cavern.jpg",
    },
  ];

  const ToursDataFrance5 = [
    {
      country: "64f58abceab052732025293d",
      name: "Mercedes-Benz Museum",
      Day: 5,
      time: "MORNING",
      description:
        "Visit the Mercedes-Benz Museum in Stuttgart and immerse yourself in the history of the iconic automobile brand. Explore the interactive exhibits and admire the collection of classic cars.",
      mainImage: "Mercedes-Benz Museum.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Lake Mummelsee",
      Day: 5,
      time: "MORNING",
      description:
        "Take a scenic drive to Lake Mummelsee, located in the Black Forest. Enjoy a leisurely walk around the lake and take in the beautiful natural surroundings.",
      mainImage: "Lake Mummelsee.jpg",
    },
    {
      country: "64f58abceab052732025293d",
      name: "Champagne Mercier",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Indulge in a traditional German dinner at a local restaurant near Lake Mummelsee, where you can savor hearty dishes and regional specialties.",
      mainImage: "",
    },
  ];

  const ToursDataSpain1 = [
    {
      country: "64f58abceab052732025293e",
      name: "Cap Roig Botanical Gardens",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day with a visit to the Cap Roig Botanical Gardens in Palafrugell, Catalonia. Explore the stunning gardens and enjoy panoramic views of the Mediterranean Sea.",
      mainImage: "Cap Roig Botanical Gardens.jpg",
    },
    {
      country: "64f58abceab052732025293e",
      name: "La Garrotxa Volcanic Zone Natural Park",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Head to the La Garrotxa Volcanic Zone Natural Park, located in the province of Girona, and hike through the volcanic landscape. Marvel at the dormant volcanoes, lava flows, and lush vegetation.",
      mainImage: "La Garrotxa Volcanic Zone Natural Park.jpg",
    },
    {
      country: "64f58abceab052732025293e",
      name: "El Pópulo",
      Day: 1,
      time: "EVENING",
      description:
        "Enjoy a leisurely dinner at a Local restaurant in Reims, where you can savor the flavors of the region.",
      mainImage: "",
    },
  ];

  const ToursDataSpain2 = [
    {
      country: "64f58abceab052732025293e",
      name: " Church of St. Trophime",
      Day: 2,
      time: "MORNING",
      description:
        "Start your day with a visit to the Church of St. Trophime in Arles, France. Admire the stunning Romanesque architecture and explore the cloister, which features intricate stone carvings.",
      mainImage: "Cap Roig Botanical Gardens.jpg",
    },
    {
      country: "64f58abceab052732025293e",
      name: "University of Coimbra",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Travel to the University of Coimbra in Portugal, one of the oldest universities in the world. Take a guided tour of the historic campus and visit the Joanina Library, known for its beautiful Baroque architecture.",
      mainImage: "La Garrotxa Volcanic Zone Natural Park.jpg",
    },
    {
      country: "64f58abceab052732025293e",
      name: "Exploring near by",
      Day: 2,
      time: "EVENING",
      description:
        "Explore the charming neighborhood of Coimbra and enjoy dinner at a local restaurant, where you can savor traditional Portuguese cuisine.",
      mainImage: "",
    },
  ];

  const ToursDataSpain3 = [
    {
      country: "64f58abceab052732025293e",
      name: " Church of St. Trophime",
      Day: 3,
      time: "MORNING",
      description:
        "Visit the Dalí Theatre-Museum in Figueres, Catalonia, which showcases the works of the famous surrealist artist Salvador Dalí. Explore the museum's unique architecture and admire Dalí's paintings, sculptures, and installations.",
      mainImage: "Dalí Theatre-Museum.jpg",
    },
    {
      country: "64f58abceab052732025293e",
      name: "University of Coimbra",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Take a trip to Fátima, a major Catholic pilgrimage site in Portugal. Visit the Sanctuary of Fátima and attend a religious ceremony or explore the surrounding area, which is known for its beautiful natural landscapes.",
      mainImage: "Fátima.jpg",
    },
    {
      country: "64f58abceab052732025293e",
      name: "Exploring near by",
      Day: 3,
      time: "EVENING",
      description:
        "Enjoy a relaxing evening at your hotel or explore the local cuisine at a restaurant in Fátima.",
      mainImage: "Fátima.jpg",
    },
  ];

  const ToursDataSpain4 = [
    {
      country: "64f58abceab052732025293e",
      name: " Camargue",
      Day: 4,
      time: "MORNING",
      description:
        "Explore the stunning natural beauty of the Camargue, a region in southern France known for its marshes, salt flats, and wildlife. Take a boat tour to spot flamingos, wild horses, and other native species.",
      mainImage: "Camargue.jpg",
    },
    {
      country: "64f58abceab052732025293e",
      name: "University of Coimbra",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Visit the Tabernas Desert in Almería, Spain, known as the 'European Hollywood' for its unique desert landscapes. Explore the desert and visit Oasys MiniHollywood, a theme park that replicates the Wild West.",
      mainImage: "Oasys MiniHollywood.jpg",
    },
  ];

  const ToursDataUS = [
    {
      country: "64f58abceab052732025293f",
      name: "Steven F. Udvar-Hazy Center",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day with a visit to the Steven F. Udvar-Hazy Center in Chantilly, Virginia. This museum is an extension of the Smithsonian National Air and Space Museum and features a vast collection of aircraft and space artifacts.",
      mainImage: "Steven F. Udvar-Hazy Center.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Taos Pueblo",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Head to Taos Pueblo in New Mexico, a UNESCO World Heritage site and one of the oldest continuously inhabited communities in the United States. Explore the adobe structures and learn about the rich Native American history and culture.",
      mainImage: "Taos Pueblo.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Rio Grande Gorge Bridge",
      Day: 1,
      time: "EVENING",
      description:
        "Enjoy the stunning views from the Rio Grande Gorge Bridge in New Mexico, one of the highest bridges in the United States. Take a leisurely walk across the bridge and admire the natural beauty of the surrounding area.",
      mainImage: "Rio Grande Gorge Bridge.jpg",
    },

    {
      country: "64f58abceab052732025293f",
      name: "Glenn H. Curtiss Museum",
      Day: 2,
      time: "MORNING",
      description:
        "Immerse yourself in the world of aviation at the Glenn H. Curtiss Museum in Hammondsport, New York. Learn about the life and achievements of Glenn H. Curtiss, a pioneer in aviation and motorcycling.",
      mainImage: "Glenn H. Curtiss Museum.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Main Event Theater",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Indulge in some live entertainment at the Main Event Theater in Pigeon Forge, Tennessee. Enjoy a variety of shows, including comedy, magic, and musical performances.",
      mainImage: "Main Event Theater.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "New Bedford Whaling Museum",
      Day: 2,
      time: "EVENING",
      description:
        "Immerse yourself in the history of whaling at the New Bedford Whaling Museum in Massachusetts. Explore the exhibits and artifacts that tell the story of the whaling industry and its impact on the region.",
      mainImage: "New Bedford Whaling Museum.jpg",
    },

    {
      country: "64f58abceab052732025293f",
      name: "Cape Cod Canal",
      Day: 3,
      time: "MORNING",
      description:
        "Take a leisurely walk along the Cape Cod Canal in Massachusetts, a man-made waterway that connects Cape Cod Bay to Buzzards Bay. Enjoy the scenic views and watch as boats pass through the canal.",
      mainImage: "Cape Cod Canal.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Corning Museum of Glass",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Visit the Corning Museum of Glass in Corning, New York, and explore the world's largest collection of glass art and artifacts. Watch live glassblowing demonstrations and try your hand at creating your own glass masterpiece.",
      mainImage: "Corning Museum of Glass.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Exploring near by",
      Day: 3,
      time: "EVENING",
      description:
        "Experience the grandeur of Hearst Castle in San Simeon, California. Take a guided tour of this opulent mansion, built by newspaper magnate William Randolph Hearst, and marvel at the stunning architecture and art collection.",
      mainImage: "Hearst Castle.jpg",
    },

    {
      country: "64f58abceab052732025293f",
      name: "Provincetown",
      Day: 4,
      time: "MORNING",
      description:
        "Explore the vibrant town of Provincetown in Massachusetts, known for its thriving arts scene and LGBTQ+ community. Visit art galleries, browse unique shops, and enjoy the lively atmosphere of this coastal town.",
      mainImage: "Provincetown.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Titanic Pigeon Forge",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Step aboard the Titanic Pigeon Forge in Tennessee, a museum dedicated to the history of the Titanic. Explore interactive exhibits and artifacts that tell the story of the ill-fated ship.",
      mainImage: "Titanic Pigeon Forge.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Grand Majestic Dinner Theater",
      Day: 4,
      time: "EVENING",
      description:
        "Enjoy a dinner and show experience at the Grand Majestic Dinner Theater in Pigeon Forge, Tennessee. Be entertained by live performances while enjoying a delicious meal.",
      mainImage: "Grand Majestic Dinner Theater.jpg",
    },

    {
      country: "64f58abceab052732025293f",
      name: "Glenwood Caverns Adventure Park",
      Day: 5,
      time: "MORNING",
      description:
        "Embark on an adventure at the Glenwood Caverns Adventure Park in Glenwood Springs, Colorado. Take a ride on thrilling roller coasters, explore cave systems, and enjoy panoramic views of the surrounding mountains.",
      mainImage: "Glenwood Caverns Adventure Park.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Moss Mansion",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Step back in time at the Moss Mansion in Billings, Montana. Take a guided tour of this historic mansion and learn about the influential family who once lived there.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025293f",
      name: "The Coaster at Goats on the Roof",
      Day: 5,
      time: "EVENING",
      description:
        "Have some fun at The Coaster at Goats on the Roof in Pigeon Forge, Tennessee. Experience a unique alpine coaster ride and enjoy the company of the resident goats.",
      mainImage: "",
    },

    {
      country: "64f58abceab052732025293f",
      name: "Provincetown",
      Day: 5,
      time: "MORNING",
      description:
        "Explore the world of Hollywood at the Hollywood Wax Museum Entertainment Center in Pigeon Forge, Tennessee. Pose for photos with lifelike wax figures of your favorite celebrities and learn about the history of Hollywood.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Titanic Pigeon Forge",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Enjoy a meal at the Hard Rock Cafe Pigeon Forge, where you can indulge in classic American cuisine while surrounded by rock memorabilia.",
      mainImage: "Titanic Pigeon Forge.jpg",
    },
    {
      country: "64f58abceab052732025293f",
      name: "Grand Majestic Dinner Theater",
      Day: 5,
      time: "EVENING",
      description:
        "Spend the day at Dollywood, an amusement park in Pigeon Forge, Tennessee, owned by country music star Dolly Parton. Enjoy a variety of rides, shows, and live entertainment.",
      mainImage: "",
    },
  ];

  const ToursDataTurkey = [
    {
      country: "64f58abceab0527320252940",
      name: "Hagia Sophia",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day with a visit to the Hagia Sophia, a magnificent Byzantine church turned mosque turned museum. Admire the stunning architecture and the beautiful mosaics inside.",
      mainImage: "Hagia Sophia.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Grand Bazaar",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Explore the vibrant Grand Bazaar, one of the largest and oldest covered markets in the world. Get lost in the maze of shops and stalls selling everything from jewelry to spices to Turkish carpets. Don't forget to haggle for the best prices!",
      mainImage: "Oasys MiniHollywood.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Deraliye Ottoman Cuisine",
      Day: 1,
      time: "EVENING",
      description:
        "Enjoy a traditional Turkish dinner at Deraliye Ottoman Cuisine, a top-rated restaurant known for its authentic Ottoman recipes and elegant ambiance.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252940",
      name: "Dolmabahçe Palace & the Maiden's Tower",
      Day: 2,
      time: "MORNING",
      description:
        "Take a cruise along the Bosphorus Strait, where you can enjoy panoramic views of Istanbul's iconic landmarks, such as the Dolmabahçe Palace and the Maiden's Tower.",
      mainImage: "Dolmabahçe Palace.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Topkapi Palace",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Visit the Topkapi Palace, the former residence of the Ottoman sultans. Explore the opulent rooms, the Harem, and the Treasury, which houses precious artifacts, including the famous Topkapi Dagger.",
      mainImage: "Topkapi Palace.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Çemberlitaş Hamamı",
      Day: 2,
      time: "EVENING",
      description:
        "Treat yourself to a Turkish bath experience at Çemberlitaş Hamamı, one of Istanbul's oldest and most luxurious bathhouses. Relax in the steam room, indulge in a traditional scrub, and enjoy a soothing massage.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252940",
      name: "Blue Mosque",
      Day: 3,
      time: "MORNING",
      description:
        "Start your day with a visit to the Blue Mosque, also known as the Sultan Ahmed Mosque. Admire its magnificent interior adorned with blue tiles and its impressive dome.",
      mainImage: "Blue Mosque.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Süleymaniye Mosque",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Explore the historic district of Sultanahmet, where you'll find the ancient Hippodrome, the Basilica Cistern, and the stunning Süleymaniye Mosque.",
      mainImage: "Süleymaniye Mosque.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Asitane Restaurant",
      Day: 3,
      time: "EVENING",
      description:
        "Dine at Asitane Restaurant, a renowned establishment that specializes in recreating authentic Ottoman cuisine. Enjoy a feast fit for a sultan, including dishes like lamb stew with apricots and almond pudding with rosewater.",
      mainImage: "Asitane Restaurant.jpg",
    },

    {
      country: "64f58abceab0527320252940",
      name: "Princes' Islands",
      Day: 3,
      time: "MORNING",
      description:
        "Start your day with a visit to the Blue Mosque, also known as the Sultan Ahmed Mosque. Admire its magnificent interior adorned with blue tiles and its impressive dome.",
      mainImage: "Princes' Islands.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Chora Church",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Explore the historic district of Sultanahmet, where you'll find the ancient Hippodrome, the Basilica Cistern, and the stunning Süleymaniye Mosque.",
      mainImage: "Chora Church.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Lokanta Maya",
      Day: 3,
      time: "EVENING",
      description:
        "Dine at Asitane Restaurant, a renowned establishment that specializes in recreating authentic Ottoman cuisine. Enjoy a feast fit for a sultan, including dishes like lamb stew with apricots and almond pudding with rosewater.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252940",
      name: "Istiklal Street",
      Day: 5,
      time: "MORNING",
      description:
        "Explore the vibrant neighborhood of Beyoğlu, home to the famous Istiklal Street. Wander along the bustling pedestrian street, lined with shops, cafes, and historic buildings.",
      mainImage: "Istiklal Street.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Istanbul Modern Art Museum",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Visit the Istanbul Modern Art Museum, which showcases contemporary Turkish art in a beautiful waterfront setting.",
      mainImage: "Istanbul Modern Art Museum.jpg",
    },
    {
      country: "64f58abceab0527320252940",
      name: "Lokanta Maya",
      Day: 5,
      time: "EVENING",
      description:
        "Enjoy dinner with a panoramic view at Mikla, a rooftop restaurant located on the top floor of the Marmara Pera Hotel. Savor the modern Turkish cuisine while taking in the stunning views of the city skyline.",
      mainImage: "",
    },
  ];

  const ToursDataItaly = [
    {
      country: "64f58abceab0527320252941",
      name: " First Cliff Walk",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day with a visit to the First Cliff Walk in Switzerland, a thrilling walkway that offers panoramic views of the Swiss Alps and the surrounding valleys. Take a cable car up to the starting point of the walkway for easy access.",
      mainImage: "First Cliff Walk.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Sigurtà Park (Parco Giardino Sigurtà)",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Head to Sigurtà Park in Italy, a beautiful garden that spans over 600 acres and features a variety of plants, flowers, and water features. Take a leisurely stroll through the park and enjoy the tranquility of nature.",
      mainImage: "Sigurtà Park (Parco Giardino Sigurtà).jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Parmesan Cheese Museum",
      Day: 1,
      time: "EVENING",
      description:
        "End your day with a visit to the Parmesan Cheese Museum in Italy, where you can learn about the history and production of Parmesan cheese. Take a guided tour and sample some authentic Parmesan cheese.",
      mainImage: "Parmesan Cheese Museum.jpg",
    },

    {
      country: "64f58abceab0527320252941",
      name: "Diamond Palace",
      Day: 2,
      time: "MORNING",
      description:
        "Explore the Diamond Palace in Italy, a stunning Renaissance palace that houses the National Art Gallery. Admire the collection of paintings and sculptures, including works by renowned artists such as Tintoretto and Giovanni Bellini.",
      mainImage: "Diamond Palace.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Nuraghe di Palmavera",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Visit the Nuraghe di Palmavera in Italy, a complex of ancient stone structures that date back to the Nuragic civilization. Take a guided tour to learn about the history and purpose of these unique buildings.",
      mainImage: "Nuraghe di Palmavera.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Glacier Canyon",
      Day: 2,
      time: "EVENING",
      description:
        "Spend the evening exploring Glacier Canyon in Switzerland, a dramatic gorge carved by glaciers. Take a hike along the canyon and marvel at the towering cliffs and cascading waterfalls.",
      mainImage: " Glacier Canyon.jpg",
    },

    {
      country: "64f58abceab0527320252941",
      name: " Calanques de Piana",
      Day: 3,
      time: "MORNING",
      description:
        "Start your day with a visit to the Calanques de Piana in France, a stunning natural wonder that features red granite cliffs and crystal-clear turquoise waters. Take a boat tour to explore the hidden coves and caves along the coastline.",
      mainImage: "Calanques de Piana.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Este Castle",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Explore the Este Castle in Italy, a medieval fortress that offers panoramic views of the city of Ferrara. Take a guided tour to learn about the history of the castle and its significance in Italian history.",
      mainImage: "Este Castle.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Rotunda of Xewkija",
      Day: 3,
      time: "EVENING",
      description:
        "End your day with a visit to the Rotunda of Xewkija in Malta, a stunning church known for its impressive dome. Take a guided tour to learn about the architecture and history of this beautiful religious site.s",
      mainImage: "Rotunda of Xewkija.jpg",
    },

    {
      country: "64f58abceab0527320252941",
      name: "Ducale Palace",
      Day: 4,
      time: "MORNING",
      description:
        "Start your day with a visit to the Ducale Palace in Italy, a magnificent palace that was once the residence of the Gonzaga family. Explore the grand halls and opulent rooms, and admire the stunning frescoes and artwork.",
      mainImage: "Ducale Palace.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Te Palace",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Visit the Te Palace in Italy, a masterpiece of Renaissance architecture and a UNESCO World Heritage site. Take a guided tour to learn about the history and significance of this stunning palace.",
      mainImage: "Te Palace.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Montecassino Abbey",
      Day: 4,
      time: "EVENING",
      description:
        "Spend the evening exploring the Montecassino Abbey in Italy, a historic abbey that is one of the most important Catholic sites in the world. Take a guided tour to learn about the abbey's role in World War II and its importance in Italian culture.",
      mainImage: "Montecassino Abbey.jpg",
    },

    {
      country: "64f58abceab0527320252941",
      name: "Ducale Palace",
      Day: 5,
      time: "MORNING",
      description:
        "Start your day with a visit to Villa Valmarana ai Nani in Italy, a beautiful villa adorned with frescoes by renowned artist Giambattista Tiepolo. Take a guided tour to learn about the history and significance of this stunning villa.",
      mainImage: "Ducale Palace.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Rhonda Walkway",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Explore the Rhonda Walkway in Spain, a scenic path that winds along the cliffs and offers breathtaking views of the surrounding countryside. Take a leisurely walk and enjoy the natural beauty of the area.",
      mainImage: "Rhonda Walkway.jpg",
    },
    {
      country: "64f58abceab0527320252941",
      name: "Piazza delle Erbe",
      Day: 5,
      time: "EVENING",
      description:
        "End your day with a visit to Piazza delle Erbe in Italy, a historic square in Verona that is known for its colorful buildings and lively atmosphere. Enjoy dinner at one of the outdoor cafes and soak in the vibrant ambiance.",
      mainImage: "Piazza delle Erbe.jpg",
    },
  ];

  const ToursDataMexico = [
    {
      country: "64f58abceab0527320252942",
      name: "Xocomil Water Park (Parque Acuático Xocomil)",
      Day: 1,
      time: "MORNING",
      description:
        "Start your trip in Mexico City and visit the Xochimilco neighborhood, known for its colorful trajineras (traditional Mexican boats) and floating gardens. Take a boat tour along the canals and enjoy live music and traditional Mexican food on board.",
      mainImage: "Xocomil Water Park (Parque Acuático Xocomil).jpg",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Xetulul Theme Park",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Head to the Xochimilco Ecological Park and Plant Market, where you can explore the extensive collection of plants and flowers and learn about traditional Mexican gardening techniques.",
      mainImage: "Xetulul Theme Park.jpg",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Frida Kahlo Museum",
      Day: 1,
      time: "EVENING",
      description:
        "Visit the Frida Kahlo Museum, also known as the Blue House, and admire the art and personal belongings of the famous Mexican artist. End your day with dinner at Pujol, a renowned restaurant that offers modern Mexican cuisine with a twist.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252942",
      name: "Xocomil Water Park (Parque Acuático Xocomil)",
      Day: 2,
      time: "MORNING",
      description:
        "Take a day trip to the Xocomil Water Park, located in Retalhuleu. Enjoy a variety of water slides, pools, and attractions for all ages.",
      mainImage: "",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Xetulul Theme Park",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Visit the Xetulul Theme Park, also located in Retalhuleu, and explore its six themed areas with rides, shows, and entertainment.",
      mainImage: "",
    },
    {
      country: "64f58abceab0527320252942",
      name: "El Cardenal",
      Day: 2,
      time: "EVENING",
      description:
        "Head back to Mexico City and have dinner at El Cardenal, a traditional Mexican restaurant known for its authentic cuisine and elegant atmosphere.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252942",
      name: "La Venta Park-Museum",
      Day: 3,
      time: "MORNING",
      description:
        "Explore the La Venta Park-Museum in Villahermosa, which houses a collection of Olmec artifacts and sculptures.",
      mainImage: "La Venta Park-Museum.jpg",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Visit the Ta",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Visit the Ta, a beautiful 17th-century church located in the heart of Villahermosa.",
      mainImage: "La Venta Park-Museum.jpg",
    },
    {
      country: "64f58abceab0527320252942",
      name: "La Pigua",
      Day: 3,
      time: "EVENING",
      description:
        "Enjoy dinner at La Pigua, a popular seafood restaurant known for its fresh fish and traditional Mexican dishes.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252942",
      name: "Arizona-Sonora Desert Museum",
      Day: 4,
      time: "MORNING",
      description:
        "Take a day trip to the Arizona-Sonora Desert Museum, located in Tucson, Arizona. Explore the museum's exhibits on desert plants, animals, and ecosystems, and enjoy scenic hiking trails.",
      mainImage: "Arizona-Sonora Desert Museum.jpg",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Mission San Xavier del Bac",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Visit the Mission San Xavier del Bac, a historic Spanish mission known for its beautiful architecture and religious artifacts.",
      mainImage: "La Venta Park-Museum.jpg",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Cafe Poca Cosa",
      Day: 4,
      time: "EVENING",
      description:
        "Have dinner at Cafe Poca Cosa, a local favorite that serves delicious Mexican cuisine with a creative twist.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252942",
      name: "Copper Canyon",
      Day: 5,
      time: "MORNING",
      description:
        "Take a train ride through the Copper Canyon, one of Mexico's most spectacular natural wonders. Enjoy breathtaking views of the canyon's rugged landscapes and indigenous villages.",
      mainImage: "Copper Canyon.jpg",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Tarahumara Indian Museum",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Explore the town of Creel, located in the heart of the Copper Canyon, and visit the Tarahumara Indian Museum to learn about the indigenous culture of the region.",
      mainImage: "",
    },
    {
      country: "64f58abceab0527320252942",
      name: "Restaurante Hotel Parador",
      Day: 5,
      time: "EVENING",
      description:
        "Have dinner at Restaurante Hotel Parador, a charming restaurant that serves traditional Mexican dishes with a gourmet touch.",
      mainImage: "",
    },
  ];

  const ToursDataUK = [
    {
      country: "64f58abceab0527320252943",
      name: " Museum De Lakenhal",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day with a visit to the Museum De Lakenhal in Leiden, Netherlands. This museum showcases the history and art of the city, including works by famous Dutch artists such as Rembrandt.",
      mainImage: "Museum De Lakenhal.jpg",
    },
    {
      country: "64f58abceab0527320252943",
      name: "Utah Beach D-Day Museum",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Head to Utah Beach D-Day Museum (Musée du Débarquement) in Normandy, France. This museum provides a comprehensive and immersive experience about the D-Day landings during World War II.",
      mainImage: "Utah Beach D-Day Museum.jpg",
    },
    {
      country: "64f58abceab0527320252943",
      name: "Sainte-Mere-Eglise",
      Day: 1,
      time: "EVENING",
      description:
        "Visit Sainte-Mere-Eglise, a historic town in Normandy known for its association with the D-Day landings. Explore the Airborne Museum (Musée Airborne) to learn about the experiences of paratroopers during the war.",
      mainImage: "Sainte-Mere-Eglise.jpg",
    },

    {
      country: "64f58abceab0527320252943",
      name: "Bastogne War Museum",
      Day: 2,
      time: "MORNING",
      description:
        "Take a trip to the Bastogne War Museum in Belgium, which offers a detailed account of the Battle of the Bulge during World War II. Learn about the events that took place in this region and the impact of the war on the local population.",
      mainImage: "Bastogne War Museum.jpg",
    },
    {
      country: "64f58abceab0527320252943",
      name: "Rheinisches Landesmuseum Trier",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Visit the Rheinisches Landesmuseum Trier in Trier, Germany, one of the oldest cities in Germany. Explore the museum's extensive collection of Roman artifacts, including the famous Porta Nigra.",
      mainImage: "Rheinisches Landesmuseum Trier.jpg",
    },
    {
      country: "64f58abceab0527320252943",
      name: "Baden-Baden",
      Day: 2,
      time: "EVENING",
      description:
        "Enjoy the evening in Baden-Baden, a spa town known for its thermal baths and luxurious resorts. Take a relaxing soak in the healing waters and indulge in a gourmet dinner at one of the town's top-rated restaurants.",
      mainImage: "Baden-Baden.jpg",
    },
  ];

  const ToursDataGermany = [
    {
      country: "64f58abceab0527320252944",
      name: "Rheinisches Landesmuseum Trier",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day with a visit to the Rheinisches Landesmuseum Trier, one of Germany's oldest museums. Explore the exhibitions that showcase the rich history and cultural heritage of the region.",
      mainImage: "Rheinisches Landesmuseum Trier.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Mauthausen",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Take a trip to Fátima, a major Catholic pilgrimage site in Portugal. Visit the Sanctuary of Fátima and attend a religious ceremony or explore the surrounding area, which is known for its beautiful natural landscapes.",
      mainImage: "Mauthausen.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Exploring near by",
      Day: 1,
      time: "EVENING",
      description:
        "Enjoy a traditional German dinner at a local restaurant, where you can try classic dishes like sauerkraut, bratwurst, and schnitzel.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252944",
      name: "Regensburg Cathedral",
      Day: 2,
      time: "MORNING",
      description:
        "Explore the historic city of Regensburg, a UNESCO World Heritage site known for its well-preserved medieval architecture. Visit the Regensburg Cathedral, one of the city's most iconic landmarks, and take a walk along the Danube Cycle Path for stunning views of the river.",
      mainImage: "Regensburg Cathedral.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Marienberg Fortress",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Visit the Marienberg Fortress in Würzburg, which offers panoramic views of the city and the Main River. Explore the fortress and learn about its history as a strategic stronghold.",
      mainImage: "Marienberg Fortress.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Pilsner Urquell Brewery",
      Day: 2,
      time: "EVENING",
      description:
        "Indulge in a beer tasting and tour at the Pilsner Urquell Brewery, one of the oldest and most famous breweries in the Czech Republic.",
      mainImage: "Pilsner Urquell Brewery.jpg",
    },

    {
      country: "64f58abceab0527320252944",
      name: "Regensburg Cathedral",
      Day: 3,
      time: "MORNING",
      description:
        "Take a scenic drive along the Romantic Road, a popular tourist route that stretches from Würzburg to Füssen. Enjoy the picturesque landscapes and charming villages along the way.",
      mainImage: "Regensburg Cathedral.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Old Stone Bridge",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Explore the historic city of Rothenburg ob der Tauber, one of the best-preserved medieval towns in Germany. Take a walk along the city walls and visit the Old Stone Bridge, a beautiful example of medieval architecture.",
      mainImage: "Old Stone Bridge.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Traditional Bavarian Dinner",
      Day: 3,
      time: "EVENING",
      description:
        "Enjoy a traditional Bavarian dinner at a local beer garden, where you can sample regional specialties like pretzels, sausages, and beer.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252944",
      name: "SEA LIFE® Hannover",
      Day: 4,
      time: "MORNING",
      description:
        "Visit the SEA LIFE® Hannover, an aquarium that houses a variety of marine life, including sharks, sea turtles, and penguins. Explore the different exhibits and learn about the importance of marine conservation.",
      mainImage: "SEA LIFE® Hannover.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Moser Glassworks",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Take a trip to the Moser Glassworks in Karlovy Vary, Czech Republic, and watch skilled artisans create beautiful glassware using traditional techniques. Take a tour of the glassworks and browse the shop for unique souvenirs.",
      mainImage: "Moser Glassworks.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "Universum Bremen",
      Day: 4,
      time: "EVENING",
      description:
        "Explore the Universum Bremen, a science center and museum that offers interactive exhibits on topics like space, technology, and the environment. End your night with a visit to a local beer bar, where you can try a variety of German beers.",
      mainImage: "Universum Bremen.jpg",
    },

    {
      country: "64f58abceab0527320252944",
      name: "Groninger Museum",
      Day: 5,
      time: "MORNING",
      description:
        "Explore the Groninger Museum in Groningen, Netherlands, which is known for its unique and modern architecture. Visit the different galleries that showcase contemporary art, design, and history.",
      mainImage: "Groninger Museum.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "SEA LIFE® Oberhausen",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Visit the SEA LIFE® Oberhausen, one of Germany's largest aquariums, and get up close to a variety of marine creatures. Learn about the importance of ocean conservation and watch feeding sessions.",
      mainImage: "SEA LIFE® Oberhausen.jpg",
    },
    {
      country: "64f58abceab0527320252944",
      name: "German Football Museum",
      Day: 5,
      time: "EVENING",
      description:
        "Visit the German Football Museum in Dortmund, which offers an interactive and immersive experience for football fans. Learn about the history of the sport in Germany and test your skills in the interactive exhibits.",
      mainImage: "German Football Museum.jpg",
    },
  ];

  const ToursDataGreece = [
    {
      country: "64f58abceab0527320252945",
      name: "Paradise Beach",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day at Paradise Beach, one of the most famous and beautiful beaches in Greece. Relax on the golden sands, swim in the crystal-clear waters, and soak up the sun.",
      mainImage: "Paradise Beach.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Pergamon",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Visit Pergamon, an ancient city known for its impressive ruins and archaeological sites. Explore the Acropolis, the Theater, and the Library, and learn about the history of this once-thriving city.",
      mainImage: "Pergamon.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Museum of the Olive and Greek Olive Oil",
      Day: 1,
      time: "EVENING",
      description:
        "Immerse yourself in Greek culture and history at the Museum of the Olive and Greek Olive Oil. Discover the importance of the olive tree in Greek civilization and sample some delicious olive oil.",
      mainImage: "Museum of the Olive and Greek Olive Oil.jpg",
    },

    {
      country: "64f58abceab0527320252945",
      name: "Agios Nikolaos",
      Day: 2,
      time: "MORNING",
      description:
        "Explore the charming town of Agios Nikolaos, located on the northeastern coast of Crete. Visit the Lake Voulismeni, a picturesque lake surrounded by cafes and shops, and take a walk along the waterfront promenade.",
      mainImage: "Agios Nikolaos.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Bergama Asklepion",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Head to the Bergama Asklepion, an ancient healing center that was dedicated to the Greek god of medicine, Asclepius. Explore the ruins, including the Temple of Asclepius and the Roman Theater, and learn about ancient medical practices.",
      mainImage: "Bergama Asklepion.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Delicious Dinner",
      Day: 2,
      time: "EVENING",
      description:
        "Enjoy a delicious dinner at a traditional Greek taverna in Agios Nikolaos, where you can savor local specialties such as moussaka, souvlaki, and tzatziki.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252945",
      name: "Day trip to Mystras",
      Day: 3,
      time: "MORNING",
      description:
        "Take a day trip to Mystras, a UNESCO World Heritage site that was once a fortified town in the Peloponnese. Explore the well-preserved ruins, including the Palace of the Despots, the Pantanassa Monastery, and the Church of Agios Dimitrios.",
      mainImage: "Mystras.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Myrtos Beach",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Relax and unwind at Myrtos Beach, one of the most stunning beaches in Greece. With its turquoise waters and dramatic cliffs, it's the perfect spot to swim, sunbathe, and enjoy the natural beauty of the island.",
      mainImage: "Myrtos Beach.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Narrow Streets of Plaka",
      Day: 3,
      time: "EVENING",
      description:
        "Wander through the narrow streets of Plaka, the oldest neighborhood in Athens, and soak up the lively atmosphere. Explore the shops, cafes, and restaurants, and don't forget to visit the Acropolis Museum to learn more about ancient Greek history.",
      mainImage: "Plaka.jpg",
    },

    {
      country: "64f58abceab0527320252945",
      name: "Theatre of Epidaurus",
      Day: 4,
      time: "MORNING",
      description:
        "Journey to the Theatre of Epidaurus, one of the best-preserved ancient Greek theaters in the world. Marvel at the acoustics and imagine what it was like to watch a play in this magnificent setting.",
      mainImage: "SEA LIFE® Hannover.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Meteora",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Explore the mystical monasteries of Meteora, perched atop towering rock formations. Take a guided tour to learn about the history and significance of these monasteries, and enjoy breathtaking views of the surrounding landscape.",
      mainImage: "Meteora.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Greek Dinner",
      Day: 4,
      time: "EVENING",
      description:
        "Enjoy a traditional Greek dinner in a Local taverna in Kalambaka, the town located at the foot of the Meteora rocks. Try dishes like moussaka, souvlaki, and Greek salad, and don't forget to sample some local wine or ouzo.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252945",
      name: "Ancient City of Mycenae",
      Day: 5,
      time: "MORNING",
      description:
        "Visit the ancient city of Mycenae, home to the legendary Lion Gate and the tomb of Agamemnon. Explore the ruins and learn about the rich history and mythology of this once-powerful city.",
      mainImage: "Mycenae.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Zante Water Village",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Have a splashing good time at Zante Water Village, a water park located on the island of Zakynthos. Enjoy thrilling water slides, lazy rivers, and wave pools, and have fun with your family and friends.",
      mainImage: "Zante Water Village.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Shipwreck Beach",
      Day: 5,
      time: "EVENING",
      description:
        "Take a boat tour to Navagio Beach, also known as Shipwreck Beach, one of the most iconic and photographed beaches in Greece. Admire the crystal-clear turquoise waters and the rusted shipwreck that gave the beach its name.",
      mainImage: "Shipwreck Beach.jpg",
    },

    {
      country: "64f58abceab0527320252945",
      name: "Kourouta Beach",
      Day: 6,
      time: "MORNING",
      description:
        "Spend a relaxing day at Kourouta Beach, a beautiful sandy beach on the west coast of Greece. Swim in the clear waters, sunbathe on the golden sands, and enjoy a picnic with stunning views.",
      mainImage: "Mycenae.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Ancient City of Hierapolis",
      Day: 6,
      time: "AFTERNOON",
      description:
        "Explore the ancient city of Hierapolis, an archaeological site near Pamukkale in Turkey. Discover the well-preserved ruins, including the Roman Theater, the Necropolis, and the Hierapolis Archaeological Museum.",
      mainImage: "Zante Water Village.jpg",
    },
    {
      country: "64f58abceab0527320252945",
      name: "Pamukkale Thermal Pools",
      Day: 6,
      time: "EVENING",
      description:
        "Relax and rejuvenate in the Pamukkale Thermal Pools, a natural wonder known for its terraces of mineral-rich hot springs. Take a dip in the warm waters and enjoy the healing properties of the thermal pools.",
      mainImage: "Pamukkale Thermal Pools.jpg",
    },
  ];

  const ToursDataAustria = [
    {
      country: "64f58abceab0527320252946",
      name: "Hallstatt Museum",
      Day: 1,
      time: "MORNING",
      description:
        "Start your day in Hallstatt, a picturesque village known for its stunning lake and charming alpine houses. Visit the Hallstatt Museum to learn about the history and culture of the region. Take a leisurely stroll along the lakefront and soak in the breathtaking views.",
      mainImage: "Hallstatt Museum.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Hohenschwangau Castle",
      Day: 1,
      time: "AFTERNOON",
      description:
        "Head to Hohenschwangau Castle, located in the Bavarian Alps near the town of Füssen. Explore the castle and its beautiful surroundings, including the nearby Alpsee Lake. Don't miss the opportunity to visit Neuschwanstein Castle, a fairytale-like castle that inspired Disney's Sleeping Beauty castle.",
      mainImage: "Hohenschwangau Castle.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Traditional Bavarian Dinner",
      Day: 1,
      time: "EVENING",
      description:
        "Enjoy a traditional Bavarian dinner at a local restaurant in the area, where you can savor dishes like bratwurst, sauerkraut, and pretzels.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252946",
      name: "Zugspitze",
      Day: 2,
      time: "MORNING",
      description:
        "Take a cable car ride to the top of Zugspitze, the highest peak in Germany, for stunning panoramic views of the surrounding mountains and valleys. Explore the summit and enjoy some outdoor activities like hiking or skiing, depending on the season.",
      mainImage: "Zugspitze.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Eagle's Nest",
      Day: 2,
      time: "AFTERNOON",
      description:
        "Visit the Eagle's Nest, a mountain retreat built for Adolf Hitler. Take a bus or hike up to the summit and explore the historic site, which offers breathtaking views of the Bavarian Alps.",
      mainImage: "Eagle's Nest.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Local beer garden",
      Day: 2,
      time: "EVENING",
      description:
        "Head to a Local beer garden and enjoy a refreshing Bavarian beer along with some traditional German cuisine.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252946",
      name: "Mauthausen",
      Day: 3,
      time: "MORNING",
      description:
        "Take a day trip to Mauthausen, a former concentration camp located near the town of Mauthausen. Take a guided tour to learn about the dark history of the camp and pay tribute to the victims of the Holocaust.",
      mainImage: "Mauthausen.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Oberammergau",
      Day: 3,
      time: "AFTERNOON",
      description:
        "Explore the charming village of Oberammergau, known for its traditional Bavarian houses and woodcarving tradition. Visit a local woodcarving shop and watch the artisans at work. Don't miss the opportunity to see the world-famous Oberammergau Passion Play, performed every 10 years.",
      mainImage: "Oberammergau.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Traditional Bavarian Dinner",
      Day: 3,
      time: "EVENING",
      description:
        "Enjoy a traditional Bavarian dinner at a local restaurant, where you can try dishes like schnitzel, sauerbraten, and apple strudel.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252946",
      name: "Swarovski Crystal Worlds",
      Day: 4,
      time: "MORNING",
      description:
        "Visit the Swarovski Crystal Worlds in Wattens, a museum and theme park dedicated to the art and history of crystal. Explore the stunning Crystal Dome and enjoy interactive exhibits and installations.",
      mainImage: "Swarovski Crystal Worlds.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Salzburg Salt Mines",
      Day: 4,
      time: "AFTERNOON",
      description:
        "Take a trip to Salzburg and visit the Salzburg Salt Mines. Take a guided tour to learn about the history of salt mining in the region and explore the underground tunnels. Don't miss the opportunity to visit Mozart's birthplace and explore the charming old town of Salzburg.",
      mainImage: "Salzburg Salt Mines.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Classical Music Concert",
      Day: 4,
      time: "EVENING",
      description:
        "Attend a classical music concert in Salzburg, where you can enjoy performances of Mozart's music in a historic venue.",
      mainImage: "",
    },

    {
      country: "64f58abceab0527320252946",
      name: "Regensburg Cathedral",
      Day: 5,
      time: "MORNING",
      description:
        "Visit Regensburg Cathedral, a stunning Gothic cathedral located in the heart of Regensburg. Take a guided tour to learn about the history and architecture of the cathedral.",
      mainImage: "Regensburg Cathedral.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Lake Misurina",
      Day: 5,
      time: "AFTERNOON",
      description:
        "Take a day trip to Lake Misurina, a beautiful alpine lake located in the Dolomites. Enjoy a leisurely walk along the lake and take in the breathtaking mountain views.",
      mainImage: "Lake Misurina.jpg",
    },
    {
      country: "64f58abceab0527320252946",
      name: "Traditional Italian cuisine",
      Day: 5,
      time: "EVENING",
      description:
        "Head to a local restaurant and enjoy some traditional Italian cuisine, such as pasta, pizza, and gelato.",
      mainImage: "",
    },
  ];

  const ToursDataEgypt = [
    {
      country: "64f58abceab0527320252947",
      Day: 1,
      time: "MORNING",
      name: "Coral Beach Nature Reserve",
      description:
        "Start your day with a visit to the Coral Beach Nature Reserve, located in the city of Dahab. Explore the vibrant coral reefs and go snorkeling or diving to marvel at the incredible marine life. Don't forget to bring your camera to capture the colorful underwater world.",
      mainImage: "Coral Beach Nature Reserve.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 1,
      time: "AFTERNOON",
      name: "Mosaic Map",
      description:
        "Head to the city of Madaba to see the famous Mosaic Map, a 6th-century Byzantine mosaic map of the Holy Land. Marvel at the intricate details and historical significance of this ancient artwork. Afterward, explore the local markets and shops to find unique souvenirs.",
      mainImage: "Mosaic Map.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 1,
      time: "EVENING",
      name: "Milk Grotto",
      description:
        "Visit the Milk Grotto, a small chapel in Bethlehem believed to be the place where the Holy Family sought refuge during their flight to 64f58abceab0527320252947. Experience the peaceful atmosphere and learn about the religious significance of this sacred site.",
      mainImage: "EVENING Milk Grotto.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 2,
      time: "MORNING",
      name: "Wadi Rum",
      description:
        "Embark on a desert adventure to Wadi Rum, also known as the Valley of the Moon. Take a jeep tour to explore the stunning sandstone cliffs, rock formations, and ancient petroglyphs. Enjoy a traditional Bedouin lunch and immerse yourself in the rich culture of the desert.",
      mainImage: "Wadi Rum.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 2,
      time: "AFTERNOON",
      name: "Little Petra (Siq al-Barid)",
      description:
        "Visit Little Petra (Siq al-Barid), a smaller but equally impressive version of the famous archaeological site of Petra. Explore the narrow canyons and admire the intricate rock carvings and tombs. Take a guided tour to learn about the history and significance of this hidden gem.",
      mainImage: "Little Petra.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 2,
      time: "EVENING",
      name: "Wadi Rum",
      description:
        "Witness a breathtaking sunset in the desert of Wadi Rum and enjoy a traditional Bedouin dinner under the starry sky. Listen to Bedouin music and stories around a campfire, creating memories that will last a lifetime.",
      mainImage: "Wadi Rum.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 3,
      time: "MORNING",
      name: "Bahariya Oasis",
      description:
        "Embark on an adventure to Bahariya Oasis, a lush oasis in the Western Desert of 64f58abceab0527320252947. Explore the hot springs, the Black Desert, and the unique rock formations of the White Desert.",
      mainImage: "Bahariya Oasis.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 3,
      time: "AFTERNOON",
      name: "Abydos",
      description:
        "Visit the ancient city of Abydos, one of the oldest archaeological sites in 64f58abceab0527320252947. Discover the intricately carved temples and learn about the religious significance of the city.",
      mainImage: "Abydos.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 3,
      time: "EVENING",
      name: "Alexandria National Museum",
      description:
        "Explore the vibrant city of Alexandria and visit the Alexandria National Museum, which houses a vast collection of artifacts that showcase the city's rich history and heritage. Enjoy a traditional 64f58abceab0527320252947ian dinner at a local restaurant.",
      mainImage: "Alexandria National Museum.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 4,
      time: "MORNING",
      name: "Mt. Nebo",
      description:
        "Start your day with a visit to Mt. Nebo, a biblical site where Moses is said to have seen the Promised Land before he died. Enjoy panoramic views of the Jordan Valley and visit the Moses Memorial Church.",
      mainImage: "Mt. Nebo.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 4,
      time: "AFTERNOON",
      name: "Montazah Palace Gardens",
      description:
        "Explore the beautiful Montazah Palace Gardens in Alexandria, a lush oasis of gardens and palaces overlooking the Mediterranean Sea. Take a leisurely stroll through the gardens and relax by the beach.",
      mainImage: "Montazah Palace Gardens.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 4,
      time: "EVENING",
      name: "Roman Amphitheatre",
      description:
        "Visit the Roman Amphitheatre in Amman, Jordan, an impressive ancient amphitheatre that dates back to the 2nd century. Catch a performance or simply enjoy the stunning architecture of the venue.",
      mainImage: "Roman Amphitheatre.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 5,
      time: "MORNING",
      name: "Giftun Islands",
      description:
        "Take a boat trip to the Giftun Islands, a group of small islands located near Hurghada. Snorkel or dive in the crystal-clear waters and explore the vibrant coral reefs teeming with marine life.",
      mainImage: "Giftun Islands.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 5,
      time: "AFTERNOON",
      name: "Citadel of Qaitbay (Fort Qaitbey)",
      description:
        "Explore the Citadel of Qaitbay (Fort Qaitbey), a historic fortress located on the Mediterranean coast in Alexandria. Discover the rich history of the citadel and enjoy panoramic views of the city and the sea.",
      mainImage: "Citadel of Qaitbay.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 5,
      time: "EVENING",
      name: "El Alamein War Cemetery and Museum",
      description:
        "Visit the El Alamein War Cemetery and Museum, a memorial site dedicated to the soldiers who lost their lives during the Battle of El Alamein in World War II. Reflect on the history and pay tribute to the fallen soldiers.",
      mainImage: "El Alamein War Cemetery and Museum.jpg",
    },

    {
      country: "64f58abceab0527320252947",
      Day: 6,
      time: "EVENING",
      name: "Abu Simbel Temples",
      description:
        "Take a trip to the Abu Simbel Temples, located in the southern part of Egypt. Marvel at the colossal statues and intricate carvings of these ancient temples, which were relocated to higher ground to save them from the rising waters of Lake Nasser. Explore the interior chambers and learn about the history and significance of these UNESCO World Heritage sites.",
      mainImage: "Abu Simbel Temples.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 6,
      time: "EVENING",
      name: "Bahariya Oasis",
      description:
        "Visit the Bahariya Oasis, a lush and fertile oasis in the Western Desert. Take a camel ride through the palm groves and explore the ancient ruins and hot springs. Immerse yourself in the tranquility of the oasis and enjoy the natural beauty of the surroundings.",
      mainImage: "Bahariya Oasis.jpg",
    },
    {
      country: "64f58abceab0527320252947",
      Day: 6,
      time: "EVENING",
      name: "Abydos",
      description:
        "Spend a relaxing evening in the Bahariya Oasis, enjoying the peaceful atmosphere and stargazing in the clear desert sky. Experience traditional Bedouin hospitality and savor a delicious dinner prepared with local ingredients.",
      mainImage: "Abydos.jpg",
    },
  ];

  const ToursDataMorocco = [
    {
      country: "64f58abceab0527320252948",
      Day: 1,
      time: "MORNING",
      name: "Kasbah Amridil",
      description:
        "Start your day with a visit to the enchanting Kasbah Amridil, a fortified village located in the Draa Valley. Explore the labyrinthine streets, admire the traditional architecture, and learn about the history and culture of the region.",
      mainImage: "Kasbah Amridil.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 1,
      time: "AFTERNOON",
      name: "Erg Chigaga",
      description:
        "Embark on an adventure to Erg Chigaga, one of the largest sand dunes in the Moroccan Sahara Desert. Ride a camel through the desert, experience a breathtaking sunset over the dunes, and spend the night in a traditional Berber camp, where you can enjoy a delicious dinner and traditional music under the starry sky.",
      mainImage: "Erg Chigaga.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 1,
      time: "EVENING",
      name: "Morocco Sahara Desert",
      description:
        "Immerse yourself in the tranquility of the Sahara Desert and take in the breathtaking beauty of the desert landscape. Relax around a campfire, listen to traditional storytelling, and marvel at the millions of stars that light up the night sky.",
      mainImage: "Morocco Sahara Desert.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 2,
      time: "MORNING",
      name: "Atlas Film Studios",
      description:
        "Visit the Atlas Film Studios, known as the 'Hollywood of 64f58abceab0527320252948,' where many famous movies and TV shows have been filmed. Take a guided tour of the studios and explore the sets, including those used in movies like 'Gladiator' and 'Lawrence of Arabia.'",
      mainImage: "Atlas Film Studios.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 2,
      time: "AFTERNOON",
      name: "Kasbah of the Udayas (Casbah des Oudaïas)",
      description:
        "Explore the Kasbah of the Udayas (Casbah des Oudaïas), a historic fortress located in the capital city of Rabat. Wander through the narrow streets, admire the traditional blue and white houses, and enjoy panoramic views of the Atlantic Ocean.",
      mainImage: "Kasbah of the Udayas.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 2,
      time: "EVENING",
      name: "Essaouira Beach (Plage d'Essaouira)",
      description:
        "Travel to the coastal town of Essaouira and relax on Essaouira Beach (Plage d'Essaouira). Take a leisurely stroll along the shore, watch the sunset over the ocean, and indulge in fresh seafood at one of the beachfront restaurants.",
      mainImage: "Essaouira Beach.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 3,
      time: "MORNING",
      name: "Casablanca Central Market (Marché Central de Casablanca)",
      description:
        "Explore the vibrant city of Casablanca and visit the Casablanca Central Market (Marché Central de Casablanca). Immerse yourself in the bustling atmosphere, browse the stalls selling fresh produce, spices, and handicrafts, and sample local delicacies.",
      mainImage: "Casablanca Central Market.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 3,
      time: "AFTERNOON",
      name: "Old Medina of Casablanca (Ancienne Medina)",
      description:
        "Discover the charm of the Old Medina of Casablanca (Ancienne Medina). Wander through the narrow streets, admire the traditional architecture, and visit the Hassan II Mosque, one of the largest mosques in the world.",
      mainImage: "Old Medina of Casablanca.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 3,
      time: "EVENING",
      name: "Souk el Had",
      description:
        "Experience the vibrant atmosphere of Souk el Had, one of the largest traditional markets in 64f58abceab0527320252948. Browse the stalls selling everything from spices and textiles to traditional Moroccan handicrafts and souvenirs.",
      mainImage: "Souk el Had.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 4,
      time: "MORNING",
      name: "Tizi-n'Tichka Pass",
      description:
        "Journey through the stunning landscapes of the High Atlas Mountains and cross the Tizi-n'Tichka Pass, which offers breathtaking views of the surrounding valleys and peaks. Stop along the way to admire the panoramic vistas and take photos.",
      mainImage: "Tizi-n'Tichka Pass.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 4,
      time: "AFTERNOON",
      name: "Todra Gorge (Todgha Gorge)",
      description:
        "Explore the Todra Gorge (Todgha Gorge), a dramatic canyon known for its towering cliffs and crystal-clear river. Take a leisurely walk through the gorge, marvel at the rock formations, and enjoy the peaceful ambiance.",
      mainImage: "Todra Gorge.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 4,
      time: "EVENING",
      name: "Quartier Habous (New Medina)",
      description:
        "Take a stroll through the Quartier Habous (New Medina) in Casablanca, a neighborhood known for its traditional Moroccan architecture and bustling souks. Browse the shops selling carpets, leather goods, and spices, and savor a cup of traditional Moroccan tea at a local café.",
      mainImage: "Quartier Habous.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 5,
      time: "MORNING",
      name: "Kasbah of Aït Ben Haddou (Ksar of Ait Benhaddou)",
      description:
        "Visit the UNESCO World Heritage site of the Kasbah of Aït Ben Haddou (Ksar of Ait Benhaddou), a fortified village that has been featured in many movies, including 'Game of Thrones.' Explore the narrow alleys and climb to the top for panoramic views of the surrounding desert.",
      mainImage: "Kasbah of Aït Ben Haddou.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 5,
      time: "AFTERNOON",
      name: "Agadir Beach (Plage d’Agadir)",
      description:
        "Relax on Agadir Beach (Plage d’Agadir), a beautiful sandy beach that stretches for miles along the Atlantic coast. Take a dip in the refreshing waters, soak up the sun, and enjoy a beachside lunch at one of the many restaurants.",
      mainImage: "Agadir Beach.jpg",
    },
    {
      country: "64f58abceab0527320252948",
      Day: 5,
      time: "EVENING",
      name: "Hassan Tower (Tour Hassan)",
      description:
        "Visit the Hassan Tower (Tour Hassan), a minaret of an incomplete mosque in Rabat. Admire the intricate architectural details and enjoy the panoramic views of the city from the top of the tower.",
      mainImage: "Hassan Tower.jpg",
    },
  ];

  const ToursDataSouthAfrica = [
    {
      country: "64f58abceab0527320252949",
      Day: 1,
      time: "MORNING",
      name: "Franschhoek Motor Museum",
      description:
        "Start your day with a visit to the Franschhoek Motor Museum, located in the scenic town of Franschhoek in the Western Cape. Explore the extensive collection of vintage cars and motorcycles from different eras.",
      mainImage: "Franschhoek Motor Museum.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 1,
      time: "AFTERNOON",
      name: "Hartbeespoort Dam",
      description:
        "Head to the Hartbeespoort Dam, a popular recreational area near Johannesburg. Take a boat cruise on the dam and enjoy the beautiful views of the surrounding mountains.",
      mainImage: "Hartbeespoort Dam.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 1,
      time: "EVENING",
      name: "Addo Elephant National Park",
      description:
        "End your day with a visit to Addo Elephant National Park, located in the Eastern Cape. Embark on a thrilling safari to spot elephants, lions, and other wildlife in their natural habitat.",
      mainImage: "Addo Elephant National Park.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 2,
      time: "MORNING",
      name: "Mpumalanga Panorama Route",
      description:
        "Explore the stunning Mpumalanga Panorama Route, which offers breathtaking views of waterfalls, canyons, and panoramic landscapes. Visit attractions like God's Window, Bourke's Luck Potholes, and Mac Mac Falls.",
      mainImage: "Mpumalanga Panorama Route.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 2,
      time: "AFTERNOON",
      name: "Boschendal Wine Estate",
      description:
        "Visit the Boschendal Wine Estate, one of the oldest wine estates in South Africa. Take a tour of the vineyards and enjoy wine tasting sessions.",
      mainImage: "Boschendal Wine Estate.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 2,
      time: "EVENING",
      name: "Tsitsikamma National Park",
      description:
        "Head to Tsitsikamma National Park, located along the Garden Route. Take a hike along the famous Otter Trail or enjoy a thrilling zip-lining experience through the forest.",
      mainImage: "Tsitsikamma National Park.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 3,
      time: "MORNING",
      name: "Bloukrans Bridge",
      description:
        "Start your day with an adrenaline rush by bungee jumping off the Bloukrans Bridge, the highest commercial bungee jump in the world. Afterward, visit the Delaire Graff Estate, a luxurious wine estate with stunning views of the Stellenbosch Valley.",
      mainImage: "Bloukrans Bridge.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 3,
      time: "AFTERNOON",
      name: "Knysna",
      description:
        "Explore the charming town of Knysna, known for its beautiful lagoon and natural attractions. Take a boat tour to the Knysna Heads and enjoy fresh seafood at one of the waterfront restaurants.",
      mainImage: "Knysna.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 3,
      time: "EVENING",
      name: "Monkeyland Primate Sanctuary",
      description:
        "Visit Monkeyland Primate Sanctuary, located in the heart of the Garden Route. Take a guided tour to learn about different primate species and their conservation efforts.",
      mainImage: "Monkeyland Primate Sanctuary.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 4,
      time: "MORNING",
      name: "Mandela House",
      description:
        "Start your day with a visit to Mandela House in Soweto, the former home of Nelson Mandela. Explore the museum and learn about the life and legacy of the iconic South African leader.",
      mainImage: "Mandela House.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 4,
      time: "AFTERNOON",
      name: "Voortrekker Monument",
      description:
        "Take a trip to the Voortrekker Monument, a massive granite structure that commemorates the Voortrekkers who settled in South Africa. Enjoy panoramic views of Pretoria from the top of the monument.",
      mainImage: "Voortrekker Monument.jpg",
    },
    {
      country: "64f58abceab0527320252949",
      Day: 4,
      time: "EVENING",
      name: "Tenikwa Wildlife Centre",
      description:
        "End your day with a visit to the Tenikwa Wildlife Centre, located near Plettenberg Bay. Take a guided tour to see various wildlife species, including cheetahs and African wildcats.",
      mainImage: "Tenikwa Wildlife Centre.jpg",
    },
  ];

  const ToursDataTunisia = [
    {
      country: "64f58abceab052732025294a",
      Day: 1,
      time: "MORNING",
      name: "National Bardo Museum (Musée National du Bardo)",
      description:
        "Start your day with a visit to the National Bardo Museum (Musée National du Bardo), located in the capital city of Tunis. This museum is known for its impressive collection of ancient Roman mosaics, which are considered some of the finest in the world. Explore the different galleries and learn about Tunisia's rich history and cultural heritage.",
      mainImage: "National Bardo Museum.jpg",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 1,
      time: "AFTERNOON",
      name: "Medina of Tunis",
      description:
        "After visiting the museum, head to the Medina of Tunis, a UNESCO World Heritage site. Take a walk through the narrow streets and alleys, and explore the traditional markets (souks) where you can find local crafts, spices, and textiles. Don't forget to stop by the Zitouna Mosque, one of the oldest and most important mosques in Tunisia.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 1,
      time: "EVENING",
      name: "Dar El Jeld",
      description:
        "For dinner, try the local cuisine at Dar El Jeld, a renowned restaurant located in a beautifully restored 18th-century mansion in the heart of the Medina. Enjoy traditional Tunisian dishes such as couscous, brik (a savory pastry), and tagine, accompanied by a glass of mint tea.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 2,
      time: "MORNING",
      name: "Sidi Bou Said & Ennejma Ezzahra Palace",
      description:
        "Explore the historic neighborhood of Sidi Bou Said, located just outside of Tunis. Take a walk through the cobblestone streets lined with blue and white houses, and enjoy panoramic views of the Mediterranean Sea. Visit the Ennejma Ezzahra Palace, a former residence turned cultural center, which showcases traditional Tunisian music and art.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 2,
      time: "AFTERNOON",
      name: "Carthage",
      description:
        "Afterward, head to the ancient city of Carthage, located nearby. Explore the archaeological site, which includes the ruins of Roman villas, baths, and theaters. Don't miss the opportunity to visit the Carthage Museum, where you can learn about the history of this ancient civilization.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 2,
      time: "EVENING",
      name: "Le Golfe",
      description:
        "For dinner, try the local seafood at Le Golfe, a restaurant located by the sea in La Marsa, a nearby coastal suburb. Enjoy fresh fish and seafood dishes, such as grilled sea bass, shrimp couscous, and octopus salad, while enjoying the beautiful sunset over the Mediterranean.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 3,
      time: "MORNING",
      name: "Sidi Bou Ali",
      description:
        "Take a day trip to the charming village of Sidi Bou Ali, located south of Tunis. Explore the traditional houses and narrow streets, and visit the local pottery workshops to see artisans at work. Don't miss the opportunity to try your hand at pottery making and create your own souvenir.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 3,
      time: "AFTERNOON",
      name: "Zaghouan",
      description:
        "Afterward, head to the nearby town of Zaghouan, known for its Roman-era aqueduct and the Temple of Water. Take a hike up Jebel Zaghouan, a nearby mountain, for panoramic views of the surrounding countryside. On your way back to Tunis, stop by the Zaghouan Water Temple, an ancient Roman water reservoir.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 3,
      time: "EVENING",
      name: "Le Petit Tunis",
      description:
        "For dinner, try the traditional Tunisian dish of couscous at Le Petit Tunis, a restaurant located in the heart of Tunis. Enjoy a variety of couscous dishes, such as vegetable couscous, lamb couscous, and fish couscous, accompanied by traditional side dishes and desserts.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 4,
      time: "MORNING",
      name: "Bardo Artisans Village",
      description:
        "Visit the Bardo Artisans Village, located on the outskirts of Tunis. Explore the workshops and galleries where local artisans create and sell traditional crafts, such as ceramics, carpets, and leather goods. Take the opportunity to purchase unique souvenirs to bring back home.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 4,
      time: "AFTERNOON",
      name: "Belvedere Park & Tunis Zoo",
      description:
        "Afterward, head to the Belvedere Park, a large urban park in Tunis. Take a leisurely walk through the gardens, and visit the Tunis Zoo, which is located within the park. Explore the different animal exhibits and learn about the local wildlife.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294a",
      Day: 4,
      time: "EVENING",
      name: "Medina of Tunis",
      description:
        "For dinner, try the local street food at the Souk El Attarine, a bustling market in the Medina of Tunis. Sample traditional Tunisian snacks, such as brik, merguez (spicy sausage), and makroudh (a sweet pastry), while soaking in the vibrant atmosphere of the market.",
      mainImage: "",
    },
  ];

  const ToursDataAlgeria = [
    {
      country: "64f58abceab052732025294b",
      Day: 1,
      time: "MORNING",
      name: "Morocco Sahara Desert",
      description:
        "Start your day with a visit to the Sahara Desert in Morocco. Embark on a camel trek and experience the breathtaking beauty of the desert landscape. Spend the morning exploring the dunes and taking in the peacefulness of the vast expanse.",
      mainImage: "Morocco Sahara Desert.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 1,
      time: "AFTERNOON",
      name: "Erg Chigaga",
      description:
        "Head to Erg Chigaga, a remote and less crowded part of the Sahara Desert. Enjoy a traditional Berber lunch and immerse yourself in the local culture. Take a leisurely walk through the sand dunes and watch the sunset over the desert.",
      mainImage: "Erg Chigaga.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 1,
      time: "EVENING",
      name: "Traditional Desert Camp",
      description:
        "Experience a magical night in the desert as you stay in a traditional desert camp. Enjoy a delicious dinner under the stars and listen to Berber music around the campfire.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 2,
      time: "MORNING",
      name: "Silves",
      description:
        "Explore the historic city of Silves, known for its impressive Moorish castle. Take a guided tour of the castle and learn about its rich history. Afterward, wander through the charming streets of the old town and visit the local market.",
      mainImage: "Silves.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 2,
      time: "AFTERNOON",
      name: "Ferragudo",
      description:
        "Head to the coastal town of Ferragudo, located on the banks of the Arade River. Relax on the beautiful beaches and soak up the sun. Take a boat trip along the river and enjoy the scenic views of the surrounding cliffs and caves.",
      mainImage: "Ferragudo.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 2,
      time: "EVENING",
      name: "Seafood Dinner in Ferragudo",
      description:
        "Indulge in a seafood dinner at one of the waterfront restaurants in Ferragudo. Savor fresh local dishes and enjoy the picturesque views of the river.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 3,
      time: "MORNING",
      name: "Ria Formosa Natural Park",
      description:
        "Visit the Ria Formosa Natural Park, a stunning coastal lagoon system that is home to a wide variety of bird species. Take a boat tour through the park and observe the diverse ecosystems and wildlife.",
      mainImage: "https://meRia Formosa Natural Park.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 3,
      time: "AFTERNOON",
      name: "Olhão",
      description:
        "Explore the charming town of Olhão, known for its traditional fishing industry. Visit the lively fish market and sample fresh seafood. Take a stroll along the waterfront promenade and enjoy the views of the Ria Formosa.",
      mainImage: "Olhão.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 3,
      time: "EVENING",
      name: "Dinner in Olhão",
      description:
        "Enjoy a relaxing dinner at a local restaurant in Olhão. Try traditional Algarvian dishes and savor the flavors of the region.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 4,
      time: "MORNING",
      name: "Praia da Rocha",
      description:
        "Spend the morning relaxing on Praia da Rocha, one of the most famous beaches in the Algarve. Soak up the sun, swim in the crystal-clear waters, and take a leisurely walk along the golden sand.",
      mainImage: "Praia da Rocha.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 4,
      time: "AFTERNOON",
      name: "Praia dos Salgados",
      description:
        "Explore the stunning cliffs and rock formations at Praia dos Salgados. Take a walk along the boardwalk and admire the natural beauty of the area. If you're lucky, you may even spot some flamingos in the nearby lagoon.",
      mainImage: "Praia dos Salgados.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 4,
      time: "EVENING",
      name: "Sunset Cocktail in Praia dos Salgados",
      description:
        "Enjoy a sunset cocktail at a beachfront bar in Praia dos Salgados. Watch the sun dip below the horizon and take in the breathtaking views.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 5,
      time: "MORNING",
      name: "Barreta Island (Ilha Deserta)",
      description:
        "Take a day trip to Barreta Island, also known as Ilha Deserta. Hop on a boat and explore this uninhabited island, known for its pristine beaches and untouched nature. Take a walk along the shore and enjoy the tranquility of the island.",
      mainImage: "Barreta Island.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 5,
      time: "AFTERNOON",
      name: "Armacao de Pera Beach (Praia Armacao de Pera)",
      description:
        "Head to Armacao de Pera Beach, a beautiful stretch of sand that offers plenty of space to relax. Rent a beach chair and umbrella, and spend the afternoon swimming in the clear waters and sunbathing.",
      mainImage: "Armacao de Pera Beach.jpg",
    },
    {
      country: "64f58abceab052732025294b",
      Day: 5,
      time: "EVENING",
      name: "Seafood Dinner in Armacao de Pera",
      description:
        "Enjoy a delicious seafood dinner at a beachfront restaurant in Armacao de Pera. Sample local specialties like grilled sardines and seafood rice.",
      mainImage: "",
    },
  ];

  const ToursDataZimbabwe = [
    {
      country: "64f58abceab052732025294c",
      Day: 1,
      time: "MORNING",
      name: "Lake Kariba",
      description:
        "Start your day with a visit to Lake Kariba, one of the largest man-made lakes in the world. Take a boat tour to explore the lake and admire the stunning scenery. Keep an eye out for wildlife such as elephants, hippos, and crocodiles.",
      mainImage: "Lake Kariba.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 1,
      time: "AFTERNOON",
      name: "Batoka Gorge",
      description:
        "Head to Batoka Gorge for an exhilarating white-water rafting experience. Navigate through the rapids and enjoy the adrenaline rush as you make your way down the Zambezi River.",
      mainImage: "Batoka Gorge.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 1,
      time: "EVENING",
      name: "Livingstone Museum",
      description:
        "Visit the Livingstone Museum to learn about the history and culture of the Victoria Falls region. Explore the exhibits and artifacts that showcase the local heritage.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 2,
      time: "MORNING",
      name: "Victoria Falls National Park",
      description:
        "Explore Victoria Falls National Park, home to the famous Victoria Falls (Mosi-oa-Tunya). Take a guided walking tour to witness the awe-inspiring power and beauty of the falls up close. Feel the mist on your face as you stand at the edge of the gorge.",
      mainImage: "Victoria Falls National Park.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 2,
      time: "AFTERNOON",
      name: "Mosi-oa-Tunya National Park",
      description:
        "Venture into Mosi-oa-Tunya National Park for a thrilling game drive. Spot a variety of wildlife, including elephants, giraffes, zebras, and more. Enjoy the natural beauty of the park as you drive through the savannah.",
      mainImage: "Mosi-oa-Tunya National Park.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 2,
      time: "EVENING",
      name: "Devil's Pool",
      description:
        "Experience the unique Devil's Pool, a natural rock pool located on the edge of Victoria Falls. Take a dip in the pool and enjoy the breathtaking views of the falls from a unique perspective.",
      mainImage: "Devil's Pool.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 3,
      time: "MORNING",
      name: "Hwange National Park",
      description:
        "Embark on a safari adventure in Hwange National Park, one of the largest game reserves in Zimbabwe. Take a guided game drive to spot the Big Five and other wildlife species that call the park home.",
      mainImage: "Hwange National Park.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 3,
      time: "AFTERNOON",
      name: "Hwange National Park",
      description:
        "Continue your safari experience in Hwange National Park, exploring different areas of the park and observing the diverse wildlife. Enjoy the tranquil beauty of the African bush.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 3,
      time: "EVENING",
      name: "Victoria Falls Bridge",
      description:
        "Visit the Victoria Falls Bridge to witness the spectacular sunset over the Zambezi River. Take in the panoramic views of the gorge and the surrounding landscape.",
      mainImage: "Victoria Falls Bridge.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 4,
      time: "MORNING",
      name: "Bulawayo",
      description:
        "Explore the city of Bulawayo, known for its colonial architecture and vibrant arts scene. Take a walking tour of the city to admire the historic buildings and visit local art galleries.",
      mainImage: "Bulawayo.jpg",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 4,
      time: "AFTERNOON",
      name: "Livingstone Island",
      description:
        "Take a boat ride to Livingstone Island, located in the middle of the Zambezi River. Take a guided tour of the island and enjoy a picnic lunch with breathtaking views of Victoria Falls.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 4,
      time: "EVENING",
      name: "Victoria Falls Crocodile Farm",
      description:
        "Visit the Victoria Falls Crocodile Farm to see and learn about these fascinating reptiles. Take a guided tour of the farm and watch crocodile feeding demonstrations.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 5,
      time: "MORNING",
      name: "Victoria Falls Private Game Reserve",
      description:
        "Embark on a safari in Victoria Falls Private Game Reserve, a pristine wilderness area. Take a guided game drive or walking safari to spot a wide range of wildlife, including elephants, lions, and buffalo.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 5,
      time: "AFTERNOON",
      name: "Leisurely Exploration of Victoria Falls",
      description:
        "Enjoy a leisurely day exploring the natural beauty of Victoria Falls. Take a scenic hike along the trails in the area, or relax and unwind by the river.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294c",
      Day: 5,
      time: "EVENING",
      name: "Sunset Cruise on the Zambezi River",
      description:
        "End your trip with a sunset cruise on the Zambezi River. Enjoy a drink and snack as you cruise along the river, admiring the beautiful scenery and wildlife.",
      mainImage: "",
    },
  ];

  const ToursDataIvoryCoast = [
    {
      country: "64f58abceab052732025294d",
      Day: 1,
      time: "MORNING",
      name: "Banco National Park",
      description:
        "Start your day by exploring the vibrant city of Abidjan, the economic capital of Ivory Coast. Begin with a visit to the Banco National Park, a lush green oasis in the heart of the city. Take a walk through the park's trails, spot some wildlife, and enjoy the tranquility of nature.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 1,
      time: "AFTERNOON",
      name: "Marché de Treichville",
      description:
        "Explore the vibrant city of Abidjan further by visiting Marché de Treichville. Immerse yourself in the local culture as you stroll through the bustling market, where you can find a variety of goods, including traditional crafts, clothing, and fresh produce.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 1,
      time: "EVENING",
      name: "Nuit Ivoirienne",
      description:
        "For dinner, indulge in Ivorian cuisine at Le Nuit Ivoirienne, a restaurant that offers a wide range of traditional dishes. Sample some grilled fish with spicy sauce, fried plantains, and poulet braisé (grilled chicken). End your evening by taking a stroll along the Abidjan waterfront and enjoying the beautiful sunset.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 2,
      time: "MORNING",
      name: "National Costume Museum",
      description:
        "Embark on a day trip to the historic city of Grand-Bassam, a UNESCO World Heritage site. Explore the charming colonial architecture, visit the National Costume Museum, and learn about the country's rich cultural heritage. Don't miss a visit to the Lighthouse of Grand-Bassam for panoramic views of the city and the coastline.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 2,
      time: "AFTERNOON",
      name: "Assinie-Mafia Beach",
      description:
        "Enjoy a relaxing afternoon at Assinie-Mafia, a popular beach destination located about an hour's drive from Abidjan. Soak up the sun, swim in the clear waters of the Atlantic Ocean, and indulge in fresh seafood at one of the beachside restaurants. You can also try your hand at water sports like jet skiing or take a boat trip along the Comoé River.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 2,
      time: "EVENING",
      name: "La Villa Restaurant",
      description:
        "Head back to Abidjan and treat yourself to a delicious dinner at La Villa, a fine dining restaurant offering a fusion of Ivorian and French cuisine. Savor dishes like grilled lobster, coconut curry shrimp, and chocolate fondant for dessert.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 3,
      time: "MORNING",
      name: "Musée des Civilisations de Côte d'Ivoire",
      description:
        "Discover the cultural heritage of Ivory Coast at the Musée des Civilisations de Côte d'Ivoire. Explore the museum's extensive collection of traditional masks, sculptures, and artifacts that showcase the country's diverse ethnic groups. Gain insights into Ivorian history, folklore, and rituals.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 3,
      time: "AFTERNOON",
      name: "Basilica of Our Lady of Peace",
      description:
        "Take a trip to the picturesque town of Yamoussoukro, the political capital of Ivory Coast. Visit the stunning Basilica of Our Lady of Peace, one of the largest churches in the world. Admire the grand architecture and explore the beautifully manicured gardens surrounding the basilica.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 3,
      time: "EVENING",
      name: "Chez Paul Restaurant",
      description:
        "Enjoy a traditional Ivorian dinner at Chez Paul, a popular restaurant known for its authentic local cuisine. Try dishes like kedjenou (chicken stew), foutou (pounded yam), and aloco (fried plantains). End your day with a visit to the lively nightlife district of Cocody, where you can find bars, clubs, and live music venues.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 4,
      time: "MORNING",
      name: "Comoé National Park",
      description:
        "Embark on a wildlife safari at the Comoé National Park, a UNESCO World Heritage site and one of West Africa's largest protected areas. Explore the park's diverse ecosystems, spot elephants, antelopes, and monkeys, and marvel at the beauty of the savannah landscape.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 4,
      time: "AFTERNOON",
      name: "Musée National des Costumes",
      description:
        "Visit the vibrant neighborhood of Plateau in Abidjan, known for its modern skyscrapers, government buildings, and cultural institutions. Explore the Musée National des Costumes, where you can learn about traditional Ivorian clothing and textiles. Take a stroll along the Boulevard de la Corniche and enjoy the views of the city skyline.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 4,
      time: "EVENING",
      name: "Le Marly Restaurant",
      description:
        "Dine at Le Marly, a rooftop restaurant offering panoramic views of Abidjan. Indulge in French cuisine with an Ivorian twist, such as grilled lamb with attiéké, shrimp bisque, and crème brûlée. After dinner, head to the nearby Club Pravda for a night of dancing and entertainment.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 5,
      time: "MORNING",
      name: "Abobo Markets",
      description:
        "Explore the vibrant markets of Abobo, one of Abidjan's largest neighborhoods. Immerse yourself in the lively atmosphere, browse through a variety of goods, and interact with locals. Don't miss the opportunity to try some delicious Ivorian street food, like alloco (fried plantains) and grilled corn.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 5,
      time: "AFTERNOON",
      name: "Taï National Park",
      description:
        "Visit the stunning Taï National Park, a UNESCO World Heritage site and one of the last remaining primary rainforests in West Africa. Take a guided nature walk, spot rare wildlife species, and admire the majestic trees and lush vegetation.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294d",
      Day: 5,
      time: "EVENING",
      name: "Sunset Cruise on the Ébrié Lagoon",
      description:
        "Enjoy a traditional Ivorian dinner at Chez Awa, a popular restaurant known for its authentic Ivorian dishes. Try specialties like kedjenou, foutou, and grilled tilapia. End your day with a relaxing sunset cruise along the Ébrié Lagoon, where you can admire the city lights of Abidjan.",
      mainImage: "",
    },
  ];

  const ToursDataKenya = [
    {
      country: "64f58abceab052732025294e",
      Day: 1,
      time: "MORNING",
      name: "Marangu",
      description:
        "Start your day in Marangu, a small village in Tanzania located at the base of Mount Kilimanjaro. Take a guided tour to explore the village and learn about the local culture and traditions. Visit the Marangu Cultural Heritage Museum to gain insight into the Chagga people who inhabit the area.	https://media.tacdn.com/media/attractions-content--1x-1/0b/df/11/58.jpg",
      mainImage: "Marangu.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 1,
      time: "AFTERNOON",
      name: "Mount Kilimanjaro",
      description:
        "Embark on a trek to Mount Kilimanjaro, the highest peak in Africa. Choose from various routes, such as the Marangu Route, which is known as the 'Coca-Cola' route due to its popularity. Enjoy the stunning views and the sense of accomplishment as you reach the summit.	https://media.tacdn.com/media/attractions-content--1x-1/0b/39/79/6c.jpg",
      mainImage: "Mount Kilimanjaro.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 1,
      time: "EVENING",
      name: "Kilimanjaro Wonders Hotel",
      description:
        "Return to Marangu and relax at one of the local restaurants, such as Kilimanjaro Wonders Hotel, where you can enjoy traditional Tanzanian cuisine.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 2,
      time: "MORNING",
      name: "Lake Manyara National Park",
      description:
        "Take a day trip to Lake Manyara National Park, located in northern Tanzania. Explore the park's diverse ecosystems, including a soda lake, dense woodlands, and open grassy areas. Look out for the famous tree-climbing lions and a variety of bird species.	https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/13/e0.jpg",
      mainImage: "Lake Manyara National Park.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 2,
      time: "AFTERNOON",
      name: "Olduvai Gorge",
      description:
        "Visit the Olduvai Gorge, also known as the 'Cradle of Mankind,' where renowned paleontologists Louis and Mary Leakey made significant archaeological discoveries. Learn about human evolution and the ancient history of the region.	https://media.tacdn.com/media/attractions-content--1x-1/0b/39/90/e2.jpg",
      mainImage: "Olduvai Gorge.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 2,
      time: "EVENING",
      name: "Lake Manyara",
      description:
        "Head back to your accommodation and enjoy a traditional African dinner while overlooking the stunning landscapes of Lake Manyara.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 3,
      time: "MORNING",
      name: "Masai Mara National Reserve",
      description:
        "Embark on a safari adventure to Masai Mara National Reserve, one of Africa's most famous wildlife reserves. Marvel at the abundant wildlife, including lions, elephants, zebras, and wildebeests. Explore the vast savannahs and witness the Great Migration, one of the most incredible wildlife spectacles on the planet.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/6e/22.jpg",
      mainImage: "Masai Mara National Reserve.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 3,
      time: "AFTERNOON",
      name: "Mount Meru",
      description:
        "Visit Mount Meru, the second-highest mountain in Tanzania, located in Arusha National Park. Enjoy a guided hike through the lush rainforests and spot various wildlife species, including colobus monkeys and buffalos.	https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/0d/71.jpg",
      mainImage: "Mount Meru.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 3,
      time: "EVENING",
      name: "Masai Mara Lodge",
      description:
        "Return to your lodge in Masai Mara and relax while enjoying a traditional Maasai dance performance and a delicious dinner.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 4,
      time: "MORNING",
      name: "Nairobi National Park",
      description:
        "Start your day with a visit to Nairobi National Park, located just outside the bustling city of Nairobi. Embark on a game drive and spot a variety of wildlife, including lions, giraffes, and rhinos, against the backdrop of the city skyline.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/a8/91.jpg",
      mainImage: "Nairobi National Park.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 4,
      time: "AFTERNOON",
      name: "Lake Nakuru National Park",
      description:
        "Travel to Lake Nakuru National Park, known for its abundant birdlife, including thousands of flamingos. Take a game drive through the park and spot other wildlife, such as buffalos, zebras, and Rothschild's giraffes.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/6b/f1.jpg",
      mainImage: "Lake Nakuru National Park.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 4,
      time: "EVENING",
      name: "Lake Nakuru Lodge",
      description:
        "Enjoy a relaxing evening at your lodge in Lake Nakuru and indulge in a delicious dinner while enjoying the peaceful surroundings.",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 5,
      time: "MORNING",
      name: "Meserani Snake Park",
      description:
        "Visit the Meserani Snake Park, located near Arusha in Tanzania. Learn about the region's reptiles, including various snake species, crocodiles, and tortoises. Watch educational snake-handling demonstrations and get up close to these fascinating creatures.	https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/0d/b2.jpg",
      mainImage: "Meserani Snake Park.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 5,
      time: "AFTERNOON",
      name: "Hell's Gate National Park",
      description:
        "Explore Hell's Gate National Park, a unique park located in Kenya's Rift Valley. Enjoy a bike ride through the park's breathtaking landscapes, hike through the imposing cliffs, and take a dip in the natural hot springs.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ab/67.jpg",
      mainImage: "Hell's Gate National Park.jpg",
    },
    {
      country: "64f58abceab052732025294e",
      Day: 5,
      time: "EVENING",
      name: "Aberdare National Park",
      description:
        "Head to Aberdare National Park, located in central Kenya. Enjoy a peaceful evening at one of the park's lodges, surrounded by lush forests and stunning views of the mountains.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/67/04.jpg",
      mainImage: "Aberdare National Park.jpg",
    },
  ];

  const ToursDataBotswana = [
    {
      country: "64f58abceab052732025294f",
      Day: 1,
      time: "MORNING",
      name: "Hartbeespoort Dam",
      description:
        "Start your day with a visit to the beautiful Hartbeespoort Dam. Enjoy a tranquil boat ride on the dam while taking in the stunning views of the surrounding mountains.	https://media.tacdn.com/media/attractions-content--1x-1/0b/39/92/4b.jpg",
      mainImage: "Hartbeespoort Dam.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 1,
      time: "AFTERNOON",
      name: "Batoka Gorge",
      description:
        "Take a thrilling helicopter ride over the Batoka Gorge for a bird's-eye view of the spectacular Victoria Falls. Feel the rush of adrenaline as you soar through the gorge and witness the power of the mighty Zambezi River.	https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/04/98.jpg",
      mainImage: "Batoka Gorge.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 1,
      time: "EVENING",
      name: "Harties Aerial Cableway & Hartbeespoort Dam",
      description:
        "Ride the Harties Aerial Cableway to the top of the Magaliesberg Mountains and enjoy a breathtaking sunset view of the Hartbeespoort Dam and surrounding areas.	https://media.tacdn.com/media/attractions-content--1x-1/0b/39/b0/7e.jpg",
      mainImage: "Harties Aerial Cableway & Hartbeespoort Dam.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 2,
      time: "MORNING",
      name: "Mandela House",
      description:
        "Visit the Mandela House in Soweto, the former home of Nelson Mandela. Explore the museum to learn about his life and legacy and gain insight into the history of apartheid in South Africa.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/6c/df.jpg",
      mainImage: "Mandela House.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 2,
      time: "AFTERNOON",
      name: "Victoria Falls National Park",
      description:
        "Explore the Victoria Falls National Park, where you can walk along the trails and witness the awe-inspiring beauty of the iconic Victoria Falls. Marvel at the sheer volume of water cascading down and feel the mist on your face.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ad/2b.jpg",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 2,
      time: "EVENING",
      name: "Apartheid Museum",
      description:
        "Immerse yourself in the history of apartheid at the Apartheid Museum in Johannesburg. The museum offers a comprehensive and thought-provoking exhibition that tells the story of South Africa's struggle for democracy.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/65/4c.jpg",
      mainImage: "Apartheid Museum.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 3,
      time: "MORNING",
      name: "Voortrekker Monument",
      description:
        "Take a guided tour of the Voortrekker Monument, a massive granite structure that commemorates the pioneer history of South Africa. Climb to the top of the monument for panoramic views of Pretoria.	https://media.tacdn.com/media/attractions-content--1x-1/0b/39/98/b1.jpg",
      mainImage: "Voortrekker Monument.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 3,
      time: "AFTERNOON",
      name: "Soweto",
      description:
        "Experience the vibrant culture of Soweto, a township near Johannesburg that played a significant role in the struggle against apartheid. Take a guided tour to visit historical sites, meet locals, and learn about the township's rich heritage	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/65/86.jpg",
      mainImage: "Soweto.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 3,
      time: "EVENING",
      name: "Union Buildings",
      description:
        "Explore the Union Buildings, the official seat of the South African government and a national heritage site. Enjoy a leisurely stroll through the beautiful gardens and admire the grand architecture.	https://media.tacdn.com/media/attractions-content--1x-1/0b/39/99/3a.jpg",
      mainImage: "Union Buildings.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 4,
      time: "MORNING",
      name: "Mosi-oa-Tunya National Park",
      description:
        "Embark on a safari adventure at Mosi-oa-Tunya National Park, located along the banks of the Zambezi River. Spot a variety of wildlife, including elephants, giraffes, zebras, and antelopes, as you drive through the park	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ab/ed.jpg",
      mainImage: "Mosi-oa-Tunya National Park.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 4,
      time: "AFTERNOON",
      name: "Victoria Falls (Mosi-oa-Tunya)",
      description:
        "Get up close and personal with the magnificent Victoria Falls (Mosi-oa-Tunya) by taking a guided tour of the falls. Feel the mist on your face as you walk along the trails and admire the breathtaking views	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ab/e8.jpg",
      mainImage: "Victoria Falls (Mosi-oa-Tunya).jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 4,
      time: "EVENING",
      name: "Devil's Pool",
      description:
        "Experience the thrill of swimming in Devil's Pool, a natural rock pool located on the edge of Victoria Falls. Take a dip in the pool and enjoy the exhilarating sensation of being just inches away from the edge of the roaring waterfall.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ab/65.jpg",
      mainImage: "Devil's Pool.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 5,
      time: "MORNING",
      name: "Chobe National Park",
      description:
        "Embark on a day trip to Chobe National Park, known for its abundant wildlife and majestic elephants. Take a boat safari along the Chobe River and spot elephants, hippos, crocodiles, and a variety of bird species.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ac/5b.jpg",
      mainImage: "Chobe National Park.jpg",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 5,
      time: "AFTERNOON",
      name: "Chobe National Park",
      description:
        "Enjoy a game drive through Chobe National Park to see more of the park's diverse wildlife, including lions, leopards, buffalos, and various antelope species. Marvel at the natural beauty of the park as you take in the sweeping landscapes.	https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ac/5b.jpg",
      mainImage: "",
    },
    {
      country: "64f58abceab052732025294f",
      Day: 5,
      time: "EVENING",
      name: "Chobe River Sunset Cruise",
      description:
        "End your day with a relaxing sunset cruise on the Chobe River. Admire the stunning colors of the sunset while enjoying a refreshing drink and spotting wildlife along the riverbanks.",
      mainImage: "",
    },
  ];

  try {
    await Tours.insertMany(ToursDataBotswana);
    console.log("ToursDataBotswana data inserted successfully");

    await Tours.insertMany(ToursDataKenya);
    console.log("ToursDataKenya data inserted successfully");

    await Tours.insertMany(ToursDataIvoryCoast);
    console.log("ToursDataIvoryCoast data inserted successfully");

    await Tours.insertMany(ToursDataZimbabwe);
    console.log("ToursDataZimbabwe data inserted successfully");

    await Tours.insertMany(ToursDataAlgeria);
    console.log("ToursDataAlgeria data inserted successfully");

    await Tours.insertMany(ToursDataTunisia);
    console.log("ToursDataTunisia data inserted successfully");

    await Tours.insertMany(ToursDataSouthAfrica);
    console.log("ToursDataSouthAfrica data inserted successfully");

    await Tours.insertMany(ToursDataMorocco);
    console.log("ToursDataMorocco data inserted successfully");

    await Tours.insertMany(ToursDataEgypt);
    console.log("ToursDataEgypt data inserted successfully");

    await Tours.insertMany(ToursDataAustria);
    console.log("ToursDataAustria data inserted successfully");

    await Tours.insertMany(ToursDataGreece);
    console.log("ToursDataGreece data inserted successfully");

    await Tours.insertMany(ToursDataGermany);
    console.log("ToursDataGermany data inserted successfully");

    await Tours.insertMany(ToursDataFrance1);
    console.log("ToursDataFrance1 data inserted successfully");

    await Tours.insertMany(ToursDataFrance2);
    console.log("ToursDataFrance2 data inserted successfully");

    await Tours.insertMany(ToursDataFrance3);
    console.log("ToursDataFrance3 data inserted successfully");

    await Tours.insertMany(ToursDataFrance4);
    console.log("ToursDataFrance4 data inserted successfully");

    await Tours.insertMany(ToursDataFrance5);
    console.log("ToursDataFrance5 data inserted successfully");

    await Tours.insertMany(ToursDataSpain1);
    console.log("ToursDataSpain1 data inserted successfully");

    await Tours.insertMany(ToursDataSpain2);
    console.log("ToursDataSpain2 data inserted successfully");

    await Tours.insertMany(ToursDataSpain3);
    console.log("ToursDataSpain3 data inserted successfully");

    await Tours.insertMany(ToursDataSpain4);
    console.log("ToursDataSpain4 data inserted successfully");

    await Tours.insertMany(ToursDataUS);
    console.log("ToursDataUS data inserted successfully");

    await Tours.insertMany(ToursDataTurkey);
    console.log("ToursDataTurkey data inserted successfully");

    await Tours.insertMany(ToursDataItaly);
    console.log("ToursDataItaly data inserted successfully");

    await Tours.insertMany(ToursDataMexico);
    console.log("ToursDataMexico data inserted successfully");

    await Tours.insertMany(ToursDataUK);
    console.log("ToursDataUK data inserted successfully");
  } catch (error) {
    console.log("Error inserting demo data:", error);
  }
};

module.exports = TourInsert;
