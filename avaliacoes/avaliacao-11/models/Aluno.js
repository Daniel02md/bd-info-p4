const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.db'
  }
});

class Aluno {
  static async criarAluno(aluno) {
    try {
      const [id] = await database('alunos').insert(aluno);
      console.log('Aluno criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar aluno:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarAluno(id, aluno) {
    try {
      const result = await database('alunos').where({ id }).update(aluno);
      console.log('Aluno atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterAluno(id) {
    try {
      const aluno = await database('alunos').where({ id }).first();
      console.log('Aluno encontrado:', aluno);
    } catch (error) {
      console.error('Erro ao obter aluno:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirAluno(id) {
    try {
      const result = await database('alunos').where({ id }).del();
      console.log('Aluno excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir aluno:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Aluno;
