import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RelatorioDetalhadoComponent} from './pages';

const routes: Routes = [
    {path: '', redirectTo: 'detalhado', pathMatch: 'full'},
    {
        path: 'detalhado', component: RelatorioDetalhadoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CtxRelatoriosRoutingModule {
}
