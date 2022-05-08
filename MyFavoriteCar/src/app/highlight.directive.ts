import { Directive, Input, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {

    // className may target a class in html (use nativeElement.selector, here selector may be
    // a tag, a class, an id, be careful that it is case sensitive)
    // style.background
  let name = this.el.nativeElement.id;
  if(name =="type")
  this.el.nativeElement.style.backgroundColor = "red";
  if (name == "tag")
  this.el.nativeElement.style.fontWeight = "bold";
  }


  @HostListener('mouseleave') onMouseLeave() {
    let name = this.el.nativeElement.id;
    if(name =="type")
    this.el.nativeElement.style.backgroundColor = "antiquewhite";
    if (name == "tag")
    this.el.nativeElement.style.fontWeight = "normal";
  }

  private highlight(color: string) {

  }


}
