// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public data: any = [];
  displayedColumns: string[] = ['Nom', 'Gym', 'Piscine', 'Spa', 'Bar', 'Internet', 'Nb_places', 'Salledebain_private'];

  hotelsFilter = new FormGroup({
    Nom: new FormControl(),
    Gym: new FormControl(),
    Piscine: new FormControl(),
    Spa: new FormControl(),
    Bar: new FormControl(),
    Internet: new FormControl(),
    Nb_places: new FormControl(),
    Salledebain_private: new FormControl()

  })


  constructor(private http: HttpClient) {
    this.getHotels();
  }

  ngOnInit(): void {
  }

  getHotels(): void {
    const url = 'http://localhost/BackExpe/GetChambres.php';
    this.http.get(url).subscribe((test: any) => {
        this.data = test;
      }
    );
  }

  filtre() {
      this.getHotels();
      this.data = this.data.includes('this.hotelsFilter.value.nom');
  }
}
