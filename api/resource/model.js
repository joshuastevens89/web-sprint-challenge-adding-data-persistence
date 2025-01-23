// build your `Resource` model here
const db = require('../../data/dbConfig')

 function get() {
    return db('resource')
    
}

 function insert(resource) {
    return db('resource').insert(resource, 'resource_id').then(([resource_id]) => db('resource').where({resource_id}).first() )
    
}


module.exports = {
    get,
    insert
}