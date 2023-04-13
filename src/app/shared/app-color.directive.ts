import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAppColor]'
})
export class AppColorDirective {

  @HostListener('mouseenter') mouseEnter(){
    this.el.nativeElement.style.color = "red"
  }

  @Input() @HostBinding('class') class : string = "hello"

  constructor(private el : ElementRef) { }

}
