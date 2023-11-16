import {NgModule} from '@angular/core';

import {ComponentsModule} from 'projects/tools/src/lib/modules/components/components.module';
import {ToolsModule} from 'projects/tools/src/lib/tools.module';

import {CarrosselComDescricaoComponent, RelatorioDetalhadoComponent} from './pages';
import {CtxRelatoriosRoutingModule} from './ctx-relatorios-routing.module';
import {CtxRelatoriosComponent} from './ctx-relatorios.component';

@NgModule({
  imports: [
    ComponentsModule,
    CtxRelatoriosRoutingModule,
    ToolsModule
  ],
  declarations: [
    CtxRelatoriosComponent,
    CarrosselComDescricaoComponent,
    RelatorioDetalhadoComponent
  ],
  exports: []
})
export class CtxRelatoriosModule { }
