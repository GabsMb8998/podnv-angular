import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { InformacoesGerais } from './pages/informacoes-gerais/informacoes-gerais';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "informacoesGerais",
        component: InformacoesGerais
    }
];
