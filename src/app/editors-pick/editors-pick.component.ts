import { Component, Input } from '@angular/core';
import { Section } from '../models/section.model';

@Component({
  selector: 'editors-pick',
  templateUrl: './editors-pick.component.html',
  styleUrls: ['./editors-pick.component.css']
})
export class EditorsPickComponent {
  @Input() editorsPickSection: Section;
  @Input() editorsPickMainItem: any;
}
