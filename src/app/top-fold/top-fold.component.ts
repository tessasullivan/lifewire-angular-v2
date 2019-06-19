import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../models/section.model';
import {DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'top-fold',
  templateUrl: './top-fold.component.html',
  styleUrls: ['./top-fold.component.css'],
  providers: []
})
export class TopFoldComponent implements OnInit {
  constructor(private sectionsService: DataService) {}

  articles: FirebaseListObservable<any[]>;
  sections: FirebaseListObservable<any[]>;

  @Input() tfHowToSection: Section;
  @Input() tfFixSection: Section;
  @Input() tfBuySection: Section;
  @Input() tfDoMoreSection: Section;


  ngOnInit() {
   

  }
}
