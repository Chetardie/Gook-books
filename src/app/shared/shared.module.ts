import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [],
  exports: [
    CommonModule,
    FilterPipe
  ]
})
export class SharedModule {

}
