import { createActionFactory } from '../../../../common/stores/helpers/action.factory';
import { IAction } from '../../../../common/stores/interfaces/action.interface';

export class GraphVisualizationActions {
  public static load = createActionFactory('[APP] LOAD_GRAPH');

  public get load() {
    return GraphVisualizationActions.load;
  }
}

