import { Component, ElementRef } from '@angular/core';
import { LayoutService } from "projects/app-web/src/app/layout/service/app.layout.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

