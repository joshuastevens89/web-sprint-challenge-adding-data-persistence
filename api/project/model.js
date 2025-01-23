// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projects = await db('projects')
    return projects.map(project => ({
        ...project,
        project_completed: Boolean(project.project_completed),

    }))
}

async function createProject(project) {
    const [id] = await db('projects').insert(project)
    return db('projects').where('project_id', id).first()
}

module.exports = {
    getProjects, createProject
}