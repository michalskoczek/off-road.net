import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, option: string, events: Event[]): any {
    if (!value) {
      return;
    } else {
      return value.filter((element) => {
        if (element.type === option) {
          return element;
        }
      });
    }
  }
}
