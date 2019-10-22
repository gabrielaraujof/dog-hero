import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'dh-highlights',
  template: `
    <ul class="highlights">
      <ng-content></ng-content>
    </ul>
  `,
  styleUrls: ['./highlights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsComponent {
  @HostBinding('class.highlights-wrapper') highlightsClass = true;
}
