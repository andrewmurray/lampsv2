import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Plans } from '../pages/plans/plans';
import { EditPlan } from '../pages/plans/edit';
import { DayDurationChart } from '../components/day-duration-chart';

@NgModule({
  declarations: [
    MyApp,
    Plans,
    EditPlan,
    DayDurationChart
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Plans,
    EditPlan
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
