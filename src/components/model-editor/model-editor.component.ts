import { Component, Input, OnInit } from '@angular/core';
import { ModelAdapter, ModelEntry } from '../../infra/model.adapter';

@Component({
  selector: 'app-model-editor',
  template: `
    <app-json-editor [value]="value" *ngIf="value"></app-json-editor>
  `
})
export class ModelEditorComponent implements OnInit {
  @Input() model: ModelEntry;
  value: {} = undefined;

  constructor(private modelAdapter: ModelAdapter) {
  }

  ngOnInit(): void {
    this.modelAdapter
      .getModel(this.model.module, this.model.filename)
      .subscribe(value => this.value = value);
  }
}
