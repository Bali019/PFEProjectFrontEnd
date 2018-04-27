import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    href : string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' , href : ''},
  //  { path: 'formation', title: 'Formation',  icon:'ti-book', class: '', href : '#formationSubmenu' },
    { path: 'user', title: 'Profile',  icon:'ti-user', class: '' , href : ''},
    { path: 'user', title: 'Typography',  icon:'ti-text', class: '' , href : ''},
    { path: 'user', title: 'Icons',  icon:'ti-pencil-alt2', class: '', href : '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '', href : '' },
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
