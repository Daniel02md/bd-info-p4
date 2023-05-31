/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable(
        "itens_notaFiscal",
        (tables) => {
            tables.integer("quant").notNullable()
            tables.float("valor").notNullable()
            tables.integer("num_nf").notNullable()
            tables.increments("cod_prod").notNullable()
            tables.foreign("num_nf").references("num_nf").inTable("notas_fiscais")
            tables.foreign("cod_prod").references("cod_prod").inTable("produtos")
            
        }
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("itens_notaFiscal")
};
