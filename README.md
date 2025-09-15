Cadastro de Usuários – Backend

![Imagem de Capa](assets/servidor-png.png)



📌 Sobre o Projeto

Este projeto é o backend de um sistema de cadastro de usuários, desenvolvido com Node.js, Express e Prisma.
Ele fornece uma API REST completa para criar, listar, atualizar e deletar usuários, servindo como base para aplicações frontend como React, Vue ou Angular.
Nesse caso em específico, estou utilizando esta API para conectar com o cadastro de usuários de um projeto feito com React, disponibilizado aqui também em meu github.

🛠 Tecnologias Utilizadas

Node.js

Express

Prisma (ORM)

MongoDB (configurável via Prisma)

CORS

npm

🚀 Funcionalidades

Criar usuários com nome, idade e email

Listar todos os usuários

Atualizar informações de um usuário pelo ID

Deletar um usuário pelo ID

⚙️ Pré-requisitos

Certifique-se de ter instalado:

Node.js
 (v18 ou superior)

npm

Banco de dados configurado via Prisma.

💻 Instalação e Execução

Clone o repositório:

git clone https://github.com/paulojrtoledo/usuario-api-node.git
cd usuario-api-node/API


Instale as dependências:

npm install


Configure o banco de dados no arquivo .env:

DATABASE_URL="file:./dev.db"


Rode as migrações do Prisma:

npx prisma migrate dev --name init


Inicie o servidor:

npm run dev


O backend estará disponível em: http://localhost:3000

🔗 Endpoints da API
Método	Endpoint	Descrição
POST	/usuarios	Criar um novo usuário
GET	/usuarios	Listar todos os usuários
PUT	/usuarios/:id	Atualizar usuário pelo ID
DELETE	/usuarios/:id	Deletar usuário pelo ID
📂 Estrutura do Projeto
project-root/
│
├── src/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   └── ...
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── .gitignore
├── package.json
├── README.md
└── assets/
    └── user-api.png

⚖️ Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE
 para mais detalhes.
