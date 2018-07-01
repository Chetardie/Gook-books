import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuotesListComponent } from './quotes-list.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    QuotesListComponent,
    QuoteItemComponent
  ]
})
export class QuotesModule { }
