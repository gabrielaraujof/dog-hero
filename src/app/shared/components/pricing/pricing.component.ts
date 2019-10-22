import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dh-pricing',
  template: `
    <span class="pricing-display">
      <span class="pricing-currency">{{ currenyCode | currencySymbol }}</span>
      <span class="pricing-value">{{ value }}</span>
    </span>
    <span class="pricing-info">p/ noite</span>
  `,
  styleUrls: ['./pricing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  @Input() currenyCode: string;
  @Input() value: number;
}
