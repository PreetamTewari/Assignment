const service = require("../services/main.service");

async function get(req, res, next) {
    try {
        res.json(await service.getAll(req.query.page));
    } catch (error) {
        console.error(`Error while getting the tasks`, error.message);
        next(error);
    }
}

async function create(req, res, next){
    try {
        res.json(await service.create(req.body));
    } catch (error) {
        console.error(`Error while adding the task`, error.message);
        next(error);
    }
}

async function update(req, res, next){
    try {
        res.json(await service.update(req.params.id, req.body));
    } catch (error) {
        console.error(`Error while updating the task`, error.message);
        next(error);
    }
}

async function getMetrics(req, res, next){
    try {
        res.json(await service.getMetrics(req.body));
    } catch (error) {
        console.error(`Error: `,error.message);
        next(error);
    }
}

module.exports = {
    get,
    create,
    update,
    getMetrics
}