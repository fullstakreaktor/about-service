const faker = require('faker');
const fs = require('fs');

/*
Helpers are at the top of this page and csv generators are
at the bottom. See appropriate labels and comments for
instructions.
*/

/* HELPERS */
const arrRandomize = (arr) => {
  return Math.floor(Math.random() * arr.length); 
};

const states = [
  'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'
];

const countries = [
  'Peru', 'Brazil', 'South Korea', 'Russia', 'Turkmenistan', 'Argentina', 'Argentina', 'Egypt', 'Malaysia', 'Sweden', 'United States', 'Taiwan', 'Singapore', 'Prague', 'Finland', 'Canada', 'China', 'Africa', 'Haiti', 'Mexico', 'Spain', 'Thailand',
];

const joinInDates = [
  '2015-02-05', '2018-05-26', '2011-02-16', '2015-02-13', '2016-12-16', '2015-06-26', '2015-02-06', '2013-08-21', '2016-05-18', '2011-10-07',
];

const plants = [
  'Cercocarpus montanus Raf. var. glaber (S. Watson) F.L. Martin', 'Phyllostegia renovans W.L. Wagner', 'Astragalus cottonii M.E. Jones', 'Condalia warnockii M.C. Johnst. var. warnockii', 'Ilex cuthbertii Small', 'Pyrola elliptica Nutt.', 'Quercus ×fernaldii Trel.', 'Polystichum Roth', 'Fimbristylis puberula (Michx.) Vahl var. puberula', 'Clinopodium chandleri (Brandegee) Cantino & S.J. Wagstaff', 'Mentzelia multiflora (Nutt.) A. Gray var. longiloba (J. Darl.) Kartesz', 'Linanthus dichotomus Benth.', 'Carex ×stenolepis Less.', 'Aegle Corr. Serr.', 'Rhododendron L.', 'Sapium laurocerasus Desf.', 'Galium serpenticum Dempster ssp. wenatchicum Dempster & Ehrend.', 'Schinus terebinthifolius Raddi', 'Eutrochium maculatum (L.) E.E. Lamont var. foliosum (Fernald) E.E. Lamont', 'Heuchera parvifolia Nutt. ex Torr. & A. Gray var. microcarpa Rosend. Butters & Lakela', 'Hobsonia Massee', 'Triplasis P. Beauv.', 'Bruchia ravenelii Wilson', 'Asplenium kaulfussii Schltdl.', 'Acacia victoriae Benth.', 'Felicia amelloides (L.) Voss', 'Galium boreale L.', 'Symphyotrichum dumosum (L.) G.L. Nesom var. pergracile (Wiegand) G.L. Nesom', 'Lonicera reticulata Raf.', 'Streptanthus fenestratus (Greene) J.T. Howell', 'Helenium vernale Walter', 'Cuscuta potosina Schaffn.', 'Ratibida peduncularis (Torr. & A. Gray) Barnhart var. peduncularis', 'Poa laxiflora Buckley', 'Jubaea Kunth', 'Psorothamnus Rydb.', 'Pittosporum resiniferum Hemsl.', 'Aesculus ×arnoldiana Sarg. [excluded]', 'Grimmia pulvinata (Hedw.) Sm.', 'Reimarochloa oligostachya (Munro ex Benth.) Hitchc.', 'Crataegus valida Beadle', 'Romulea rosea (L.) Eckl. var. rosea (L.) Eckl. [excluded]', 'Sarcogyne integra (de Lesd.) H. Magn.', 'Acidanthera Hochst.', 'Brassica oleracea L. var. botrytis L.', 'Abronia nana S. Watson', 'Erigeron pulchellus Michx. var. tolsteadii Cronquist', 'Oenothera xylocarpa Coville', 'Hieracium scabrum Michx. var. intonsum Fernald & H. St. John', 'Iris thompsonii R.C. Foster', 'Collinsia bartsiifolia Benth. var. davidsonii (Parish) Newsom', 'Baptisia ×bicolor Greenm. & Larisey', 'Tradescantia paludosa E.S. Anderson & Woodson', 'Diplazium grandifolium (Sw.) Sw.', 'Psathyrotopsis scaposa (A. Gray) H. Rob.', 'Rhizocarpon cookeanum H. Magn.', 'Tillandsia variabilis Schltdl.', 'Syzygium javanicum Miq.', 'Guibourtia coleosperma (Benth.) J. Léonard', 'Pottia arizonica Wareh.', 'Hibiscadelphus bombycinus Forbes', 'Erigeron cervinus Greene', 'Eutrochium Raf.', 'Croton trinitatis Millsp.', 'Vanilla poitaei Rchb. f.', 'Betula ×caerulea Blanch. var. grandis Blanch. (pro nm.)', 'Tradescantia ×diffusa Bush (pro sp.)', 'Schiedea membranacea H. St. John', 'Primula ×polyantha Mill. (pro sp.)', 'Tiquilia canescens (DC.) A.T. Richardson var. canescens',
];

