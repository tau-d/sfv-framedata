import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSelectComponent } from './character-select/character-select.component';
import { FramedataTableComponent } from './framedata-table/framedata-table.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSelectComponent,
    FramedataTableComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
