# Simple Inventory Management System

An inventory management web application for the Shopify backend developer intern challenge. 
The application is built using [NodeJS](https://nodejs.org/en/) ([w/ express](https://expressjs.com/)) and [MongoDB](https://www.mongodb.com/) ([w/ mongoose](https://mongoosejs.com/)). Since this challenge is focussed on the back end, the client code (made with [React](https://reactjs.org/)) is not provided. Instead a production version is stored in the build directory. Thus, you can easily just focus on the back end code. 

The deployed version can be viewed at https://khara-shopify-backend-intern.herokuapp.com/
## Getting Started
Feel free to skip a step if you already have the prerequisite, this guide will assume no background knowledge of the technologies used. 
The two prerequisite required to run this application are NodeJS and MongoDB.

1. Install NodeJS for your OS [here](https://nodejs.org/en/download/)
2. Install MongoDB Community Server for your OS [here](https://www.mongodb.com/try/download/community?tck=docs_server).
3. Create a empty directory named *mongodb-data* in the same directory where you installed MongoDB. 

Once the installation is complete, we will first need to run the MongoDB server locally. Navigate to the folder where you installed it. In there, please enter the bin directory. It should look something like this:

![bin directory](https://i.ibb.co/3Tts9CN/image.png)

4. Open the terminal in this directory and run the following command:<br />
For Mac/Linux
```bash
mongod --dbpath=[PATH FOR mongodb-data]
```
For Windows
```bash
start mongod.exe --dbpath=[PATH FOR mongodb-data]
```

You have done this correctly when a terminal looking like this opens up.

![mongodb](https://i.ibb.co/RhrQF0d/image.png)

5. Clone the repo using the following command
```bash
git clone git@github.com:Dhairya-Khara/shopify-backend-development.git
```

6. Navigate to the root direcotry of the project and run
```bash
npm install
```

7. We can finally start the web server
```bash
npm run start
```

8. Open a web browser at http://localhost:3000/

## Features
- Create Inventory Items
- Reading Inventory Items (all of them and a particular item)
- Updating Inventory Items
- Deleting Inventory Items

Additional Feature
- Allow image uploads AND store images with generated thumbnails.


  
