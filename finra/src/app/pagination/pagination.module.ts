import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { FinraService } from '../shared/service/finra.service';
import { ValidateNumberComponent } from './validate-number/validate-number.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginationComponent, ValidateNumberComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FinraService]
})
export class PaginationModule { }
