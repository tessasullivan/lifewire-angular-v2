import { Component, OnInit, Input } from '@angular/core';
// import { Section } from '../models/section.model';
import {DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'top-fold',
  templateUrl: './top-fold.component.html',
  styleUrls: ['./top-fold.component.css'],
  providers: []
})
export class TopFoldComponent implements OnInit {
  constructor(private router: Router, private sectionsService: DataService) {}

  howTo: FirebaseListObservable<any[]>;
  fix: FirebaseListObservable<any[]>;
  buy: FirebaseListObservable<any[]>;
  doMore: FirebaseListObservable<any[]>;

  // @Input() tfHowToSection: Section;
  // @Input() tfFixSection: Section;
  // @Input() tfBuySection: Section;
  // @Input() tfDoMoreSection: Section;


  ngOnInit() {
  }

  getItems(clickedSection) {
    this.router.navigate([`'${clickedSection.items}`, clickedSection.$key]);
  }
}
