import { createActionFactory } from '../../../../common/stores/helpers/action.factory';
import { IAction } from '../../../../common/stores/interfaces/action.interface';

export class TableVisualizationActions {
  public static load = createActionFactory('[APP] LOAD_TABLE_LIST');

  public static setPagination = '[APP] TABLE_LIST_SET_PAGINATION';
  public static setSort = '[APP] TABLE_LIST_SET_SORT';

  public get load() {
    return TableVisualizationActions.load;
  }

  public setPagination(payload): IAction {
    return {
      type: TableVisualizationActions.setPagination,
      payload
    };
  }

  public setSort(payload): IAction {
    return {
      type: TableVisualizationActions.setSort,
      payload
    };
  }
}

