# Instruções para Rodar o Projeto

## Requisitos

- [Node.js](https://nodejs.org/) versão 21
- [JDK](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) JDK 17
- [Docker e docker compose](https://www.docker.com/)

## Passos para Configuração

1. **Rodar banco de dados**
Antes de realizar a execução dos demais, é recomendavel iniciar o banco de dados.
Assim a aplição deverá executar sem erro de conexão no banco.

As instruções para rodar o banco pode ser achadas aqui: [README DB](database/README.md)

2. **Rodar o backend**

Apos inciar o banco de dados, já pode iniciar o backend.
As instruções para rodar o backend pode ser achadas aqui: [README DB](back-end/eventsapi/README.md)

3. **Rodar o frontend**

Por fim, rode o fron-end, ele pode ser achado aqui:
As instruções para rodar o backend pode ser achadas aqui: [README DB](front-end/README.md)

4. **A ativacão e desativação dos eventos**

A ativação e desativação dos eventos ocorrerá de forma automática por um CronJob que roda no Kubernets, ele será configurado para rodar todos os dias a 00:00.

Este cronjob sobe um container com uma imagem do python que roda um Scipt.

Este script conecta no banco:
 - Ativação: O script faz um update em todos os eventos em que a data seja igual a atual (Após meia noite será atualizado a do dia que rodou).
 - Desativação: Este script realizar um update, porem em todos as data que forem menor que a atual.