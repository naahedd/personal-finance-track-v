import express, {Express} from 'express'
import mongoose from 'mongoose'
import financialRecordRouter from './routes/financial-records'
import cors from 'cors'
require('dotenv').config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors());

MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)
.then(() => console.log('CONNECTED TO MONGODB'))
.catch((err) =>console.error('Failed Connection to MongoDB', err))

app.use('/financial-records', financialRecordRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
