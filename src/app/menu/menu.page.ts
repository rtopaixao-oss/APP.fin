import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage {
  private router = inject(Router);

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  irParaReceber() {
    this.router.navigate(['/receber']);
  }

  irParaPagar() {
    this.router.navigate(['/pagar']);
  }
}
