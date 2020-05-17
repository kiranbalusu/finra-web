import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { EmployeeDetailVO } from './model/EmployeeDetailVO';
import { FinraService } from './service/finra.service';
import { EmployeeDataVO } from './model/EmployeeDataVO';
export class FinraDataSource implements DataSource<EmployeeDetailVO>{
    private todoSubject = new BehaviorSubject<EmployeeDetailVO[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();
    constructor(public finraService: FinraService) { }
    connect(collectionViewer: CollectionViewer): Observable<EmployeeDetailVO[]> {
        return this.todoSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.todoSubject.complete();
        this.loadingSubject.complete();
        this.countSubject.complete();
    }
    loadTodos(pageNumber = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.finraService.getEmployeeDetails(pageNumber.toString(), pageSize.toString())
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((result: EmployeeDataVO) => {
                this.todoSubject.next(result.employeeDetailVO);
                this.countSubject.next(result.totalCount);
            }
            );
    }
}
