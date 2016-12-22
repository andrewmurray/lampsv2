import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'edit-plans',
  templateUrl: 'edit.html'
})
export class EditPlan {
  startTime: string;
  endTime: string;
  description: string;
  switch: boolean;
  constructor(public params: NavParams) {
    //params.data
  }
}
