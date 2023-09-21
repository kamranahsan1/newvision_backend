const Packages = require("../Packages");
const Visa = require("../Visa");
const Category = require("../Category");
const Country = require("../Country");
const Tours = require("../Tours");
const VisaCategory = require("../VisaCategory");

const PackagesData = [
  {
    name: "Paris, France",
    mainImage: "https://vnbackend-b4d0409e1de8.herokuapp.com/uploads/paris.jpg",
    multipleImages: [],
    description:
      "Paris is a popular tourist destination, so be prepared for large crowds at popular attractions. It's a good idea to book tickets in advance and arrive early to avoid long lines.",
    price: [
      { amount: 3500, discount: 0, description: "Adult" },
      { amount: 2500, discount: 0, description: "Child" },
    ],
    attractions: [],
    inclusionsList: [],
    featured: 1,
    status: 1,
  },
  {
    name: "London, United Kingdom",
    mainImage: "https://vnbackend-b4d0409e1de8.herokuapp.com/uploads/uk.jpg",
    multipleImages: [],
    description:
      "The United Kingdom is made up of four countries: England, Scotland, Wales, and Northern Ireland. Each country has its own unique culture and attractions, so be sure to explore beyond just London.",
    price: [
      { amount: 3500, discount: 0, description: "Adult" },
      { amount: 2500, discount: 0, description: "Child" },
    ],
    attractions: [],
    inclusionsList: [],
    featured: 1,
    status: 1,
  },
  {
    name: "Tokyo, Japan",
    mainImage: "https://vnbackend-b4d0409e1de8.herokuapp.com/uploads/tokyo.jpg",
    multipleImages: [],
    description:
      "Tokyo is a bustling city with a highly efficient public transportation system. Make sure to familiarize yourself with the train and subway lines to navigate the city easily.",
    price: [
      { amount: 3500, discount: 0, description: "Adult" },
      { amount: 2500, discount: 0, description: "Child" },
    ],
    attractions: [],
    inclusionsList: [],
    featured: 1,
    status: 1,
  },
  {
    name: "CULTURAL TOUR",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/03/ddAsset-18sec-spass-head-768x508.png",
    multipleImages: [],
    description:
      "UAE culture is completely based on Arabian’s Islamic tradition and lifestyle. Abu Dhabi also holds important history and cultural event. It is completely a good source of information about the UAE culture. The mix of international influences and a local heritage has created a fascinating fuse of new and old culture.",
    price: [
      { amount: 300, discount: 0, description: "Adult" },
      { amount: 100, discount: 0, description: "Child" },
    ],
    attractions: [
      "Dubai Basktakia",
      "The diving village",
      "The heritage center",
      "Bedouin culture at the heritage village",
      "Dubai museum",
    ],
    inclusionsList: [
      "Commentary by English, French and German speaking guide",
      "Bottle of water",
      "Arabic traditional lunch",
      "Pick up and drop off from your location",
      "Fees to enter the traditional heritage centers",
      "Voucher can be changed to other excursion",
    ],
  },
  {
    name: "SKYDIVE DUBAI",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-2-768x508.png",
    multipleImages: [],
    description:
      "Skydive Dubai is the major skydiving facility in the region. One facility is next to the Palm Jumeirah, Dubai’s artificial islands jutting into the Persian Gulf, and the other is an inland desert location about a 25 minute drive away. Mostly, first-time jumpers take tandem jumps from the Palm location. The desert site caters more toward jumpers looking to build up credits for their license. Because of the coastal location, you need at least an intermediate class B license to jump with your own equipment, which means you must have at least 50 jumps under your belt.",
    price: [
      { amount: 300, discount: 0, description: "Adult" },
      { amount: 100, discount: 0, description: "Child" },
    ],
    attractions: [
      "excellent view from a height up to 13,000 feet 4.5 minutes from opening of parachute to landing",
      "Brief safety and landing instructions",
      "Video of your thrilling experience",
    ],
    inclusionsList: [
      "Commentary by English, French and German speaking guide",
      "Bottle of water",
      "Arabic traditional lunch",
      "Pick up and drop off from your location",
      "Fees to enter the traditional heritage centers",
      "Voucher can be changed to other excursion",
    ],
  },
  {
    name: "BALLOONING TOUR",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-3-768x508.png",
    multipleImages: [],
    description:
      "Balloon tours show the amazing desert landscape and enjoy the top view of the desert with the help of floating hot air balloon. You can enjoy the breath taking views of the sunrise and its magical effect on the desert vistas. Ballooning is suitable for most of the people, like families with children over the age of five to have a safe travel. Taking this tour at the morning time allows you to feel the freshness of the morning and you can enjoy the beginning of your day and make an unforgettable day.",
    price: [
      { amount: 300, discount: 0, description: "Adult" },
      { amount: 100, discount: 0, description: "Child" },
    ],
    attractions: [
      "Dubai desert hot air balloon ride including a drink",
      "Soar over the desert plains and canyons of Dubai desert conversation range",
      "Watch the sunrise over the desert, and see camels and gazelles roaming freely",
      "Receive a personalized flight certificate and enjoy a cool drink after landing",
      "Enjoy a convenient hotel pick up and drop off service from select Dubai hotels.",
    ],
    inclusionsList: [
      "Commentary by English, French and German speaking guide",
      "Bottle of water",
      "Arabic traditional lunch",
      "Pick up and drop off from your location",
      "Fees to enter the traditional heritage centers",
      "Voucher can be changed to other excursion",
    ],
  },
  {
    name: "DUBAI CREEK DHOW CRUISE",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-5-768x508.png",
    multipleImages: [],
    description:
      "Enjoy this luxury cruise and unique dining experience from Bateaux Dubai. Moored on the famed Dubai Creek by the British embassy, this cruise features inspiring views of the city from aboard a glassed-in boat. You will also enjoy freshly prepared gourmet cuisine, an extensive selection of beverages, superb live entertainment, modern décor and personalized service. This air-conditioned boat has all the luxuries of a five-star restaurant with the added beauty of a 360 degree view of the Dubai Creek. The smoothness of this floating restaurant allows you to freely move around and enjoy your time on board.",
    price: [
      { amount: 300, discount: 0, description: "Adult" },
      { amount: 100, discount: 0, description: "Child" },
    ],
    attractions: [
      "The Dubai Creek is main attraction found in the city which is 14 km long",
      "This Creek really supports foreign exchange and trade, which a common tourist cannot imagine",
      "Another main attraction is Abra cruise which is used to connect two places such as Deira with Bur Dubai.",
    ],
    inclusionsList: [
      "Commentary by English, French and German speaking guide",
      "Bottle of water",
      "Arabic traditional lunch",
      "Pick up and drop off from your location",
      "Fees to enter the traditional heritage centers",
      "Voucher can be changed to other excursion",
    ],
  },
  {
    name: "CRUISING AROUND THE PALM",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-6-768x508.png",
    multipleImages: [],
    description:
      "A sea cruise around the Palm Island is a great trip that will show you the coastline of Dubai from a rapidly moving motor yacht. Cruise around the curve of the Palm Jumeirah Island and admire the visionary developments taking place there. Get a glimpse of the ultimate in high living when you pass the opulent villas and penthouses designed for the super-rich. This exciting 75 minute trip gives you magnificent views of Dubai that you can’t see any other way. The Palm Jumeirah and Burj Al Arab boat tour give you breath taking views of Dubai’s amazing skyline from the water. To join the tour, make your way to Dubai Marina walk to board your craft. You will see the amazing Palm Jumeirah, and artificially created island in the shape of a palm tree. Burj Al Arab soars to a height of 321 meters and dominates Dubai’s coastline. There will be another 5 minute photo stop at Burj Al Arab so that you can admire this incredible piece of architecture.",
    price: [
      { amount: 300, discount: 0, description: "Adult" },
      { amount: 100, discount: 0, description: "Child" },
    ],
    attractions: [
      "Views of Dubai’s stunning cityscape on this thrilling boat ride",
      "Palm Jumeirah, an artificially created island in the shape of a palm",
      "Burj Al Arab – incredible piece of architecture",
    ],
    inclusionsList: [
      "Commentary by English, French and German speaking guide",
      "Bottle of water",
      "Arabic traditional lunch",
      "Pick up and drop off from your location",
      "Fees to enter the traditional heritage centers",
      "Voucher can be changed to other excursion",
    ],
  },
  {
    name: "CRUISES",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboasrd-5-768x508.jpg",
    multipleImages: [],
    description:
      "Bedouin eve desert safari provides a heritage experience in Dubai with a romantic stay in a unique desert camp. A drive through sand dunes in four wheel drive to a Bedouin village that provides interesting camel and you can also enjoy the view of sunset. You can see different types of wildlife within the pristine UAE desert. Your Bedouin camp, decorate with the gentle flames using a traditional lamp, which makes the evening more romantic. Traditional Arabic tent is set up with pillows. You can enjoy many cultural activities such as henna painting, music, dance, making bread and making Arabic coffee. You can also enjoy your dinner under the stars. Dubai city is the Emarati cultural experience and desert life makes a memorable moment in your lifetime and will definitely come back for this excellent experience.",
    price: [
      { amount: 300, discount: 0, description: "Adult" },
      { amount: 100, discount: 0, description: "Child" },
    ],
    attractions: [
      "Camel farms",
      "Goats farms",
      "Enjoy your Bedouin dinner in an exclusive camp",
      "Listen to stories told by a local Bedouin",
      "Belly dance show",
      "Skirt show (Tanoura dance)",
      "Henna tattoo",
      "Water and soft drinks",
    ],
    inclusionsList: [
      "Commentary by English, French and German speaking guide",
      "Bottle of water",
      "Arabic traditional lunch",
      "Pick up and drop off from your location",
      "Fees to enter the traditional heritage centers",
      "Voucher can be changed to other excursion",
    ],
  },
  {
    name: "Dubai Red Dune Desert Morning Adventure",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/03/ddAsset-12sec-pass-head-768x718.png",
    multipleImages: [],
    description: "",
    price: [{ amount: 149, discount: 0, description: "" }],
    category: "Dubai Packages",
    attractions: [],
    inclusionsList: [],
  },
  {
    name: "Boating Adventure",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/03/ddAsset-12sec-pass-head-768x718.png",
    multipleImages: [],
    description: "",
    price: [{ amount: 149, discount: 0, description: "" }],
    category: "Dubai Packages",
    attractions: [],
    inclusionsList: [],
  },
  {
    name: "Flyboard Experience in Front of Burj Khalifa",
    mainImage:
      "https://www.jetsetdubai.com/cdn/shop/files/FlyboardinDubaiwithJetsetDubai_439x586.jpg",
    multipleImages: [],
    description: "",
    price: [{ amount: 149, discount: 0, description: "" }],
    category: "Dubai Packages",
    attractions: [],
    inclusionsList: [],
  },
  {
    name: "Glittering Dubai With Museum Of The Future",
    mainImage:
      "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2072347048/MarketPlaceHolidays/United%20Arab%20Emirates/istockphoto_1316445950_612x612_1__SzMwg9.jpg",
    multipleImages: [],
    description: "",
    price: [{ amount: 149, discount: 0, description: "" }],
    category: "Dubai Packages",
    attractions: [],
    inclusionsList: [],
  },
  {
    name: "Marriott Hotel Al Jaddaf",
    mainImage:
      "https://img.traveltriangle.com/cms/attachments/pictures/948914/original/1.jpg",
    multipleImages: [],
    description: "",
    price: [{ amount: 149, discount: 0, description: "" }],
    category: "Dubai Packages",
    attractions: [],
    inclusionsList: [],
  },
  {
    name: "Saudia Holidays Packages",
    mainImage:
      "https://www.experiencealula.com/getattachment/20387b98-6fda-45f2-8b5a-92c83c0aab90/alula-legacy.jpg",
    multipleImages: [],
    description: "",
    price: [{ amount: 3599, discount: 0, description: "" }],
    category: "Saudi Packages",
    attractions: [],
    inclusionsList: [],
  },
  {
    name: "Saudia Holidays Packages",
    mainImage:
      "https://www.experiencealula.com/getattachment/20387b98-6fda-45f2-8b5a-92c83c0aab90/alula-legacy.jpg",
    multipleImages: [],
    description: "Saudia Holidays Packages",
    price: [
      { amount: 3500, discount: 0, description: "Adult" },
      { amount: 1500, discount: 0, description: "Child" },
    ],
    attractions: [
      "Camel farms",
      "Goats farms",
      "Enjoy your Bedouin dinner in an exclusive camp",
      "Listen to stories told by a local Bedouin",
      "Belly dance show",
      "Skirt show (Tanoura dance)",
      "Henna tattoo",
      "Water and soft drinks",
    ],
    inclusionsList: [
      "Commentary by English, French and German speaking guide",
      "Bottle of water",
      "Arabic traditional lunch",
      "Pick up and drop off from your location",
      "Fees to enter the traditional heritage centers",
      "Voucher can be changed to other excursion",
    ],
  },
];

