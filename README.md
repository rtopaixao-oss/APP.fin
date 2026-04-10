# App financeiro

Aplicação **Ionic** + **Angular** para gestão financeira (contas a pagar/receber, cadastro, login).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada; o projeto usa Angular 20)
- npm (vem com o Node)

## Como rodar localmente

Este projeto está configurado para subir **sempre** na porta **4299**, separada da porta padrão do Angular (4200). Assim, depois de `npm start` **neste repositório**, o endereço correto é sempre o de baixo — e não mistura com outros apps que você possa ter na 4200.

```bash
git clone git@github.com:rtopaixao-oss/APP.fin.git
cd APP.fin
npm install
npm start
```

Quando o terminal mostrar que o servidor está pronto, abra:

**http://localhost:4299/**

> **Sobre links no GitHub:** `localhost` só responde depois que **você** rodou `npm start` na pasta clonada. O README não “abre o app do site”; ele indica onde o **seu** servidor deste código vai escutar (neste caso, porta **4299**).

## Scripts úteis

| Comando      | Descrição |
|-------------|-------------------------|
| `npm start` | Servidor de desenvolvimento (`ng serve`, porta **4299**) |
| `npm run build` | Build de produção   |
| `npm test`  | Testes unitários (Karma/Jasmine) |

## Tecnologias

- Angular 20
- Ionic 8
