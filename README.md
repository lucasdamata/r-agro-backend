# Backend - NodeJs, Typescript, SQLITE e TypeORM

### Requisitos para executar o server

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/getting-started/install).       Use [Insomnia](https://insomnia.rest/download/) ou [Postman](https://www.postman.com/) para obter acesso as requisições via GET,POST.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/lucasdamata/r-agro-backend.git>

# Acesse  a pasta do projeto no terminal/cmd
$ cd r-agro-backend

# Intale as dependencias com Yarn
$ yarn install

# Execute a aplicação
$ yarn dev

# O servidor iniciará na porta:3333 (http>//localhost:3333/)
```

### Criando e visualizando os dados

- Listando - GET: http://localhost:3333/forms
- Criando - POST: http://localhost:3333/forms

```bash
  # Configure o bory para JSON
 Exemplo de campos para criar ficha:
  {
	"os": "OS0001",

  "time_initial": "09:00",

  "time_final": "14:00",

  "date": "24/02/2021",

  "location": "TL 00222",

  "name_machine": "Trator 1",

  "implement_machine": "implemento 1",

  "operator": "Operador 003 (Fulano)",

  "input": "Insumo 1",

  amount: 20
}
```
- Filtro - GET: Passe o paremetro :id como no exemplo http://localhost:3333/forms/:1 


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)




