import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesGerais } from './informacoes-gerais';

describe('InformacoesGerais', () => {
  let component: InformacoesGerais;
  let fixture: ComponentFixture<InformacoesGerais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesGerais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesGerais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
