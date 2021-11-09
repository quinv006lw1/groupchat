import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  groups:Observable<any>;
  constructor(private firebase:AngularFireDatabase) { }

  ngOnInit(): void {
    this.groups = this.firebase.list('group').valueChanges()
    console.log(this.groups);
    
  }

}
