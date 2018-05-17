import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModelListModule } from '../components/model-list/model-list.module';
import { ModelAdapter } from '../infra/model.adapter';
import { JsonEditorComponent } from '../components/json-editor/json-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelEditorComponent } from '../components/model-editor/model-editor.component';
import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent, JsonEditorComponent, ModelEditorComponent
  ],
  imports: [
    BrowserModule,
    ModelListModule,
    HttpClientModule
  ],
  providers: [ ModelAdapter ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
