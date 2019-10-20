import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'dh-favorite, button[dh-favorite]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="22"
      viewBox="0 0 26 22"
    >
      <path
        stroke-linecap="round"
        stroke-width="2"
        d="M11.652 2.814C9.222.4 5.264.391 2.826 2.815a6.187 6.187 0 0 0 0 8.777l1.348 1.341 7.308 7.467c.773.79 2.028.804 2.817.02l7.527-7.487 1.349-1.34a6.187 6.187 0 0 0-.001-8.778c-2.438-2.424-6.397-2.416-8.826 0L13 4.154l-1.348-1.34z"
      />
    </svg>
  `,
  styleUrls: ['./favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent {
  @HostBinding('class.favorite--active')
  @Input()
  active = false;
}
