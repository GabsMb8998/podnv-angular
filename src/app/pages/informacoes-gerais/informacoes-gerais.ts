import { Component } from '@angular/core';
import { Sidebar } from "../../components/sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-informacoes-gerais',
  imports: [Sidebar, CommonModule, MatIconModule, Header, Button, ContainerInformacoes],
  templateUrl: './informacoes-gerais.html',
  styleUrls: ['./informacoes-gerais.css',]
})
export class InformacoesGerais {

}
import { provideHttpClient } from '@angular/common/http';
import { Header } from "../../components/header/header";
import { Button } from "../../components/button/button";
import { ContainerInformacoes } from "../../components/informacoesGerais/container-informacoes/container-informacoes";