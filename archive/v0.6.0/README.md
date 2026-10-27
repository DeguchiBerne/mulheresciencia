# Museu em Construção — v0.6.0
Protótipo independente para demonstração em formação docente. Abra index.html no navegador. Sem instalação ou build.

## Percurso
Observar: investigar um objeto ilustrado.
Situar: abrir três fragmentos de um dossiê, distinguir eventos e selecionar duas etiquetas entre seis cartas estilizadas. Quatro etiquetas pertencem a outros contextos. Arraste uma carta até o campo de destino usando mouse, toque ou caneta. A carta acompanha o ponteiro, o campo é destacado e o diálogo rola perto das bordas. Soltar em outro lugar não altera a ficha. Selecionar e clicar permanece disponível para teclado e como alternativa ao arraste.
Conectar: laboratório de decisões. Um problema específico de cada trajetória exige selecionar duas ações com quatro créditos, examinar os resultados simulados e defender uma interpretação. Retirar uma ação devolve recursos. Planos incompletos, evidências insuficientes e conclusões excessivas recebem retornos distintos. São cenários didáticos, não reconstituições de experimentos históricos.
Após concluir três etapas, reserve a história. Escolha quatro, dê um título e entre no museu. Caminhe até os murais e abra cada cortina para revelar uma identidade e seu retrato. Fotos, fontes e licenças estão nas fichas. Mary Anning usa pintura histórica identificada como tal.

## Museu
Clique em murais, paradas ou números para caminhar. W/S anda e recua; A/D desloca; setas giram. Botões equivalentes funcionam por toque. Reduzir movimento oferece deslocamento por paradas sem animação. Porta de entrada mostra a porta dupla; clique nela para abrir e voltar à galeria.
O cenário inclui janelas com paisagem, quatro plantas, arandelas, luminárias, luz decorativa, bustos alegóricos e instrumentos ilustrados. Elementos são representações originais, não peças históricas reais. A cena é construída em CSS 3D.

## Rascunho e limites
A v0.5.0 usa uma chave local própria para não reutilizar respostas das atividades anteriores. Reservas e revelações ficam neste navegador, sem cadastro ou sincronização. Nova exposição substitui a visita após confirmação. Fragmentos abertos e ações exploratórias são estado de sessão; o progresso de etapas concluídas é persistido. Arquivos anteriores de referência estão em archive.
O acervo tem dez trajetórias, cinco brasileiras; não representa toda a diversidade de mulheres na ciência. Testes com participantes, leitores de tela e aparelhos físicos ainda são necessários. Projeto sem vínculo institucional com a rede estadual.

## Publicar
Envie index.html, styles.css, museum.css, acervo.js, vitrines.js, investigations.js, portraits.js, visual-investigation.js, sculpture.js, museum.js, app.js e a pasta assets à mesma raiz de hospedagem estática HTTPS. Preserve créditos e licenças. Não envie .qa, archive ou ferramentas de desenvolvimento. Depois gere QR code com a URL pública. Publicação ainda não realizada.

## Verificar
node --check visual-investigation.js
node --check museum.js
node verify.cjs
node verify.cjs --browser
O teste opcional de navegador usa playwright-core em .qa e Chrome local; o site não depende deles. Resultados em docs/VALIDACAO.md.


## Novidades v0.6.0
Bustos alegóricos modelados como volumes e renderizados em WebGL, com mudança de perspectiva ligada à posição da câmera. São esculturas originais sem representar uma cientista real. O passeio continua em CSS 3D; o navegador precisa oferecer WebGL para renderizar as esculturas.
Janelas com moldura, vidros, reflexos, puxadores e jardim vetorial detalhado. SVGs dos objetos receberam acabamento de iluminação e marcas de acervo, sem alterar as áreas dos desafios. Fotografias históricas não foram modificadas.
O progresso v0.5 é preservado: o conteúdo das atividades não mudou. Para experimentar o arraste em atividades já concluídas, inicie uma Nova exposição.
