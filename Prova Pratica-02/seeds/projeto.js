/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projeto').del()
  await knex('projeto').insert([
    {nome: 'Boooo', descricao: 'descricao de exemplo.', prazo: '2000/05/03'},
    {nome: 'Foo', descricao: 'descricao de exemplo.', prazo: '2000/05/03'},
    {nome: 'Bare', descricao: 'descricao de exemplo.', prazo: '2000/05/03'}
  ]);
};
