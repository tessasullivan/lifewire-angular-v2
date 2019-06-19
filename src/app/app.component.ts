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
  howToItem1: Item = new Item ("Article", "Get Your New Galaxy Buds Set Up", "#link","howto1");
  howToItem2: Item = new Item ("List", "Shooting Camera Raw can be a Game Changer", "#link","howto2");
  howToItem3: Item = new Item ("Article", "Start Creating with Canva today", "#link", "howto3");
  
  howToSection: Section = new Section
    ("How To", `${this.imgSrc}/hp-howto.png`, `${this.imgSrc}/photo-1555939327-48d6fd8a5ee2.jpeg`, [this.howToItem1, this.howToItem2, this.howToItem3], "#link" );

  fixItem1: Item = new Item("Article", "Quick Fixes for Samsung S-Pen", "#link", "fix1");
  fixItem2: Item = new Item("Article", "Seven Ways to Fix When Chrome is Freezing", "#link", "fix2");
  fixItem3: Item = new Item("Article", "Wi-Fi Network Not Showing Up?", "#link", "fix3");

  fixSection: Section = new Section 
    ("Fix", `${this.imgSrc}/hp-fix.png`, `${this.imgSrc}/aaron-burden-329406-unsplash.jpg`, [this.fixItem1, this.fixItem2, this.fixItem3], "#link");

  buyItem1: Item = new Item("List", "Get Ready: Pregnancy Apps For Dads", "#link", "buy1");
  buyItem2: Item = new Item("List", "Great Speakers for Outdoor Sound", "#link", "buy2");
  buyItem3: Item = new Item("List", "The Best Places to Buy Phones in 2019", "#link", "buy3");

  buySection: Section = new Section
    ("Buy", `${this.imgSrc}/hp-buy.png`, `${this.imgSrc}/depositphotos_169345474-stock-video-man-and-pregnant-wife-with-edited.jpg`, [this.buyItem1, this.buyItem2, this.buyItem3], "#link");
  
  doMoreItem1: Item = new Item("Article","Why You Should Use A VPN", "#link", "domore1");
  doMoreItem2: Item = new Item("Article", "The Best Video Chat App You Aren't Using", "#link", "domore2");
  doMoreItem3: Item = new Item("Article", "What Does Apollo 11 Have to do with Tech?", "#link", "domore3");

  doMoreSection: Section = new Section
    ("Do More", `${this.imgSrc}/hp-domore.png`, `${this.imgSrc}/markus-spiske-153537-unsplash.jpg`, [this.doMoreItem1, this.doMoreItem2, this.doMoreItem3], "#link");

  topFoldData = [this.howToSection, this.fixSection, this.buySection, this.doMoreSection];

  // editors-pick data
  
  editorsPickMainItem = {
    photo: `${this.imgSrc}/element5-digital-645841-unsplash.jpg`,
    title: "Apps To Help You Plan Summer Adventures", 
    description: "Discover the 10 best travel planner apps for 2019 for Android, iOS, and all major web browsers. Get help packing, planning, and purchasing.", 
    link: "#link"
  };
  editorsPickItem1: Item = new Item("List", "Make Summer Travel Easier with Tech", "#link", "ep1");
  editorsPickItem2: Item = new Item("List", "Take Your Tech Essentials On The Road", "#link", "ep2");
  editorsPickItem3: Item = new Item("Article", "Don't Share This On Facebook While You Travel", "#link", "ep3");
  editorsPickItem4: Item = new Item("List", "Let Apple TV Help With Travel Plans", "#link", "ep4");
  editorsPickItem5: Item = new Item("List", "Plan, Pack, And Go With These Apps", "#link", "ep5");
  editorsPickItem6: Item = new Item("Article", "Google Travel Planner Helps With Summer Trips", "#link", "ep6");

  editorsPickSection: Section = new Section  ("Title", "icon", "photo", [this.editorsPickItem1, this.editorsPickItem2, this.editorsPickItem3, this.editorsPickItem4, this.editorsPickItem5, this.editorsPickItem6], "#link");  
}
