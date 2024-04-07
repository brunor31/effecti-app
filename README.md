SPA desenvolvida para o teste técnico da empresa effecti

Para buildar o projeto basta rodar o comando na raiz do projeto pelo terminal ou IDE (necessário docker instalado):

```bash
docker-compose up -d
```
Para acessar a aplicação é necessário estar com o backend rodando, [Acesse o projeto](https://github.com/brunor31/effecti-api)

Após subir a aplicação, é necessário entrar no container e instalar a dependências, basta seguir os comando abaixo.

Para acessar o container (obs: pode usar o docker desktop clicando no container e entrando na aba exec):

```bash
docker exec -it app bash
```

Dentro do container basta rodar o comando para instalar as dependências

```bash
npm install
```

Após instalar as dependencias basta rodar a aplicação: 

```bash
npm run dev
```

A aplicação vai startar na porta 8080.

```bash
http://localhost:8080
```

Para acessar a aplicação basta criar um usuário, ou logar com um e-mail e senha previamente cadastrado na api.