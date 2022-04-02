import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrayValues: any[], textToSearch: string = '', column: string = 'title'): any[] {
    if (textToSearch === '' || textToSearch === 'all') {
      return arrayValues;
    }
    if (!arrayValues) {
      return arrayValues;
    }
    textToSearch = textToSearch.toLowerCase();
    console.log('transform() - text to search: ', textToSearch);
    return arrayValues.filter(
      item => item[column].toLowerCase().includes(textToSearch)
    );
  }

}
