import {Component, Input} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-carrossel-com-descricao',
    templateUrl: './carrossel-com-descricao.component.html'
})

export class CarrosselComDescricaoComponent {
    @Input() infoDevs: any;
}
