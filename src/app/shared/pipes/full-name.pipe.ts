import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }

    const { nombre, apellido } = value;
    return `${nombre} ${apellido}`;
  }

}