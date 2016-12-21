import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Plans } from '../pages/plans/plans';
<<<<<<< HEAD
import { EditPlan } from '../pages/plans/edit';
=======
import { DayDurationChart } from '../components/day-duration-chart';
>>>>>>> origin/master

@NgModule({
  declarations: [
    MyApp,
    Plans,
<<<<<<< HEAD
    EditPlan
=======
    DayDurationChart
>>>>>>> origin/master
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
