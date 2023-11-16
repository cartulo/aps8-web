import {Pipe} from '@angular/core';

@Pipe({name: 'arrayFormat'})
export class ArrayFormatPipe {
    transform(value: string[]): string {
        return value.join(', ').toUpperCase();
    }
}
