const requestPromise = require('request-promise');
const fs = require('fs');
const path = require('path');

const pathName = path.join(__dirname, 'popular-articles.json');

requestPromise('https://reddit.com/r/popular.json', (err, res, body) => {

    const articles = [];

    if (err) console.log(err);
    JSON.parse(body).data.children.forEach(item => {
        articles.push({ title: item.data.title, url: item.data.url, author: item.data.author })
    });
    const articlesJson = JSON.stringify(articles);

    fs.writeFile(pathName, articlesJson, err => {
        if (err) console.log(err);
    });
});

