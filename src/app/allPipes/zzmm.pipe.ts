import { Pipe } from "@angular/core";

@Pipe({
    name: 'zzmmFormat'
})
export class zzmmPie {
    transform(val: number) {
        switch (val) {
            case 10: return '群众';
            case 20: return '团员';
            case 30: return '党员';
            default: return '啥也不是'
        }
    }
}