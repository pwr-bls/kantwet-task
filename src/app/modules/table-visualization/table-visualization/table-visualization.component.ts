import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { DataGridColumnModel } from '../../../common/components/data-grid/data-grid-column.model';
import { Store } from '@ngrx/store';
import { TableVisualizationActions } from '../store/actions/table-visualization.action';
import { getTableList, getTableListPagination, getTableListSort } from '../store/selectors/table-visualization-state.selector';

@Component({
  selector: 'sl-table-visualization',
  templateUrl: './table-visualization.component.html',
  styleUrls: ['./table-visualization.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableVisualizationComponent implements OnInit {
  public data$: Observable<any[]>;
  public pagination$: Observable<any>;
  public sort$: Observable<any>;
  public searchQuery: string = null;

  public columns: DataGridColumnModel[] = [];

  constructor(private store: Store<any>, private actions: TableVisualizationActions) {
  }

  ngOnInit() {
    this.data$ = this.store.select(getTableList);
    this.pagination$ = this.store.select(getTableListPagination);
    this.sort$ = this.store.select(getTableListSort);
    this.initColumns();
    this.store.dispatch(this.actions.load.init());
  }

  initColumns() {
    this.columns = <DataGridColumnModel[]>[{
      header: '#',
      field: 'id',
      styleClass: 'th'
    }, {
      header: 'Name',
      field: 'name',
      sortable: true
    }, {
      header: 'Company',
      field: 'company',
      sortable: true
    }, {
      header: 'Age',
      field: 'age',
      sortable: true
    }, {
      header: 'Email',
      field: 'email',
      sortable: true
    }, {
      header: 'Account Balance',
      field: 'accountBalance',
      sortable: true
    }];
  }

  public handleSearchChange(value: string) {
    this.searchQuery = value;
    this.store.dispatch(this.actions.setPagination({ current: 1 }));
    this.store.dispatch(this.actions.load.init({ query: value }));
  }

  public handlePageChange(page) {
    this.store.dispatch(this.actions.setPagination({ current: page }));
    this.store.dispatch(this.actions.load.init({ query: this.searchQuery }));
  }

  public handleSortChange(sort) {
    this.store.dispatch(this.actions.setSort(sort));
    this.store.dispatch(this.actions.load.init({ query: this.searchQuery }));
  }

}
