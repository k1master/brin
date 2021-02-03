import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Taxes, langOptions } from '../../../../../shared/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-settings-update',
  templateUrl: './settings-update.component.html',
  styleUrls: ['./settings-update.component.css']
})
export class SettingsUpdateComponent implements OnInit {
  @Input() taxData!: any[];
  @Output() onToggleSidebar: EventEmitter<boolean> = new EventEmitter();
  @Output() onSubmit: EventEmitter<Taxes> = new EventEmitter();

  activedTab = 'DE';
  validateForm!: FormGroup;
  status: boolean = false;  
  tabs = langOptions;
  
  constructor(private fb: FormBuilder) { }
  
  onCloseSidebar() {
    this.initFormData();
    this.onToggleSidebar.emit();
  }

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
  
      this.onSubmit.emit(newData)
      this.onCloseSidebar();
    }
  }

  onTabClick($event: any) {
    this.activedTab = $event.tab.nzTitle
  }

  initFormData() {
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

  ngOnInit(): void {
    this.initFormData();
  }
}
