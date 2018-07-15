import { createSelector } from '@ngrx/store';
import { IGraphVisualizationState } from '../reducers/graph-visualization-state.reducer';

export const getGraphVisualizationState = (state: any) => state.graphState || {};
export const getGraphNodes = createSelector(
    getGraphVisualizationState,
    (state: IGraphVisualizationState): any[] => {
        return state.nodes || [];
    });

export const getGraphEdges = createSelector(
    getGraphVisualizationState,
    (state: IGraphVisualizationState): any[] => {
        return state.edges || [] as any[];
    });
