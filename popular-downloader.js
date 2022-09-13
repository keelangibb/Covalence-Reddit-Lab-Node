const fs = require('fs');
const path = require('path');
const requestPromise = require('request-promise');


requestPromise('https://reddit.com/r/popular.json', (err, res, body) => {

    const articles = []
    if (err) console.log(err)

    JSON.parse(body).data.children.forEach(item => {
        const articleLink = `${item.data.url_overridden_by_dest}`;
        
        if (path.extname(articleLink) == '.jpg' || path.extname(articleLink) == '.png' || path.extname(articleLink) == '.gif') {
            articles.push(articleLink);
            const pathName = path.join(__dirname, `./downloads/${item.data.id}`);
            fs.writeFile(pathName, articleLink, err => {
                if (err) console.log(err);
            })
        }


    });
 
});