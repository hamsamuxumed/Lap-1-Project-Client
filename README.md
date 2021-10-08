# Client Side

Caffeine Newswire is a social networking, blogging website, where users can share interesting news articles with others from various devices. Users can comment on and react to the entries of other users.

This README will guide you through how to setup the client side of the application and our experiences during this project.

![image](https://) (Images of client side)
![image](https://) (Images of client side)
![image](https://) (Images of client side)

The repo for the server side of the application can be found [here](https://github.com/Forum-123/Lap-1-Project-Server). The server deployment can be accessed [here](https://caffeine-overflow-server.herokuapp.com/).

## Installation & Usage

### Installation

1. Clone or download the repository.
2. Run `npm install` to install the dependencies.

### Usage

* run `open index.html` in mac or `start index.html` on windows to open the file in your browser

## Technologies

* Heroku for deploying the server side
* HTML, CSS and JavaScript
* Jest (JS testing framework) for testing JavaScript code
* VSCode, which was our code editor
* Github for version control
* Slack for collaboration and communication between team members
* Wireframe for planning and designing UI

## Process

* We started by creating two different repositories for both the client and server.
* Created an initial file structure for both repositories
* Inside each of these repositories we created a Kanban board with all the tasks required.
* Initially we started working on separate tasks including the tests for the server side, setting up the Giphy API and creating the RESTful routes (CRUD)
* We stored the example data within a JS object and created a matching class so that we could later add to this data
* Then we added JS to the client side to fetch data from our server and generate posts on our website.
* Finished by adding styling to the client side to improve the user interface.
## Wins & Challenges

### Wins

* Worked seamlessly as a team
* Website successfully deployed on Netlify.
* Server successfully deployed on Heroku.
* Managed to get a coverage of more than 95%.
* Implemented the Giphy API.
* Routes and HTTP requests provided us with the output we intended.
* Successfully managed to produce a site which met all of the basic requirements.

### Challenges

* Experienced a few merge conflicts and Git issues when pulling from the repo. The solution was to apply the Driver and Navigator approach when a specific task was being worked on by more than one team member.


## Future Features

* Add user identification and log in features
* Implement the ability to update posts and comments using PUT routes

## Bugs

* Coverage of the client side testing does not display for each file