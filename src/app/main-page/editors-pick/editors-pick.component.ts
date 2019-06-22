import { Component, OnInit } from '@angular/core';
import {DataService } from '../../data.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'editors-pick',
  templateUrl: './editors-pick.component.html',
  styleUrls: ['./editors-pick.component.css'],
  providers: [DataService]
})
export class EditorsPickComponent {
  constructor(private router: Router, private dataService: DataService) {}

  editorsPick: FirebaseListObservable<any[]>;
  editorsPickMain: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.editorsPick = this.dataService.getEditorsPickSection();
    this.editorsPickMain = this.dataService.getEditorsPickSectionMain();
  }
}
