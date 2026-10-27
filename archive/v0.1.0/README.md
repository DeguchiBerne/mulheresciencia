# Museu em Construção — v0.1.0
Projeto independente para demonstração na formação de professores da rede estadual do Paraná. Sem vínculo institucional com a rede.

## Abrir
Abra index.html no navegador. Não há instalação nem build. Escolha uma missão, conheça oito trajetórias, selecione quatro, organize por setas, escreva título e justificativa e abra a exposição. Imprimir / salvar PDF usa a impressão do navegador.

HTML, CSS e JavaScript são locais. Links das fontes precisam de internet. O armazenamento local pode variar ao abrir por arquivo; para uso estável em turma, hospede em HTTPS.

## Publicar
Envie index.html, styles.css, acervo.js e app.js para a mesma pasta em uma hospedagem estática. Preserve os nomes. Após obter o endereço público HTTPS, gere o QR code e teste em celular fora da conta de quem publicou. Nenhuma publicação ou QR code definitivo foi realizado nesta entrega.

## Dados e conteúdo
Sem dependências, fontes remotas, rastreamento, cadastro ou envio de dados. Rascunho local quando permitido pelo navegador. Não há sincronização entre aparelhos. Nova exposição substitui o rascunho após confirmação. Símbolos são abstrações decorativas, sem retratos ou imagens de terceiros. Sínteses autorais e links institucionais em cada ficha.

## Limites
Oito trajetórias não representam a diversidade completa. Faltam trajetórias indígenas, maior diversidade regional e acervo relacionado ao Paraná. Sem mural coletivo ou avaliação automática do texto. A representação de áreas é simplificada para demonstrar a dinâmica.

## Verificar
Execute node --check app.js, node --check acervo.js e node verify.cjs. O último verifica regras com DOM simulado; não testa layout, navegação real, impressão final nem tecnologias assistivas. Antes do curso, valide em navegador e celular, inclusive seleção, reordenação, restauração, filtros e PDF.
