import { Component } from '@angular/core';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false,
})
export class ReceberPage {
  cliente = '';
  vencimento = '';
  pagamento = '';
  valor = '';

  listaReceber: any[] = [];

  cadastrar() {
    const novo = {
      cliente: this.cliente,
      vencimento: this.vencimento,
      pagamento: this.pagamento,
      valor: this.valor,
    };
    this.listaReceber.unshift(novo);
    this.limparFormulario();
  }

  excluir(posicao: number) {
    this.listaReceber.splice(posicao, 1);
  }

  limparFormulario() {
    this.cliente = '';
    this.vencimento = '';
    this.pagamento = '';
    this.valor = '';
  }
}
