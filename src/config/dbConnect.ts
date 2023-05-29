import mongoose from "mongoose"
mongoose.connect(`mongodb+srv://LearningTypescript:${process.env.DB_AUTH}@cadastro.rpy47th.mongodb.net/maindb`)

const db = mongoose.connection

export default db