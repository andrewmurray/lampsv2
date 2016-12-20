import {Component, ViewChild} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: "day-duration-chart",
  template: `<div #container></div>`
})
export class DayDurationChart {
  @ViewChild('container') container;
  private host;
  private width: number;
  private height: number;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};

  constructor() { }

  ngOnInit() {
  }

  private setUp() : void {
    let element = this.container.nativeElement;
    this.host = d3.select(element);
    this.width = element.offsetWidth;// - this.margin.left - this.margin.right;
    this.height = element.offsetHeight;// - this.margin.top - this.margin.bottom;
    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);
    svg.append('text').text('hello');
  }

  ngOnChange() : void {
    this.setUp();
  }
}
