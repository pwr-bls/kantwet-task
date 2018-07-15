import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { GraphVisualizationActions } from '../actions/graph-visualization.action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GraphVisualizationServices } from '../services/graph-visualization.services';
import { IAction } from '../../../../common/stores/interfaces/action.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class GraphVisualizationEffects {
    constructor(
        private actions$: Actions,
        private actions: GraphVisualizationActions,
        private services: GraphVisualizationServices,
        private router: Router,
        private store: Store<any>
    ) { }

    @Effect() load$ = this.actions$
        .ofType(GraphVisualizationActions.load.types.INIT)
        .switchMap(({ payload }: IAction) =>
            this.services.getList()
                .mergeMap((response) => {
                    return [
                        this.actions.load.success(response.body)
                    ];
                }))
        .catch(() => Observable.of({ type: 'load$' }));
}
