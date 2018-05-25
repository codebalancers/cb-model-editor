import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ModelAdapter } from '../../infra/model.adapter';

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

  constructor(private modelAdapter: ModelAdapter) {
  }

  ngOnInit(): void {
    this.modelAdapter
      .getSchema()
      .subscribe(schema => this.createEditor(schema));
  }

  ngOnDestroy(): void {
    this.jsonEditor.destroy();
  }

  private createEditor(schema: {}) {
    this.jsonEditor = new JSONEditor(this.editor.nativeElement, {
      // Enable fetching schemas via ajax
      ajax: false,

      theme: 'bootstrap3',
      iconlib: 'fontawesome4',

      display_required_only: true,
      disable_edit_json: true,
      no_additional_properties: true,
      // required_by_default: true, // show all required fields from start

      disable_array_delete_all_rows: true,
      disable_array_delete_last_row: true,

      // The schema for the editor
      schema: schema,

      // Seed the form with a starting value
      startval: this.value
    });

    this.jsonEditor.on('change', () => {
      this.valueChange.emit(this.jsonEditor.getValue());
    });
  }
}
