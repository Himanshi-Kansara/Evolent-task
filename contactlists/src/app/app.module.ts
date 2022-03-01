import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './contacts/list/list.component';
import {EditOrAddComponent} from './contacts/list/edit-or-add-user/edit-or-add.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditOrAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
