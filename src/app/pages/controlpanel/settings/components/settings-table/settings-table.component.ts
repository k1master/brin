import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-settings-table',
  templateUrl: './settings-table.component.html',
  styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {
  @Input() taxData!: any[];
  @Output() onRemove: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  onRemoveRow(id: number) {
    this.onRemove.emit(id);
  }

  ngOnInit(): void {
  }
}
