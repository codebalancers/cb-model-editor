import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-10 col-centered">
          <h1>Codebalancers Model Editor</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-10 col-centered">
          <app-json-editor [value]="value"></app-json-editor>
        </div>
      </div>
    </div>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  @ViewChild('editor') editor: ElementRef;

  private jsonEditor: any;
  private value;

  constructor() {
    this.value = {
      name: 'John Smith',
      age: 35,
      gender: 'male',
      location: {
        city: 'San Francisco',
        state: 'California'
      },
      pets: [
        {
          name: 'Spot',
          type: 'dog',
          fixed: true
        },
        {
          name: 'Whiskers',
          type: 'cat',
          fixed: false
        }
      ]
    };
  }
}