const features = [
  'accelerator', 'accordion', 'account', 'accountant', 'acknowledgment', 'acoustic', 'athlete', 'atm', 'atom', 'attack', 'attempt', 'attention', 'attic', 'attraction', 'august', 'aunt', 'australia', 'australian', 'author', 'authorisation', 'authority', 'authorization', 'avenue', 'babies', 'baboon', 'baby', 'back', 'backbone', 'bacon', 'birthday', 'bit', 'bite', 'chronometer', 'church', 'cicada', 'cinema', 'circle', 'circulation', 'cirrus', 'citizenship', 'city', 'clam', 'clarinet', 'class', 'claus', 'clave', 'clef', 'clerk', 'click', 'client', 'climb', 'clipper', 'cloakroom', 'clock', 'close', 'closet', 'cloth', 'cloud', 'cloudy', 'clover', 'club', 'clutch', 'coach', 'coal', 'coast', 'coat', 'cobweb', 'cockroach', 'cocktail', 'cocoa', 'cod', 'coffee', 'coil', 'coin', 'coke', 'cold', 'collar', 'college', 'collision', 'colombia', 'colon', 'colony', 'color', 'colt', 'column', 'columnist', 'comb', 'comfort', 'comic', 'comma', 'command', 'commission', 'committee', 'community', 'cougar', 'cough', 'country', 'course', 'court', 'cousin', 'cover', 'cow', 'cowbell', 'crab', 'crocodile', 'crocus', 'croissant', 'crook', 'crop', 'cross', 'crow', 'crowd', 'crown', 'crush', 'cry', 'cub', 'cuban', 'cucumber', 'cultivator', 'diving', 'division', 'divorced', 'dock', 'doctor', 'dog', 'dogsled', 'doll', 'dollar', 'dolphin', 'domain', 'donald', 'donkey', 'donna', 'door', 'dorothy', 'double', 'doubt', 'downtown', 'dragon', 'dragonfly', 'drain', 'drake', 'drama', 'draw', 'drawbridge', 'drawer', 'dream', 'dredger', 'fire', 'fired', 'fireman', 'fireplace', 'firewall', 'fish', 'fisherman', 'flag', 'flame', 'flare', 'flat', 'flavor', 'flax', 'flesh', 'flight', 'flock', 'flood', 'floor', 'flower', 'flugelhorn', 'flute', 'fly', 'foam', 'fog', 'fold', 'font', 'food', 'foot', 'football', 'footnote', 'force', 'forecast', 'forehead', 'forest', 'forgery', 'fork', 'form', 'impulse', 'inch', 'income', 'increase', 'index', 'india', 'indonesia', 'industry', 'ink', 'innocent', 'input', 'insect', 'inventory', 'iron', 'island', 'israel', 'italian', 'italy', 'jacket', 'jaguar', 'jail', 'jam', 'james', 'january', 'japan', 'japanese', 'jar', 'jasmine', 'jason', 'jaw', 'jeans', 'jeep', 'jeff', 'jelly', 'jellyfish', 'jennifer', 'jet', 'nephew', 'nerve', 'nest', 'net', 'network', 'news', 'newsprint', 'newsstand', 'nic', 'nickel', 'radar', 'radiator', 'radio', 'radish', 'raft', 'rail', 'railway', 'rain', 'rainbow', 'raincoat', 'rainstorm', 'rake', 'ramie', 'random', 'range', 'rat', 'rate', 'raven', 'ravioli', 'ray', 'rayon', 'reaction', 'representative', 'request', 'resolution', 'respect', 'responsibility', 'rest', 'restaurant', 'result', 'retailer', 'revolve', 'revolver', 'reward', 'rhinoceros', 'rhythm', 'rice', 'richard', 'riddle', 'rifle', 'ring', 'rise', 'risk', 'river', 'riverbed', 'road', 'roadway', 'roast', 'robert', 'robin', 'rock', 'rocket', 'sagittarius', 'sail', 'sailboat', 'sand', 'sandra', 'sandwich', 'santa', 'sarah', 'sardine', 'sudan', 'suede', 'sugar', 'suggestion', 'suit', 'summer', 'sun', 'sunday', 'sundial', 'sunflower', 'sunshine', 'supermarket', 'supply', 'support', 'surfboard', 'surgeon', 'surname', 'surprise', 'susan', 'sushi', 'swallow', 'swamp', 'swan', 'sweater', 'sweatshirt', 'sweatshop', 'swedish', 'sweets', 'swim', 'swimming', 'swing', 'withdrawal', 'witness', 'wolf', 'woman', 'women', 'wood', 'wool', 'woolen', 'word', 'work', 'workshop', 'worm', 'wound', 'wrecker', 'wren', 'wrench', 'wrinkle', 'wrist', 'writer', 'xylophone', 'yacht', 'yak', 'yam', 'yard', 'yarn', 'year', 'yellow', 'yew', 'yogurt', 'yoke', 'yugoslavian', 'zebra', 'zephyr', 'zinc', 'zipper', 'zone', 'zoo', 'zoology'];

