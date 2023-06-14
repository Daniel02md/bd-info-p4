const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.db'
  }
});

class Professor {
  static async criarProfessor(professor) {
    try {
      const [id] = await database('professores').insert(professor);
      console.log('Professor criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar professor:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarProfessor(id, professor) {
    try {
      const result = await database('professores').where({ id }).update(professor);
      console.log('Professor atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar professor:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterProfessor(id) {
    try {
      const professor = await database('professores').where({ id }).first();
      console.log('Professor encontrado:', professor);
    } catch (error) {
      console.error('Erro ao obter professor:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirProfessor(id) {
    try {
      const result = await database('professores').where({ id }).del();
      console.log('Professor excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir professor:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Professor;
