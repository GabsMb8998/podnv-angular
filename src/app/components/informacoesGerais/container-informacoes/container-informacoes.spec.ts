import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInformacoes } from './container-informacoes';

describe('ContainerInformacoes', () => {
  let component: ContainerInformacoes;
  let fixture: ComponentFixture<ContainerInformacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerInformacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInformacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
