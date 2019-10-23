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
    const PAGE_SIZE = 10;
    const page = Number.parseInt(route.queryParamMap.get('page'), 10) || 1;
    const offset = PAGE_SIZE * (page - 1);

    const { apiBaseUrl } = environment;
    return this.httpClient
      .get<ISearchResult>(
        `${apiBaseUrl}?limit=${PAGE_SIZE}&offset${offset}`,
      )
      .pipe(
        map(({ lists }) => lists.slice(offset, offset + PAGE_SIZE)),
        map(rawHosts => rawHosts.map(raw => new Host(raw))),
        catchError(() => of(null)),
      );
  }
}
