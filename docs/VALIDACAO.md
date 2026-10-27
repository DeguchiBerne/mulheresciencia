# Validação da v0.3.0 — 2026-10-24

## Verificações executadas
- node --check app.js: aprovado.
- node --check museum.js: aprovado.
- node --check investigations.js: aprovado.
- node verify.cjs: aprovado.
- node verify.cjs --browser: aprovado no Chrome local em modo headless.
- Repetido após ajustes de câmera, contraste, respeito ao movimento reduzido do sistema e regras de impressão: aprovado.

## Conteúdo e arquivos
Dez trajetórias, cinco brasileiras, duas novas contribuições do século XXI, três etapas por pessoa (30 desafios). Dez retratos JPEG locais carregados: nove fotografias e uma pintura histórica de Mary Anning, identificada como tal. Autoria, fonte e licença documentadas em portraits.js e assets/portraits/CREDITOS.md. Inspecionado visualmente o painel com as dez imagens.

## Fluxos exercitados pela interface
- As 30 etapas foram resolvidas por cliques, inclusive reordenação de sequências.
- Etapas posteriores bloqueadas; reserva indisponível até concluir as três.
- Tentativa incorreta, retomada de etapa incompleta após recarregar e navegação entre etapas.
- Reserva limitada a quatro histórias; nomes ocultos durante investigação, curadoria e entrada no museu.
- Tentativa de descortinar na entrada sem aproximação não revela identidade.
- Clique direto em mural e botões de rota deslocam a câmera.
- Quatro cortinas abertas individualmente; foto e nome apenas para as histórias já reveladas.
- Fichas com fotografia, contexto, fonte e licença; pintura histórica identificada.
- Quatro revelações restauradas após recarregar.
- Visita a 390 × 844 pixels, sem overflow horizontal; movimento reduzido e comando de teclado.
- Impressão fora da visita mantém museu oculto; na visita, quatro fichas visíveis e cena 3D oculta para PDF.
- Reinício confirmado limpa as quatro reservas.
- Nenhum erro JavaScript registrado pelo navegador durante o teste.

## Inspeção visual
Entrada da galeria, mural coberto, mural revelado, ficha fotográfica, dez retratos e largura de celular. Após inspeção, ajustados o enquadramento vertical da câmera e o contraste do botão de leitura. Foi corrigida uma regra de impressão herdada que ocultava a nova seção.

## Artefatos
.qa/v3-museu-entrada.png
.qa/v3-cortina.png
.qa/v3-mural-revelado.png
.qa/v3-foto-cientista.png
.qa/v3-investigacao.png
.qa/v3-celular.png
.qa/v3-retratos.png
.qa/v3-exposicao.pdf

## Limites
Teste em Chrome desktop headless com emulação de largura móvel, sem aparelho físico, Safari, leitor de tela ou teste de duração com participantes. A visita usa CSS 3D, não VR. O carregamento local das dez imagens foi verificado; links de fontes continuam exigindo internet. Não houve publicação nem QR code definitivo.

## Validação v0.4.0 — 24/10/2026
Teste Chrome completo aprovado com as 30 etapas: abertura das três pistas em Situar, posicionamento das duas etiquetas, tentativa incompleta bloqueada, ligações entre cartões, tentativa incorreta e correção, três conectores desenhados e conferência. Mantidos os testes de quatro reservas, identidades ocultas, quatro cortinas, fotos, impressão, restauração, largura móvel e reinício. Verificados dois bustos, duas vitrines de instrumentos, seis luminárias, navegação à porta e abertura por clique. Capturas v4-porta.png, v4-situar.png e v4-conectar.png em .qa. Inspeção visual motivou afastar a câmera da porta para enquadrá-la melhor. Preservação de foco adicionada aos cartões recriados. O primeiro teste encontrou uma asserção anterior ao próximo frame de desenho SVG; o teste passou a aguardar as linhas aparecerem. Não houve erro JavaScript no fluxo aprovado. Validação continua em Chrome desktop, sem aparelho físico ou teste com participantes. Cenário decorativo em CSS e ilustrações, sem afirmar que os bustos representam pessoas reais.

