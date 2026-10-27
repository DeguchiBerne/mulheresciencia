# Validação da v0.2.0 — 2026-10-24

## Executado
- node --check app.js: aprovado.
- node --check vitrines.js: aprovado.
- node verify.cjs: aprovado; oito trajetórias, oito imagens locais, quatro brasileiras, três missões e três tipos de desafio.
- node verify.cjs --browser: aprovado no Chrome instalado, em modo headless, usando playwright-core apenas na pasta .qa.
- Repetido o teste no navegador após ajuste de foco na mensagem de resolução: aprovado.

## Fluxos verificados no navegador
- Identidades não aparecem no texto visível antes da inauguração.
- Investigação por imagem e seleção por botões equivalentes.
- Tentativa incorreta, nova tentativa e pedido de pista.
- Ordenação de etapas, associação e localização de detalhe.
- Reserva limitada a quatro histórias resolvidas e reordenação da visita.
- Título e texto, revelação de quatro identidades, fonte expandida.
- Texto digitado contendo marcação HTML é exibido como texto, sem criar imagem.
- Restauração após recarregar, diálogo docente e fechamento por Escape.
- Oito imagens carregadas e ausência de overflow horizontal a 390px.
- PDF gerado pelo Chrome e reinício com confirmação.
- Sem erros JavaScript registrados pelo navegador.

## Inspeção visual
Capturas da abertura, investigação e exposição revisadas. Ilustrações locais carregaram; hierarquia e contraste visual conferidos em desktop. Captura mobile disponível em .qa/04-celular.png.

## Artefatos locais
.qa/01-entrada.png, .qa/02-investigacao.png, .qa/03-exposicao.png, .qa/04-celular.png e .qa/exposicao.pdf. Não fazem parte dos arquivos para publicação.

## Limites
Não houve teste com pessoas, leitor de tela ou aparelho móvel físico. A verificação a 390px é emulação de viewport desktop. Publicação e QR code definitivo não realizados. A instalação inicial da ferramenta de teste falhou por certificado; a segunda tentativa, usando certificados do sistema com verificação TLS ativa, funcionou. O site não depende dessa ferramenta.
