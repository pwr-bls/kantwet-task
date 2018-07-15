import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

const routes: Routes = <Route[]>[
  {
    path: '',
    redirectTo: 'printer',
    pathMatch: 'full'
  },
  {
    path: 'graph',
    loadChildren: './modules/graph-visualization/graph-visualization.module#GraphVisualizationModule'
  },
  {
    path: 'table',
    loadChildren: './modules/table-visualization/table-visualization.module#TableVisualizationModule'
  },
  {
    path: 'printer',
    loadChildren: './modules/pretty-printer/pretty-printer.module#PrettyPrinterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
