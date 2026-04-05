import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { RelatorioDetalhadoPage } from './relatorio-detalhado.page';

describe('RelatorioDetalhadoPage', () => {
  let component: RelatorioDetalhadoPage;
  let fixture: ComponentFixture<RelatorioDetalhadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatorioDetalhadoPage],
      imports: [CommonModule, IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioDetalhadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
