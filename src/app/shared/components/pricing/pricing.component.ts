import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dh-pricing',
  template: `
    <span class="pricing-display">
      <span class="pricing-currency">R$</span>
      <span class="pricing-value">{{ value }}</span>
    </span>
    <span class="pricing-info">p/ noite</span>
  `,
  styleUrls: ['./pricing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  @Input() value: number;
}
