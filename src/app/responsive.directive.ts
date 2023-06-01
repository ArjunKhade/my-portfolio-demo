import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appResponsive]',
})
export class ResponsiveDirective {
  constructor(private bpo: BreakpointObserver, private element: ElementRef) {
    this.bpo
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          console.log(result);
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint])
              if (breakpoint === Breakpoints.HandsetPortrait) {
                console.log('mob');
                this.element.nativeElement.classList.remove('pc');
              }
            if (breakpoint === Breakpoints.WebLandscape) {
              console.log('web');
              this.element.nativeElement.classList.add('pc');
            }
          }
        },
      });
  }
}
