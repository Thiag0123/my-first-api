# API de Livros

## Como rodar
npm install
node index.js

## Endpoints

### GET /api/livros
Lista todos os livros com paginação.

### GET /api/livros/:id
Busca um livro pelo ID.

### GET /api/livros?genero=Fantasia
Filtra livros por gênero.

### GET /api/livros?ordem=nota&direcao=desc
Ordena livros por nota.

### GET /api/livros?pagina=2
Paginação dos resultados.

### POST /api/livros
Cria um novo livro.

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
