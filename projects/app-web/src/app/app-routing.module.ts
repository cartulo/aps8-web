import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppLayoutComponent} from './layout/app.layout.component';
import {RelatorioDetalhadoComponent} from 'projects/ctx-relatorios/src/lib/pages';

const routes: Routes = [
    {path: '', redirectTo: 'relatorios', pathMatch: 'full'},
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {path: 'relatorios', loadChildren: () => import('../../../ctx-relatorios/src/lib/ctx-relatorios.module').then(m => m.CtxRelatoriosModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}