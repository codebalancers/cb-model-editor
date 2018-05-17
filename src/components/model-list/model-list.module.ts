import { NgModule } from '@angular/core';
import { ModelListComponent } from './model-list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ModelListComponent ],
  exports: [ ModelListComponent ]
})
export class ModelListModule {
}
