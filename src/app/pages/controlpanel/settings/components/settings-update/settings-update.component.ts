import { Component, OnInit } from '@angular/core';
import { menuItems, taxData, Taxes, langOptions } from '../../../../../shared/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings-update',
  templateUrl: './settings-update.component.html',
  styleUrls: ['./settings-update.component.css']
})
export class SettingsUpdateComponent implements OnInit {

  activedTab = 'DE';
  _opened: boolean = false;
  validateForm!: FormGroup;
  isShowing: boolean = true;
  status: boolean = false;  
  tabs = langOptions;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  
  constructor(private fb: FormBuilder) { }

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
      // newData.id = this.taxData.length + 1;
      // newData.status = this.status;
      // this.taxData.unshift(newData)
      // this.isShowing = false
      // this.reloadPage()
      this._opened = false;
    }
  }

  onTabClick($event: any) {
    this.activedTab = $event.tab.nzTitle
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
