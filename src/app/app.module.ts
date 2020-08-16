import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {SelectRowComponent} from './select-row/select-row.component';
import {ArrayFindPipe} from './pipes/arrayFind';

@NgModule({
  declarations: [
    AppComponent,
    SelectRowComponent,
    ArrayFindPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ArrayFindPipe]
})
export class AppModule {
}
