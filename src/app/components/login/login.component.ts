import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = {
    email: "",
    password: "",
  }

  bdd = [
    {
      userName: "Daniel Ricardo Osorio Chambueta",
      email: "DanielRS@gmail.com",
      password: "123"
    },
    {
      userName: "Juan Manuel Osorio Chambueta",
      email: "jmshambuetta@gmail.com",
      password: "123"
    },
    {
      userName: "Andres Felipe Torres Chambueta",
      email: "Andrestsh@gmail.com",
      password: "123"
    },
  ]

  validar = true;

  onLogin() {

    for(let i = 0; i < this.bdd.length; i++) {
      if(this.form.email == this.bdd[i].email && this.form.password == this.bdd[i].password) {
        console.log("Bienvenido");
        this.validar = true;
        break;
      }
      else if(this.form.email != this.bdd[i].email && this.form.password != this.bdd[i].password) {
        console.log("Error de login");
        this.validar = false;
        break;
      }
    }

    // for(let email of this.bdd[email].email) {

    // }

    this.form.email = "";
    this.form.password = "";
  }

}
