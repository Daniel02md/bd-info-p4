const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("main.db")


db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS ALUNOS (MATRICULA INT PRIMARY KEY, NOME TEXT);")
  db.run("INSERT INTO ALUNOS (MATRICULA, NOME)\
   VALUES\
   (234234234, 'DANIEL'),\
   (341234234, 'YASMIN'),\
   (341234123, 'GABRIEL'),\
   (234343242, 'FERNANDA'),\
   (125434536, 'LARA');")
  db.each("SELECT * FROM ALUNOS;", (err, row) => {console.log(row)})
  db.run("DELETE FROM ALUNOS;")
})

db.close()