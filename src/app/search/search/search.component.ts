import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPage, Host } from '@shared/models';
import { IHostPage } from '../search.model';

@Component({
  selector: 'section[dh-search], dh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  hostsHalves: Array<Observable<Host[]>>;
  results$: Observable<IHostPage>;

  constructor({ data }: ActivatedRoute) {
    const results$: Observable<IHostPage> = data.pipe(
      map(({ results }) => results),
    );
    const hosts$ = results$.pipe(
      map(({ lists }) => ({ lists, size: lists.length })),
    );
    this.hostsHalves = [
      hosts$.pipe(map(({ lists, size }) => lists.slice(Math.round(size / 2)))),
      hosts$.pipe(map(({ lists, size }) => lists.slice(Math.round(size / 2)))),
    ];
  }
}
