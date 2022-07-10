import express from "express"
import cors from "cors"
import {getAllGame} from "./controllers/GameController.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/game", getAllGame)

app.listen(process.env.PORT || 4444, err => {
    if(err) {
        console.log(err)
    }

    console.log("SERVER OK")
})