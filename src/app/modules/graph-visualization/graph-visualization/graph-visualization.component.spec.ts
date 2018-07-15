import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphVisualizationComponent } from './graph-visualization.component';

describe('GraphVisualizationComponent', () => {
  let component: GraphVisualizationComponent;
  let fixture: ComponentFixture<GraphVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
