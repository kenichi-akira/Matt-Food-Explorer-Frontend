# Matt-Food-Explorer-Frontend
 Projeto food explorer: Frontend do desafio final da trilha Explorer da Rocketseat. 

<h1 align="center" style="text-align: center;"> Food Explorer </h1>

    O que é: Um cardápio digital para um restaurante fictício

<p align="center"> <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#Structure">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#features">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#install">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#license">Licença</a> </p> <p align="center"> <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000"> </p> <h2 id="project">📁 Projeto</h2>

Food Explorer é o desafio final da trilha Explorer/Fullstack da Rocketseat. Trata-se de uma aplicação de cardápio digital que simula um restaurante fictício, onde clientes podem explorar pratos, favoritar suas escolhas e gerenciar pedidos, enquanto administradores têm controle total para gerenciar o cardápio.

Este é o repositório do front-end da aplicação, que exibe a interface de usuário. O back-end, responsável pela lógica e armazenamento dos dados, está disponível [aqui.](https://github.com/kenichi-akira/Matt-Food-Explorer-Backend/tree/main)
<h2 id="Structure">📌 Estrutura</h2>

Estrutura de páginas para navegação:

- Login
- Cadastro
- Página principal (Home)
- Perfil do Usuário
- Detalhes do prato
- Ordens
- Novo prato (para administradores)
- Editar prato (para administradores)
- Favoritos

![Imagem 1](https://i.imgur.com/ya6q5Nl.png)
![Imagem 2](https://i.imgur.com/x1eMrvJ.png)
![Imagem 3](https://i.imgur.com/ZtZcq98.png)
![Imagem 4](https://i.imgur.com/tPQH0Z4.png)


<h2 id="features">✨ Funcionalidades</h2>

### Funcionalidades Gerais

    - Cadastro e login de usuários
    
    - Pesquisa de pratos por nome e ingredientes
    
    - Exibição de detalhes de pratos

### Funcionalidades para Clientes

    - Adicionar pratos aos favoritos e visualizar a lista de favoritos
    
    - Adicionar itens ao carrinho e realizar check-out com visualização do total do pedido

### Funcionalidades para Administradores

    - Adicionar, editar e excluir pratos do cardápio
    
    - Atualizar o status dos pedidos de acordo com o progresso

<h2 id="technologies">💻 Tecnologias</h2>

O projeto tem como dependências:

- React.js para o desenvolvimento da interface
- JavaScript para a lógica do front-end
- Axios para requisições HTTP
- react-router-dom para a navegação entre páginas
- styled-components para estilização
- splidejs para slides e carrosséis interativos

<h2 id="usage">💡 Utilização</h2>

A aplicação está disponível para uso online. Para acessar, clique aqui. [https://matt-food-explorer-frontend.netlify.app/](https://matt-food-explorer-frontend.netlify.app/)

⚠️ **Importante!!!** Este projeto utiliza uma hospedagem gratuita para o back-end, o que pode resultar em pequenos atrasos no tempo de resposta quando o servidor está inativo, então comandos básicos como login e criação de conta podem levar um tempo, além de uma leve demora no carregamento de imagens.

<h2 id="install">🛠 Instalação</h2>

Para rodar o projeto em sua máquina local, siga os passos abaixo. Certifique-se de que o Node.js e o npm estejam instalados.

1. Clone o repositório:

       $ git clone https://github.com/kenichi-akira/Matt-Food-Explorer-Frontend

2. Acesse a pasta do projeto:

       $ cd Matt-Food-Explorer-Frontend

3. Instale as dependências:

       $ npm install

4. Inicie o servidor de desenvolvimento:

       $ npm run dev

Após seguir esses passos, a aplicação estará rodando localmente e você poderá acessá-la pelo navegador no endereço local indicado no terminal.
<h2 id="license">📝 Licença</h2>

Este projeto está sob a licença MIT.

Feito por Matthews Barcellos.
