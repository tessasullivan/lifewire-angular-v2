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
  howToItem1: Item = new Item ("Article", "Get Your New Galaxy Buds Set Up", "#link");
  howToItem2: Item = new Item ("List", "Shooting Camera Raw can be a Game Changer", "#link");
  howToItem3: Item = new Item ("Article", "Start Creating with Canva today", "#link");
  
  howToSection: Section = new Section
    ("How To", `${this.imgSrc}/hp-howto.png`, `${this.imgSrc}/photo-1555939327-48d6fd8a5ee2.jpeg`, [this.howToItem1, this.howToItem2, this.howToItem3], "#link" );

  fixItem1: Item = new Item("Article", "Quick Fixes for Samsung S-Pen", "#link");
  fixItem2: Item = new Item("Article", "Seven Ways to Fix When Chrome is Freezing", "#link");
  fixItem3: Item = new Item("Article", "Wi-Fi Network Not Showing Up?", "#link");

  fixSection: Section = new Section 
    ("Fix", `${this.imgSrc}/hp-fix.png`, `${this.imgSrc}/aaron-burden-329406-unsplash.jpg`, [this.fixItem1, this.fixItem2, this.fixItem3], "#link");

  buyItem1: Item = new Item("List", "Get Ready: Pregnancy Apps For Dads", "#link");
  buyItem2: Item = new Item("List", "Great Speakers for Outdoor Sound", "#link");
  buyItem3: Item = new Item("List", "The Best Places to Buy Phones in 2019", "#link");

  buySection: Section = new Section
    ("Buy", `${this.imgSrc}/hp-buy.png`, `${this.imgSrc}/depositphotos_169345474-stock-video-man-and-pregnant-wife-with-edited.jpg`, [this.buyItem1, this.buyItem2, this.buyItem3], "#link");
  
  doMoreItem1: Item = new Item("Article","Why Should You Use A VPN", "#link");
  doMoreItem2: Item = new Item("Article", "The Best Video Chat App You Aren't Using", "#link");
  doMoreItem3: Item = new Item("Article", "What Does Apollo 11 Have to do with Tech?", "#link");

  doMoreSection: Section = new Section
    ("Do More", `${this.imgSrc}/hp-domore.png`, `${this.imgSrc}/history-in-hd-1142826-unsplash.jpg`, [this.doMoreItem1, this.doMoreItem2, this.doMoreItem3], "#link");

  topFoldData = [this.howToSection, this.fixSection, this.buySection, this.doMoreSection];

  // editors-pick data
  
  editorsPickMainItem = {
    photo: `${this.imgSrc}/element5-digital-645841-unsplash.jpg`,
    title: "Apps To Help You Plan Summer Adventures", 
    description: "Discover the 10 best travel planner apps for 2019 for Android, iOS, and all major web browsers. Get help packing, planning, and purchasing.", 
    link: "#link"
  };
  editorsPickItem1: Item = new Item("List", "Make Summer Travel Easier with Tech", "#link");
  editorsPickItem2: Item = new Item("List", "Take Your Tech Essentials On The Road", "#link");
  editorsPickItem3: Item = new Item("Article", "Don't Share This On Facebook While You Travel", "#link");
  editorsPickItem4: Item = new Item("List", "Let Apple TV Help With Travel Plans", "#link");
  editorsPickItem5: Item = new Item("List", "Plan, Pack, And Go With These Apps", "#link");
  editorsPickItem6: Item = new Item("Article", "Google Travel Planner Helps With Summer Trips", "#link");

  editorsPickSection: Section = new Section  ("Title", "icon", "photo", [this.editorsPickItem1, this.editorsPickItem2, this.editorsPickItem3, this.editorsPickItem4, this.editorsPickItem5, this.editorsPickItem6], "#link");  
}
