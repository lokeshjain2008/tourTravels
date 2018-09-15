import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.moudule';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourListElementComponent } from './tour-list-element/tour-list-element.component';
import { TourPackageDetailsComponent } from './tour-package-details/tour-package-details.component';
import { BookingsComponent } from './bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    TourListComponent,
    TourListElementComponent,
    TourPackageDetailsComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PageNotFoundComponent]
})
export class AppModule { }
