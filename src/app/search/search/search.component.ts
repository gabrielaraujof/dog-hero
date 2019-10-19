import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ISearchResult } from '../search.model';

@Component({
  selector: 'dh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  results: Observable<ISearchResult>;

  constructor({ data }: ActivatedRoute) {
    this.results = data.pipe(map(({ searchResults }) => searchResults));
  }
}
