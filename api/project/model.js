const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
  createProject,
};

function getProjects() {
  return db("projects")
    .then(projects => projects.map(proj =>
      ({ ...proj, project_completed: proj.project_completed ? true : false })
    ));
}

function createProject(project) {
  return db("projects")
    .insert(project, "project_id")
    .then(([project_id]) => db("projects").where({ project_id }))
    .then(([proj]) => ({ ...proj, project_completed: proj.project_completed ? true : false }));
}