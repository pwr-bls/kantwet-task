import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphVisualizationRoutingModule } from './graph-visualization-routing.module';
import { GraphVisualizationComponent } from './graph-visualization/graph-visualization.component';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GraphVisualizationEffects } from './store/effects/graph-visualization.effects';
import * as graphStateReducer from './store/reducers/graph-visualization-state.reducer';
import { GraphVisualizationActions } from './store/actions/graph-visualization.action';
import { GraphVisualizationServices } from './store/services/graph-visualization.services';

@NgModule({
  imports: [
    CommonModule,
    GraphVisualizationRoutingModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('graphState', graphStateReducer.reducer),
    EffectsModule.forFeature([GraphVisualizationEffects])
  ],
  declarations: [GraphVisualizationComponent],
  providers: [GraphVisualizationActions, GraphVisualizationServices]
})
export class GraphVisualizationModule { }
