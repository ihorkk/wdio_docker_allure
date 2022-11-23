const Chance = require('chance');
const chance = new Chance();

class Generator {
    generateFirstName = chance.first({ nationality: 'it' });
    generateLastName = chance.last({ nationality: 'it' });
    generateEmail = chance.email({domain: "evolution.com"});
    generateUrl = chance.url();
}

module.exports = new Generator();
