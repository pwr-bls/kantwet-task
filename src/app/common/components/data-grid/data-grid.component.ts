import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataGridColumnModel } from './data-grid-column.model';
import { PaginationModel } from '../pagination/pagination.model';

@Component({
  selector: 'sl-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataGridComponent {
  @Input() public columns: DataGridColumnModel[] = [];
  @Input() public actions = false;
  @Input() public value: any[] = [];
  @Input() public paginator = false;
  @Input() public pagination: PaginationModel = new PaginationModel();
  @Input() public rows: number = null;
  @Input() public totalRecords: number = null;
  @Input() public sortField: string = null;
  @Input() public sortOrder: string = null;
  @Output() public remove = new EventEmitter();
  @Output() public edit = new EventEmitter();
  @Output() public changePage = new EventEmitter();
  @Output() public sort = new EventEmitter();

  constructor() { }

  public handleEdit(event) {
    this.edit.emit(event);
  }

  public handleRemove(event) {
    this.remove.emit(event);
  }

  public handlePageChange(event) {
    console.log(event);
    this.changePage.emit(event);
  }

  public changeSort(column: DataGridColumnModel) {
    this.sortField = column.field;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';

    this.sort.emit({field: this.sortField, order: this.sortOrder});

  }

  public isSort(column: DataGridColumnModel) {
    if (this.sortField !== column.field) {
      return null;
    }
    if (this.sortOrder === 'asc') {
      return true;
    }
    return false;

  }
}
