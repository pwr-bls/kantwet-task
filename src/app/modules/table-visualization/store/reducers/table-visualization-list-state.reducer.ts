import { IAction } from '../../../../common/stores/interfaces/action.interface';
import { TableVisualizationActions } from '../actions/table-visualization.action';

export interface ITableVisualizationListState {
    loading: boolean;
    failure: boolean;
    success: boolean;
    entites: any[];
    sort: { field: string, order: string };
    pagination: {
        current: number,
        limit: number,
        total: number
    };
}

export const initialState: ITableVisualizationListState = {
    loading: false,
    failure: false,
    success: false,
    entites: [],
    sort: { field: null, order: null },
    pagination: {
        current: 1,
        limit: 10,
        total: 10
    }
};

export const reducer = (state: ITableVisualizationListState = initialState, action: IAction): ITableVisualizationListState => {
    switch (action.type) {
        case TableVisualizationActions.load.types.INIT:
            return {
                ...initialState,
                loading: true,
                entites: state.entites,
                pagination: state.pagination,
                sort: state.sort
            };
        case TableVisualizationActions.load.types.SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                entites: action.payload
            };

        case TableVisualizationActions.setPagination:
            const { current, limit, total } = action.payload;
            return {
                ...state,
                pagination: {
                    current: current || state.pagination.current,
                    limit: limit || state.pagination.limit,
                    total: (total || total === 0) ? total : state.pagination.total
                }
            };

        case TableVisualizationActions.setSort:
            return {
                ...state,
                sort: action.payload
            };
        default:
            return { ...state };
    }
};
