# Shopify Backend Developer Intern Challenge

An inventory management web application for the Shopify backend developer intern challenge. 
The application is built using <br/>[NodeJS](https://nodejs.org/en/) ([w/ express](https://expressjs.com/)) and [MongoDB](https://www.mongodb.com/) ([w/ mongoose](https://mongoosejs.com/)). Since this challenge is focussed on the back end, the client code (made with [React](https://reactjs.org/)) is not provided. Instead a production version is stored in the build directory. Thus, you can easily just focus on the back end code. 

## Getting Started
The two prerequisite required to run this application are NodeJS and MongoDB.

1. Install NodeJS for your OS [here](https://nodejs.org/en/download/)
2. Install MongoDB Community Serber for your OS [here](https://www.mongodb.com/try/download/community?tck=docs_server).
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

You have done this correctly when a similiar looking terminal opens up.

![mongodb](https://i.ibb.co/RhrQF0d/image.png)

5. Navigate to the root direcotry of the project and run
```bash
npm install
```

6.We can finally start the web server
```bash
npm run start
```

7. Open a web browser at http://localhost:3000/



  
