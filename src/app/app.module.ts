import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "../../node_modules/@angular/common";
import { MessagesComponent } from "./components/messages/messages.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CoreModule, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
