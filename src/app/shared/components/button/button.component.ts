import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'dh-button, button[dh-button]',
  template: `
    <span dh-icon size="small" [src]="iconSrc" *ngIf="iconSrc"></span>
    <ng-content></ng-content>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  type: 'primary' | 'secondary' | 'dark' | 'default' = 'default';

  @Input() iconSrc = '';

  @HostBinding('class.button--primary')
  get primaryClass() {
    return this.type === 'primary';
  }

  @HostBinding('class.button--secondary')
  get secondaryClass() {
    return this.type === 'secondary';
  }

  @HostBinding('class.button--dark')
  get darkClass() {
    return this.type === 'dark';
  }
}