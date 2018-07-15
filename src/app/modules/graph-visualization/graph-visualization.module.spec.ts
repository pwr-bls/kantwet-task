import { GraphVisualizationModule } from './graph-visualization.module';

describe('GraphVisualizationModule', () => {
  let graphVisualizationModule: GraphVisualizationModule;

  beforeEach(() => {
    graphVisualizationModule = new GraphVisualizationModule();
  });

  it('should create an instance', () => {
    expect(graphVisualizationModule).toBeTruthy();
  });
});
