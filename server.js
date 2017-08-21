var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
   title: 'Yash Tutorials' ,
   heading: 'Yash Tutorials Learn like never before Best learning experience for all standards. Personalised coaching. Healthy atmosphere. Its s time to learn. find your own learning path ',
   content: `<p>
                We are committed to take Education to every home through our teachers by using technology in the following areas of the education eco-system.
            </p>
            <ol>
                <li>Digital content for Learning, Teaching and Assessment</li>
                <li>Innovative Learning and teaching methodologies such as blended learning and flipped classrooms
                <li>Flexible delivery models of education on different technology & end-user platforms</li>
            </ol>' `
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
var htmltemplate = `<!DOCTYPE html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>
                ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <div class="header">
            <div id="header-text">
                ${heading}
            </div>
        </div>
        <div class="content">
                ${content}
        </div>
    </body>
</html>
`;
 return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
    res.send('Article two requested and will be served here');
});

app.get('/article-three', function (req, res) {
    res.send('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
