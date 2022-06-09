// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {
  public data: any = [];
  displayedColumns: string[] = ['Nom', 'Description', 'Lieu', 'Prix'];

  activitesFilter = new FormGroup({
    Nom: new FormControl(),
    Description: new FormControl(),
    Lieu: new FormControl(),
    Prix: new FormControl()
  })


  constructor(private http: HttpClient) {
    this.getActivites();
  }

  ngOnInit(): void {
  }

  getActivites(): void {
    console.log('dtfg');
    const url = 'http://localhost/BackExpe/GetActivites.php';
    this.http.get(url).subscribe((test: any) => {
        this.data = test;
      }
    );
  }

  filtre() {
      this.getActivites();
      this.data = this.data.includes('this.activitesFilter.value.nom');
  }
}
