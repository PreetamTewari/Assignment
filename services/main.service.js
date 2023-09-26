const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../config/general.config");

async function getAll(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
      `SELECT * 
      FROM tasks LIMIT ?,?`, 
      [offset, config.listPerPage]
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
  
    return {
      data,
      meta
    }
}

async function create(task){
    const q = "INSERT INTO tasks (task_state,date) VALUES(?,?)";
    const values = [task.task_state, task.date];
    const result = await db.query(q, values);
    let message = "Error in adding the task";
    if(result.affectedRows){
        message = "Task added successfully";
    }
    return {message};
}

async function update(id, task){
    const q = "UPDATE tasks SET task_state=? WHERE id=?";
    const values = [task.task_state,id];
    const result = await db.query(q, values);
    let message = "Error in updating the task";
    if(result.affectedRows){
        message = "Task updated successfully";
    }
    return {message};
}

async function getMetrics(date){
    const q = "SELECT SUM(CASE WHEN task_state=0 then 1 else 0 end) as open_tasks, SUM(CASE WHEN task_state=1 then 1 else 0 end) as inprogress_tasks, SUM(CASE WHEN task_state=2 then 1 else 0 end) as closed_tasks from tasks where MONTHNAME(date)=? and YEAR(date)=?";
    const values = [date.month, date.year];
    const rows = await db.query(q, values);
    const data = helper.emptyOrRows(rows);
    return {
        date: date.month + " " + date.year,
        metrics: data
    }
}


module.exports = {
    getAll,
    create,
    update,
    getMetrics
}