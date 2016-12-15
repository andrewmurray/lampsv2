import {Component, ViewContainerRef} from '@angular2/core';
import * as d3 from 'd3';

@Component({
  selector: "day-duration-chart",
  template: '<ng-content/>'
})
export default class DayDurationChart {
  private host;
  private width: number;
  private height: number;
  private htmlElement: HTMLElement;

  constructor(private viewContainerRef: ViewContainerRef) {
    this.htmlElement = viewContainerRef.element.nativeElement;
    this.host = d3.select(viewContainerRef.nativeElement);
  }

  private setUp() : void {
    this.width = this.htmlElement.clientWidth;
  }

  ngOnChange() : void {
    this.setUp();
  }
}
