import e from "express";
import query from "../helper/helperDb.js";
import myLogger from "../winstonLog/winston.js";


export async function getAllTasks() {
    let sql = `CALL getAllTasks()`;
    let ret = undefined;
    try {
        const result = await query(sql);
        let res = result[0];
        myLogger.info("%o", res)
        let tasks = [];
        for (let r of res) {
            let { id, task, status, created_at } = r;
            tasks.push({ id, task, status, created_at })
        }
        ret = { statusCode: 200, tasks };
    } catch (e) {
        myLogger.info("login e: %o", e);
        ret = { statusCode: 500, error: 'ERROR', description: 'System busy!' };

    }
    return ret;
}

export async function createTask(task, status) {
    let params = [task, status]
    let sql = `CALL createTask(?, ?)`;
    let ret = undefined;
    try {
        const result = await query(sql, params);
        myLogger.info("%o", result)
        ret = { statusCode: 200, data: result[0][0] };
    } catch (e) {
        myLogger.info("login e: %o", e);
        ret = { statusCode: 500, error: 'ERROR', description: 'System busy!' };

    }
    return ret;
}

export async function updateTask(id, task, status) {
    let params = [id, task, status]
    let sql = `CALL updateTask(?, ?, ?)`;
    let ret = undefined;
    try {
        const result = await query(sql, params);
        myLogger.info("%o", result)
        ret = { statusCode: 200, data: result[0] };
    } catch (e) {
        myLogger.info("login e: %o", e);
        ret = { statusCode: 500, error: 'ERROR', description: 'System busy!' };

    }
    return ret;
}


export async function deleteTask(id) {
    let params = [id]
    let sql = `CALL deleteTask(?)`;
    let ret = undefined;
    try {
        const result = await query(sql, params);
        ret = { statusCode: 200, message: 'Delete Successfully' };
    } catch (e) {
        myLogger.info("login e: %o", e);
        ret = { statusCode: 500, error: 'ERROR', description: 'System busy!' };

    }
    return ret;
}

export async function getDetailsTask(id) {
    let params = [id]
    let sql = `CALL getDetails(?)`;
    let ret = undefined;
    try {
        const result = await query(sql, params);
        myLogger.info("%o", result[0])
        if (result[0].length == 0) {
            ret = { statusCode: 500, message: "NOT_FOUND" };
        } else {
            ret = { statusCode: 200, data: result[0] };
        }
    } catch (e) {
        myLogger.info("login e: %o", e);
        ret = { statusCode: 500, message: 'NOT_FOUND' };

    }
    return ret;
}