const CategoriesData = [
  {
    name: "Uae Packages",
    description:
      "Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia.",
    viewType: "detail",
    slug: "uae-packages",
  },
  {
    name: "Dubai Packages",
    description:
      "Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia.",
    viewType: "quick",
    slug: "dubai-packages",
  },
  {
    name: "Saudi Packages",
    description:
      "Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia.",
    viewType: "detail",
    slug: "saudi-packages",
  },
];

const CountryData = [
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
    name: "United States",
    mainImage: "united_states.jpg",
    description:
      "From the bustling streets of New York to the stunning landscapes of the Grand Canyon, experience the diversity of America's culture and nature.",
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
    name: "United Kingdom",
    mainImage: "united_kindom.jpg",
    description:
      "Embrace British elegance in London, absorb the history of Edinburgh's castles, and enjoy a cup of tea in traditional English style.",
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
    name: "United Arab Emirates",
    mainImage: "united_arab_emirates.jpg",
    description:
      "Marvel at the architectural wonders of Dubai, relax on Abu Dhabi's pristine beaches, and experience luxury in the desert.",
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
    name: "India",
    mainImage: "india.jpg",
    description:
      "Experience the spiritual vibes of Varanasi, marvel at the Taj Mahal's grandeur, and enjoy the diverse cultures and landscapes of India.",
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

const ToursData = [
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Museum De Lakenhal",
    Day: 1,
    time: "MORNING",
    description:
      "Start your day with a visit to the Museum De Lakenhal in Leiden, Netherlands. This museum showcases the history and art of the city, including works by famous Dutch artists such as Rembrandt.",
    mainImage:
      "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/a2/6b.jpg",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Utah Beach D-Day Museum (Musée du Débarquement)",
    Day: 1,
    time: "AFTERNOON",
    description:
      "Head to Utah Beach D-Day Museum (Musée du Débarquement) in Normandy, France. This museum provides a comprehensive and immersive experience about the D-Day landings during World War II.",
    mainImage:
      "https://media.tacdn.com/media/attractions-content--1x-1/0b/2c/f3/7a.jpg",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Sainte-Mere-Eglise",
    Day: 1,
    time: "EVENING",
    description:
      "Visit Sainte-Mere-Eglise, a historic town in Normandy known for its association with the D-Day landings. Explore the Airborne Museum (Musée Airborne) to learn about the experiences of paratroopers during the war.",
    mainImage:
      "https://media.tacdn.com/media/attractions-content--1x-1/0b/df/11/2e.jpg",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Airborne Museum (Musée Airborne)",
    Day: 1,
    time: "EVENING",
    description:
      "Visit Sainte-Mere-Eglise, a historic town in Normandy known for its association with the D-Day landings. Explore the Airborne Museum (Musée Airborne) to learn about the experiences of paratroopers during the war.",
    mainImage:
      "https://media.tacdn.com/media/attractions-content--1x-1/0b/df/11/2e.jpg",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Hotel",
    Day: 1,
    time: "Night",
    description: "Bedtime. Find amazing hotels in United Kingdom",
    mainImage: "",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Bastogne War Museum",
    Day: 2,
    time: "MORNING",
    description:
      "Take a trip to the Bastogne War Museum in Belgium, which offers a detailed account of the Battle of the Bulge during World War II. Learn about the events that took place in this region and the impact of the war on the local population.",
    mainImage:
      "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/96/17.jpg",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Rheinisches Landesmuseum Trier",
    Day: 1,
    time: "AFTERNOON",
    description:
      "Visit the Rheinisches Landesmuseum Trier in Trier, Germany, one of the oldest cities in Germany. Explore the museum's extensive collection of Roman artifacts, including the famous Porta Nigra.",
    mainImage:
      "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/92/e0.jpg",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Baden-Baden",
    Day: 1,
    time: "EVENING",
    description:
      "Enjoy the evening in Baden-Baden, a spa town known for its thermal baths and luxurious resorts. Take a relaxing soak in the healing waters and indulge in a gourmet dinner at one of the town's top-rated restaurants.",
    mainImage:
      "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/ad/f1.jpg",
  },
  {
    country: "64e3619b79c891d2cf9620b0",
    name: "Museum De Lakenhal",
    Day: 1,
    time: "Night",
    description: "Bedtime. Find amazing hotels in United Kingdom",
    mainImage: "",
  },
];

