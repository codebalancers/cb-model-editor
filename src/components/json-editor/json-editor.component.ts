import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  template: `
    <div #editor></div>
  `
})
export class JsonEditorComponent implements OnInit, OnDestroy {
  @ViewChild('editor') editor: ElementRef;
  private jsonEditor: any;

  @Input() value: {};
  @Output() valueChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.jsonEditor = new JSONEditor(this.editor.nativeElement, {
      // Enable fetching schemas via ajax
      ajax: true,

      theme: 'bootstrap3',
      iconlib: 'fontawesome4',

      display_required_only: true,

      // The schema for the editor
      schema: {
        $ref: 'api/schema.json',
        format: 'grid'
      },

      // Seed the form with a starting value
      startval: this.value
    });

    this.jsonEditor.on('change', () => {
      this.valueChange.emit(this.jsonEditor.getValue());
    });
  }

  ngOnDestroy(): void {
    this.jsonEditor.destroy();
  }
}
