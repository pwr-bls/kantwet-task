import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableVisualizationComponent } from './table-visualization/table-visualization.component';

const routes: Routes = [{
  path: '',
  component: TableVisualizationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableVisualizationRoutingModule { }
