import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  howToFb: FirebaseListObservable<any[]>;
  fixFb: FirebaseListObservable<any[]>;
  doMoreFb: FirebaseListObservable<any[]>;
  buyFb: FirebaseListObservable<any[]>;
  editorsPickFb: FirebaseListObservable<any[]>;

  howToList: any;

  constructor(private database: AngularFireDatabase) { 
    this.howToFb = database.list('how-to');
    this.fixFb = database.list('fix');
    this.buyFb = database.list('buy');
    this.doMoreFb = database.list('do-more');
    this.editorsPickFb = database.list('editors-pick');
  }

  getHowToSection() {
    return this.howToFb;
  }
  getFixSection() {
    return this.fixFb;
  }
  getBuySection() {
    return this.buyFb;
  }
  getDoMoreSection() {
    return this.doMoreFb;
  }
  getEditorsPickSection() {
    return this.editorsPickFb;
  }
}
