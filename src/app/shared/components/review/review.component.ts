import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'dh-review, article[dh-review]',
  template: `
    <dh-speech-bubble>
      <ng-content></ng-content>
    </dh-speech-bubble>
    <dh-avatar
      [src]="this.avatarUrl"
      [alt]="this.name"
      size="small"
    ></dh-avatar>
  `,
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  @Input() name = '';
  @Input() avatarUrl = '';
}
