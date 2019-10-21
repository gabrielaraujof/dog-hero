import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { HighlightType } from '@shared/models/host.model';

@Component({
  selector: 'li[dh-highlight-item], dh-highlight-item',
  template: `
    <span dh-icon [src]="sourceIcon" size="small"></span>
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
  @Input() name: HighlightType;
  @Input() value: string | null;

  get sourceIcon() {
    switch (this.name) {
      case 'loyal_customers':
        return 'images/repeat-guests.svg';
      case 'room_type':
        // Based on the value, we could return different images
        return 'images/flat.svg';
      case 'only_one_guest':
      case 'supervision':
      default:
        return 'images/exclusive.svg';
    }
  }
}
