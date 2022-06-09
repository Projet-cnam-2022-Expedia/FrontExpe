import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FlightsComponent} from "./flights/flights.component";
import {HotelsComponent} from "./hotels/hotels.component";
import {VoituresComponent} from "./voitures/voitures.component";
import {ActivitesComponent} from "./activites/activites.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {User_reservationComponent} from "./user_reservation/user_reservation.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'voitures',
    component: VoituresComponent
  },
  {
    path: 'activites',
    component: ActivitesComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user_reservation',
    component: User_reservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
