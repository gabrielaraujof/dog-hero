import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ISearchResult } from './search.model';
import { Host } from '@shared/models';
import { environment } from '@env';

@Injectable()
export class SearchService implements Resolve<Host[]> {
  constructor(private httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Host[] | null> {
    const params = route.queryParamMap.keys.map(
      k => `${k}=${route.queryParamMap[k]}`,
    );

    const { apiBaseUrl } = environment;
    return this.httpClient
      .get<ISearchResult>(`${apiBaseUrl}?${params.join('&')}`)
      .pipe(
        map(({ lists }) => lists.slice(0, 10)),
        map(rawHosts => rawHosts.map(raw => new Host(raw))),
        catchError(() => of(null)),
      );
  }
}
