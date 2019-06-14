import { Item } from './models/item.model';
import { Section } from './models/section.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSrc = '../../assets/img';

  // top-fold data
  howToItem1: Item = new Item ("Article", "Start Creating with Canva today", "#link");
  howToItem2: Item = new Item ("List", "Shooting Camera Raw can be a Game Changer", "#link");
  howToItem3: Item = new Item ("Article", "Download Pictures from Your Computer", "#link");

  howToSection: Section = new Section
    ("How To", `${this.imgSrc}/hp-howto.png`, `${this.imgSrc}/pexels-photo-2084974.jpeg`, [this.howToItem1, this.howToItem2, this.howToItem3], "#link" );

  fixItem1: Item = new Item("Article", "Wi-Fi Network Not Showing Up", "#link");
  fixItem2: Item = new Item("Article", "7 Ways to Fix When Chrome is Freezing", "#link");
  fixItem3: Item = new Item("Article", "Is Your Alexa App Offline or is it You?", "#link");

  fixSection: Section = new Section 
    ("Fix", `${this.imgSrc}/`, `${this.imgSrc}/`, [this.fixItem1, this.fixItem2, this.fixItem3], "#link");

  buyItem1: Item = new Item("List", "The Best Places to Buy Phones in 2019", "#link");
  buyItem2: Item = new Item("List", "Great Speakers for Outdoor Sound", "#link");
  buyItem3: Item = new Item("List", "Best Xbox One Role Playing Games", "#link");

  buySection: Section = new Section
    ("Buy", `${this.imgSrc}`, `${this.imgSrc}/`, [this.buyItem1, this.buyItem2, this.buyItem3], "#link");
  
  doMoreItem1: Item = new Item("Article", "What Does Apollo 11 Have to do with Tech?", "#link");
  doMoreItem2: Item = new Item("Article", "The Best Video Chat App You Aren't Using", "#link");
  doMoreItem3: Item = new Item("Article", "Play Retro Games on Your PC", "#link");

  doMoreSection: Section = new Section
    ("Do More", `${this.imgSrc}`, `${this.imgSrc}/`, [this.doMoreItem1, this.doMoreItem2, this.doMoreItem3], "#link");

  topFoldData = [this.howToSection, this.fixSection, this.buySection, this.doMoreSection];
}
