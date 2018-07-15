import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationModel } from '../../../../common/components/pagination/pagination.model';

@Injectable()
export class TableVisualizationServices {

  constructor(private http: HttpClient) { }

  public getList(payload?: { query?: string, pagination?: PaginationModel, sort?: {field: string, order: string} }) {
    let query = '';
    if (payload.query) {
      query = '?q=' + payload.query;
    }
    if (payload.pagination) {
      const { limit, current } = payload.pagination;
      query = (query ? query + '&' : '?') + `_limit=${limit}&_page=${current}`;
    }

    if (payload.sort && payload.sort.field) {
      const { field, order } = payload.sort;
      query = (query ? query + '&' : '?') + `_sort=${field}&_order=${order}`;
    }

    return this.http.get('http://localhost:3000/table' + query, { observe: 'response' });
  }
}
