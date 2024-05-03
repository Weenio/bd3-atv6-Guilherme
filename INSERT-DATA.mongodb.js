/*Define o nome do banco de dados*/

const database = 'BD3-NoSQL-AtlasMongoDB'

/*Define o nome da collection*/

const collection = 'bd3-atv6-Guilherme'

/*Acessa o banco de dados*/

use(database)

db[collection].insertOne(
  [{
    "cod_aluno":1,
    "cod_turma":1,
    "nome":"Armando",
    "CPF":"123.456.789-01",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"ArmandoConstantino@gmail.com",
    "Data_Nasc":"11/11/2011"
  }]
)

db[collection].insertMany(
  [{
    "cod_aluno":2,
    "cod_turma":2,
    "nome":"Arnaldo",
    "CPF":"123.456.789-02",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"ArnaldoJesus@gmail.com",
    "Data_Nasc":"22/02/2022"
  },
  {
    "cod_aluno":3,
    "cod_turma":3,
    "nome":"Bolôncio",
    "CPF":"123.456.789-03",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"BolôncioBola@gmail.com",
    "Data_Nasc":"03/03/2033"
  },
  {
    "cod_aluno":4,
    "cod_turma":4,
    "nome":"Bento",
    "CPF":"123.456.789-04",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"BentoChico@gmail.com",
    "Data_Nasc":"04/04/2004"
  },
  {
    "cod_aluno":5,
    "cod_turma":5,
    "nome":"Carlinhos",
    "CPF":"123.456.789-05",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"CarlinhosCavalos@gmail.com",
    "Data_Nasc":"05/05/2005"
  },
  {
    "cod_aluno":6,
    "cod_turma":1,
    "nome":"Catarina",
    "CPF":"123.456.789-06",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"StaCatarina@gmail.com",
    "Data_Nasc":"06/06/2006"
  },
  {
    "cod_aluno":7,
    "cod_turma":2,
    "nome":"Dário",
    "CPF":"123.456.789-07",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"DariaoDaMassa@gmail.com",
    "Data_Nasc":"07/07/2007"
  },
  {
    "cod_aluno":8,
    "cod_turma":3,
    "nome":"Douglas",
    "CPF":"123.456.789-08",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"EuSouODouglas@gmail.com",
    "Data_Nasc":"08/08/2008"
  },
  {
    "cod_aluno":9,
    "cod_turma":4,
    "nome":"Estónio",
    "CPF":"123.456.789-09",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"TôSemCriatividadeDesculpa@gmail.com",
    "Data_Nasc":"19/45/1945"
  },
  {
    "cod_aluno":10,
    "cod_turma":5,
    "nome":"Adolfo",
    "CPF":"123.456.789-10",
    "RG":"123.123.12-1",
    "Tel_Aluno":"(11) 99999-9999",
    "Tel_Responsavel":"(11) 88888-8888",
    "Email":"Minecraft@gmail.com",
    "Data_Nasc":"31/01/1908"
  }]
)
