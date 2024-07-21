# Instruções para Rodar o Banco de dados

Estes arquivos servem para rodar o banco de dados da aplicação. Precisa-se do docker e docker compose instalados em sua máquina para rodar.

## Passos para Configuração

1. **Rode o banco**

```
docker compose up
```

2. **Atribuições**

Após rodar o comando anterior, aguarde até o banco inicializar.

Ele construirá todas as tabelas necessárias.
```
usuário: eventsdb
senha: admin123
```