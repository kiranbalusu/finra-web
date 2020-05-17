import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { FinraService } from '../shared/service/finra.service';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    MatTableModule,
  ],
  providers: [FinraService]
})
export class PaginationModule { }
