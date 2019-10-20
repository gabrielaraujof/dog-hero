import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, IconComponent, FavoriteComponent],
  exports: [ButtonComponent, IconComponent, FavoriteComponent],
})
export class SharedModule {}
