import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AppURLSpec } from '../const/app.urlspec';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinraService {
  constructor(private httpClient: HttpClient, private apiService: ApiService, private utilityService: UtilityService) { }

  getEmployeeDetails(pageNo: string, pageSize: string): Observable<any>
    {
      const httpPathParams = new HttpParams()
                    .set('pageNo', pageNo)
                    .set('pageSize', pageSize);
      const path = this.utilityService.constructUrl(
        AppURLSpec.urls.getEmpDetails,
        httpPathParams
      );
      return this.apiService.get(path, environment.base_finra_api_url);
        // return this.httpClient.get('http://localhost:8082/api/yalostay/postaddetails/{pageNo}/{pageSize}');
    }
}
