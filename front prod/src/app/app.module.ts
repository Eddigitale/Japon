import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CuisineComponent } from "./cuisine/cuisine.component";
import { FestivalComponent } from "./festival/festival.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HistoireJaponComponent } from "./histoire-japon/histoire-japon.component";
import { HomeComponent } from "./home/home.component";
import { IncontournablesComponent } from "./incontournables/incontournables.component";
import { MythesComponent } from "./mythes/mythes.component";


const appRoutes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Places", component: IncontournablesComponent },
  { path: "History", component: HistoireJaponComponent },
  { path: "Festival", component: FestivalComponent },
  { path: "Cooking", component: CuisineComponent },
  { path: "Myths", component: MythesComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IncontournablesComponent,
    HistoireJaponComponent,
    FestivalComponent,
    CuisineComponent,
    MythesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
