import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-row',
  templateUrl: './select-row.component.html',
  styleUrls: ['./select-row.component.css']
})
export class SelectRowComponent implements OnInit {

  constructor() {
  }

  @Input() columns;
  @Input() rowData;
  @Input() selectedList;

  @Output() addEmitter = new EventEmitter();
  @Output() removeEmitter = new EventEmitter();

  ngOnInit(): void {
  }

  add() {
    this.addEmitter.emit(this.rowData);
  }

  remove() {
    this.removeEmitter.emit();
  }

}
