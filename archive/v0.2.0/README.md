# Museu em Construção — v0.2.0
Projeto independente para demonstração em formação de professores da rede estadual do Paraná. Sem vínculo institucional.

## Experimentar
Abra index.html no navegador, sem instalar dependências. Explore oito vitrines anônimas; cada uma oferece uma ilustração, um fato curto e um desafio. Há localização de detalhes na imagem, associação de ideias e organização de etapas. Tentativas e dicas são livres.

Resolver o desafio libera a história para reserva. Escolha quatro, organize a visita com as setas, dê um título e inaugure: só então os nomes são revelados. Uma frase de curadoria é opcional. A missão pode ser alterada na sala de vitrines. Impressão permite salvar PDF pelo navegador. Olhar docente explica como adaptar a experiência.

## Imagens e conteúdo
Oito SVGs originais na pasta assets. São imagens temáticas e esquemáticas, não documentos ou peças históricas reais. Créditos em assets/CREDITOS.md. Não há imagens externas, fontes remotas ou dependências do site. As fontes institucionais das trajetórias aparecem na inauguração. Fontes e textos estão em acervo.js; fatos e desafios em vitrines.js.

Os desafios são atividades interpretativas propostas para a formação. Sequências de pesquisa são simplificações pedagógicas, não reconstituições de experimentos específicos. A coleção não representa toda a diversidade de mulheres na ciência.

## Publicar
Envie index.html, styles.css, acervo.js, vitrines.js, app.js e a pasta assets para uma hospedagem estática HTTPS. Não envie .qa, archive ou scripts de teste. Preserve os nomes. Após publicação, gere o QR code com a URL pública e teste fora da conta de quem publicou. Publicação e QR code definitivo ainda não realizados.

## Rascunho
Sem cadastro, rastreamento ou envio de dados. Rascunho local quando permitido; não há sincronização entre dispositivos. Nova exposição limpa o rascunho da v0.2.0 após confirmação. A versão anterior usa outra chave local e está preservada em archive/v0.1.0. Rascunhos anteriores não migram automaticamente, pois a nova versão exige investigação antes da reserva.

## Verificar
node --check app.js
node --check vitrines.js
node verify.cjs

O teste opcional node verify.cjs --browser usa playwright-core em .qa e o Chrome local. Essa ferramenta serve apenas ao desenvolvimento, não ao jogo. Artefatos de teste ficam em .qa. Antes do uso em turma, validar duração, acessibilidade com tecnologias assistivas e dispositivos reais.
