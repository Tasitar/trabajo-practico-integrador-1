import 'dotenv/config'
import express from "express"
import { starBD } from './src/config/database.js'
import { db_relations } from './src/models/index.js'

const app = express()

app.use(express.json())

db_relations();

const PORT = process.env.PORT || 6767;



app.listen(PORT, async () =>  {
    await starBD()
    console.log("SERVER ON!!!!");
})