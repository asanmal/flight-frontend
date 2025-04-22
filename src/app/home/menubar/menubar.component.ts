import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'menubar',
    templateUrl: './menubar.component.html',
    standalone: true,
    imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, RouterModule],
    styleUrls: ['./menubar.component.css']
})
export class MenuBarComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {label: 'Home', routerLink: ['/home']},
            {label: 'Drone', routerLink: ['/drone']},
            {label: 'Matrix', routerLink: ['/matrix']},
            {label: 'Flight', routerLink: ['/flight']},
            {label: 'Contact', routerLink: ['/contact']}
        ];
    }
}