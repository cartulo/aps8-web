import { Component } from '@angular/core';
import { LayoutService } from "projects/app-web/src/app/layout/service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutService) { }
}
