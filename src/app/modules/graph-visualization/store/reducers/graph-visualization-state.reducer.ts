import { IAction } from '../../../../common/stores/interfaces/action.interface';
import { GraphVisualizationActions } from '../actions/graph-visualization.action';

export interface IGraphVisualizationState {
    loading: boolean;
    failure: boolean;
    success: boolean;
    nodes: any[];
    edges: any[];
}

export const initialState: IGraphVisualizationState = {
    loading: false,
    failure: false,
    success: false,
    nodes: [],
    edges: []
};

export const reducer = (state: IGraphVisualizationState = initialState, action: IAction): IGraphVisualizationState => {
    switch (action.type) {
        case GraphVisualizationActions.load.types.INIT:
            return {
                ...initialState,
                loading: true,
                nodes: state.nodes,
                edges: state.edges
            };
        case GraphVisualizationActions.load.types.SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                nodes: action.payload.nodes,
                edges: action.payload.edges
            };

        default:
            return { ...state };
    }
};
