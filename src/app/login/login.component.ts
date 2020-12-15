import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  constructor(
    private router:Router,
    private firebaseAuth:AngularFireAuth{}
  ) { }
  login(username:string, password:string){
    this.router.navigate(['chat'])
  }
  ngOnInit(): void {  
  }

}
