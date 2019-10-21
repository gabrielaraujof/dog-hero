import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ul[dh-highlights], dh-highlights',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        margin: 0.5em 0;
        padding: 0.5em 0;
        overflow-x: auto;
        list-style-type: none;
        white-space: nowrap;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsComponent {}
