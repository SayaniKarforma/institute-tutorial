import express from 'express'
import healthRouter from './routers/healthRouter.js';

const app = express();

app.use(healthRouter)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

