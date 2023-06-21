/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema
    .createTable('tarefa', function(table) {
      table.increments('id');
      table.integer('project_id').notNullable();
      table.string('descricao').notNullable();
      table.string('status').notNullable();
      table.string('responsavel').notNullable();
      table.foreign('project_id').references('id').inTable('projetos')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tarefa')
};
