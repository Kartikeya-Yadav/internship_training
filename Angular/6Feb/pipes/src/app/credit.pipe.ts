import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'credit',
    standalone: false
})

export class CreditPipe implements PipeTransform{
    transform(value: any) {
        return '****-****-' + String(value).slice(-4);
    }
}