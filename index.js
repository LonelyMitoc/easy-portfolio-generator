const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = ({name, location, github, linkedin}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${name}</h1>
            <p class="lead">I am from ${location}</p>
            <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
                <li class="list-group-item">My GitHub username is ${github}</li>
                <li class="list-group-item">LinkedIN: ${linkedin}</li>
            </ul>
        </div>
    </div>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin'
        }
    ])
    .then((response) => {
        const htmlPageContent = generateHTML(response);

        fs.writeFile('index.html', htmlPageContent, (err) => err ? console.error(err) : console.log('Portfolio Generated!'))
    });