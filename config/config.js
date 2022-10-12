import dotenv from 'dotenv'
dotenv.config();
export const POOL = {
    min: process.env.EX_MIN_CONECTION_POOL || 0,
    acquire: process.env.EX_ACQUIRE_CONECTION_POOL || 30000,
    idle: process.env.EX_IDLE_CONECTION_POOL || 10000
};