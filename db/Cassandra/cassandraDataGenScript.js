const fs = require('fs');
var faker = require('faker');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
 const activities = require('./activitiesGenerator.js')
 const mockData = require('../mockdata.js');
 const prefixes = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Madam', 'Master', 'Prince', 'Princess', 'Duke', 'Baron'];
 const firstNames = ['Demarcus', 'Rose', 'Curtis', 'Dean', 'Neil', 'Hortense', 'Ines', 'Kariane', 'Darrick', 'Yesenia', 'Constance', 'Cicero', 'Angelina', 'Roosevelt', 'Julia', 'Mark', 'Zakary', 'Ernestina', 'Darlene', 'Cleve', 'John', 'Roberta', 'Edythe', 'Jonatan', 'Joan', 'Summer', 'Berniece', 'Marcelina', 'Dejon', 'Sydnie', 'Malvina', 'Royal', 'Eula', 'Jannie', 'Felicity', 'Randall', 'Jovanny', 'Breana', 'Berenice', 'Earnest', 'Chris', 'Yvette', 'Miller', 'Else', 'Cali', 'Monty', 'Donald', 'Camille', 'Jadon', 'Sharon', 'Jordane', 'Timothy', 'Ron', 'Colby', 'Emery', 'Rusty', 'Brendon', 'Kacey', 'Drake', 'Joelle', 'Alfred', 'Raleigh', 'Arlo', 'Camille', 'Giles', 'Kariane', 'Adelle', 'Lucinda', 'Rickie', 'Darien', 'Rod', 'Kassandra', 'Rosanna', 'Melyssa', 'Amari', 'Arne', 'Efrain', 'Nicole', 'Gordon', 'Isobel', 'Karli', 'Josue', 'Tanya', 'Amber', 'Earnestine', 'Catharine', 'Anabelle', 'Kristy', 'Elise', 'Lance', 'Marvin', 'Christophe', 'Paul', 'Phoebe', 'Carlotta', 'Robbie', 'Dave', 'Zula', 'Yadira', 'Holly'];
 const lastNames = ['Farrells', 'DuBuques', 'Kiehns', 'Swaniawskis', 'Markss', 'Murrays', 'Wests', 'Leschs', 'Kautzers', 'Rippins', 'McClures', 'Nicolass', 'Beers', 'Roobs', 'Thiels', 'Boscos', 'Kuvaliss', 'Quitzons', 'Doyles', 'Fadels', 'Gislasons', 'Kassulkes', 'Haleys', 'Runtes', 'Monahans', 'Goldners', 'Hyatts', 'Wolffs', 'Beattys', 'Tromps', 'Friesens', 'Mertzs', 'Rolfsons', 'Wills', 'Simoniss', 'Nikolauss', 'Kleins', 'Mosciskis', 'Rosenbaums', 'McKenzies', 'Yosts', 'Powlowskis', 'Cummeratas', 'Lefflers', 'Baileys', 'Kesslers', 'Keelings', 'Daviss', 'Corkerys', 'Doyles', 'Feests', 'Champlins', 'Bashirians', 'Stokess', 'Schadens', 'Effertzs', 'Robertss', 'Stoltenbergs', 'Dickenss', 'Simoniss', 'Carters', 'DAmores', 'VonRuedens', 'Dibberts', 'Bergnaums', 'Hageness', 'McClures', 'Mayerts', 'Heathcotes', 'Bogans', 'Dachs', 'Hyatts', 'Buckridges', 'Stoltenbergs', 'Oberbrunners', 'Abshires', 'Grahams', 'Gulgowskis', 'Boyers', 'Lemkes', 'Schroeders', 'Donnellys', 'Pfeffers', 'Starks', 'Williamsons', 'Greenfelders', 'Weissnats', 'Hamills', 'Walkers', 'Schmelers', 'Haleys', 'Zemlaks', 'Tromps', 'Ziemanns', 'Wuckerts', 'Hartmanns', 'Grahams', 'Shanahans', 'Bergstroms', 'Mertzs'];
 const locations = ['AshyPawstel', 'BlackPawstel', 'BluePawstel', 'GrayPawstel', 'GreenPawstel', 'IcyPawstel', 'LemonPawstel', 'MangoPawstel', 'OrangePawstel', 'PurplePawstel', 'RedPawstel', 'SalmonPawstel', 'WhitePawstel', 'YellowPawstel', 'AgreeablePawstel', 'AmbitiousPawstel', 'BravePawstel', 'CalmPawstel', 'DelightfulPawstel', 'EagerPawstel', 'FaithfulPawstel', 'GentlePawstel', 'HappyPawstel', 'JollyPawstel', 'KindPawstel', 'LivelyPawstel', 'NicePawstel', 'ObedientPawstel', 'PolitePawstel', 'ProudPawstel', 'SillyPawstel', 'ThankfulPawstel', 'VictoriousPawstel', 'WittyPawstel', 'WonderfulPawstel', 'ZealousPawstel', 'BigPawstel', 'ColossalPawstel', 'FatPawstel', 'GiganticPawstel', 'GreatPawstel', 'HugePawstel', 'ImmensePawstel', 'LargePawstel', 'LittlePawstel', 'MammothPawstel', 'MassivePawstel', 'MicroscopicPawstel', 'MiniaturePawstel', 'PetitePawstel', 'PunyPawstel', 'ScrawnyPawstel', 'ShortPawstel', 'SmallPawstel', 'TallPawstel', 'TeenyPawstel', 'TinyPawstel', 'AncientPawstel', 'BriefPawstel', 'EarlyPawstel', 'FastPawstel', 'FuturisticPawstel', 'LatePawstel', 'LongPawstel', 'ModernPawstel', 'OldPawstel', 'Old-fashionedPawstel', 'PrehistoricPawstel', 'QuickPawstel', 'RapidPawstel', 'ShortPawstel', 'SlowPawstel', 'SwiftPawstel', 'YoungPawstel', 'BreezyPawstel', 'CoolPawstel', 'CuddlyPawstel', 'DampPawstel', 'FluffyPawstel', 'WarmPawstel', 'WoodenPawstel', 'AcidicPawstel', 'BitterPawstel', 'CoolPawstel', 'CreamyPawstel', 'DeliciousPawstel', 'DisgustingPawstel', 'FreshPawstel', 'GreasyPawstel', 'JuicyPawstel', 'HotPawstel', 'MoldyPawstel', 'NutritiousPawstel', 'NuttyPawstel', 'PutridPawstel', 'RancidPawstel', 'RipePawstel', 'RottenPawstel', 'SaltyPawstel', 'SavoryPawstel'];
 const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
};

