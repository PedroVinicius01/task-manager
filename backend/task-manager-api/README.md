# Task Manager API

API REST desenvolvida em **Node.js** para gerenciamento de tarefas, com autenticação via **JWT** e integração com **MySQL**.

## Funcionalidades

- Cadastro e login de usuários
- Autenticação com JWT
- CRUD de tarefas
- Rotas protegidas por middleware
- Cada usuário acessa apenas suas próprias tarefas

## Tecnologias

- Node.js
- Express
- MySQL
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## Estrutura do projeto

```text
task-manager-api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .env
├── .gitignore
└── package.json

⚙️ Como executar

Clone o repositório:

git clone https://github.com/seu-usuario/task-manager-api.git


Instale as dependências:

npm install


Crie o banco de dados MySQL:

CREATE DATABASE task_manager;


Configure o arquivo .env:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=task_manager
JWT_SECRET=seusecret


Execute o projeto:

npm run dev

 Testes

A API foi testada utilizando Insomnia, validando:

autenticação

proteção de rotas

CRUD completo de tarefas

Desenvolvido por Pedro Vinícius
