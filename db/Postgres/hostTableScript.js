const fs = require('fs');
var faker = require('faker');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
 const mockData = require('../mockdata.js');
 const prefixes = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Madam', 'Master', 'Prince', 'Princess', 'Duke', 'Baron'];
 const firstNames = ['Demarcus', 'Rose', 'Curtis', 'Dean', 'Neil', 'Hortense', 'Ines', 'Kariane', 'Darrick', 'Yesenia', 'Constance', 'Cicero', 'Angelina', 'Roosevelt', 'Julia', 'Mark', 'Zakary', 'Ernestina', 'Darlene', 'Cleve', 'John', 'Roberta', 'Edythe', 'Jonatan', 'Joan', 'Summer', 'Berniece', 'Marcelina', 'Dejon', 'Sydnie', 'Malvina', 'Royal', 'Eula', 'Jannie', 'Felicity', 'Randall', 'Jovanny', 'Breana', 'Berenice', 'Earnest', 'Chris', 'Yvette', 'Miller', 'Else', 'Cali', 'Monty', 'Donald', 'Camille', 'Jadon', 'Sharon', 'Jordane', 'Timothy', 'Ron', 'Colby', 'Emery', 'Rusty', 'Brendon', 'Kacey', 'Drake', 'Joelle', 'Alfred', 'Raleigh', 'Arlo', 'Camille', 'Giles', 'Kariane', 'Adelle', 'Lucinda', 'Rickie', 'Darien', 'Rod', 'Kassandra', 'Rosanna', 'Melyssa', 'Amari', 'Arne', 'Efrain', 'Nicole', 'Gordon', 'Isobel', 'Karli', 'Josue', 'Tanya', 'Amber', 'Earnestine', 'Catharine', 'Anabelle', 'Kristy', 'Elise', 'Lance', 'Marvin', 'Christophe', 'Paul', 'Phoebe', 'Carlotta', 'Robbie', 'Dave', 'Zula', 'Yadira', 'Holly'];
 const lastNames = ['Farrell\'s', 'DuBuque\'s', 'Kiehn\'s', 'Swaniawski\'s', 'Marks\'s', 'Murray\'s', 'West\'s', 'Lesch\'s', 'Kautzer\'s', 'Rippin\'s', 'McClure\'s', 'Nicolas\'s', 'Beer\'s', 'Roob\'s', 'Thiel\'s', 'Bosco\'s', 'Kuvalis\'s', 'Quitzon\'s', 'Doyle\'s', 'Fadel\'s', 'Gislason\'s', 'Kassulke\'s', 'Haley\'s', 'Runte\'s', 'Monahan\'s', 'Goldner\'s', 'Hyatt\'s', 'Wolff\'s', 'Beatty\'s', 'Tromp\'s', 'Friesen\'s', 'Mertz\'s', 'Rolfson\'s', 'Will\'s', 'Simonis\'s', 'Nikolaus\'s', 'Klein\'s', 'Mosciski\'s', 'Rosenbaum\'s', 'McKenzie\'s', 'Yost\'s', 'Powlowski\'s', 'Cummerata\'s', 'Leffler\'s', 'Bailey\'s', 'Kessler\'s', 'Keeling\'s', 'Davis\'s', 'Corkery\'s', 'Doyle\'s', 'Feest\'s', 'Champlin\'s', 'Bashirian\'s', 'Stokes\'s', 'Schaden\'s', 'Effertz\'s', 'Roberts\'s', 'Stoltenberg\'s', 'Dickens\'s', 'Simonis\'s', 'Carter\'s', 'D\'Amore\'s', 'VonRueden\'s', 'Dibbert\'s', 'Bergnaum\'s', 'Hagenes\'s', 'McClure\'s', 'Mayert\'s', 'Heathcote\'s', 'Bogan\'s', 'Dach\'s', 'Hyatt\'s', 'Buckridge\'s', 'Stoltenberg\'s', 'Oberbrunner\'s', 'Abshire\'s', 'Graham\'s', 'Gulgowski\'s', 'Boyer\'s', 'Lemke\'s', 'Schroeder\'s', 'Donnelly\'s', 'Pfeffer\'s', 'Stark\'s', 'Williamson\'s', 'Greenfelder\'s', 'Weissnat\'s', 'Hamill\'s', 'Walker\'s', 'Schmeler\'s', 'Haley\'s', 'Zemlak\'s', 'Tromp\'s', 'Ziemann\'s', 'Wuckert\'s', 'Hartmann\'s', 'Graham\'s', 'Shanahan\'s', 'Bergstrom\'s', 'Mertz\'s'];
 const locations = ['AshyPawstel', 'BlackPawstel', 'BluePawstel', 'GrayPawstel', 'GreenPawstel', 'IcyPawstel', 'LemonPawstel', 'MangoPawstel', 'OrangePawstel', 'PurplePawstel', 'RedPawstel', 'SalmonPawstel', 'WhitePawstel', 'YellowPawstel', 'AgreeablePawstel', 'AmbitiousPawstel', 'BravePawstel', 'CalmPawstel', 'DelightfulPawstel', 'EagerPawstel', 'FaithfulPawstel', 'GentlePawstel', 'HappyPawstel', 'JollyPawstel', 'KindPawstel', 'LivelyPawstel', 'NicePawstel', 'ObedientPawstel', 'PolitePawstel', 'ProudPawstel', 'SillyPawstel', 'ThankfulPawstel', 'VictoriousPawstel', 'WittyPawstel', 'WonderfulPawstel', 'ZealousPawstel', 'BigPawstel', 'ColossalPawstel', 'FatPawstel', 'GiganticPawstel', 'GreatPawstel', 'HugePawstel', 'ImmensePawstel', 'LargePawstel', 'LittlePawstel', 'MammothPawstel', 'MassivePawstel', 'MicroscopicPawstel', 'MiniaturePawstel', 'PetitePawstel', 'PunyPawstel', 'ScrawnyPawstel', 'ShortPawstel', 'SmallPawstel', 'TallPawstel', 'TeenyPawstel', 'TinyPawstel', 'AncientPawstel', 'BriefPawstel', 'EarlyPawstel', 'FastPawstel', 'FuturisticPawstel', 'LatePawstel', 'LongPawstel', 'ModernPawstel', 'OldPawstel', 'Old-fashionedPawstel', 'PrehistoricPawstel', 'QuickPawstel', 'RapidPawstel', 'ShortPawstel', 'SlowPawstel', 'SwiftPawstel', 'YoungPawstel', 'BreezyPawstel', 'CoolPawstel', 'CuddlyPawstel', 'DampPawstel', 'FluffyPawstel', 'WarmPawstel', 'WoodenPawstel', 'AcidicPawstel', 'BitterPawstel', 'CoolPawstel', 'CreamyPawstel', 'DeliciousPawstel', 'DisgustingPawstel', 'FreshPawstel', 'GreasyPawstel', 'JuicyPawstel', 'HotPawstel', 'MoldyPawstel', 'NutritiousPawstel', 'NuttyPawstel', 'PutridPawstel', 'RancidPawstel', 'RipePawstel', 'RottenPawstel', 'SaltyPawstel', 'SavoryPawstel'];
 const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
};
 const randomBool = () => {
  var num = Math.floor(Math.random() * Math.floor(2))
  if(num === 0){
    return true;
  }
  return false;
}
const createCSV = (fileName) => {
  fileName = fileName || 'data.csv';
  writer.pipe(fs.createWriteStream('./csvFiles/host/' + fileName));
   for (let i = 0; i < prefixes.length; i += 1) {
    for (let j = 0; j < firstNames.length; j += 1) {
      for (let k = 0; k < lastNames.length; k += 1) {
        //change for loop to --> for(let l = 50; l < 100; l+=1)
        for (let l = 75; l < 100; l += 1) {
          writer.write({ list_name: prefixes[i] + firstNames[j] + lastNames[k] + locations[l], 
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
                         email: mockData.emails[getRandomInt(mockData.emails.length)]
                        });
        }
      }
    }
  }
  writer.end();
  console.log('Done');
};
 createCSV('fourthFourthOfHostTable.csv'); 