/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name').notNullable().unique()
        tbl.string('resource_description')

        
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
  
};
