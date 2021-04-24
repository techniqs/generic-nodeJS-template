import express from 'express';
import cors from 'cors';
import log  from './deleteMe/help';
import { config } from 'dotenv';

config();
const port = 8080
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

log("working");

app.get('/generic/test', function (req, res) {
  res.status(200).send("Test successful")
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
