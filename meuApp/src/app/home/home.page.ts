import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public list: Array<any> = [
    { name: 'First Element', id: 1 },
    { name: 'Second Element', id: 2 }
  ];

  @ViewChild('inp') elementRef: any;

  constructor() { }

  add() {
    if (this.list.length > 0) {
      this.list.push({ name: this.elementRef.el.value, id: this.list[this.list.length - 1].id + 1 });
    } else {
      this.list.push({ name: this.elementRef.el.value, id: 0 });
    }
    this.clean();
  }

  remove(_item) {
    const indexToExclude = this.list.findIndex(item => item.id === _item.id);
    this.list.splice(indexToExclude, 1);
  }

  edit(_item) {
    if (this.elementRef.el.value === undefined) { return };
    if (this.elementRef.el.value.trim() === '') { return };
    _item.name = this.elementRef.el.value;
    this.clean();
  }

  clean() {
    this.elementRef.el.value = "";
  }
}
