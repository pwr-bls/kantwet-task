import { TestBed, inject } from '@angular/core/testing';

import { GraphVisualizationServices } from './graph-visualization.services';

describe('GraphVisualizationServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphVisualizationServices]
    });
  });

  it('should be created', inject([GraphVisualizationServices], (service: GraphVisualizationServices) => {
    expect(service).toBeTruthy();
  }));
});
