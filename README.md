ChaRadas - Desafio de Adivinhação
O ChaRadas é uma aplicação web interativa que gera charadas aleatórias via API e desafia o usuário a adivinhar a resposta. O projeto foca em uma experiência de usuário lúdica, utilizando animações de rotação 3D (card flip) e um design moderno.

Funcionalidades
Busca Dinâmica: Consome uma API externa para trazer charadas inéditas a cada clique.

Sistema de Verificação: O usuário digita seu palpite e o sistema valida se a resposta está correta antes de liberar a revelação.

Animação 3D: Uso de classes utilitárias do Tailwind para criar o efeito de giro do cartão (preserve-3d, rotateY).

Feedback Visual: Mensagens de acerto ou erro com estilização condicional via JavaScript.

Design Responsivo: Interface otimizada para diferentes tamanhos de tela.

Tecnologias Utilizadas
Este projeto foi construído com as seguintes ferramentas:

HTML5: Estrutura semântica do documento.

Tailwind CSS: Estilização baseada em utilitários e animações customizadas.

JavaScript (ES6+): Lógica de manipulação de DOM, eventos e requisições assíncronas (Async/Await).

API de Charadas: Integração com serviço externo para fornecimento de conteúdo.

Estrutura do Código
O projeto é composto por dois arquivos principais:

index.html: Contém a estrutura do card, incluindo a face frontal (pergunta) e a face traseira (resposta), organizadas em um contêiner com perspectiva 3D.

script.js: Gerencia o estado da aplicação, controla quando o card pode ser virado, valida o input do usuário e realiza o fetch para buscar novos dados.

Design
A interface utiliza uma paleta de cores vibrante em tons de Amber e Slate, com um fundo texturizado e sombras profundas para criar um efeito de profundidade, seguindo uma linha de design limpa e impactante.

Como Executar
Clone este repositório:

Bash
git clone https://github.com/seu-usuario/charadas.git
Abra o arquivo index.html em seu navegador.

Certifique-se de estar conectado à internet para que a API possa carregar as charadas.

📝 Licença
Este projeto foi desenvolvido para fins de estudo e prática de desenvolvimento web.
