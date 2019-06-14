import { Component, Input } from '@angular/core';
import { Item } from '../models/item.model';
import { Section } from '../models/section.model';

@Component({
  selector: 'top-fold',
  templateUrl: './top-fold.component.html',
  styleUrls: ['./top-fold.component.css']
})
export class TopFoldComponent {
  @Input() tfHowToSection: Section;
  @Input() tfFixSection: Section;
  @Input() tfBuySection: Section;
  @Input() tfDoMoreSection: Section;
}
