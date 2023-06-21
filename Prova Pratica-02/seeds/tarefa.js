/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tarefa').del()
  await knex('tarefa').insert([
    {project_id: 13, descricao: 'Tarefa de exemplo 1', status: 'em Andamento', responsavel: 'Fulano'},
    {project_id: 13, descricao: 'Tarefa de exemplo 2', status: 'em Andamento', responsavel: 'Fulano'},
    {project_id: 12, descricao: 'Tarefa de exemplo 3', status: 'em Andamento', responsavel: 'Fulano'}
  ]);
};
