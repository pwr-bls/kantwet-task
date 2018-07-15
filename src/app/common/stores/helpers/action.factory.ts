import { IAction } from '../interfaces/action.interface';

export const createActionFactory = (name) => {
    const types = {
        INIT: `${name}_INIT`,
        FAILURE: `${name}_FAILURE`,
        SUCCESS: `${name}_SUCCESS`
    };
    return {
        types,
        init: (payload?): IAction => ({
            type: types.INIT,
            payload
        }),

        failure: (payload): IAction => ({
            type: types.FAILURE,
            payload
        }),

        success: (payload): IAction => ({
            type: types.SUCCESS,
            payload
        })
    };
};
