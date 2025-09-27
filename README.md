# Theme SSR
Theme SSR é um exemplo de como construir páginas HTML com Server Side Rendering em um Web Server Node com Framework Express.

### O que Server Side Rendering

Server Side Rendering (Renderização do Lado do Servidor) ou SSR, é uma forma de construir páginas HTML, 
onde a montagem do Front End acontece no Servidor (Back-End), com o avanço dos frameworks de 
desenvolvimento front-end como VUEJS e REACT, o desenvolvimento de aplicações traz mais código para front-end, 
o que para aplicações economiza carregamento a cada atualização de página, mas para sites comuns, sistemas que 
precisam de uma maior indexação nos sistemas do google, a recomendação é que o carregamento de conteúdo esteja 
pronto o mais rápido possivel, e para evitar o atraso do carregamento do javascript, ideal para SEO (Otimização de Motores de Busca)
é que o site já tenha todo o conteúd carregado.

*Requisitos*
Node: +20.0

Primeiros passos:

1. Instale as dependências
```bash
npm install
```

2. Crie o arquivo .env, no exemplo eu tenho uma aplicação backend 
rodando na porta 8001, esse verviço é uma api de aplicação CMS.
```bash
API_URL=http://localhost:8001/api
```

3. Inicie o servidor 
```bash
npm run start
```
Obs: Esse comando pré-definido no arquivo package.json

