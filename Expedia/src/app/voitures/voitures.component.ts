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
  displayedColumns: string[] = ['Marque', 'Modele', 'Killometrage illimite', 'Boite automatique', 'Nombre de places', 'Prix', 'Ville'];

  voituresFilter = new FormGroup({
    Marque: new FormControl(),
    Modele: new FormControl(),
    Killometrage_illimite: new FormControl(),
    Boite_automatique: new FormControl(),
    Nombres_de_places: new FormControl(),
    Prix: new FormControl(),
    Ville: new FormControl()

  })


  constructor(private http: HttpClient) {
    this.getVoitures();
  }

  ngOnInit(): void {
  }

  getVoitures(): void {
    const url = 'http://localhost/BackExpe/GetLocation.php';
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
