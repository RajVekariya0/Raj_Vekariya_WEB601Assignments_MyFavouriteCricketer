/* import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    
  }
  @HostBinding('style.textDecoration') textDecoration: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.textDecoration = 'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = 'none';
  }
  
  private addUnderline() {
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }

  private removeUnderline() {
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
  }
}
 */


import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.textDecoration') textDecoration: string;

  
}
