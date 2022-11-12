import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appXuYaoQiangDiao]'
})
export class XuYaoQiangDiaoDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.background = 'red';  
    el.nativeElement.style.color = '#fff'
  }
}
