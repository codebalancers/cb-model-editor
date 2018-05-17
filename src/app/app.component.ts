import { Component } from '@angular/core';
import { ModelEntry } from '../infra/model.adapter';

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
          <app-model-list *ngIf="showList" (selected)="handleSelected($event)"></app-model-list>
          <app-model-editor *ngIf="showEditor" [model]="selectedModel"></app-model-editor>
        </div>
      </div>
    </div>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  showList = true;
  showEditor = false;

  selectedModel: ModelEntry;

  handleSelected(selectedModel: ModelEntry) {
    this.selectedModel = selectedModel;
    this.showList = false;
    this.showEditor = true;
  }
}
