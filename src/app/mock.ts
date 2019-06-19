import { Item } from './models/item.model';
import { Section } from './models/section.model';

const imgSrc = '../../assets/img';

// top-fold data
let howToItem1: Item = new Item ("Article", "Get Your New Galaxy Buds Set Up", "#link","howto1");
let howToItem2: Item = new Item ("List", "Shooting Camera Raw can be a Game Changer", "#link","howto2");
let howToItem3: Item = new Item ("Article", "Start Creating with Canva today", "#link", "howto3");
let fixItem1: Item = new Item("Article", "Quick Fixes for Samsung S-Pen", "#link", "fix1");
let fixItem2: Item = new Item("Article", "Seven Ways to Fix When Chrome is Freezing", "#link", "fix2");
let fixItem3: Item = new Item("Article", "Wi-Fi Network Not Showing Up?", "#link", "fix3");
let buyItem1: Item = new Item("List", "Get Ready: Pregnancy Apps For Dads", "#link", "buy1");
let buyItem2: Item = new Item("List", "Great Speakers for Outdoor Sound", "#link", "buy2");
let buyItem3: Item = new Item("List", "The Best Places to Buy Phones in 2019", "#link", "buy3");
let doMoreItem1: Item = new Item("Article","Why You Should Use A VPN", "#link", "domore1");
let doMoreItem2: Item = new Item("Article", "The Best Video Chat App You Aren't Using", "#link", "domore2");
let doMoreItem3: Item = new Item("Article", "What Does Apollo 11 Have to do with Tech?", "#link", "domore3");

export const TOPFOLD: Section[] = [
  new Section
    ("How To", `${this.imgSrc}/hp-howto.png`, `${this.imgSrc}/photo-1555939327-48d6fd8a5ee2.jpeg`, [howToItem1, howToItem2, howToItem3], "#link" ),
  new Section 
    ("Fix", `${imgSrc}/hp-fix.png`, `${imgSrc}/aaron-burden-329406-unsplash.jpg`, [fixItem1, fixItem2, fixItem3], "#link"),
  new Section
    ("Buy", `${imgSrc}/hp-buy.png`, `${imgSrc}/depositphotos_169345474-stock-video-man-and-pregnant-wife-with-edited.jpg`, [buyItem1, buyItem2, buyItem3], "#link"),
  new Section
    ("Do More", `${imgSrc}/hp-domore.png`, `${imgSrc}/markus-spiske-153537-unsplash.jpg`, [doMoreItem1, doMoreItem2, doMoreItem3], "#link")
]

// editors-pick data

export const editorsPickMainItem = {
  photo: `${imgSrc}/element5-digital-645841-unsplash.jpg`,
  title: "Apps To Help You Plan Summer Adventures", 
  description: "Discover the 10 best travel planner apps for 2019 for Android, iOS, and all major web browsers. Get help packing, planning, and purchasing.", 
  link: "#link"
};
let editorsPickItem1: Item = new Item("List", "Make Summer Travel Easier with Tech", "#link", "ep1");
let editorsPickItem2: Item = new Item("List", "Take Your Tech Essentials On The Road", "#link", "ep2");
let editorsPickItem3: Item = new Item("Article", "Don't Share This On Facebook While You Travel", "#link", "ep3");
let editorsPickItem4: Item = new Item("List", "Let Apple TV Help With Travel Plans", "#link", "ep4");
let editorsPickItem5: Item = new Item("List", "Plan, Pack, And Go With These Apps", "#link", "ep5");
let editorsPickItem6: Item = new Item("Article", "Google Travel Planner Helps With Summer Trips", "#link", "ep6");

export const EDITORSPICK: Section[] = [
  new Section  ("Title", "icon", "photo", [editorsPickItem1, editorsPickItem2, editorsPickItem3, editorsPickItem4, editorsPickItem5, editorsPickItem6], "#link")
]
