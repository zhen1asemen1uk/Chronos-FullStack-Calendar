require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { PORT, HOST, CLIENT_URL, DB_PASSWORD, DB_LOGIN } = process.env;

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

async function start() {
   try {
      // const dbName = (`calendar(chronos)`);
      const url = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.gluco.mongodb.net/`;

      await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

      app.listen(PORT, () => {
         console.log(`Server started...\n On => ${HOST}${PORT}`);
      });
   } catch (error) {
      console.log(error);
   }
}

   start();