import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage {
  nome = '';
  tipo = '';
  endereco = '';

  listaCadastros: any[] = [];

  cadastrar() {
    const novo = {
      nome: this.nome,
      tipo: this.tipo,
      endereco: this.endereco,
    };
    this.listaCadastros.unshift(novo);
    this.limparFormulario();
  }

  excluir(posicao: number) {
    this.listaCadastros.splice(posicao, 1);
  }

  limparFormulario() {
    this.nome = '';
    this.tipo = '';
    this.endereco = '';
  }
}
