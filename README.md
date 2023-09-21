# Projeto: Hamburgueria da Kenzie 2.0 (Typescript)

## Feature Login e Cadastro

- O usuário consegue se cadastrar e realizar o login na aplicação.

## Feature Home e Carrinho

- A aplicação possui uma lista de produtos e adiciona de forma correta e consistente dentro do carrinho.

## Context API

- Foi criada a organização de pastas do provider e estão funcionando corretamente.
- E contém no mínimo os seguintes contextos:
  - UserContext
  - CartContext

## React Hook Form

- Utilizar react hook form em todos formulários da aplicação.
- Utilizar o zod e os feedbacks dos erros de validação em todos os formulários de forma clara.
  - Deve validar os campos obrigatórios;
  - A senha deve conter:
  - No mínimo 7 caracteres;
  - No mínimo 1 caractere especial;
  - No mínimo 1 número;
  - No mínimo 1 letra minúscula;
  - No mínimo 1 letra maiúscula;

## Autologin - Proteção de Rotas

- Autologin foi implementado corretamente no contexto e o usuário que não está logado não consegue acessar a dashboard. Dica: usar outlet.
