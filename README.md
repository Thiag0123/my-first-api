# API de Livros

## Como rodar
npm install
node index.js

## Endpoints

GET /api/livros
Lista todos os livros

GET /api/livros/:id
Busca por ID

POST /api/livros
Cria livro

Body:
{
  "titulo": "Livro",
  "autor": "Autor",
  "ano": 2024,
  "genero": "Tecnologia",
  "nota": 9
}

## Validações

- Campos obrigatórios
- Nota entre 0 e 10
- Ano numérico
