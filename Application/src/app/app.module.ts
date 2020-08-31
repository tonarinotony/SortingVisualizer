import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortInterfaceComponent } from './components/sort-interface/sort-interface.component';
import { InterfaceBarsComponent } from './components/interface-bars/interface-bars.component';

@NgModule({
  declarations: [
    AppComponent,
    SortInterfaceComponent,
    InterfaceBarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
