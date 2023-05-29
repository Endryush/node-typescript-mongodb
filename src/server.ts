import "./config/dotEnvGlobal";
import routes from "./routes/index";
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import db from "./config/dbConnect"
import allowedOrigins from "./config/allowedOrigins";
import CorsCallback from "interfaces/ICors";

const port: string | number = process.env.PORT || 3000
const app = express()

app.use(
  cors({
    origin: (origin: string | undefined, callback: CorsCallback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Access denied by CORS policy'));
      }
    },
  })
)

app.use(express.json())

routes(app)
app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
})

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('conexão com banco feita com sucesso!')
})