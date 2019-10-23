import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Host } from '@shared/models';

@Component({
  selector: 'section[dh-search], dh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  hostsHalves: Array<Observable<Host[]>>;

  constructor({ data }: ActivatedRoute) {
    const hosts$ = data.pipe(map(({ hosts }) => [hosts, hosts.length]));
    this.hostsHalves = [
      hosts$.pipe(map(([hosts, size]) => hosts.slice(Math.round(size / 2)))),
      hosts$.pipe(map(([hosts, size]) => hosts.slice(Math.round(size / 2)))),
    ];
  }
}
