import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public persons: Array<Person> = [
    {
      id: 1,
      name: 'Carlos',
      surname: 'Flor',
      age: 22
    },
    {
      id: 2,
      name: 'Lourenco',
      surname: 'Milhati',
      age: 52
    }
  ];

  @ViewChild('f') form: NgForm;

  constructor() { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.clean();
  }

  onSubmit(form: NgForm) {
    const person: Person = this.deepCopy(form.value) as Person;
    if (this.persons.length > 0) {
      person.id = this.persons[this.persons.length - 1].id + 1;
    } else {
      person.id = 0;
    }

    this.persons = [...this.persons, person];
  }

  // tslint:disable-next-line: variable-name
  public remove(_person: Person) {
    const indexToExclude = this.findIndex(_person);
    this.persons.splice(indexToExclude, 1);
  }

  // tslint:disable-next-line: variable-name
  public edit(_person: Person) {
    const form: NgForm = this.form;
    if (!form.valid) { return; }
    const { name, surname, age } = this.deepCopy(form.value) as Person;
    _person.name = name;
    _person.surname = surname;
    _person.age = age;
  }

  private clean() {
    this.form.ngSubmit.subscribe(form => {
      form.srcElement.reset();
    });
  }

  // tslint:disable-next-line: variable-name
  private findIndex(_person: Person) {
    const index = this.persons.findIndex(person => person.id === _person.id);
    return index;
  }

  // tslint:disable-next-line: ban-types
  private deepCopy(obj: Object): Object {
    return JSON.parse(JSON.stringify(obj));
  }
}

interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
}
