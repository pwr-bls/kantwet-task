import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphVisualizationComponent } from './graph-visualization/graph-visualization.component';

const routes: Routes = [{
  path: '',
  component: GraphVisualizationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphVisualizationRoutingModule { }
