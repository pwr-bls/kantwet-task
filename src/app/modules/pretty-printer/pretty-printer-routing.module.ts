import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrettyPrinterComponent } from './pretty-printer/pretty-printer.component';

const routes: Routes = [{
  path: '',
  component: PrettyPrinterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrettyPrinterRoutingModule { }
