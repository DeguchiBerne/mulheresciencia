# Museu em Construção — v0.8.0
Protótipo estático independente para formação de professores adultos. Abra index.html no navegador, sem instalar dependências.

## Início e retomada
Início está disponível no cabeçalho e dentro do museu. O logotipo também volta à abertura. Isso preserva etapas, quatro reservas, título e identidades já reveladas. Continuar minha curadoria retoma a tela anterior, inclusive o museu. Recarregar a página inicial mantém a abertura visível. Explorar as vitrines abre o acervo sem apagar o progresso.
Nova exposição é a ação que reinicia os dados, após confirmação.

## Ordem das atividades
Toda vitrine segue: identidade oculta e etapa → título → abas Observar/Situar/Conectar → introdução → atividade → conferência → próxima etapa após acerto.
Observar: selecione a resposta, marque o detalhe ou organize as etapas. A seleção pode ser alterada e não é enviada automaticamente. Clique em Conferir; após acertar, use Próxima etapa.
Situar: leia a introdução e abra os três objetos/pistas. Arraste os selos até Quando e Onde. Há quatro distratores entre os seis selos. Clique em Conferir e, após o acerto, em Próxima etapa.
Conectar: escolha duas ações para investigar o problema e clique em Defender. Não há mais seção de conclusões nem seleção adicional. A conferência explica como as ações se complementam. Após acertar, reserve a história. Se já estiver reservada, a atividade informa esse estado.
Retirar uma história é uma ação exclusiva da tela de curadoria. O botão Retirar selo devolve apenas o selo, sem alterar reservas.
Conclua e selecione quatro histórias; depois dê um título à exposição e entre no museu.

## Selos
A mesma arte colorida aparece antes, durante e depois de colar. O selo sai do acervo e ocupa um único lugar. Arraste outro por cima para trocar ou use Retirar selo. Soltar fora mantém a posição anterior. Há destaque do destino e rolagem do diálogo durante o arraste.
Alternativa por teclado: selecione o selo com Enter/Espaço e ative o campo vazio; para substituir, selecione outro e ative o selo no campo ocupado. Escape cancela o arraste.

## Museu
Clique em um número ou mural para caminhar até ele e use Abrir cortina. Depois clique em Clique para explorar ou Explorar mural. Cada uma das quatro cortinas é independente.
Controles, ajuda e abertura permanecem dentro da cena. W/S anda e recua, A/D desloca e setas giram. Há botões equivalentes para toque e opção Reduzir movimento. Porta de entrada mostra a porta; clique nela para abrir.
A porta ocupa o intervalo completo entre chão e teto. Placas das histórias ficam acima dos murais sem antecipar identidades. Cada janela tem uma paisagem original diferente. Arandelas e estruturas sobre os murais são volumes em CSS 3D com suporte, profundidade, faces e acabamentos; foram afastadas das janelas. Bustos alegóricos usam WebGL.

## Conteúdo e progresso
As dez trajetórias, fontes, fotografias e créditos foram preservados. Mary Anning usa pintura histórica identificada como tal. Imagens decorativas e simulações não são documentos ou experimentos históricos reais.
Etapas concluídas, curadoria, título e revelações anteriores seguem compatíveis com a chave local v5. Não há reset automático nesta entrega. Estado exploratório ainda não concluído é de sessão. Sem cadastro, rastreamento, envio de dados ou sincronização entre aparelhos.

## Publicar
Envie index.html, styles.css, museum.css, acervo.js, vitrines.js, investigations.js, portraits.js, visual-investigation.js, sculpture.js, museum.js, app.js e a pasta assets para a mesma raiz de hospedagem estática HTTPS. Preserve créditos e licenças. Não publique .qa, archive ou scripts de teste. Gere o QR code depois de obter a URL pública. Publicação ainda não realizada.

## Validação
node --check app.js
node --check visual-investigation.js
node --check museum.js
node verify.cjs --browser
node .qa/usability-v8.cjs
Ferramentas de teste apenas em .qa, com Chrome instalado; o site não depende delas. Resultados reais e limitações em docs/VALIDACAO.md. Ainda não houve teste em celular físico, outros navegadores, leitor de tela ou observação com professores.
