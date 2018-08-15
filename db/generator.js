const faker = require('faker');
const fs = require('fs');

// FIRST NAMES
const genFirstNames = () => {
  fs.writeFile('firstNames.csv', 'first name \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let firstName = `${faker.name.firstName()}\n`;
    fs.appendFileSync('firstNames.csv', firstName, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// LAST NAMES
const genLastNames = () => {
  fs.writeFile('lastNames.csv', 'last name \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let lastName = `${faker.name.lastName()}\n`;
    fs.appendFileSync('lastNames.csv', lastName, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// CITIES
const genCities = () => {
  fs.writeFile('cities.csv', 'cities \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let city = `${faker.address.city()}\n`;
    fs.appendFileSync('cities.csv', city, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// STATES
const genStates = () => {
  fs.writeFile('states.csv', 'states \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let state = `${faker.address.state()}\n`;
    fs.appendFileSync('states.csv', state, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// COUNTRIES
const genCountries = () => {
  fs.writeFile('countries.csv', 'countries \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let country = `${faker.address.country()}\n`;
    fs.appendFileSync('countries.csv', country, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// JOINED IN DATE
const genJoinedInDate = () => {
  fs.writeFile('joinedInDates.csv', 'joinedInDates \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let pastDate = `${faker.date.past()}\n`;
    fs.appendFileSync('joinedInDates.csv', pastDate, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// REFERENCES COUNT
const genRefCount = () => {
  fs.writeFile('refCounts.csv', 'refCounts \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let refCount = `${Math.round(Math.random() * 200)}\n`;
    fs.appendFileSync('refCounts.csv', refCount, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// VERIFIED
const genVerified= () => {
  fs.writeFile('verified.csv', 'verified \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let bool = `${Math.round(Math.random() * 1)}\n`;
    fs.appendFileSync('verified.csv', bool, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// DESCRIPTIONS
const descriptions = () => {
  fs.writeFile('descriptions.csv', 'descriptions \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let desc = `${faker.lorem.sentence()}\n`;
    fs.appendFileSync('descriptions.csv', desc, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// RESPONSE RATES
const genResRate = () => {
  fs.writeFile('resRates.csv', 'resRates \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let resRate = `${Math.random().toFixed(2) * 1}\n`; 
    fs.appendFileSync('resRates.csv', resRate, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// RESPONSE TIMES
const genResTimes = () => {
  fs.writeFile('resTimes.csv', 'resTimes \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let resTime = `${Math.round(Math.random() * 72)}\n`;
    fs.appendFileSync('resTimes.csv', resTime, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// LANGUAGES
const languages = ['English', 'Chinese', 'Japanese', 'German', 'Spanish', 'Tagalog', 'Korean', 'French', 'Persian', 'Arabic', 'Armenian', 'Thai', 'Latin', 'Italian', 'Norwegian', 'Swedish', 'Portuguese', 'Haitian Creole', 'Tamil'];

const genLanguages = () => {
  fs.writeFile('languages.csv', 'languages \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let language = `${languages[Math.round(Math.random * languages.length)]}\n`;
    fs.appendFileSync('languages.csv', language, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

// EMAIL
const genEmail = () => {
  fs.writeFile('emails.csv', 'emails \n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  for (let i = 0; i < 10000000; i += 1) {
    let email = `${faker.internet.email()}\n`;
    fs.appendFileSync('emails.csv', email, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

genVerified();
descriptions();
genResRate();
genResTimes();
genLanguages();
genEmail();
//node --max-old-space-size=8192 generator.js