const VisaCategoryData = [
  {
    name: "EUROPE VISA",
    slug: "europe-visa",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-1-1.png",
    description:
      "Get in touch with our dedicated team to apply for a Europe Visa and gain entry to any European country of your choice. These countries are: Austria, Belgium, the Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, the Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden and Switzerland.",
  },
  {
    name: "UK VISA",
    slug: "uk-visa",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-2-3.png",
    description:
      "Our team is available to guide you through procuring the UK visa.",
  },
  {
    name: "CANADIAN VISA",
    slug: "canadian-visa",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-4-2.png",
    description:
      "Know more about the documents you need to travel, visit your friends and family, or take part in business activities in Canada. Contact us to get the process started today.",
  },
  {
    name: "TURKEY VISA",
    slug: "turkey-visa",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-5-3.png",
    description:
      "We will apply for you an e-visa with single/multiple entry and will inform you about all the mandatory pre-requisites needed.",
  },
  {
    name: "GCC VISA",
    slug: "gcc-visa",
    mainImage:
      "https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-6-1.png",
    description:
      "Whether you plan to travel to Bahrain, Kuwait, Oman, Qatar or Saudi Arabia, our team of experts have the right tools to help you with your visa application. Visit us today and find out how.",
  },
];
const VisaData = [
  {
    name: "Tourist Visa",
    NumberOfStay: 14,
    NumberOfStayName: "Days",
    description:
      "The 14 Days visa for Dubai is a tourist and business visa type, this visa is suitable for people who plan to spend up to 14 days in Dubai or the United Arab Emirates. This is only a single-entry visa.",
    category: "Dubai Visa",
  },
  {
    name: "Tourist Visa",
    NumberOfStay: 1,
    NumberOfStayName: "Month",
    description:
      "Tourists or visitors who desire to spend up to 1 month or 30 days in the United Arab Emirates for either a long-term business trip or for recreation can apply for a 1-month or 30 days Dubai Visa.",
    category: "Dubai Visa",
  },
  {
    name: "Tourist Visa",
    NumberOfStay: 2,
    NumberOfStayName: "Months",
    description:
      "The 2-months visa recommended for visitors who want stay longer with family or visit the United Arab Emirates multiple times within 60 days. Two months visa come with single and multiple entry.",
    category: "Dubai Visa",
  },
  {
    name: "Tourist Visa",
    NumberOfStay: 5,
    NumberOfStayName: "Years",
    description:
      "The 2-months visa recommended for visitors who want stay longer with family or visit the United Arab Emirates multiple times within 60 days. Two months visa come with single and multiple entry.",
    category: "Dubai Visa",
  },
  {
    name: "SHARJAH Visa",
    description:
      "We offer different types of Sharjah visas, this includes the Sharjah 14 days (single entry), 30 days (single entry), 30 days (multiple entry), 60 days (single entry), 60 days (multiple entry), 90 days (single entry), 90 days (multiple entry), 90 days (job seekers entry), and Transit visa (single entry).",
    category: "Sharjah Visa",
  },
  {
    name: "Abu Dhabi Visa",
    description:
      "We offer different types of Sharjah visas, this includes the Sharjah 14 days (single entry), 30 days (single entry), 30 days (multiple entry), 60 days (single entry), 60 days (multiple entry), 90 days (single entry), 90 days (multiple entry), 90 days (job seekers entry), and Transit visa (single entry).",
    category: "Sharjah Packages",
  },
  {
    name: "Abu Dhabi Visa",
    description:
      "We offer different types of Sharjah visas, this includes the Sharjah 14 days (single entry), 30 days (single entry), 30 days (multiple entry), 60 days (single entry), 60 days (multiple entry), 90 days (single entry), 90 days (multiple entry), 90 days (job seekers entry), and Transit visa (single entry).",
    category: "Abu Dhabi Visa",
  },
  {
    name: "Europe Visa",
    description:
      "Get in touch with our dedicated team to apply for a Europe Visa and gain entry to any European country of your choice. These countries are: Austria, Belgium, the Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, the Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden and Switzerland.",
    category: "Schengen Visa",
  },
  {
    name: "Uk Visa",
    description:
      "Our team is available to guide you through procuring the UK visa.",
    category: "Schengen Visa",
  },
  {
    name: "Usa Visa",
    description:
      "You can contact us to direct you on how to get your USA Visa, or you can apply online for either business or tourism. You must complete the DS-160 online form to commence your USA Visa procurement.",
    category: "Schengen Visa",
  },
  {
    name: "Canadian Visa",
    description:
      "Know more about the documents you need to travel, visit your friends and family, or take part in business activities in Canada. Contact us to get the process started today.",
    category: "Schengen Visa",
  },
  {
    name: "Turkey Visa",
    description:
      "We will apply for you an e-visa with single/multiple entry and will inform you about all the mandatory pre-requisites needed.",
    category: "Schengen Visa",
  },
  {
    name: "Gcc Visa",
    description:
      "Whether you plan to travel to Bahrain, Kuwait, Oman, Qatar or Saudi Arabia, our team of experts have the right tools to help you with your visa application. Visit us today and find out how.",
    category: "Gulf Visa",
  },
];
const insertData = async () => {
  try {
    /*
    const UaeCount = await Packages.countDocuments({});

    if (UaeCount === 0) {
      // Insert categories
      const insertedCategories = await Category.insertMany(CategoriesData);
      console.log("Categories data inserted successfully");

      // Map categories to IDs
      const categoryIds = insertedCategories.map((category) => category._id);

      // Add category IDs to packages data
      const packagesWithRandomCategories = PackagesData.map((package) => {
        const randomCategoryId =
          categoryIds[Math.floor(Math.random() * categoryIds.length)];
        package.category = randomCategoryId;
        return package;
      });

      // Insert packages data
      await Packages.insertMany(packagesWithRandomCategories);
      console.log("Packages data inserted successfully");

      // Country visa data
      await Country.insertMany(CountryData);
      console.log("Country data inserted successfully");

      // Country Ai data
      await Tours.insertMany(ToursData);
      console.log("Tour data inserted successfully");
    }
    */
    /*
    // Insert visa data
    await Visa.insertMany(VisaData);
    console.log("Visas data inserted successfully");

    // visa data
    await VisaCategory.insertMany(VisaCategoryData);
    console.log("VisaCategory data inserted successfully");*/
    // Country visa data
    /*
    await Country.insertMany(CountryData);
    console.log("Country data inserted successfully");*/
  } catch (error) {
    console.log("Error inserting demo data:", error);
  }
};

module.exports = insertData;
