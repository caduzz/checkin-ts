require('dotenv').config();

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`✅O server foi iniciado na porta:, |${process.env.PORT}|, - 🥶`)
});