const path = require('path');
const fs = require('fs');

const chirps = {
    table: [
        {
            userName: 'Keelan',
            thoughts: 'What up'
        },
        {
            userName: 'John',
            thoughts: 'Hi'
        },
        {
            userName: 'Joseph',
            thoughts: 'Hello'
        },
        {
            userName: 'Joe',
            thoughts: 'Good Morning'
        },
        {
            userName: 'Drew',
            thoughts: 'Good Afternoon'
        }
    ]
};

const json = JSON.stringify(chirps);
const dataPath = path.join(__dirname, '../chirps.json');

fs.writeFileSync(dataPath, json, 'utf-8', err => {
    if (err) console.log(err);
});

fs.readFile(dataPath, {
    encoding: "utf-8"
}, (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log(JSON.parse(data));
});