const languages = [
  'English', 'Chinese', 'Japanese', 'German', 'Spanish', 'Tagalog', 'Korean', 'French', 'Persian', 'Arabic', 'Armenian', 'Thai', 'Latin', 'Italian', 'Norwegian', 'Swedish', 'Portuguese', 'Haitian Creole', 'Tamil',
];

const activities = [
  'snowboarding', 'hiking', 'climbing', 'swimming', 'tanning', 'surfing', 'eating', 'reading', 'tourist spots', 'snorkeling', 'skydiving', 'vr tennis', 'gym', 'netflix and chill', 'shopping', 'pet dogs', 'yodeling', 'karaoke', 'skype', 'caving', 'boxing', 'dancing', 'form a band',
];

const emails = [
  'dlippitt0@chicagotribune.com', 'dcharlwood1@icio.us', 'lboichat2@tinyurl.com', 'nbuckle3@gov.uk', 'gtestro4@unblog.fr', 'gwapples5@ameblo.jp', 'jgallichiccio6@howstuffworks.com', 'vvasyushkhin7@squidoo.com', 'ameggison8@xrea.com', 'aglentz9@yolasite.com',
];

const guideBks = [
  'https://bit.ly/2vzsxmG', 'https://bit.ly/2vVih7N', 'https://bit.ly/2AZYsSj', 'https://bit.ly/2KKqXTA', 'https://bit.ly/2B6RV8m', 'https://bit.ly/2hs8uxE', 'https://bit.ly/2KLoZ5A', 'https://bit.ly/2P0iwHd', 'https://bit.ly/2vWKdrD',
];

// hosts helpers
// first names
const genFirstNames = () => {
  let firstName = faker.name.firstName();
  return firstName;
};

// last names
const genLastNames = () => {
  let lastName = faker.name.lastName();
  return lastName;
};

// cities
const genCities = () => {
  let city = faker.address.city();
  return city;
};

// states
const genStates = () => {
  let state = states[arrRandomize(states)];
  return state;
};

// countries
const genCountries = () => {
  let country = countries[arrRandomize(countries)];
  return country;
};

// joined in date
const genJoinedInDate = () => {
  let joinedDate = joinInDates[arrRandomize(joinInDates)];
  return joinedDate;
};

// references count
const genRefCount = () => {
  let refCount = Math.round(Math.random() * 500);
  return refCount;
};

// verified
const genVerified= () => {
  let bool = Math.round(Math.random() * 1);
  return bool;
};

// descriptions

const genDescriptions = () => {
  let desc = plants[arrRandomize(plants)];
  return desc;
};

// response rates
const genResRate = () => {
  let resRate = Math.random().toFixed(2) * 1;
  return resRate;
};

