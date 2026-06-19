const axios = require('axios');

const produtos = [
    { nome: 'Abraçadeira de Alta Pressão (T-Bolt)', categoria: 'Conexões', descricao: 'Abraçadeira em aço inox com parafuso duplo tipo T-bolt,Ideal para mangueiras de alta pressão, turbinas e intercoolers', preco: 'Sob Consulta', imagem_url: 'img/IMG-1.jpg' },
    { nome: 'Mangueira de Borracha (Sucção/Recalque)', categoria: 'Mangueiras', descricao: 'Mangueira preta de grande diâmetro em borracha natural ou SBR, com reforço de lona têxtil', preco: 'Sob Consulta', imagem_url: 'img/IMG-2.jpg' },
    { nome: 'Jogo de Chaves Combinadas Mayle (6–22 mm)', categoria: 'Ferramentas', descricao: 'Conjunto de chaves combinadas (boca + estrela) em aço Cr-V, tamanhos de 6 a 22 mm', preco: 'Sob Consulta', imagem_url: 'img/IMG-3.jpg' },
    { nome: 'Kit O-Rings (Anéis de Vedação)', categoria: 'Agrícola', descricao: 'Conjunto sortido de anéis de borracha NBR/Viton em caixa plástica. Grau 71 a 90 Shore. Diversas bitolas e cores por material', preco: 'Sob Consulta', imagem_url: 'img/IMG-4.jpg' },
    { nome: 'Retentor de Roda (Sabo)', categoria: 'Agrícola', descricao: 'Retentor (vedador de eixo) de grande diâmetro, marca Sabó', preco: 'Sob Consulta', imagem_url: 'img/IMG-5.jpg' },
    { nome: 'Tubo Polietileno (PEAD) Preto)', categoria: 'Mangueiras', descricao: 'Tubulação flexível em polietileno de alta densidade, cor preta, em rolo. Resistente à pressão e UV', preco: 'Sob Consulta', imagem_url: 'img/IMG-6.jpg' },
    { nome: 'Mangueira PVC Espiralada (Sucção)', categoria: 'Mangueiras', descricao: 'Mangueira flexível marrom/bege com espiral interna de PVC rígido. Anticorrosão, resistente ao colapso por vácuo', preco: 'Sob Consulta', imagem_url: 'img/IMG-7.jpg' },
    { nome: 'Rolamento de Rolos Cônicos', categoria: 'Agrícola', descricao: 'Suporta cargas radiais e axiais combinadas. Aplicação em cubos de rodas, redutores e eixos de máquinas agrícolas e veículos.', preco: 'Sob Consulta', imagem_url: 'img/IMG-8.jpg' },
    { nome: 'Abraçadeira Americana (Tipo Fita)', categoria: 'Conexões', descricao: 'Abraçadeira metálica zincada com parafuso e porca sextavada. Banda larga sem perfuração, ideal para fixação de mangueiras de grande diâmetro e tubos rígidos.', preco: 'Sob Consulta', imagem_url: 'img/IMG-9.jpg' },
    { nome: 'Jogo de Chaves de Fenda e Phillips Worker (10 peças)', categoria: 'Ferramentas', descricao: 'Kit com 10 chaves de fenda plana e Phillips em aço cromo-vanádio, cabos vermelhos emborrachados. Vários tamanhos. Marca Worker, embalagem blister', preco: 'Sob Consulta', imagem_url: 'img/IMG-10.jpg' },
    { nome: 'Fio de Nylon para Roçadeira', categoria: 'Agrícola', descricao: 'Linha de corte laranja em carretel, usada em roçadeiras e aparadores de grama. Seção redonda, alta resistência ao desgaste.', preco: 'Sob Consulta', imagem_url: 'img/IMG-11.jpg' },
    { nome: 'Mangueira de Sucção PVC Espiraladao', categoria: 'Mangueiras', descricao: 'Mangueira flexível com espiral interna, cor laranja/marrom, acompanhada de engates e abraçadeiras. Usada para bombeamento de água ou defensivos.', preco: 'Sob Consulta', imagem_url: 'img/IMG-12.jpg' },
    { nome: 'Paquímetro Analógico (Vernier)', categoria: 'Agrícola', descricao: 'Instrumento de medição em aço inox com nônio. Mede dimensões externas, internas e profundidade. Resolução 0,01 mm, capacidade até ~150 mm.', preco: 'Sob Consulta', imagem_url: 'img/IMG-13.jpg' },
    { nome: 'Flange Split (Meia Flange Hidráulica)', categoria: 'Conexões', descricao: 'Par de meias flanges em aço zincado com 4 furos para parafusos. Usadas para fixar conexões hidráulicas de alta pressão. Marcadas com tamanhos', preco: 'Sob Consulta', imagem_url: 'img/IMG-14.jpg' },
    { nome: 'Engate Rápido Pneumático Reto (Push-In)', categoria: 'Conexões', descricao: 'Conectores de encaixe rápido azuis/pretos para tubos de ar comprimido. Disponíveis em várias bitolas: 4, 6, 8, 10, 14 e 16 mm.', preco: 'Sob Consulta', imagem_url: 'img/IMG-15.jpg' },
    { nome: 'Graxa Spray Universal Worker', categoria: 'Ferramentas', descricao: 'Lubrificante à base de lítio em aerossol, 300 ml. Anticorrosivo, multiaditivo, para rolamentos e correntes. Produto inflamável.', preco: 'Sob Consulta', imagem_url: 'img/IMG-16.jpg' },
    { nome: 'Engate Rápido Pneumático Macho (Rosca × Push-In)', categoria: 'Conexões', descricao: 'Conexão metálica niquelada com anel azul de push-in em uma ponta e rosca macho na outra. Liga tubos flexíveis a roscas BSP/NPT.', preco: 'Sob Consulta', imagem_url: 'img/IMG-17.jpg' },
    { nome: 'Paquímetro Digital (Fibra de Carbono) Worker', categoria: 'Agrícola', descricao: 'Paquímetro digital com corpo em fibra de carbono e display LCD. Funções ON/OFF e ZERO. Mais leve que o metálico, ideal para uso geral em oficina.', preco: 'Sob Consulta', imagem_url: 'img/IMG-18.jpg' },
    { nome: 'União Dupla de Compressão em Latão', categoria: 'Conexões', descricao: 'Conexão de compressão em latão com duas porcas, duas olivas e dois insertos. Une dois tubos de mesmo diâmetro sem solda, com vedação por aperto.', preco: 'Sob Consulta', imagem_url: 'img/IMG-19.jpg' },
    { nome: 'Kit de Alicates Robust (3 peças)', categoria: 'Ferramentas', descricao: 'Conjunto com alicate de corte diagonal 6", alicate de bico fino 6" e alicate universal 8". Cabos amarelos antiderrapantes. Marca Robust.', preco: 'Sob Consulta', imagem_url: 'img/IMG-20.jpg' },
    { nome: 'Engates rápidos hidráulicos, Dynamics', categoria: 'Conexões', descricao: 'Utilizados em sistemas hidráulicos de tratores, como os modelos Valtra da série BH', preco: 'Sob Consulta', imagem_url: 'img/IMG-21.jpg' },
    { nome: 'Conexão giratória Bremen', categoria: 'Conexões', descricao: 'Conexão Giratória Z de 1" (polegada)', preco: 'Sob Consulta', imagem_url: 'img/IMG-22.jpg' },
    { nome: 'Engates rápidos hidráulicos', categoria: 'Conexões', descricao: 'Compatíveis com tratores de diversas marcas como John Deere, Massey Ferguson, Case e New Holland', preco: 'Sob Consulta', imagem_url: 'img/IMG-23.jpg' },
    { nome: 'Abraçadeira para mangueira de aço inoxidável', categoria: 'Conexões', descricao: 'Abraçadeira de engrenagem helicoidal (rosca sem fim)', preco: 'Sob Consulta', imagem_url: 'img/IMG-24.jpg' },
    { nome: 'Válvula esfera de metal com alavanca', categoria: 'Conexões', descricao: 'Ideal para sistemas hidráulicos residenciais ou industriais devido à sua simplicidade e confiabilidade', preco: 'Sob Consulta', imagem_url: 'img/IMG-25.jpg' },
    { nome: 'Mangueira de Teflon (PTFE)', categoria: 'Mangueiras', descricao: 'O Teflon é extremamente resistente à corrosão e suporta temperaturas de -70°C a 260°C. ', preco: 'Sob Consulta', imagem_url: 'img/IMG-26.jpg' },
    { nome: 'Adaptadores e acopladores Camlock (engate rápido)', categoria: 'Conexões', descricao: 'Utilizados para conexão e desconexão rápida de mangueiras e tubulações em aplicações de transferência de líquidos', preco: 'Sob Consulta', imagem_url: 'img/IMG-27.jpg' },
    { nome: 'Acoplador de graxa de manopla dupla (bico graxeiro)', categoria: 'Agrícola', descricao: 'Utilizado para lubrificar elementos mecânicos confinados em maquinários e veículos', preco: 'Sob Consulta', imagem_url: 'img/IMG-28.jpg' },
    { nome: 'Mangueira de sucção de cor marrom', categoria: 'Mangueiras', descricao: 'Alta resistência e flexibilidade para operações críticas de transferência de fluido', preco: 'Sob Consulta', imagem_url: 'img/IMG-29.jpg' },
    { nome: 'Conjunto de brocas helicoidais de aço', categoria: 'Ferramentas', descricao: 'O conjunto inclui brocas métricas, tipicamente variando de, 1mm a 13mm', preco: 'Sob Consulta', imagem_url: 'img/IMG-30.jpg' },
    { nome: 'Mangueira flat', categoria: 'Mangueiras', descricao: 'Ideal para irrigação agrícola, transporte de água e outros líquidos em alta pressão.', preco: 'Sob Consulta', imagem_url: 'img/IMG-31.jpg' },
    { nome: 'Eletroduto corrugado cinza', categoria: 'Mangueiras', descricao: 'Proteção de fiação embutida em paredes ou lajes', preco: 'Sob Consulta', imagem_url: 'img/IMG-32.jpg' },
    { nome: 'Mangueira de sucção e descarga (ISAL)', categoria: 'Mangueiras', descricao: 'Para serviços de média intensidade, como agricultura, irrigação, limpeza de galerias e caminhões-pip', preco: 'Sob Consulta', imagem_url: 'img/IMG-33.jpg' },
    { nome: 'Mangueira cristal transparente', categoria: 'Mangueiras', descricao: 'Uso geral em indústrias, agricultura e doméstico', preco: 'Sob Consulta', imagem_url: 'img/IMG-34.jpg' },
    { nome: 'Mangueira de Ar e Água', categoria: 'Mangueiras', descricao: 'Ideal para atividades domésticas, jardinagem leve e rega de plantas', preco: 'Sob Consulta', imagem_url: 'img/IMG-35.jpg' },
    { nome: 'Mangueira para lava jato PT 1000 de 1/2 polegada', categoria: 'Mangueiras', descricao: 'Para uso em máquinas lavadoras de autos e postos de serviço', preco: 'Sob Consulta', imagem_url: 'img/IMG-36.jpg' },
    { nome: 'Mangueira de combustível transparente ', categoria: 'Mangueiras', descricao: 'Ideal para sistemas de combustível em pequenos motores', preco: 'Sob Consulta', imagem_url: 'img/IMG-37.jpg' },
    { nome: 'Cinta de amarração de carga com catraca', categoria: 'Ferramentas', descricao: 'Utilizada para evitar o movimento horizontal da carga através de fricção', preco: 'Sob Consulta', imagem_url: 'img/IMG-38.jpg' },
    { nome: 'Mangueira dupla para maçarico de solda', categoria: 'Mangueiras', descricao: 'Indicada para processos de soldagem, corte e aquecimento em oficinas', preco: 'Sob Consulta', imagem_url: 'img/IMG-39.jpg' },
    { nome: 'Arruela plana metálic', categoria: 'Conexões', descricao: 'Distribuir a carga de aperto de um parafuso ou porca', preco: 'Sob Consulta', imagem_url: 'img/IMG-40.jpg' },
    { nome: 'Mangueiras hidráulicas flexíveis de alta pressão com terminais metálicos prensados', categoria: 'Conexão', descricao: 'Utilizadas para transportar fluidos sob pressão em sistemas hidráulicos móveis ou equipamentos estacionários', preco: 'Sob Consulta', imagem_url: 'img/IMG-41.jpg' },
    { nome: 'Conexão Pneumática tipo T de Redução', categoria: 'Conexão', descricao: 'Ideal para organizar e distribuir linhas de ar em máquinas e equipamentos', preco: 'Sob Consulta', imagem_url: 'img/IMG-42.jpg' },
    { nome: 'Tinta Spray KALA', categoria: 'Ferramentas', descricao: 'Adequada para metal, madeira, gesso, cerâmica e alvenaria', preco: 'Sob Consulta', imagem_url: 'img/IMG-43.jpg' },
    { nome: 'Conexão Pneumática de Engate Rápido em formato de Cotovelo de 90°', categoria: 'Conexões', descricao: 'Utilizada para junção de tubos a válvulas ou componentes pneumáticos em sistemas de ar comprimido.', preco: 'Sob Consulta', imagem_url: 'img/IMG-44.jpg' },
    { nome: 'Bico de abastecimento', categoria: 'Conexões', descricao: 'Resistente a gasolina, diesel e álcool.', preco: 'Sob Consulta', imagem_url: 'img/IMG-45.jpg' },
    { nome: 'Mangueira de sucção e descarga de PVC', categoria: 'Mangueiras', descricao: 'Para Irrigação, transporte de água em caminhões-pipa, limpeza de galerias.', preco: 'Sob Consulta', imagem_url: 'img/IMG-46.jpg' },
    { nome: 'Filtro regulador de ar', categoria: 'Agrícola', descricao: 'Filtra impurezas no ar.', preco: 'Sob Consulta', imagem_url: 'img/IMG-47.jpg' },
    { nome: 'Pressostato para compressor de ar', categoria: 'Agrícola', descricao: 'Monitora a pressão do sistema de ar', preco: 'Sob Consulta', imagem_url: 'img/IMG-48.jpg' },
    { nome: 'Cinta De Elevação Em Poliéster', categoria: 'Ferramentas', descricao: 'Suporta até 5 toneladas', preco: 'Sob Consulta', imagem_url: 'img/IMG-49.jpg' },
    { nome: 'Mangueira De Pulverização', categoria: 'Mangueiras', descricao: 'Recomendada para pulverizadores agrícolas de alta pressão. ', preco: 'Sob Consulta', imagem_url: 'img/IMG-50.jpg' },
    { nome: 'Trena Métrica', categoria: 'Ferramentas', descricao: 'Fita de medição de alta precisão com trava.', preco: 'Sob Consulta', imagem_url: 'img/IMG-51.jpg' }
];

async function seed() {
    console.log('🚀 Iniciando carga de dados...');
    for (const p of produtos) {
        try {
            await axios.post('http://localhost:3000/api/produtos', p);
            console.log(`✅ Adicionado: ${p.nome}`);
        } catch (err) {
            console.error(`❌ Erro em ${p.nome}:`, err.message);
        }
    }
    console.log('--- Processo Finalizado ---');
}

seed();