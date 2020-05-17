import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [
  { path: '',  redirectTo: 'pagination', pathMatch: 'full' },
  { path: 'pagination', component: PaginationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
