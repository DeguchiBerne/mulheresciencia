# Museu em Construção — v0.3.0
Projeto independente de demonstração para formação de professores da rede estadual do Paraná. Sem vínculo institucional.

## Abrir e jogar
Abra index.html no navegador. Não há instalação, build nem servidor obrigatório: o museu usa CSS 3D e funciona com arquivos locais. Para acesso por QR code, publique os arquivos em hospedagem estática HTTPS.

1. Explore dez vitrines anônimas, com cinco brasileiras e cinco internacionais.
2. Conclua três etapas por história: observar, situar o contexto e conectar o impacto. Dicas e novas tentativas são livres. É possível retomar uma investigação incompleta.
3. Reserve quatro histórias completas, organize a ordem dos murais e escolha um título. A frase de curadoria é opcional.
4. Entre no museu 3D. Clique em um mural, em uma parada no chão ou nos números acima para caminhar até a exposição.
5. Ao chegar, use Descortinar mural. A cortina abre e revela individualmente nome, imagem e contribuição. Explore mural abre a ficha com foto, contexto, fontes e créditos.
6. Faça o mesmo para as quatro selecionadas. A impressão da exposição completa fica disponível depois das quatro revelações.

## Controles da visita
W/S ou setas cima/baixo: andar e recuar. A/D: deslocamento lateral. Setas esquerda/direita: girar. Há botões equivalentes para celular. Entrada retorna ao início da sala. O percurso respeita limites espaciais; a revelação só é liberada na área de um mural e com a câmera orientada para ele.

Reduzir movimento mantém a visita por paradas sem a animação de caminhada. A preferência do sistema por movimento reduzido é respeitada na entrada. Os controles continuam disponíveis por teclado. Diálogos podem ser fechados por Escape.

## Acervo e imagens
Novas trajetórias: Jaqueline Goes de Jesus (sequenciamento do SARS-CoV-2 no Brasil, 2020) e Katie Bouman (reconstrução computacional de imagem na colaboração EHT, 2019). O texto explicita que os trabalhos foram coletivos.

Há nove fotografias e um retrato histórico em pintura: Mary Anning é identificada como pintura, não fotografia. Imagens locais em assets/portraits; autoria, arquivo de origem, licença e nota de enquadramento constam em portraits.js, nas fichas dos murais e em assets/portraits/CREDITOS.md. As licenças individuais são preservadas. As dez ilustrações temáticas dos objetos também são locais e não são documentos históricos.

A fotografia de Johanna Döbereiner tem resolução original de 180 × 250 pixels. A fonte foi preservada, sem gerar detalhes artificiais. A foto de Jaqueline foi feita em uma cerimônia e é enquadrada por CSS no mural; a ficha permite ver o arquivo completo.

## Publicação
Envie index.html, styles.css, museum.css, acervo.js, vitrines.js, investigations.js, portraits.js, museum.js, app.js e a pasta assets para a mesma raiz de uma hospedagem estática. Não envie .qa, archive, scripts de teste ou arquivos de desenvolvimento. Preserve as licenças e créditos das imagens.

Após obter a URL HTTPS pública, gere o QR code e teste em celular fora da conta do autor. Publicação e QR code definitivo não foram realizados nesta entrega.

## Organização
- acervo.js: oito trajetórias iniciais e missões.
- vitrines.js: oito objetos iniciais e seus primeiros desafios.
- investigations.js: duas novas trajetórias, dois objetos e as 30 etapas de investigação.
- portraits.js: fontes e licenças dos dez retratos locais.
- museum.js e museum.css: ambiente, câmera, caminhada, cortinas e murais.
- app.js: progressão, curadoria, rascunho e fichas.

## Dados e versões anteriores
Sem cadastro, rastreamento ou envio de dados. O rascunho e as quatro revelações são locais e não sincronizam entre aparelhos. Nova exposição substitui a visita após confirmação. A v0.3.0 usa uma chave de armazenamento própria; não converte a etapa única das versões anteriores em três etapas concluídas. v0.1.0 e v0.2.0 estão preservadas em archive.

## Verificar
node --check app.js
node --check museum.js
node --check investigations.js
node verify.cjs
node verify.cjs --browser

O teste de navegador depende somente de uma ferramenta de desenvolvimento em .qa e do Chrome local; o site não depende deles. Resultados e limites em docs/VALIDACAO.md. Antes de uso no curso, validar duração com professores, tecnologias assistivas e celulares físicos. A experiência 3D usa transformações CSS, não realidade virtual.
