import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

interface IitemSideBar {
  icon: string,
  label: string
  link: string
}

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: true,
})

export class Sidebar implements OnInit {

  isSelected: string = 'dashboard'

    itemSideBar: IitemSideBar[]  = [
      {
        icon:  'icon-dashboard',
        label: 'dashboard',
        link: 'informacoesGerais'
      },
      {
        icon:  'icon-categoria',
        label: 'categorias',
        link: 'categorias'
      },
      {
        icon:  'icon-orcamento',
        label: 'orçamentos',
        link: 'orcamentos'
      }
    ]

  
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'icon-dashboard',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-dashboard.svg')
    );
    this.iconRegistry.addSvgIcon(
      'icon-categoria',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-categoria.svg')
    );
    this.iconRegistry.addSvgIcon(
      'icon-orcamento',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-orcamento.svg')
    );
    this.iconRegistry.addSvgIcon(
      'icon-log-out',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-log-out.svg')
    );
  }

  handleSelected(selected: string) {
    this.isSelected = selected
    console.log("clicado no selecionado",selected)
  }
  
  ngOnInit(): void {
    console.log("item side bar",this.itemSideBar)
  }

  
}
