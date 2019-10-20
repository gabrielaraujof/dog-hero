import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SpeechBubbleComponent } from './components/speech-bubble/speech-bubble.component';
import { ReviewComponent } from './components/review/review.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';

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
    CurrencySymbolPipe,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    FavoriteComponent,
    AvatarComponent,
    SpeechBubbleComponent,
    ReviewComponent,
    PricingComponent,
    CurrencySymbolPipe,
  ],
})
export class SharedModule {}
