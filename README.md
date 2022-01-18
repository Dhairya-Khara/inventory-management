# Shopify Backend Developer Intern Challenge

An inventory management web application for the Shopify backend developer intern challenge. 
The application is built using [NodeJS](https://nodejs.org/en/) ([w/ express](https://expressjs.com/)), [MongoDB](https://www.mongodb.com/) ([w/ mongoose](https://mongoosejs.com/)) in the back end and [React](https://reactjs.org/) in the front end. Since this challenge is focussed on the back end, the client code is not provided. Instead a production version is stored in the build directory. As a result, you can easily focus on the back end.

## Getting Started
The two prerequisite required to run this application are NodeJS and MongoDB.

1. Install NodeJS for your OS [here](https://nodejs.org/en/download/)
2. Install MongoDB Community Serber for your OS [here](https://www.mongodb.com/try/download/community?tck=docs_server).
3. Create a empty directory named *mongodb-data* in the same directory where you installed MongoDB. 

Once the installation is complete, we will first need to run the MongoDB server locally. Navigate to the folder where you installed it. In there, please enter the bin directory. It should look something like this:

![bin directory](https://i.ibb.co/3Tts9CN/image.png)

Open the terminal in this directory and run the following command:\n
For Mac/Linux
```bash
mongod --dbpath=[PATH FOR mongodb-data]
```

