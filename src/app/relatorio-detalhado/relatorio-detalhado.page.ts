import { Component, OnInit } from '@angular/core';
import { Senhas } from '../services/senhas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorio-detalhado',
  templateUrl: './relatorio-detalhado.page.html',
  styleUrls: ['./relatorio-detalhado.page.scss'],
  standalone: false,
})

export class RelatorioDetalhadoPage implements OnInit {

  constructor(private router: Router, public senhas: Senhas) { }

  voltar() {
    this.router.navigate(['/tabs/tab3'])
  }

  ngOnInit() {
  }

}
