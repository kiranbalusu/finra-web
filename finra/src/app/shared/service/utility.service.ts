import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  constructUrl(path: string, params: HttpParams): string {
    let keySet: string[] = params.keys();
    for (let i in keySet) {
      path = path.replace('{'.concat(keySet[i], '}'), params.get(keySet[i]));
    }
    return path;
  }
}
