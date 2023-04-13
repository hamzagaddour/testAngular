import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : string[], search: string): string[] {
    return value.filter((v)=>v.toUpperCase().includes(search.toUpperCase()));
  }

}
