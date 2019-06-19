// import { Item } from './models/item.model';
// import { Section } from './models/section.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  articles: FirebaseListObservable<any[]>;
  sections: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.articles = database.list('articles');
    this.sections = database.list('sections');
  }

  getArticles() {
    return this.articles;
  }
  getSections() {
    return this.sections;
  }
}
