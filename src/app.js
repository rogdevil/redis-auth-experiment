import express from 'express'
import {
    config
} from 'dotenv'
import { authRouter} from './routes/authRouter.js'
import { eventRouter } from './routes/event.js';

config();

const app = express()

app.use(express.json())


const port = process.env.PORT ?? 3000

app.get('/api/v1', (req, res) => {
    res.send("Welcone to the event manager build on redis");
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/event', eventRouter);

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})
