import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviurSubjectComponent } from './behaviur-subject/behaviur-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderStatusComponent,
    SubjectComponent,
    BehaviurSubjectComponent,
    ReplaySubjectComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
