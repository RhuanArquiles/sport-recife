import { Directive, OnInit , Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[] | undefined

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) { 

  }
  ngOnInit(): void {

    }
}

