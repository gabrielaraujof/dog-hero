import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'dh-icon, span[dh-icon]',
  template: ``,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() src = '';

  @Input() size: 'medium' | 'small' | 'large' = 'medium';

  @HostBinding('style.background-image')
  get image() {
    return this.src && `url('/assets/${this.src}')`;
  }

  @HostBinding('style.width')
  @HostBinding('style.height')
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
}
