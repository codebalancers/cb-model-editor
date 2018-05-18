import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModelAdapter, ModelEntry } from '../../infra/model.adapter';

@Component({
  selector: 'app-model-list',
  template: `
    <table class="table table-hover">
      <thead>
      <tr>
        <th>Module</th>
        <th>Filename</th>
        <th>Date</th>
        <th>Size</th>
      </tr>
      </thead>

      <tbody>
      <tr *ngFor="let model of models" (click)="handleClick(model)">
        <td>{{model.module}}</td>
        <td>{{model.filename}}</td>
        <td>{{model.date | date:'medium'}}</td>
        <td>{{model.size}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class ModelListComponent implements OnInit {
  models: ModelEntry[];

  @Output() selected = new EventEmitter<ModelEntry>();

  constructor(private modelAdapter: ModelAdapter) {
  }

  ngOnInit(): void {
    this.modelAdapter
      .getModels()
      .subscribe(models => this.models = models);
  }

  handleClick(model: ModelEntry) {
    this.selected.emit(model);
  }
}
