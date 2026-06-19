let todosProdutos = []; // Guardar a lista completa

async function buscarProdutos() {
    try {
        const response = await fetch('http://localhost:3000/api/produtos');
        todosProdutos = await response.json(); 
        renderizarProdutos(todosProdutos);
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('loading').innerHTML = `
            <div class="alert alert-danger">
                Não foi possível conectar ao servidor. Verifique se o Back-end está rodando!
            </div>
        `;
    }
}

function renderizarProdutos(produtos) {
    const lista = document.getElementById('lista-produtos');
    const loading = document.getElementById('loading');

    loading.style.display = 'none';
    lista.innerHTML = '';

    if (produtos.length === 0) {
        lista.innerHTML = '<div class="col-12 text-center text-muted py-5">Nenhum produto encontrado nesta categoria.</div>';
        return;
    }

    produtos.forEach(p => {
        const msgWhatsapp = encodeURIComponent(`Olá, vi o produto *${p.nome}* no site e gostaria de um orçamento.`);
        const linkWhatsapp = `https://wa.me/5562996709777?text=${msgWhatsapp}`;

        lista.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card product-card h-100">
                    <img src="${p.imagem_url}" class="card-img-top" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/300x180?text=DGM+Peças'">
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title fw-bold text-dark mb-1">${p.nome}</h6>
                        <p class="card-text text-muted small mb-3">${p.descricao}</p>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-success fw-bold">${p.preco}</span>
                                <a href="${linkWhatsapp}" target="_blank" class="btn btn-success btn-sm px-3">Orçamento</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function filtrar(categoria, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');

    if (categoria === 'Todos') {
        renderizarProdutos(todosProdutos);
    } else {
        const produtosFiltrados = todosProdutos.filter(p => p.categoria === categoria);
        renderizarProdutos(produtosFiltrados);
    }
}

buscarProdutos();