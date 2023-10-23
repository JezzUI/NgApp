import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  
  
  @HostListener('mouseover') onmouseover  (){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#9DB2BF');
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 5px');
    //this.renderer.setStyle(this.element.nativeElement, 'padding', '5px 5px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    
  }
  @HostListener('mouseleave') onmouseleave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F8F9F9');
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 5px');
   // this.renderer.setStyle(this.element.nativeElement, 'padding', '5px 5px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.element.nativeElement, 'color', '#8d8f8f');
  }


}
