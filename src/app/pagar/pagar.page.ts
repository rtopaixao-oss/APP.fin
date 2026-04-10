import { Component } from '@angular/core';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false,
})
export class PagarPage {
  fornecedor = '';
  vencimento = '';
  pagamento = '';
  valor = '';

  listaPagar: any[] = [];

  cadastrar() {
    const novo = {
      fornecedor: this.fornecedor,
      vencimento: this.vencimento,
      pagamento: this.pagamento,
      valor: this.valor,
    };
    this.listaPagar.unshift(novo);
    this.limparFormulario();
  }

  excluir(posicao: number) {
    this.listaPagar.splice(posicao, 1);
  }

  limparFormulario() {
    this.fornecedor = '';
    this.vencimento = '';
    this.pagamento = '';
    this.valor = '';
  }
}
