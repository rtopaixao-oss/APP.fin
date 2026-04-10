# App financeiro

Aplicação **Ionic** + **Angular** para gestão financeira (contas a pagar/receber, cadastro, login).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada; o projeto usa Angular 20)
- npm (vem com o Node)

## Como rodar localmente

```bash
git clone git@github.com:rtopaixao-oss/APP.fin.git
cd APP.fin
npm install
npm start
```

O servidor de desenvolvimento do Angular sobe em **http://localhost:4200/** (outra porta pode ser usada se a 4200 estiver ocupada).

### Porta alternativa

```bash
npx ng serve --port 4201
```

## Scripts úteis

| Comando      | Descrição |
|-------------|-------------------------|
| `npm start` | Servidor de desenvolvimento (`ng serve`) |
| `npm run build` | Build de produção   |
| `npm test`  | Testes unitários (Karma/Jasmine) |

## Tecnologias

- Angular 20
- Ionic 8
