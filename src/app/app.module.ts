import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModelListModule } from '../components/model-list/model-list.module';
import { ModelAdapter } from '../infra/model.adapter';
import { JsonEditorComponent } from '../components/json-editor/json-editor.component';


@NgModule({
  declarations: [
    AppComponent, JsonEditorComponent
  ],
  imports: [
    BrowserModule,
    ModelListModule
  ],
  providers: [ ModelAdapter ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
