import { Component, OnInit } from '@angular/core';
import { menuItems, taxData, Taxes, langOptions } from '../shared/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  activedTab = 'DE';
  _opened: boolean = false;
  validateForm!: FormGroup;
  isShowing: boolean = true;
  status: boolean = false;  
  tabs = langOptions;

  constructor(private fb: FormBuilder) {}

  submitForm(): void {
    let newData: any = {};
    const currentTab = this.tabs.filter(x => x.name === this.activedTab)[0];
    
    for (const i in this.validateForm.controls) {
      let formValue = this.validateForm.controls[i]
      formValue.markAsDirty();
      formValue.updateValueAndValidity();

      if (i === 'active_from' || i === 'active_to') {
        if (!formValue.value) {
          newData[i] = ''
        } else {
          newData[i] = new Date(formValue.value).toLocaleDateString('de-DE');
        }
      } else {
        newData[i] = formValue.value;
      }
    }
    
    if (!currentTab.regex.test(this.validateForm.controls['name'].value) || !currentTab.regex.test(this.validateForm.controls['description'].value)) {
      this.validateForm.controls['name'].setErrors({'incorrect': true});
    }

    if (this.validateForm.status === 'VALID') {
      newData.id = this.taxData.length + 1;
      newData.status = this.status;
      this.taxData.unshift(newData)
      this.isShowing = false
      this.reloadPage()
      this._opened = false;
    }
  }

  reloadPage(): void {
    setTimeout(() => {
      this.isShowing = true
    }, 50);
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  onTabClick($event: any) {
    this.activedTab = $event.tab.nzTitle
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

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      country: [null, [Validators.required]],
      code: [null, [Validators.required]],
      value: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null],
      active_from: [null],
      active_to: [null]
    });
  }
}
 

