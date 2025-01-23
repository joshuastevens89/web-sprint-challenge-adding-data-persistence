// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model')



router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.get(); // Await the result of Projects.get()
    res.json(resources); // Send the result as JSON
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
});

// POST /api/projects
router.post('/', async (req, res, next) => {
  try {
    const resource = await Resource.insert(req.body); // Await the result of Projects.insert()
    res.status(201).json(resource); // Send the created project with a 201 status
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
});






module.exports = router

