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
    const hosts$ = data.pipe(map(({ hosts }) => hosts));
    this.hostsHalves = [
      hosts$.pipe(map(hosts => hosts.slice(0, 5))),
      hosts$.pipe(map(hosts => hosts.slice(5))),
    ];
  }
}
