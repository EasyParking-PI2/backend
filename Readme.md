# Backend do projeto EasyParking

## Testes de carga
Os resultados dos testes de carga podem ser acessados por meio [desse link](./load-test/TestsResults.md).

## Microserviços
Para esse projeto, foram criado dois microserviços: [Autenticação](https://github.com/EasyParking-PI2/service-users) e [Aplicação](https://github.com/EasyParking-PI2/application-service/tree/main). 

## Rodando o projeto
Para rodar o projeto em sua máquina local, você precisa ter o docker instalado e utilizar seguinte comando:

``docker compose up --build``

Isso irá baixar os containers de todos os microserviços. Após isso, sempre que for rodar a aplicação, utilize o comando:

``docker compose up``