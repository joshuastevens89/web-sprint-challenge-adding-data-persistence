// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model');
const { errorMonitor } = require('supertest/lib/test');

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

module.exports = router;
