// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  public data: any = [];
  displayedColumns: string[] = ['Nom', 'Ville'];

  voituresFilter = new FormGroup({
    nom: new FormControl(),
    ville: new FormControl()
  })


  constructor(private http: HttpClient) {
    this.getVoitures();
  }

  ngOnInit(): void {
  }

  getVoitures(): void {
    console.log('dtfg');
    const url = 'http://localhost/BackExpe/GetVoitures.php';
    this.http.get(url).subscribe((test: any) => {
        this.data = test;
      }
    );
  }

  filtre() {
      this.getVoitures();
      this.data = this.data.includes('this.voituresFilter.value.nom');
  }
}
