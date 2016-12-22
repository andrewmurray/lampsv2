import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {EditPlan} from './edit';

@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html'
})
export class Plans {
  private items = [
    { 'id': 1, 'on': true,  'pattern': 'Sunset/Sunrise', 'name': '',           'start': '19:30', 'end': '08:00' },
    { 'id': 2, 'on': false, 'pattern': 'Specified Time', 'name': 'Sleep time', 'start': '23:00', 'end': '06:00' }
  ];

  constructor(public navCtrl: NavController) {

  }

  addBtnTapped(event, item) {
    this.navCtrl.push(EditPlan);
  }
  itemTapped(event, item) {
    this.navCtrl.push(EditPlan, {item: item});
  }
}
