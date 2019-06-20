import { Component, OnInit, Input } from '@angular/core';
// import { Section } from '../models/section.model';
import {DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'top-fold',
  templateUrl: './top-fold.component.html',
  styleUrls: ['./top-fold.component.css'],
  providers: [DataService]
})
export class TopFoldComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  howTo: FirebaseListObservable<any[]>;
  fix: FirebaseListObservable<any[]>;
  buy: FirebaseListObservable<any[]>;
  doMore: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.howTo = this.dataService.getHowToSection();
    this.fix = this.dataService.getFixSection();
    this.buy = this.dataService.getBuySection();
    this.doMore = this.dataService.getDoMoreSection();
  }

  getItems(clickedSection) {
    this.router.navigate([`'${clickedSection.items}`, clickedSection.$key]);
  }
}
