import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../books/models/book.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Book[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.title.toLowerCase().includes(searchText)
          || `${item.author.firstName} ${item.author.lastName}`.toLowerCase().includes(searchText);
    });
  }
}
