import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'moneyFormat'
})

export class moneyPipe implements PipeTransform {
    transform(val: number) {
        return '￥' + val.toLocaleString()
    }
}