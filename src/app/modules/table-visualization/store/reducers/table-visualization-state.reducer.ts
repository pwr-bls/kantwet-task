import { ActionReducer, combineReducers } from '@ngrx/store';
import * as tableListStateReducer from './table-visualization-list-state.reducer';
const reducers = {
    tableVizualizationListState: tableListStateReducer.reducer
};

export interface ITableVisualizationState {
    tableVizualizationListState;
}

export const reducer: ActionReducer<ITableVisualizationState> = combineReducers(reducers);
