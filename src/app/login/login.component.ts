import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm = new FormGroup({
  //   userName: new FormControl(),
  //   password: new FormControl(),
  //   remember: new FormControl(),
  // });

  constructor(private router: Router, private fb: FormBuilder, private loginServive: LoginService) { }

  loginForm = this.fb.group({
    grant_type: ['password'],
    client_id: ['2'],
    client_secret: ['dhhfaHAyxJKd3FrvwMe3GhDcC6bzoDwLraci6qa9'],
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false],
  });

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.loginForm.value);
    this.loginServive.login(this.loginForm.value)
      .subscribe(
        response => {
          console.log('Success', response);
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('refresh_token', response.refresh_token);
          console.log('access toke :', localStorage.getItem('token'));
          console.log('refresh token:', localStorage.getItem('refresh_token'));
          this.router.navigate(['/dashboard']);
        },
        error => console.error('Error!', error)
      );
  }

}
