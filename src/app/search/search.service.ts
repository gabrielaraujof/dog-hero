import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ISearchResult } from './search.model';
import { environment } from '@env';
import { IHost, highlightCompareFn } from '@shared/models/host.model';

@Injectable()
export class SearchService implements Resolve<IHost[]> {
  constructor(private httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IHost[] | null> {
    const params = route.queryParamMap.keys.map(
      k => `${k}=${route.queryParamMap[k]}`,
    );

    const { apiBaseUrl } = environment;
    return this.httpClient
      .get<ISearchResult>(`${apiBaseUrl}?${params.join('&')}`)
      .pipe(
        map(result => {
          return result.lists
            .map(host => {
              const highlights = [...host.highlights].sort(highlightCompareFn);
              return { ...host, highlights };
            })
            .slice(0, 10);
        }),
        catchError(() => of(null)),
      );
  }
}
