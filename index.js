// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());

// 5. Criar primeiro endpoint
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

// Banco de dados fake de LIVROS
let livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", nota: 9.5 },
    { id: 2, titulo: "1984", autor: "George Orwell", ano: 1949, genero: "Distopia", nota: 9.7 },
    { id: 3, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, genero: "Fantasia", nota: 9.2 },
    { id: 4, titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, genero: "Fantasia", nota: 9.0 },
    { id: 5, titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, genero: "Distopia", nota: 9.3 },
    { id: 6, titulo: "Senhor dos Anéis", autor: "Tolkien", ano: 1954, genero: "Fantasia", nota: 9.8 },
    { id: 7, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, genero: "Fábula", nota: 9.1 },
    { id: 8, titulo: "Código Limpo", autor: "Robert C. Martin", ano: 2008, genero: "Tecnologia", nota: 9.6 },
    { id: 9, titulo: "JavaScript Guia", autor: "Flanagan", ano: 2020, genero: "Tecnologia", nota: 8.9 },
    { id: 10, titulo: "It", autor: "Stephen King", ano: 1986, genero: "Terror", nota: 8.8 }
];
app.get('/api/livros', (req, res) => {
    const { genero, ordem, direcao, pagina = 1, limite = 5 } = req.query;

    let resultado = livros;

    // 🔍 Filtro por gênero
    if (genero) {
        resultado = resultado.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
    }

    // 🔄 Ordenação
    if (ordem) {
        resultado = resultado.sort((a, b) => {
            if (ordem === 'titulo') {
                return direcao === 'desc'
                    ? b.titulo.localeCompare(a.titulo)
                    : a.titulo.localeCompare(b.titulo);
            }

            if (ordem === 'nota') {
                return direcao === 'desc'
                    ? b.nota - a.nota
                    : a.nota - b.nota;
            }
        });
    }

    // 📄 Paginação
    const paginaNum = parseInt(pagina);
    const limiteNum = parseInt(limite);

    const inicio = (paginaNum - 1) * limiteNum;
    const paginado = resultado.slice(inicio, inicio + limiteNum);

    res.json({
        dados: paginado,
        paginacao: {
            pagina_atual: paginaNum,
            itens_por_pagina: limiteNum,
            total_itens: resultado.length,
            total_paginas: Math.ceil(resultado.length / limiteNum)
        }
    });
});
app.get('/api/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
    }

    res.json(livro);
});

// 7. Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});