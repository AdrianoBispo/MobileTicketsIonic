import { Component } from '@angular/core';
import { Senhas } from './../services/senhas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(public senhas: Senhas, private router: Router) {}
  
  relatorioDetalhado() {
    this.router.navigate(['/relatorio-detalhado'])
  }

}
