import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } 
    from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'choc-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
})
export class AccountComponent{

  
  headers: Headers;
  form: FormGroup;

  constructor(fb: FormBuilder, private http: Http) {
      this.headers = new Headers();
      this.headers.append('Access-Control-Allow-Origin', '*');
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.form = fb.group({
            "email": ["", Validators.required],
            "password":["", Validators.required]
        });
    }

  doLogin(event) {
    this.http.post("http://localhost:5000/token", "username=" + this.form.value.email + "&password=" + this.form.value.password, { headers: this.headers })
      .subscribe(
        data => alert('You are logged in!' + data.json().access_token),
        error => alert(error.json().message)
      );
  }

  ngOnInit() {
  }

}
