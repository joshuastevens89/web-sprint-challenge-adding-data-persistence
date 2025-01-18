// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model');

// GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.get(); // Await the result of Projects.get()
    res.json(projects); // Send the result as JSON
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
});

// POST /api/projects
router.post('/', async (req, res, next) => {
  try {
    const project = await Projects.insert(req.body); // Await the result of Projects.insert()
    res.status(201).json(project); // Send the created project with a 201 status
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
});

module.exports = router;
