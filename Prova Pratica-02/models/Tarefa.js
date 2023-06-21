const knexfile = require('../knexfile')
const database = require('knex')(knexfile)

class Tarefa {
  static async criarTarefa(tarefa) {
    try {
      const [id] = await database('tarefa').insert(tarefa);
      console.log('Tarefa criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarTarefa(id, tarefa) {
    try {
      const result = await database('tarefa').where({ id }).update(tarefa);
      console.log('Tarefa atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterTarefa(id) {
    try {
      const tarefa = await database('tarefa').where({ id }).first();
      
      if (!tarefa){
        console.error('Tarefa não encontrado')
      }else{
        console.log('Tarefa encontrado:', tarefa);
      }
    } catch (error) {
      console.error('Erro ao obter tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirTarefa(id) {
    try {
      const result = await database('tarefa').where({ id }).del();
      console.log('Tarefa excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    } finally {
      database.destroy();
    }
  }
}
module.exports = Tarefa;