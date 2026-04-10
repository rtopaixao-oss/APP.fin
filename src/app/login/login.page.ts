import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  private router = inject(Router);

  nome = '';
  senha = '';
  /** Mensagem simples se faltar nome ou senha (só avança com os dois preenchidos). */
  erro = '';

  avancar() {
    this.erro = '';
    const nomeOk = this.nome.trim().length > 0;
    const senhaOk = this.senha.trim().length > 0;
    if (!nomeOk || !senhaOk) {
      this.erro = 'Preencha o nome e a senha para continuar.';
      return;
    }
    this.router.navigate(['/menu']);
  }
}
