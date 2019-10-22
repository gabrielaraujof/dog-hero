import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'dh-favorite, button[dh-favorite]',
  template: `
    <dh-icon name="favorite" size="small"></dh-icon>
  `,
  styleUrls: ['./favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent {
  @HostBinding('class.favorite') favoriteClass = true;

  @HostBinding('class.favorite--active')
  @Input()
  active = false;
}
