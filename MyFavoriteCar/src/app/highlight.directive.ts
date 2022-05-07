import { Directive, Input, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
/*   let tag = this.el.nativeElement.tagName;
  if (tag.toLowerCase() == 'div')
  this.el.nativeElement.style.textDecoration = "underline";
  else if(tag.toLowerCase() == "span")
  this.el.nativeElement.style.fontWeight = "bold"
 */
  let className = this.el.nativeElement.class;
  if(className =="type")
  this.el.nativeElement.style.textDecoration = "underline";
  if (className == "tags")
  this.el.nativeElement.style.fontWeight = "bold";
  }


  @HostListener('mouseleave') onMouseLeave() {
    let className = this.el.nativeElement.class;
    if(className =="type")
    this.el.nativeElement.style.textDecoration = "";
    if (className == "tags")
    this.el.nativeElement.style.fontWeight = "normal";
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
