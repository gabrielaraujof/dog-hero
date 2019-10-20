import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ISearchResult } from '../search.model';
import { IHost } from '@shared/models/host.model';

@Component({
  selector: 'section[dh-search], dh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  hosts: Observable<IHost[]>;

  constructor({ data }: ActivatedRoute) {
    this.hosts = data.pipe(map(({ searchResults: { lists } }) => lists));
  }
}
