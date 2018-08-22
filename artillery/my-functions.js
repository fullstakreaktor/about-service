const fs = require('fs');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const genReviews = () => {
  console.log('generating reviews!');
  let out = fs.createWriteStream('artillery-reviews.csv', { flag: 'a' });
  for (let i = 10000025; i < 10500026; i += 1) {
    out.write(`${i},${getRandomNumber(9700000, 10000000)},${getRandomNumber(9700000, 10000000)},${Math.floor(Math.random() * 6)}\n`, 'utf-8');
  }
  out.end();
};

genReviews();
