import express from 'express';
import dotenv from 'dotenv';
import myLogger from './winstonLog/winston.js';
import task from './routers/RouterTasks.js'
dotenv.config();
const app = express();
app.use(express.json());


app.use('/api/', task)
const port = process.env.EX_PORT || 3000
const host = '0.0.0.0';
function myListener() {
    myLogger.info(`Listening on port ${port}..`);
}
app.listen(port, host, myListener)
