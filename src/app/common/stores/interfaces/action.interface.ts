import { Action } from '@ngrx/store';

export interface IAction<P = any> extends Action {
    readonly type: string;
    readonly payload?: P;
}
