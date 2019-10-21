import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'dh-icon, span[dh-icon]',
  template: `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      [attr.width]="sideSize"
      [attr.height]="sideSize"
    >
      <use [attr.xlink:href]="href"></use>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @HostBinding('class.icon') iconClass = true;

  @Input() name;
  @Input() size: 'medium' | 'small' | 'large' = 'medium';

  get sideSize() {
    switch (this.size) {
      case 'large':
        return '4.5rem';
      case 'small':
        return '1.5rem';
      case 'medium':
      default:
        return '3rem';
    }
  }

  get href() {
    return `#dh-icon-${this.name}`;
  }
}