## Validação v0.5.0 — 24/10/2026
Sintaxe de visual-investigation.js e museum.js aprovada. Teste completo node verify.cjs --browser aprovado no Chrome: 30 etapas pela interface, seis etiquetas, tentativa com distrator, reconstrução corrigida, orçamento limitado a duas ações, remoção/devolução, plano insuficiente rejeitado e conclusão extrapolada rejeitada. Verificados quatro murais, fotos, créditos, impressão, restauração, largura de celular, redução de movimento e reinício. Cenário: duas janelas, quatro plantas e seis arandelas, além das luminárias e artefatos existentes. Capturas v5-situar.png e v5-conectar.png inspecionadas, bem como nova entrada da galeria. Ajuste posterior de CSS preserva opacidade integral das cartas/ações concluídas para leitura. Sem teste com participantes ou dispositivo físico. As observações do laboratório são explicitamente didáticas.

## Validação v0.6.0 — 25/10/2026
node --check visual-investigation.js, node --check sculpture.js e node --check museum.js aprovados. Teste completo node verify.cjs --browser aprovado: arraste real das etiquetas pelo mouse nas dez histórias, 30 etapas, tentativa incorreta, quatro reservas e revelações, fotos, impressão, restauração, largura móvel e reinício. O roteiro também confirma dois canvas WebGL em lugar de imagens planas nos bustos.
Teste dedicado node .qa/touch-v6.cjs aprovado: toque via CDP em viewport de 390px, arraste com rolagem do diálogo, campo de destino preenchido e remoção da carta flutuante. É emulação, não aparelho físico.
Teste dedicado node .qa/bust-v6.cjs aprovado: dois modelos WebGL rasterizados, mais de 123 mil pixels de superfície por canvas, fundo transparente e captura v6-bustos.png. Capturas de toque e esculturas inspecionadas. Janelas agora têm paisagem vetorial própria, reflexos, puxador e acabamento de moldura.
Durante a implementação, uma supressão genérica do clique após arrastar bloqueava o botão de conferência; foi restringida ao clique residual da carta. A montagem inicial por triângulos CSS apresentou artefatos visuais e foi substituída por WebGL. Uma asserção de cortina passou a aguardar a classe aplicada no próximo frame. A versão final passou no teste completo. Ajustes finais de orientação e rasterização das esculturas passaram em teste dedicado; pequeno ajuste de altura CSS encosta os volumes nos pedestais. Não houve publicação ou teste em celular físico.

## Validação v0.7.0 — 26/10/2026
Verificações aprovadas: node --check visual-investigation.js; node --check museum.js; node --check app.js; node verify.cjs --browser; node .qa/usability-v7.cjs. Testes completos e focados repetidos após separar caminhar de abrir a cortina e colocar os objetivos antes das imagens: aprovados.

O teste completo percorreu 30 etapas e quatro revelações pela interface. O teste focado verificou igualdade do HTML da arte, dimensões, cor de fundo e fonte antes/depois de colar em desktop. No toque emulado a 390px, a arte e as dimensões também permaneceram iguais. Verificados: posição única de seis selos, marcador de origem, transferência entre campos, substituição com devolução, retirada, drop fora de destino tanto da origem quanto da ficha, cancelamento por Escape, alternativa por teclado, destaque e rolagem no arraste.

Controles de andar/girar, ajuda e abertura estão dentro de museum-viewport. Retângulos dos botões foram conferidos em 1440 × 1050 e 390 × 844; estavam dentro da cena. O botão Abrir cortina não se sobrepôs ao mural na posição de visita em nenhuma das duas larguras. Movimento por teclado verificado. Botões dos murais conduzem à visita sem abrir a cortina automaticamente. Inscrições portal-sign, portal-caption e texto visível na porta ausentes. Fotografias e créditos carregados; quatro revelações, impressão e restauração verificadas. Rascunho anterior com curadoria e revelação parcial carregou sem reset. Nenhum erro JavaScript capturado no percurso completo.

Capturas revisadas: .qa/v7-selos.png, v7-museu.png, v7-visita.png, v7-museu-celular.png e v7-toque.png. O jardim foi refinado em SVG e os textos pequenos dos selos tiveram contraste ajustado após inspeção.

Limites: Chrome desktop headless, mouse/teclado e toque emulado. Não houve teste com professores sem orientação, leitor de tela, celular físico ou outros navegadores. Não é possível afirmar uma melhora de usabilidade medida com pessoas; as alterações foram revisadas por inspeção e testes funcionais. Publicação não realizada.

## Validação v0.8.0 — 26/10/2026
Comandos aprovados: node --check app.js; node --check visual-investigation.js; node --check museum.js; node verify.cjs --browser; node .qa/usability-v8.cjs. Teste completo repetido após corrigir a altura da porta e após tornar visível o botão seguinte ao acerto: aprovado.

