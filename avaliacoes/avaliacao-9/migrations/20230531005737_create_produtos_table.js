/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists(
    'produtos',
    (tables) => {
        tables.increments("cod_prod").primary()
        tables.string("nome_prod").notNullable()
        tables.float("preco_unit").notNullable()
    }
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("produtos")
};
