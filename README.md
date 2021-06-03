## instalações

npm init -y
npm i express body-parser express-rescue mongodb mocha chai sinon
npm install -D mongodb-memory-server
npm i -D nodemon

"scripts": {
    "test": "mocha ./tests/**/*$NAME*.test.js --exit",
    "dev": "nodemon index.js"
},