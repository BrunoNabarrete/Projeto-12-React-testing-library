# Projeto-12-React-testing-library

Nesse projeto você escreverá testes para uma aplicação React que já está criada e configurada, utilizando Jest e a biblioteca React Testing Library. Você não precisará realizar nenhuma configuração adicional.

A aplicação contém uma implementação completa de todos os requisitos da Pokédex. Seu trabalho será, para cada requisito listado, escrever testes que garantam sua corretude. Cuidado com testes falsos positivos. Falsos positivos serão desconsiderados na avaliação.

Neste projeto, verificamos se você é capaz de:

Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;

Simular eventos com a React-Testing-Library em testes automatizados;

Testar fluxos lógicos assíncronos com a React-Testing-Library;

Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados;

Testar inputs.

1. Teste o componente <App.js />
Caminho do componente: src/App.js

Teste se o topo da aplicação contém um conjunto fixo de links de navegação:
Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;

Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;

Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação;

Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.

O que será verificado

2. Teste o componente <About.js />.
Caminho do componente: src/pages/About.js

Teste se a página contém as informações sobre a Pokédex;

Teste se a página contém um heading h2 com o texto About Pokédex;

Teste se a página contém dois parágrafos com texto sobre a Pokédex;

Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.

O que será verificado

3. Teste o componente <FavoritePokemon.js />
Caminho do componente: src/pages/FavoritePokemon.js

Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;

Teste se são exibidos todos os cards de Pokémon favoritados.

O que será verificado

4. Teste o componente <NotFound.js />
Caminho do componente: src/pages/NotFound.js

Teste se a página contém um heading h2 com o texto Page requested not found;

Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.

O que será verificado

5. Teste o componente <Pokedex.js />
Caminho do componente: src/pages/Pokedex.js

Teste se a página contém um heading h2 com o texto Encountered Pokémon;

Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado:
Teste se é mostrado apenas um Pokémon por vez;

Teste se a Pokédex tem os botões de filtro:
Teste se a Pokédex contém um botão para resetar o filtro:
O que será verificado

6. Teste o componente <Pokemon.js />
Caminho do componente: src/components/Pokemon.js

Teste se é renderizado um card com as informações de determinado Pokémon:
Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;

Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon;

Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver;

Teste se existe um ícone de estrela nos Pokémon favoritados:
O que será verificado

7. Teste o componente <PokemonDetails.js />
Caminho do componente: src/pages/PokemonDetails.js

Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:
Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:
Teste se o usuário pode favoritar um Pokémon através da página de detalhes:
O que será verificado
