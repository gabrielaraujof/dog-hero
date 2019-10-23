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
    <span dh-icon size="small" [name]="iconName" *ngIf="iconName"></span>
    <ng-content></ng-content>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  theme: 'primary' | 'secondary' | 'dark' | 'default' = 'default';

  @Input() iconName = '';

  @HostBinding('class.button--primary')
  get primaryClass() {
    return this.theme === 'primary';
  }

  @HostBinding('class.button--secondary')
  get secondaryClass() {
    return this.theme === 'secondary';
  }

  @HostBinding('class.button--dark')
  get darkClass() {
    return this.theme === 'dark';
  }
}
