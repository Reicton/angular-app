import { Pipe } from "@angular/core";

@Pipe({
    name: 'moneyFormat'
})

export class moneyPipe {
    transform(val: number) {
        return '￥' + val.toLocaleString()
    }
}