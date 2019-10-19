import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'dh-button, button[dh-button]',
  template: `
    <span>
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  type: 'primary' | 'secondary' | 'dark' | 'default' = 'default';

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
