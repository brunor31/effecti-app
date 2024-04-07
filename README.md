SPA desenvolvida para o teste técnico da empresa effecti

<strong>Requisitos:</strong>

* Docker instalado
* Containter do backend rodando - https://github.com/brunor31/effecti-api

<strong>Como executar:</strong>

1. Na raiz do projeto, execute ```docker-compose up -d``` para buildar o container.
2. Entre no container da SPA: ```docker exec -it app bash```
3. Instale as dependências: ```npm install```
4. Inicie a SPA: ```npm run dev```
5. Acesse a SPA: http://localhost:8080

<strong>Funcionalidades:</strong>

* Criação de usuários
* Login com e-mail e senha
* Listagem e consulta de processos de licitação
* Verificação de licitações lidas
