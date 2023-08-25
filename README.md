# Yelpcamp

![](https://cdn.sanity.io/images/dql1ver2/production/dbba290cc5cb2521509c9e8c1b5be200aa5917d3-1908x929.png)
![](https://www.ismailmo.com/static/6105f75a183466b8e01e68f410846afd/4e02a/yelpcamp-screenshot.png)

Yelpcamp is the famous massive full-stack project from Colt Steele's Web Devloper Bootcamp.

It is a campground website where users can register and then add, book and delete campsites while viewing their images,prices and locations on a map along with various other details presented with a beautiful and easy to use UI.

The application also takes care of some security issues like NoSQL injections and Cross-Site scripting.

## Features
* Users can create accounts and add or book campsites based on their price and location preferences.The campsite links are attached with images and their locations can be viewed on the map feature.
* Users can review campgrounds and update or remove them too.
* User profiles show some details of the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account.
* Search campgrounds by their names and locations.
* Sort campgrounds by highest rating, most reviewed, lowest price, or highest price.


### Prerequisites

1. **Node.js** for running server-side JavaScript. You can find instructions on how to download and install Node.js for your computer [here](https://nodejs.org/en/download/)

2. **MongoDB** (Community Edition preferrably) to store data. Instructions on downloading and installing MongoDB on your computer can be found [here](https://docs.mongodb.com/manual/installation/)
   
3. A cloudinary account with an API key and secret code. The website can be accessed from [here](https://cloudinary.com)

### To run this project locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code
3. Install [nodejs](https://nodejs.org/en)
4. Clone this repository and install the required packages using npm.

```
git clone https://github.com/achyuthcodes30/Yelpcamp.git
cd yelpcamp
npm install
```

5. Create a .env file (or just export manually in the terminal) in the root of the project and add the following:  

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

6. Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.  

7. Then go to [localhost:3000](http://localhost:3000/).

To get google maps working check [this](https://github.com/nax3t/google-maps-api) out.

## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for
  modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [Ejs](https://ejs.co/) - Embedded JavaScript templating
- [Boostrap](https://getbootstrap.com/) - One of the most widely used CSS front-end libraries.