const getLatitude = () => {
  var num = Math.random(1) * 99;
  return parseFloat(num.toFixed(2));
};

 const randomBool = () => {
  var num = Math.floor(Math.random() * Math.floor(2))
  if(num === 0){
    return true;
  }
  return false;
}
const createCSV = (fileName) => {
  var count = 7500000;
  fileName = fileName || 'data.csv';
  writer.pipe(fs.createWriteStream(fileName));
   for (let i = 0; i < prefixes.length; i += 1) {
    for (let j = 0; j < firstNames.length; j += 1) {
      for (let k = 0; k < lastNames.length; k += 1) {
        //change for loop to --> for(let l = 50; l < 100; l+=1)
        for (let l = 75; l < 100; l += 1) {
          count++;
          writer.write({ listing_id: count,
                         list_name: prefixes[i] + firstNames[j] + lastNames[k] + locations[l], 
                         first_name: firstNames[getRandomInt(firstNames.length)],
                         last_name: lastNames[getRandomInt(lastNames.length)],
                         city: mockData.cities[getRandomInt(mockData.cities.length)],
                         state: mockData.states[getRandomInt(mockData.states.length)],
                         country: mockData.countries[getRandomInt(mockData.countries.length)],
                         joined_in_date: mockData.joinInDates[getRandomInt(mockData.joinInDates.length)],
                         references_count: Math.floor(Math.random()*99),
                         verfied: randomBool(),
                         descirption: mockData.descriptions[getRandomInt(mockData.descriptions.length)],
                         response_rate: Math.floor(Math.random()*99) ,
                         response_time: Math.floor(Math.random()*5),
                         languages: 'english' ,
                         email: mockData.emails[getRandomInt(mockData.emails.length)],
                         features: activities[Math.floor(Math.random()*999)],
                         things_to_do: activities[Math.floor(Math.random()*999)] ,
                         lat_location: getLatitude(),
                         lon_location: getLatitude() * 2 ,
                         rating: Math.floor(Math.random()*5)
                        });

         
        }
      }
    }
  }
  writer.end();
  console.log('Done');
};
 createCSV('fourthEntireDataSet.csv'); 