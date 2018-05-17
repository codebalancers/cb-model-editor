import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelAdapter, ModelEntry } from '../../infra/model.adapter';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-model-editor',
  template: `
    <p-growl [(value)]="msgs"></p-growl>

    <div class="pull-right" style="position: relative; z-index: 1000">
      <button type="button" class="btn btn-danger" (click)="handleCancelClick()">Back</button>
      <button type="button" class="btn btn-success" (click)="handleSaveClick()">Save</button>
    </div>

    <app-json-editor [(value)]="value" *ngIf="value"></app-json-editor>

    <div class="pull-right">
      <button type="button" class="btn btn-danger" (click)="handleCancelClick()">Back</button>
      <button type="button" class="btn btn-success" (click)="handleSaveClick()">Save</button>
    </div>
  `
})
export class ModelEditorComponent implements OnInit {
  msgs: Message[] = [];

  @Input() model: ModelEntry;
  value: {} = undefined;

  @Output() cancel = new EventEmitter<void>();

  constructor(private modelAdapter: ModelAdapter) {
  }

  ngOnInit(): void {
    this.modelAdapter
      .getModel(this.model.module, this.model.filename)
      .subscribe(value => this.value = value);
  }

  handleSaveClick(): void {
    this.modelAdapter
      .updateModel(this.model.module, this.model.filename, this.value)
      .subscribe(
        () => {
          this.msgs.push({severity: 'success', summary: 'OK', detail: 'Model was saved'});
        },
        err => {
          this.msgs.push({severity: 'error', summary: 'Error', detail: 'Could not save model'});
           console.error(err);
        }
      );
  }

  handleCancelClick() {
    this.cancel.emit();
  }
}
