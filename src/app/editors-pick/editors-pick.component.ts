import { Component, Input } from '@angular/core';

@Component({
  selector: 'editors-pick',
  templateUrl: './editors-pick.component.html',
  styleUrls: ['./editors-pick.component.css']
})
export class EditorsPickComponent {
  @Input() editorsPickData: {};
}
