import GAMES from "../db/db.js"

export const getAllGame = async (req, res) => {
    try {
        res.json(GAMES)
    } catch (err) {
        console.log(err)
        res
            .status(500)
            .json({
                message: "Не удалось получить игры"
            })
    }
}