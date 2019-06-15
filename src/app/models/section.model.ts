import { Item } from './item.model';

export class Section {
  constructor(
    public title: string,
    public icon: string,  // link to icon image
    public photo: string, // link to photo
    public items: Item[],
    public link: string // link to all items in that section
  ) {}
}