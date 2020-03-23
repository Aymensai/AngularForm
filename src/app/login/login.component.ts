import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  redClicked:boolean = false;
  greenClicked:boolean = false;
  color(){
 
    console.log("True"); 
  }
}
