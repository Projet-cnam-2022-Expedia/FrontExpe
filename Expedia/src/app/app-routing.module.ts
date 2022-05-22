import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FlightsComponent} from "./flights/flights.component";
import {HotelsComponent} from "./hotels/hotels.component";
import {VoituresComponent} from "./voitures/voitures.component";
import {ActivitesComponent} from "./activites/activites.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
