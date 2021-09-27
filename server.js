const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || `http://localhost:`;
const CLIENT_URL = process.env.CLIENT_URL || `http://localhost:3000`;

const cors = require(`cors`);
const cookieParser = require(`cookie-parser`);
const fileUpload = require(`express-fileupload`);


app.use(fileUpload({}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors({
   credentials: true,
   origin: CLIENT_URL
}));
app.use(cookieParser());
app.use(express.static(`public`));


app.use(require(`./routers`));

app.use((req, res) => {
   res.status(404).send(`Unknown Request`)
})


app.listen(PORT,()=>{
   console.log(`Server started...\n On => ${HOST}${PORT}`);
})
// const dbPassword = process.env.dbPassword;
// const dbLogin = process.env.dbLogin;
// console.log(dbPassword);
// console.log(dbLogin);

// const { MongoClient } = require('mongodb');

// const uri = `mongodb+srv://${dbLogin}:${dbPassword}@cluster0.gluco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//    const collection = client.db(`test`).collection(`devices`);
//    // perform actions on the collection object
//    client.close();
// });