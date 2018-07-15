import { TableVisualizationModule } from './table-visualization.module';

describe('TableVisualizationModule', () => {
  let tableVisualizationModule: TableVisualizationModule;

  beforeEach(() => {
    tableVisualizationModule = new TableVisualizationModule();
  });

  it('should create an instance', () => {
    expect(tableVisualizationModule).toBeTruthy();
  });
});
