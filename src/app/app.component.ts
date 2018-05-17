import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
        <div #editor class="col-10 col-centered"></div>
      </div>
    </div>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  @ViewChild('editor') editor: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    const starting_value = {
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

    const _editor = new JSONEditor(this.editor.nativeElement, {
      // Enable fetching schemas via ajax
      ajax: true,

      theme: 'bootstrap3',
      iconlib: 'fontawesome4',

      // The schema for the editor
      schema: {
        $ref: 'api/schema.json',
        format: 'grid'
      }

      // Seed the form with a starting value
      // startval: starting_value
    });
  }
}
