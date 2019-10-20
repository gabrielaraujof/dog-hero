import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dh-speech-bubble',
  template: `
    <p class="speech-bubble">
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./speech-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeechBubbleComponent {}
