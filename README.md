# API de Livros

## Descrição
API REST desenvolvida com Node.js e Express para gerenciar livros.

## Funcionalidades
- Listar todos os livros
- Buscar por ID
- Filtrar por gênero
- Ordenar por título ou nota
- Paginação

## Endpoints

### Listar livros
GET /api/livros

### Buscar por ID
GET /api/livros/:id

### Filtros
GET /api/livros?genero=Fantasia

### Ordenação
GET /api/livros?ordem=nota&direcao=desc

### Paginação
GET /api/livros?pagina=1&limite=5
