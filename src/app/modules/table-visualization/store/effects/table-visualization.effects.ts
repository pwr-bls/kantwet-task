import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TableVisualizationActions } from '../actions/table-visualization.action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TableVisualizationServices } from '../services/table-visualization.services';
import { IAction } from '../../../../common/stores/interfaces/action.interface';
import { PaginationModel } from '../../../../common/components/pagination/pagination.model';
import { getTableListPagination, getTableListSort, getTableVisualizationListState } from '../selectors/table-visualization-state.selector';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import { ITableVisualizationListState } from '../reducers/table-visualization-list-state.reducer';


@Injectable()
export class TableVisualizatinEffects {
    constructor(
        private actions$: Actions,
        private actions: TableVisualizationActions,
        private services: TableVisualizationServices,
        private router: Router,
        private store: Store<any>
    ) { }

    @Effect() load$ = this.actions$
        .ofType(TableVisualizationActions.load.types.INIT)
        .withLatestFrom(this.store.select(getTableVisualizationListState))
        .switchMap(([{ payload }, { pagination, sort }]: [IAction, ITableVisualizationListState]) =>
            this.services.getList({ ...payload, pagination, sort })
                .mergeMap((response) => {
                    return [
                        this.actions.load.success(response.body),
                        this.actions.setPagination({
                            ...pagination,
                            total: parseInt(response.headers.get('X-Total-Count'), 10)
                        })
                    ];
                }))
        .catch(() => Observable.of({ type: 'load$' }));
}
