<<<<<<< HEAD
# HW Friend Finder {Node + Express + Pug}

getting started: 
  - npm install 

Multiple ways to start the application: 
  debug mode: 
  - nodemon bin/www
  - npm run devstart   
  
  deployment mode:
  - npm start
  - node bin/www
  
=======
# Week of 14 Homework 
## Node ~ Express ~ Handlebars

## Live Link
 - https://floating-dusk-50097.herokuapp.com/

### Overview

In this assignment, we created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). We followed the MVC design pattern; used Node and MySQL to query and route data in our app, and Handlebars to generate your HTML.


* Burgers Express! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.


## Check points

#### App Setup

#### DB Setup

#### Config Setup

#### Model setup

#### Controller setup

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -


### One More Thing
This is a really tough homework assignment
>>>>>>> 79cf35656a3aa18e017cedffeb55f05afaa8f7b5
