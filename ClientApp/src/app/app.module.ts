import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from "./models/model.module";
import { StructureModule } from './structure/structure.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule ,FormsModule, ModelModule,StructureModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
