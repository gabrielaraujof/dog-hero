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
  hosts: Observable<Host[]>;

  constructor({ data }: ActivatedRoute) {
    this.hosts = data.pipe(map(({ hosts }) => hosts));
  }
}
