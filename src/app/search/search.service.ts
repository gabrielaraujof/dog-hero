import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Host } from '@shared/models';
import { environment } from '@env';
import { IHostSearchResult, IHostPage } from './search.model';

@Injectable()
export class SearchService implements Resolve<IHostPage[]> {
  constructor(private httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IHostPage[] | null> {
    const PAGE_SIZE = 10;
    const page = Number.parseInt(route.queryParamMap.get('page'), 10) || 1;
    const offset = PAGE_SIZE * (page - 1);

    const { apiBaseUrl } = environment;
    return this.httpClient
      .get<IHostSearchResult>(
        `${apiBaseUrl}?limit=${PAGE_SIZE}&offset${offset}`,
      )
      .pipe(
        map(results => {
          const hostList = results.lists;
          return {
            ...results,
            page,
            total_pages: Math.ceil(hostList.length / PAGE_SIZE),
            lists: hostList
              .slice(offset, offset + PAGE_SIZE)
              .map(raw => new Host(raw)),
          };
        }),
        catchError(() => of(null)),
      );
  }
}
