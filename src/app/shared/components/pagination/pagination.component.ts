import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'nav[dh-pagination], dh-pagination',
  template: `
    <ul class="pagination">
      <li>
        <button
          dh-button
          type="button"
          aria-label="Anterior"
          (click)="pageChange.emit(current - 1)"
          [disabled]="current === 1"
        >
          Anterior
        </button>
      </li>
      <li class="pagination-info">{{ current }} de {{ total }}</li>
      <li>
        <button
          dh-button
          type="button"
          aria-label="Próxima"
          (click)="pageChange.emit(current + 1)"
          [disabled]="current === total"
        >
          Próxima
        </button>
      </li>
    </ul>
  `,
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() current: number;
  @Input() total: number;
  @Output() pageChange = new EventEmitter<number>();
  @HostBinding('class.pagination-wrapper') pagination = true;
}
