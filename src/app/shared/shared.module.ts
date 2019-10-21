import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SpeechBubbleComponent } from './components/speech-bubble/speech-bubble.component';
import { ReviewComponent } from './components/review/review.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RatingComponent } from './components/rating/rating.component';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { HighlightItemComponent } from './components/highlight-item/highlight-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    FavoriteComponent,
    AvatarComponent,
    SpeechBubbleComponent,
    ReviewComponent,
    PricingComponent,
    RatingComponent,
    CurrencySymbolPipe,
    HighlightsComponent,
    HighlightItemComponent,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    FavoriteComponent,
    AvatarComponent,
    SpeechBubbleComponent,
    ReviewComponent,
    PricingComponent,
    RatingComponent,
    CurrencySymbolPipe,
    HighlightsComponent,
    HighlightItemComponent,
  ],
})
export class SharedModule {}
