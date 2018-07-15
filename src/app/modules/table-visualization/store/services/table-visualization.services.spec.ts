import { TestBed, inject } from '@angular/core/testing';

import { TableVisualizationServices } from './table-visualization.services';

describe('TableVisualizationServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableVisualizationServices]
    });
  });

  it('should be created', inject([TableVisualizationServices], (service: TableVisualizationServices) => {
    expect(service).toBeTruthy();
  }));
});
