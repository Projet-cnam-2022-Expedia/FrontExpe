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
  displayedColumns: string[] = ['Nom', 'Ville'];

  hotelsFilter = new FormGroup({
    nom: new FormControl(),
    ville: new FormControl()
  })


  constructor(private http: HttpClient) {
    this.getHotels();
  }

  ngOnInit(): void {
  }

  getHotels(): void {
    console.log('dtfg');
    const url = 'http://localhost/BackExpe/GetHotels.php';
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
