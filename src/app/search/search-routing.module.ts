import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    resolve: {
      hosts: SearchService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
