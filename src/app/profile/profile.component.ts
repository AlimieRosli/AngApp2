import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public url;
  public about = true;
  public academic = false;
  public experience = false;
  public certification = false;
  public company = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.navigate();
  }

  navigate() {
    this.url = this.router.url;
  }

}
