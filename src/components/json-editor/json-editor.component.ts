import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  template: `
    <div #editor></div>
  `
})
export class JsonEditorComponent implements OnInit {
  @ViewChild('editor') editor: ElementRef;
  private jsonEditor: any;

  @Input() value: {};

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

    this.jsonEditor = new JSONEditor(this.editor.nativeElement, {
      // Enable fetching schemas via ajax
      ajax: true,

      theme: 'bootstrap3',
      iconlib: 'fontawesome4',

      // The schema for the editor
      schema: {
        $ref: 'api/schema.json',
        format: 'grid'
      },

      // Seed the form with a starting value
      startval: this.value
    });
  }
}
