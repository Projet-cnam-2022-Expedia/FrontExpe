// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  public data: any = [];
  displayedColumns: string[] = ['Compagnie', 'Ville de départ', "Ville d'arrivée"];

  flightsFilter = new FormGroup({
    compagnieName: new FormControl(),
    villeDepart: new FormControl(),
    villeArrivee: new FormControl()
  })


  constructor(private http: HttpClient) {
    this.getFlights();
  }

  ngOnInit(): void {
  }

  getFlights(): void {
    console.log('dtfg');
    const url = 'http://localhost/BackExpe/GetVols.php';
    this.http.get(url).subscribe((test: any) => {
        this.data = test;
      }
    );
  }

  filtre() {
      this.getFlights();
      this.data = this.data.includes('this.flightsFilter.value.compagnieName');
  }
}
