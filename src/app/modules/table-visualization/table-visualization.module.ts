import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TableVisualizationRoutingModule } from './table-visualization-routing.module';
import { TableVisualizationComponent } from './table-visualization/table-visualization.component';
import { PaginationComponent } from '../../common/components/pagination/pagination.component';
import { DataGridComponent } from '../../common/components/data-grid/data-grid.component';
import { SearchFieldComponent } from '../../components/search-field/search-field.component';
import { TableVisualizationServices } from './store/services/table-visualization.services';
import { TableVisualizationActions } from './store/actions/table-visualization.action';
import { TableVisualizatinEffects } from './store/effects/table-visualization.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as tableStateReducer from './store/reducers/table-visualization-state.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableVisualizationRoutingModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('tableState', tableStateReducer.reducer),
    EffectsModule.forFeature([TableVisualizatinEffects])
    ],
  declarations: [TableVisualizationComponent, DataGridComponent, PaginationComponent, SearchFieldComponent],
  providers: [TableVisualizationServices, TableVisualizationActions],
})

export class TableVisualizationModule { }
