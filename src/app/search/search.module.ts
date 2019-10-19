import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, HttpClientModule, SharedModule],
  providers: [SearchService],
})
export class SearchModule {}
