const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.db'
  }
});

class Disciplina {
  static async criarDisciplina(disciplina) {
    try {
      const [id] = await database('disciplinas').insert(disciplina);
      console.log('Disciplina criada com ID:', id);
    } catch (error) {
      console.error('Erro ao criar disciplina:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarDisciplina(id, disciplina) {
    try {
      const result = await database('disciplinas').where({ id }).update(disciplina);
      console.log('Disciplina atualizada:', result);
    } catch (error) {
      console.error('Erro ao atualizar disciplina:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterDisciplina(id) {
    try {
      const disciplina = await database('disciplinas').where({ id }).first();
      console.log('Disciplina encontrada:', disciplina);
    } catch (error) {
      console.error('Erro ao obter disciplina:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirDisciplina(id) {
    try {
      const result = await database('disciplinas').where({ id }).del();
      console.log('Disciplina excluída:', result);
    } catch (error) {
      console.error('Erro ao excluir disciplina:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Disciplina;
