# Task Manager – Full Stack

Aplicação **full-stack** para gerenciamento de tarefas, desenvolvida com **Node.js no back-end** e **React no front-end**, utilizando **MySQL** como banco de dados.  
O projeto possui autenticação segura com **JWT** e separação clara entre API e interface.

---

## Funcionalidades

- Cadastro e login de usuários
- Autenticação com JWT
- CRUD de tarefas (criar, listar, editar e remover)
- Rotas protegidas por middleware
- Cada usuário acessa apenas suas próprias tarefas
- Interface simples e moderna em React

---

## Tecnologias Utilizadas

### Back-end
- Node.js
- Express
- MySQL
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

### Front-end
- React
- JavaScript
- Fetch API
- CSS puro (layout moderno e responsivo)

---

## Estrutura do Projeto

```text
task-manager/
├── backend/
│   └── task-manager-api
│       ├── src/
│       │   ├── config/
│       │   ├── controllers/
│       │   ├── middlewares/
│       │   ├── models/
│       │   ├── routes/
│       │   └── server.js
│       └── package.json
│
├── frontend/
│   └── task-manager-front
│       ├── src/
│       │   ├── pages/
│       │   ├── services/
│       │   ├── App.js
│       │   └── index.js
│       └── package.json
│
├── .gitignore
└── README.md

 Como Executar o Projeto
 Pré-requisitos

Node.js instalado

MySQL instalado e rodando

 Back-end
cd backend/task-manager-api
npm install
npm run dev


Crie o banco de dados no MySQL:

CREATE DATABASE task_manager;


Configure o arquivo .env:

PORT=3333
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=task_manager
JWT_SECRET=seu_secret_aqui


API disponível em:

http://localhost:3333

 Front-end
cd frontend/task-manager-front
npm install
npm start


Aplicação disponível em:

http://localhost:3000

 Testes

A API foi testada utilizando Insomnia, validando:

cadastro de usuários

login e geração de token

proteção de rotas

CRUD completo de tarefas

 Observações

Este projeto foi desenvolvido com foco em aprendizado prático, boas práticas de back-end e integração real entre front-end e API.

 Autor

Desenvolvido por Pedro Vinícius
