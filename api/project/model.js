// build your `Project` model here
const db = require('../../data/dbConfig');

async function get() {
    const projects = await db('project');
    return projects.map(project => ({
        ...project,
        project_completed: project.project_completed ? true : false
    }));
}

async function insert(project) {
    const [project_id] = await db('project').insert(project);
    const insertedProject = await db('project')
        .where('project_id', project_id)
        .first();

    return {
        ...insertedProject,
        project_completed: insertedProject.project_completed ? true : false
    };
}

module.exports = {
    get,
    insert,
};