// response times
const genResTimes = () => {
  let resTime = Math.round(Math.random() * 72);
  return resTime;
};

// languages
const genLanguages = () => {
  let language = languages[arrRandomize(languages)];
  return language;
};

// emails
const genEmail = () => {
  let email = emails[arrRandomize(emails)];
  return email;
};

// avatars
const genAvatars = () => {
  let avatar = faker.image.avatar();
  return avatar;
};

/* Listings Helpers */
// features
const genFeatures = () => {
  let feature = `${features[arrRandomize(features)]} ${features[arrRandomize(features)]} ${features[arrRandomize(features)]} ${features[arrRandomize(features)]} ${features[arrRandomize(features)]}`;
  return feature;
};

// things to do
const genThingsToDo = () => {
  let thingToDo = `${activities[arrRandomize(activities)]} || ${activities[arrRandomize(activities)]} || ${activities[arrRandomize(activities)]}`;
  return thingToDo;
};

// latitude
const genLat = () => {
  let lat = faker.address.latitude();
  return lat;
};

// longitude
const genLon = () => {
  let lon = faker.address.longitude();
  return lon;
};

// host guide books
const genHostGuideBk = () => {
  let hostGuideBk = guideBks[arrRandomize(guideBks)];
  return hostGuideBk;
};

/* |||| TABLE GENERATORS |||| */

// HOSTS TABLE
const genHosts = () => {
  console.log('generating hosts!');
  let out = fs.createWriteStream('./csvTables/hostsTable.csv', { flag: 'a' });
  for (let i = 1; i < 10000001; i += 1) {
    out.write(`${i},${genFirstNames()},${genLastNames()},${genCities()},${genStates()},${genCountries()},${genJoinedInDate()},${genRefCount()},${genVerified()},${genDescriptions()},${genResRate()},${genResTimes()},${genLanguages()},${genEmail()},${genAvatars()}\n`, 'utf-8');
    if (i === 2500000) {
      console.log('25%');
    }
    if (i === 5000000) {
      console.log('50%');
    }
    if (i === 7500000) {
      console.log('75%');
    }
    if (i === 10000000) {
      console.log('ONE HUNNIIIIDDDDDDDD PERCENT MANG');
    }
  }
  out.end();
};

// LISTINGS TABLE
const genListings = () => {
  console.log('generating listings!');
  let out = fs.createWriteStream('./csvTables/listingsTable.csv', { flag: 'a' });
  for (let i = 1; i < 10000001; i += 1) {
    out.write(`${i},${genFeatures()},${genThingsToDo()},${genLat()},${genLon()},${genHostGuideBk()}\n`, 'utf-8');
    if (i === 2500000) {
      console.log('25%');
    }
    if (i === 5000000) {
      console.log('50%');
    }
    if (i === 7500000) {
      console.log('75%');
    }
    if (i === 10000000) {
      console.log('ONE HUNNIIIIDDDDDDDD PERCENT MANG');
    }
  }
};

// REVIEWS TABLE
const genReviews = () => {
  console.log('generating reviews!');
  let out = fs.createWriteStream('./csvTables/reviewsTable.csv', { flag: 'a' });
  for (let i = 1; i < 10000001; i += 1) {
    out.write(`${i},${Math.ceil(Math.random() * 10000001)},${Math.ceil(Math.random() * 10000001)},${Math.floor(Math.random() * 6)}\n`, 'utf-8');
    if (i === 2500000) {
      console.log('25%');
    }
    if (i === 5000000) {
      console.log('50%');
    }
    if (i === 7500000) {
      console.log('75%');
    }
    if (i === 10000000) {
      console.log('ONE HUNNIIIIDDDDDDDD PERCENT MANG');
    }
  }
  out.end();
};

/*

INSTRUCTIONS

Uncomment one table generator at a time and then type the following
in terminal while in this directory:

time node --max-old-space-size=8192 csvGen.js

- Time outputs the amount of time the data takes to generate
- If all three generators are uncommented it takes about an hour for the data to generate
- One at a time for my computer...
  - hosts will generate in ~10 mins
  - listings will generate in ~1 min
  - reviews will generate in ~30 secs
- '--max-old-space-size=8192' will allocate more memory to node
  and optimize the speed of data generation

  */

// genHosts();
// genListings();
// genReviews();
