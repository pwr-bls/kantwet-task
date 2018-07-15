import { createSelector } from '@ngrx/store';
import { ITableVisualizationState } from '../reducers/table-visualization-state.reducer';
import { ITableVisualizationListState } from '../reducers/table-visualization-list-state.reducer';

export const getTableVisualizationState = (state: any) => state.tableState || {};
export const getTableVisualizationListState = createSelector(
    getTableVisualizationState,
    (state: ITableVisualizationState): ITableVisualizationListState => {
        return state.tableVizualizationListState || {} as ITableVisualizationListState;
    });

export const getTableList = createSelector(
    getTableVisualizationListState,
    (state: ITableVisualizationListState): any[] => {
        return state.entites || [] as any[];
    }
);

export const getTableListPagination = createSelector(
    getTableVisualizationListState,
    (state: ITableVisualizationListState) => {
        return state.pagination || {};
    }
);

export const getTableListSort = createSelector(
    getTableVisualizationListState,
    (state: ITableVisualizationListState) => {
        return state.sort || {};
    }
);
