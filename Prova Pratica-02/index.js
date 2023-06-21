
const Tarefa = require('./models/Tarefa')
const Projetos = require('./models/Projeto')

let projetoExemplo = {
  nome: 'Index project', descricao: 'Description of project', prazo: '2000/05/03'
}
let tarefaExemplo = {
  project_id: 1, descricao: 'Tarefa de exemplo 1', status: 'em Andamento', responsavel: 'Fulano'
}

//** IMPORTANTE: O código não pode ser executado de forma síncrona pois o knex é assíncrono!!! **\\
// Inserindo tarefas e projetos
Projetos.criarProjeto(projetoExemplo)
Tarefa.criarTarefa(tarefaExemplo)

// Obtendo tarefas e projetos
Projetos.obterProjeto(1)
Tarefa.obterTarefa(1)

// Atualizando tarefas e projetos
let projetoAtualizado  = projetoExemplo
projetoAtualizado.descricao = "Atualizado"

Projetos.atualizarProjeto(1, projetoAtualizado)

let tarefaAtualizado  = tarefaExemplo
tarefaAtualizado.descricao = "Atualizado"
Tarefa.atualizarTarefa(1, tarefaAtualizado)

// Deletando tarefas e projetos
Tarefa.excluirTarefa(1)
Projetos.excluirProjeto(1)