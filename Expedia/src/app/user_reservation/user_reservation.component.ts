// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user_reservation',
  templateUrl: './user_reservation.component.html',
  styleUrls: ['./user_reservation.component.css']
})
export class User_reservationComponent implements OnInit {
  public data: any = [];
  displayedColumns: string[] = ['Nom', 'Ville'];

  user_reservationFilter = new FormGroup({
    nom: new FormControl(),
    ville: new FormControl()
  })


  constructor(private http: HttpClient) {
    this.getUser_reservation();
  }

  ngOnInit(): void {
  }

  getUser_reservation(): void {
    console.log('dtfg');
    const url = 'http://localhost/BackExpe/GetUser_reservation.php';
    this.http.get(url).subscribe((test: any) => {
        this.data = test;
      }
    );
  }

  filtre() {
      this.getUser_reservation();
      this.data = this.data.includes('this.user_reservationFilter.value.nom');
  }
}
