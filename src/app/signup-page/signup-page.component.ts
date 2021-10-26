import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  signup(){
    console.log(this.model);
  }
}
