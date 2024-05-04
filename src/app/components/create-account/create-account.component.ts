import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  form = {
    userName: "",
    email: "",
    password: "",
  }

  onRegister() {
    console.log(this.form);

    this.form.userName = "";
    this.form.email = "";
    this.form.password = "";
  }
}
