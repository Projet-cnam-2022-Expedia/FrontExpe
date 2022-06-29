// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {subscribeTo} from "rxjs/internal-compatibility";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data: any = [];
  public message: String | undefined;
  public message2: String | undefined;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(form :NgForm): void{
    var formData: any = new FormData();
    formData.append("email", form.value.email);
    formData.append("mdp", form.value.password);
    this.http.post<any>('http://localhost/BackExpe/GetUser.php', formData).subscribe(data =>{
      this.data = data;
    })
    console.log(this.data);
    if(this.data == 0){
      this.message = "Mauvais mot de passe";}
    else if(this.data == 1) {
      this.message = "Mauvaise adresse mail";
    }else if(this.data == []){
      this.message = "Oups une erreur ! essayez de nouveau";
    }else {
      localStorage.setItem("connect", '1');
      localStorage.setItem("id", this.data[0]['id_user']);
      localStorage.setItem("nom", this.data[0]['nom']);
      localStorage.setItem("prenom", this.data[0]['prenom']);
      localStorage.setItem("email", this.data[0]['email']);

      this.router.navigate(['/home'])
    }
  }

  signUp(form: NgForm): void{
    var formData: any = new FormData();
    formData.append("email", form.value.email);
    formData.append("nom", form.value.nom);
    formData.append("prenom", form.value.prenom);
    formData.append("mdp", form.value.password);
    this.http.post<any>('http://localhost/BackExpe/SetUser.php', formData).subscribe(data =>{
      this.data = data;
    })

    if (this.data == 0){
      this.message2 = "Email deja existante";
    }else {
      this.message2 = "Connectez vous maintenant";
    }
  }

}
