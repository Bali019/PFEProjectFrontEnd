import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'unities', title: 'Formation',  icon:'ti-book', class: '' },
    { path: 'user', title: 'Profile',  icon:'ti-user', class: '' },
    { path: 'user', title: 'Typography',  icon:'ti-text', class: '' },
    { path: 'user', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    { path: 'user', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'user', title: 'Notifications',  icon:'ti-bell', class: '' },
    { path: 'user', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
