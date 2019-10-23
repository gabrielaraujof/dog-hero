import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav[dh-pagination], dh-pagination',
  template: `
    <ul>
      <li>
        <button
          type="button"
          aria-label="Anterior"
          (click)="pageChange.emit(current - 1)"
          [disabled]="current === 1"
        ></button>
      </li>
      <li>{{ current }} de {{ total }}</li>
      <li>
        <button
          type="button"
          aria-label="Próxima"
          (click)="pageChange.emit(current + 1)"
          [disabled]="current === total"
        ></button>
      </li>
    </ul>
  `,
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() current: number;
  @Input() total: number;
  @Output() pageChange = new EventEmitter<number>();
}
