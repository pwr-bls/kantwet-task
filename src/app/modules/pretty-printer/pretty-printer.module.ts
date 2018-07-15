import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrettyPrinterRoutingModule } from './pretty-printer-routing.module';
import { PrettyPrinterComponent } from './pretty-printer/pretty-printer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrettyPrinterRoutingModule
  ],
  declarations: [PrettyPrinterComponent]
})
export class PrettyPrinterModule { }
