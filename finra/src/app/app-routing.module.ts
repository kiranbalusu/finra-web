
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { ValidateNumberComponent } from './pagination/validate-number/validate-number.component';


const routes: Routes = [
  { path: '',  redirectTo: 'pagination', pathMatch: 'full' },
  { path: 'pagination', component: PaginationComponent},
  { path: 'validate-number', component: ValidateNumberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
