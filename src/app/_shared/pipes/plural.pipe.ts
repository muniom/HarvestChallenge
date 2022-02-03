import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'plural' })
export class PluralPipe implements PipeTransform {
    transform(count: number, singular: string, plural: string): string {
        return count + ' ' + (count === 1 ? singular : plural);
    }
}
