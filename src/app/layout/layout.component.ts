import { Component, OnInit } from '@angular/core';
import { menuItems, taxData, Taxes } from '../shared/constants';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  selectedMenu: any = {};
  breadcrumbs: Array<any> = [];
  isTaxMenuClicked = false;
  taxData: Array<Taxes> = taxData;
  searchTextChanged = new Subject<string>();
  debounce:any;
  isSidebarOpened: boolean = false;
  isShowing: boolean = true;

  constructor() {}

  reloadPage(): void {
    setTimeout(() => {
      this.isShowing = true
    }, 50);
  }

  onSubmit(data: Taxes) {
    this.taxData.unshift(data)
    this.isShowing = false
    this.reloadPage()
  }

  onToggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  onMenuSelect(menu: string) {
    this.selectedMenu = menuItems.filter(x => menu.includes(x.name))[0]
    this.breadcrumbs = []
    this.breadcrumbs.push(this.selectedMenu)
    this.isTaxMenuClicked = false
  }

  onSubmenuClick(subMenu: any) {
    this.breadcrumbs.splice(1, this.breadcrumbs.length - 1)
    this.breadcrumbs.push(subMenu)
    this.isTaxMenuClicked = false
  }

  onSubmenuItemClick(subMenuItem: any, subMenu: any) {
    this.breadcrumbs.splice(1, this.breadcrumbs.length - 1)
    this.breadcrumbs.push(subMenu)
    this.breadcrumbs.push(subMenuItem)
    if (subMenuItem.path === 'taxes-setup') {
      this.isTaxMenuClicked = true
    } else {
      this.isTaxMenuClicked = false
    }
  }

  filterMainMenus(type: String) {
    return menuItems.filter(x => x.type === type)
  }

  search(event: KeyboardEvent){
    clearTimeout(this.debounce)
    const value = (<HTMLInputElement>event.target).value.toLowerCase()
    this.debounce = setTimeout(() =>{
      this.taxData = taxData.filter(x => 
        x.code.toLowerCase().includes(value) || 
        x.name.toLowerCase().includes(value) || 
        x.country.toLowerCase().includes(value))
    },500)
  }

  onRemove(id: number) {
    this.taxData = this.taxData.filter(x => x.id !== id)
  }

  ngOnInit(): void { }
}
 

