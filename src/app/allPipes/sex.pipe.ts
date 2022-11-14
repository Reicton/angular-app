import { Pipe } from "@angular/core";

@Pipe({
    name: 'sexFormat'  //过滤器名/管道名
})
/**@Interface
 * 其实angular内部已经定义了一个接口用来限制类必须提供transform方法
 * Interface XXX {
 *  transform():void;
 * }
 */
export class sexPipe {
    //管道中执行过滤任务的是一个固定的函数
    transform(oldValue: number, lang: any = 'zh') {
        if (lang == 'zh') {
            if (oldValue == 1) {
                return '男'
            } else if (oldValue == 0) {
                return '女'
            }
            else {
                return '人妖'
            }
        } else if (lang == 'en') {
            if (oldValue == 1) {
                return 'Male'
            } else if (oldValue == 0) {
                return 'Female'
            }
            else {
                return 'unknown'
            }
        } else {
            return ''
        }
    }
}