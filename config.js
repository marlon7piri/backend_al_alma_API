import dotenv from 'dotenv'


dotenv.config()



export const PORT = process.env.PORT || 8080
export const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/test"
