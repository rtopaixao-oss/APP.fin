# App financeiro

Aplicação **Ionic** + **Angular** para gestão financeira (contas a pagar/receber, cadastro, login).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada; o projeto usa Angular 20)
- npm (vem com o Node)

## Como rodar localmente

**Importante:** endereços como `http://localhost:4200` abrem **o que estiver rodando no seu computador** naquela porta — **não** o código do GitHub. Se outro projeto (por exemplo um app de faltas) já estiver com `ng serve` na porta 4200, é **esse** que vai aparecer. Para ver **este** app:

1. Pare outros servidores de desenvolvimento que usem a mesma porta, **ou** use uma porta fixa (abaixo).
2. No terminal, entre **nesta** pasta do repositório clonado e suba o servidor.

```bash
git clone git@github.com:rtopaixao-oss/APP.fin.git
cd APP.fin
npm install
npm start
```

No final do comando, o Angular mostra a URL exata (em geral porta **4200**). Abra **só** essa URL **depois** do `npm start` ter iniciado neste projeto.

Se a porta 4200 estiver ocupada, use outra porta e abra a URL que o terminal indicar:

```bash
npx ng serve --port 4201 --host localhost
```

Exemplo: o navegador deve apontar para `http://localhost:4201/` quando você usar a porta 4201.

## Scripts úteis

| Comando      | Descrição |
|-------------|-------------------------|
| `npm start` | Servidor de desenvolvimento (`ng serve`) |
| `npm run build` | Build de produção   |
| `npm test`  | Testes unitários (Karma/Jasmine) |

## Tecnologias

- Angular 20
- Ionic 8
