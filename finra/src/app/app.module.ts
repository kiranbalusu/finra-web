import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/service/api.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { UtilityService } from './shared/service/utility.service';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [HttpClientModule, ApiService, ToastrService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
