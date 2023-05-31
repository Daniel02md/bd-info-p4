/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists(
    'notas_fiscais',
        (tables) => {
            tables.increments("num_nf").primary()
            tables.integer("serie_nf").unique().notNullable()
            tables.integer("cod_cli").notNullable()
            tables.integer("cod_vend").notNullable()
            tables.foreign("cod_cli").references("cod_cli").inTable("clientes")
            tables.foreign("cod_vend").references("cod_vend").inTable("vendedores")
        }
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("notas_fiscais")
};
