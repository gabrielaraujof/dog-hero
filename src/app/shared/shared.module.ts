import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    FavoriteComponent,
    AvatarComponent,
  ],
  exports: [ButtonComponent, IconComponent, FavoriteComponent, AvatarComponent],
})
export class SharedModule {}
