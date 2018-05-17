import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='row'>
      <div #editor class='medium-12 columns'></div>
    </div>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  @ViewChild('editor') editor: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.editor.nativeElement);

    const _editor = new JSONEditor(this.editor.nativeElement, {
      // Enable fetching schemas via ajax
      ajax: true,

      theme: 'bootstrap4',
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
