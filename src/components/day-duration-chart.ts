import {Component, ViewChild} from '@angular2/core';
import * as d3 from 'd3';

@Component({
  selector: "day-duration-chart",
  template: '<div #container></div>'
})
export default class DayDurationChart {
  @ViewChild('container') container;
  private host;
  private width: number;
  private height: number;
  private htmlElement: HTMLElement;

  constructor() {
    this.host = d3.select(this.container.nativeElement);
  }

  private setUp() : void {
    this.width = this.htmlElement.clientWidth;
  }

  ngOnChange() : void {
    this.setUp();
  }
}
