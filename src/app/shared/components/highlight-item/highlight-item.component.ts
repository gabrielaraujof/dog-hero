import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';
import { HighlightType } from '@shared/models/host.model';

@Component({
  selector: 'li[dh-highlight-item], dh-highlight-item',
  template: `
    <span dh-icon [name]="iconName" size="small"></span>
    <ng-container [ngSwitch]="name">
      <span *ngSwitchCase="'room_type'"
        >{value, select, Apartment {Apê} house {Casa}}</span
      >
      <span *ngSwitchCase="'loyal_customers'">{{ value }} Clientes fiéis</span>
      <span *ngSwitchCase="'supervision'">Supervisão 24h</span>
      <span *ngSwitchCase="'only_one_guest'">Um cliente por vez</span>
    </ng-container>
  `,
  styleUrls: ['./highlight-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightItemComponent {
  @HostBinding('class.highlight-item') highlightItemClass = true;

  @Input() name: HighlightType;
  @Input() value: string | null;

  get iconName() {
    switch (this.name) {
      case 'loyal_customers':
        return 'repeat-guests';
      case 'room_type':
        // Based on the value, we could return different images
        return 'flat';
      case 'only_one_guest':
      case 'supervision':
      default:
        return 'exclusive';
    }
  }
}
