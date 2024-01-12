# Controle Financeiro Pessoal

## Descrição do Projeto

Este é um projeto de controle financeiro pessoal com BakcEnd desenvolvido em NestJS e Prisma.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados antes de iniciar o projeto:

- [Node.js](https://nodejs.org/) (versão recomendada: 14.x)
- [Yarn](https://yarnpkg.com/) instalado

## Aplicação de desenvolvimento 
yarn start:dev

* A aplicação estará disponível em http://localhost:3030. *

## Scripts Úteis
Migrar o Banco de Dados:

Execute as migrações do Prisma para atualizar o banco de dados:
yarn prisma migrate dev

Gerar uma Migração:

Se você fizer alterações no modelo de dados, gere uma nova migração com o comando:
yarn prisma migrate save --name NOME_DA_MIGRACAO
