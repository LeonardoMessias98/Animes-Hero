![image](https://i.imgur.com/cT4NV0x.png)

#### Acesse aqui -> https://company-hero-animes.vercel.app/

## Funcionalidades

A aplicação desenvolvida contém três telas
 * Pagina Home - essa tela é principal da aplicação, ela é responsáveis por mostrar algumas listas de animes como os trending animes e animes por cada categoria.

 * Pagina Search - nessa tela permitimos o usuário pesquisar por animes, a pesquisa é feita atravez do nome do anime no qual o usuário deseja encontrar.

 * Pagina Single Anime - nessa tela mostramos algumas informações sobre o anime selecionado, também é possível assistir um trailer sobre anime e acessar um slider de animes relacionados.

## Arquitetura do código

Sobre a arquitetura do código ela foi escolhida com base na arquitetura que venho utilizando tanto no meu trabalho quanto nos meus projetos academicos.
  * `src` – nessa pasta fica contido todo o source code da minha aplicação
    *  `pages` – contém as paginas da aplicação
    *  `modules` – aqui ficam os modulos das minhas paginas
    *  `shared` – nessa pasta fica tudo o que é compartilhado tanto de pagina para pagina como de componente para componente
        * `assets` – nessa pasta contém todas minhas imagens e icones que são utilizados na aplicação
          * `icons` – nessa pasta fica os icones
        * `components` – aqui ficam os components reutilizaveis, eu adotei um padrão de componentes chamado Atomic Design, nele eu separo os componentes entre pastas chamdas atoms / molecules / organisms / templates, o objetivo é facilitar a estrutura para caso o projeto escale
        * `providers` – aqui ficam os meus provedores da minha aplicação, como Contextos, Reduxs, Layouts e etc
        * `dto` – nessa pasta eu deixo as minhas interfaces que utilizo globalmente
        * `seo` – nessa pasta ficam algumas configurações de seo do meu app
        * `hooks` – nessa pasta ficam os meus hooks personalizados
        * `services` – nessa pasta ficam os meus serviços tanto de auth e api
        * `styles` – nessa pasta fica os meus estilos globais da aplicação
        * `utils` – aqui ficam minhas funções uteis que são utilizados em mais de um local


## Requisitos para rodar o projeto
- [Npm](https://www.npmjs.com/)
- [NodeJs](https://nodejs.org/en/)

## Como rodar o projeto

Para rodar é essencial que tenha o [node](https://nodejs.org/en/) instalado, caso não tenha siga o passo a passo logo abaixo

#### Ubuntu 
```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Debian, as root
```
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs
```

#### [Outra distribuição Linux](https://nodejs.org/en/download/package-manager/)

#### Windows
Acesse o site do [NodeJs](https://nodejs.org/en/) e instale a versão LTS

Com tudo já instalado primeiro faça o clone deste repositório
```
https://github.com/LeonardoMessias98/company-hero-animes.git
```

Acesse a pasta do repositório pelo terminal
```
  cd company-hero-animes
```

Agora instale as dependencias do projeto
```yarn``` ou ```npm install```

Apos ter instalado as dependencias do projeto é necessário rodar o servidor local do projeto
```
yarn start
```
ou
```
npm start
```

A aplicação rodará na porta 3000 do seu localhost -> [http://localhost:3000](http://localhost:3000/)

## Tecnologias e bibliotecas
* [`react`](https://pt-br.reactjs.org/)
* [`ant-design`](https://ant.design/docs/react/introduce)
* [`typescript`](https://www.typescriptlang.org/)
* [`eslint`](https://eslint.org/)
* [`contextApi`](https://pt-br.reactjs.org/docs/context.html)
* [`react-icons`](https://react-icons.github.io/react-icons/)
* [`axios`](https://github.com/axios/axios)
* [`styled-components`](https://styled-components.com/)

## Duvidas
  Para qualquer duvida estou a total disposição para explicar melhor o meu código e as decisões que tomei de arquitetura. ![Webp net-resizeimage]
