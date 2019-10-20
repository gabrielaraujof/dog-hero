import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'dh-avatar',
  template: `
    <img [src]="this.sourceFile" [alt]="this.alt" />
    <span
      *ngIf="!this.smallSize && this.superhero"
      dh-icon
      src="images/hero-badge.svg"
      size="small"
    ></span>
  `,
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() size: 'medium' | 'small' = 'medium';

  @HostBinding('class.avatar') avatarClass = true;

  @HostBinding('class.avatar--superhero')
  @Input()
  superhero = false;

  @HostBinding('class.avatar--small')
  get smallSize() {
    return this.size === 'small';
  }

  get sourceFile() {
    const sideSize = this.size === 'medium' ? 64 : 32;
    return `${this.src}?w=${sideSize}&h=${sideSize}`;
  }
}
