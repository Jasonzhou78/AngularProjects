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
  this.el.nativeElement.style.textDecoration = "underline";
  }


  @HostListener('mouseleave') onMouseLeave() {
    // if (this.el.nativeElement.tagName.toLowerCase() == 'div')
    this.el.nativeElement.style.textDecoration =  '';
    // else if(this.el.nativeElement.tagName.toLowerCase() == 'span')
    // this.el.nativeElement.style.fontWeight = 'normal';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
