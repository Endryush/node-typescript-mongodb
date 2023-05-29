import dotenv from "dotenv";
export default dotenv.config();

import routes from "./routes/index";
import express  from "express";
import db from "./config/dbConnect"


const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

routes(app)
app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
})

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('conexão com banco feita com sucesso!')
})