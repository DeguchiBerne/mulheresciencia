# Museu em Construção — v0.7.0
Protótipo estático independente para formação de professores adultos. Abra index.html no navegador, sem instalar dependências.

## O que fazer
Em cada história, o objetivo aparece antes da imagem ou dos elementos da atividade.
- Observar: seguir a instrução específica, escolher uma relação, localizar um detalhe ou ordenar etapas.
- Situar: abrir as três pistas, arrastar dois selos até Quando e Onde e clicar em Conferir minha ficha. Há seis selos, quatro de outros contextos.
- Conectar: escolher duas ações, ler os resultados e selecionar uma interpretação. Clique em Defender interpretação. Retire uma ação para recuperar os créditos.
Conclua as três etapas para reservar a história. Selecione quatro e dê um título à exposição.

## Selos
Selos azuis/esverdeados e vinho contrastam com a ficha de papel claro. A mesma arte, cor, texto e dimensões aparecem antes, durante e depois de colar. O selo sai do acervo: um marcador indica onde ele estava. Não há duplicação.
Arraste por mouse, toque ou caneta. O destino é destacado e o diálogo rola perto das bordas. Soltar fora mantém o selo na posição anterior. Arraste outro selo por cima para substituir; o anterior retorna ao acervo. Retirar selo também o devolve. É possível mover um selo entre campos. Escape cancela o arraste.
Alternativa por teclado: selecione um selo com Enter ou Espaço e ative o campo vazio com Enter ou Espaço. Para trocar um campo ocupado, selecione outro selo e ative o selo que está no campo.

## Visita ao museu
Controles, números dos murais, ajuda e botão de abertura ficam dentro da área da simulação. A orientação inicial pode ser fechada e reaberta em Ajuda.
Clique em Caminhar · mural para ir até ele. Ao chegar, use Abrir cortina. Essa ação é separada da navegação. Depois use Explorar mural para ler a história, ver a foto e consultar fontes e créditos. Repita para as quatro selecionadas.
Use os botões da cena ou W/S para andar, A/D para deslocar e setas para girar. Porta de entrada mostra a porta: clique nela para abrir e voltar ao passeio. As inscrições explicativas foram retiradas da porta e da galeria; a ajuda pertence à interface sobreposta.
Reduzir movimento oferece visita por paradas sem animação. Fotografias, bustos WebGL, jardim, janelas, plantas e demais artefatos são locais. Os bustos são alegóricos. Mary Anning usa pintura histórica identificada como tal.

## Progresso e dados
Etapas concluídas, curadoria, título e revelações anteriores permanecem compatíveis com a chave local da v0.5/v0.6. Não há reset automático nesta entrega. Estado exploratório não concluído de pistas e selos é de sessão. Nova exposição substitui a visita após confirmação.
Sem cadastro, rastreamento ou envio de dados. Não há sincronização entre dispositivos. Fontes e créditos das fotografias permanecem nas fichas e em assets/portraits/CREDITOS.md.

## Publicar
Envie index.html, styles.css, museum.css, acervo.js, vitrines.js, investigations.js, portraits.js, visual-investigation.js, sculpture.js, museum.js, app.js e a pasta assets para a mesma raiz de uma hospedagem estática HTTPS. Preserve fontes e licenças. Não publique .qa, archive ou scripts de teste. Depois gere o QR code com a URL pública. Publicação ainda não realizada.

## Validação
node --check app.js
node --check museum.js
node --check visual-investigation.js
node verify.cjs
node verify.cjs --browser
node .qa/usability-v7.cjs
O navegador automatizado usa Chrome local e playwright-core apenas em .qa. O site não depende dessas ferramentas. A intuitividade foi revisada por inspeção e testes de interação; ainda não houve observação com professores sem orientação, leitor de tela ou celular físico. Resultados em docs/VALIDACAO.md.
