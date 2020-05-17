import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FinraService } from '../shared/service/finra.service';
import { EmployeeDetailVO } from '../shared/model/EmployeeDetailVO';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDataVO } from '../shared/model/EmployeeDataVO';
import { tap } from 'rxjs/operators';
import { FinraDataSource } from '../shared/dataservice';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit, AfterViewInit {
  employeeDataVO: EmployeeDataVO;
  finraDataSource: FinraDataSource;
  public array: any;
  employeeDetailVO: any;
  displayedColumns: string[] = [
    'empId',
    'firstName',
    'lastName',
    'jobTitle',
    'email',
    'departmentName',
    'location',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public finraService: FinraService) { }

  ngOnInit(): void {
    this.finraDataSource = new FinraDataSource(this.finraService);
    this.finraDataSource.loadTodos();
  }

  ngAfterViewInit() {
    this.finraDataSource.counter$
      .pipe(
        tap((count) => {
          this.paginator.length = count;
        })
      )
      .subscribe();
    this.paginator.page
      .pipe(
        tap(() => this.loadTodos())
      )
      .subscribe();
  }
  loadTodos() {
    this.finraDataSource.loadTodos(this.paginator.pageIndex, this.paginator.pageSize);
  }

}