Fluxo das dez histórias: 30 etapas percorridas pela interface. Em cada etapa, verificada a ordem DOM identidade/título → abas → introdução → atividade. Observar foi testado com seleção errada e correta antes de Conferir: nenhuma seleção avaliou automaticamente, e Próxima etapa permaneceu oculta até o acerto. Ordem por setas também exigiu conferência. Situar manteve três objetos, seis selos, distrator, troca por arraste e avanço condicionado ao acerto. Conectar foi concluído apenas com duas ações; seção de conclusões, campos data-claim e orçamento não aparecem. Planos incompletos e combinações inadequadas foram rejeitados; retorno de sucesso explica a complementaridade.

Reservas: quatro histórias selecionadas; ao rever história reservada, o botão informa História já reservada e está desabilitado. A opção de reserva fica oculta em Observar/Situar. Texto Retirar da exposição ausente das atividades; retirada permanece disponível na curadoria.

Início: retorno pelo cabeçalho e pela cena; abertura continua visível após recarregar. Continuar minha curadoria retoma coleção ou museu anterior, mantendo quatro reservas e quatro identidades reveladas. Logotipo também retorna ao início.

Geometria: parede e porta têm 1095 unidades locais de altura, cobrindo y=-760 a y=335. Foi detectado e removido um rodapé de 25 unidades que limitava inicialmente a porta. Placas verificadas acima dos quadros. Quatro luminárias superiores volumétricas e seis arandelas compostas por faces; mais de 200 faces nas estruturas. Posições longitudinais das arandelas verificadas fora da abertura das janelas. Duas fontes de imagem diferentes e indicação de exploração com fonte ampliada. Quatro cortinas, fotografias, impressão/PDF e navegação em largura de celular aprovadas.

Teste focado: identidade visual e dimensões dos selos, ausência de duplicação, movimentação entre campos, substituição, retirada, devolução fora da área, Escape, teclado e toque com rolagem aprovados. Botões dentro da cena e sem cobrir o quadro na posição de visita em 1440 × 1050 e 390 × 844.

Capturas: .qa/v8-etapa-1.png, v8-etapa-2.png, v8-etapa-3.png, v8-galeria.png, v8-porta.png, v8-mural.png, v8-celular.png e v8-exposicao.pdf. Inspecionadas porta, mural revelado e atividades. Nenhum erro JavaScript capturado no fluxo completo.

Limites: Chrome desktop headless, largura móvel e toque emulados; sem aparelho físico, leitor de tela ou avaliação com professores sem orientação. Não houve publicação nem QR code definitivo.

## Validação v0.8.1 — 26/10/2026
node --check app.js aprovado. node .qa/test-clear-v081.cjs aprovado: dez botões no acervo e botão interno; cancelamento sem alteração; limpeza de uma vitrine concluída/reservada e outra parcial; respostas, ordem e estado de sessão limpos apenas para a história escolhida; remoção consistente da reserva e revelação correspondentes; demais histórias, título, texto e missão mantidos; limpeza preservada após recarregar. As três missões foram alternadas e a mesma pergunta de Observar permaneceu, confirmando que não alteram os desafios.
node verify.cjs --browser aprovado: percurso das 30 etapas, quatro reservas e revelações, retorno ao início, porta, iluminação, fotografias, impressão e largura móvel. Captura .qa/v081-limpar.png. Limites mantidos: Chrome headless, sem teste com professores ou aparelho físico; sem publicação.

## Validação v0.9.0 — 26/10/2026
node --check app.js e node --check visual-investigation.js aprovados. node verify.cjs --browser aprovado: 30 etapas, carregamento da ilustração nas dez atividades Conectar, ausência de Início dentro de museum-viewport, quatro revelações, fotos, retorno pelo cabeçalho, impressão e largura móvel.
node .qa/test-panel-v9.cjs aprovado: imagem decodificada e visível na etapa Conectar, alternativa textual, captura de desktop e largura de 390px sem overflow; botão Início ausente da cena e mantido no cabeçalho, retornando à abertura sem perder quatro reservas. Capturas .qa/v9-banca.png e .qa/v9-banca-celular.png. Imagem original e integração desktop inspecionadas visualmente.
Ilustração gerada em ferramenta embutida imagegen, copiada do diretório de imagens geradas para assets/banca-apresentacao.png. Prompt integral salvo no projeto. Não foi utilizada CLI nem chave de API.
Limites: Chrome headless e largura móvel emulada; sem teste em aparelho físico ou com participantes. Sem publicação.
