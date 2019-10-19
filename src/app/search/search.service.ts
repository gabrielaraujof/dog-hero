import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ISearchResult } from './search.model';
import { environment } from '@env';

@Injectable()
export class SearchService implements Resolve<ISearchResult> {
  constructor(private httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISearchResult | null> {
    const params = route.queryParamMap.keys.map(
      k => `${k}=${route.queryParamMap[k]}`,
    );

    const { apiBaseUrl } = environment;
    return this.httpClient
      .get<ISearchResult>(`${apiBaseUrl}?${params.join('&')}`)
      .pipe(catchError(() => of(null)));
  }
}
