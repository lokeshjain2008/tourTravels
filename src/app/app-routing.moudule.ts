import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { TourListComponent } from "./tour-list/tour-list.component";
import { TourPackageDetailsComponent } from "./tour-package-details/tour-package-details.component";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tour-list', component: TourListComponent},
  {path: 'tour-package-details', component: TourPackageDetailsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // CanDeactivateGuard,
  ]
})
export class AppRoutingModule { }
