# App financeiro

Aplicação **Ionic** + **Angular** para gestão financeira (contas a pagar/receber, cadastro, login).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada; o projeto usa Angular 20)
- npm (vem com o Node)

## Como rodar localmente

Este projeto sobe na porta **4299**. O servidor precisa estar **rodando no terminal**; sem isso, o Safari (ou qualquer navegador) mostra que não consegue conectar.

```bash
git clone git@github.com:rtopaixao-oss/APP.fin.git
cd APP.fin
npm install
npm start
```

1. **Deixe esse terminal aberto** enquanto testa o app.
2. Espere aparecer no terminal algo como “Compiled successfully” / que o servidor está escutando.
3. Abra no navegador **um** destes endereços (no Safari, se `localhost` falhar, use o IP):

- **http://127.0.0.1:4299/**
- **http://localhost:4299/**

### Safari: “não pode conectar ao servidor”

| Causa | O que fazer |
|--------|-------------|
| `npm start` não está rodando | Na pasta do projeto, rode `npm start` e aguarde compilar. |
| URL errada | Use exatamente a porta **4299** (não 4200). |
| `localhost` no Safari | Tente **http://127.0.0.1:4299/** |
| Terminal fechou / Ctrl+C | Suba de novo com `npm start`. |

> Links no GitHub **não** iniciam o servidor; eles só indicam o endereço depois que você rodou `npm start` neste repositório.

## Scripts úteis

| Comando      | Descrição |
|-------------|-------------------------|
| `npm start` | Servidor de desenvolvimento (`ng serve`, porta **4299**) |
| `npm run build` | Build de produção   |
| `npm test`  | Testes unitários (Karma/Jasmine) |

## Tecnologias

- Angular 20
- Ionic 8
