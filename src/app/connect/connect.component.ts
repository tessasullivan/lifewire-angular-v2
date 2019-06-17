import { Component, Input } from '@angular/core';

@Component({
  selector: 'connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  @Input() editorsPickData: {};

}
