import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPage, Host } from '@shared/models';
import { IHostPage } from '../search.model';

@Component({
  selector: 'section[dh-search], dh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  hostsHalves: Array<Observable<Host[]>>;
  currentPage$: Observable<number>;
  totalPages$: Observable<number>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const results$: Observable<IHostPage> = this.route.data.pipe(
      map(({ results }) => results),
    );
    const hosts$ = results$.pipe(
      map(({ lists }) => ({ lists, size: lists.length })),
    );
    this.hostsHalves = [
      hosts$.pipe(map(({ lists, size }) => lists.slice(Math.round(size / 2)))),
      hosts$.pipe(map(({ lists, size }) => lists.slice(Math.round(size / 2)))),
    ];

    this.currentPage$ = results$.pipe(map(result => result.page));
    this.totalPages$ = results$.pipe(map(result => result.total_pages));
  }

  onPageChange(page: number): void {
    this.router.navigate([], {
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }
}
