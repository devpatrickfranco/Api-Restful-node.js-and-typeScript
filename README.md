# 🌐 Restful API com Node.js e TypeScript

Este projeto foi iniciado para aprimorar minhas habilidades e prática no desenvolvimento de APIs RESTful, utilizando Node.js e TypeScript. O objetivo é aplicar boas práticas de desenvolvimento, testes e configuração de banco de dados com as tecnologias abaixo:

## 🚀 Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Knex.js](https://img.shields.io/badge/Knex.js-1A202C?style=for-the-badge&logo=knex&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
- ![Vitest](https://img.shields.io/badge/Vitest-6E43E0?style=for-the-badge&logo=vitest&logoColor=white)

---

## 📂 Funcionalidades

1. **CRUD completo** para manipulação de dados.
2. Integração com banco de dados PostgreSQL e SQLite.
3. **Testes Unitários** com Vitest para garantir a qualidade do código.

## 📦 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Instale as dependências
npm install

# Faça o build da aplicação
npm run build

# Execute as migrações do banco de dados
npm run knex migrate:latest

# Inicie o servidor
npm run dev
```

# RFs

- [X] O usuário deve poder criar uma nova tranasação;
- [X] O usuário deve poder obeter um resumo da sua conta
- [X] O usuário deve poder listar todas as transações que já ocorreram; 
- [X] o usuário deve poder visualizar uma transação única;

# RNs

- [X] A transação pode ser do tipo crédito que somrá ao valor total, ou debito subtrairá;
- [X] Deve ser possível identificarmos o usuário entre as requisições;
- [X] O usuário só pode visualizar transações o qual ele criou; 


