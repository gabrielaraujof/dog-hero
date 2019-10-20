import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'dh-rating',
  template: `
    <ng-container *ngIf="average">
      <ng-container
        *ngTemplateOutlet="ratingStarTemplate; context: { $implicit: 1 }"
      ></ng-container>
      <ng-container
        *ngTemplateOutlet="ratingStarTemplate; context: { $implicit: 2 }"
      ></ng-container>
      <ng-container
        *ngTemplateOutlet="ratingStarTemplate; context: { $implicit: 3 }"
      ></ng-container>
      <ng-container
        *ngTemplateOutlet="ratingStarTemplate; context: { $implicit: 4 }"
      ></ng-container>
      <ng-container
        *ngTemplateOutlet="ratingStarTemplate; context: { $implicit: 5 }"
      ></ng-container>
      <span class="count">({{ reviewsCount }})</span>
    </ng-container>

    <ng-template #ratingStarTemplate let-index>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        class="star"
        [class.star--active]="index <= average"
      >
        <path
          d="M7.952 21.433c-1.042.694-1.955.906-2.718.324-.746-.569-.812-1.49-.461-2.674l1.411-4.509-3.894-2.872c-1.007-.744-1.515-1.52-1.212-2.429.3-.902 1.163-1.225 2.369-1.225l4.958-.119 1.614-4.449c.24-.678.555-1.189.99-1.522.6-.458 1.335-.48 1.951-.045.464.327.785.859 1.02 1.566l1.576 4.45 4.973.119c1.23 0 2.092.323 2.393 1.225.303.91-.205 1.685-1.213 2.43l-3.898 2.875 1.365 4.488c.394 1.181.34 2.13-.45 2.704-.777.565-1.69.35-2.683-.341L12 18.694l-4.048 2.739z"
        />
      </svg>
    </ng-template>
  `,
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  private value: number;

  @HostBinding('class.rating') ratingClass = true;

  @Input() reviewsCount: number;

  @Input()
  set average(value: number) {
    this.value = Math.round(value);
  }

  get average() {
    return this.value;
  }
}
