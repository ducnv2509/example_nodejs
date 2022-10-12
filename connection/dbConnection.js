import { createPool } from "mysql";
import { POOL} from "../config/config.js";
import myLogger from "../winstonLog/winston.js";
import dotenv from 'dotenv';
dotenv.config();
let configDB = {
    host: process.env.EX_HOST,
    user: process.env.EX_USER_DB,
    password: process.env.EX_PASSWORD,
    database: process.env.EX_DB_NAME,
    pool: POOL,
    port: process.env.EX_PORT_DB
};
myLogger.info("DB config: %o",configDB);
let connection = createPool(configDB);
export default connection;