import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef <unknown> ) { 

    for (let i = 0; i < 10; i++) {
      this.viewContainer.createEmbeddedView ( this.templateRef)
    }
  }

}
