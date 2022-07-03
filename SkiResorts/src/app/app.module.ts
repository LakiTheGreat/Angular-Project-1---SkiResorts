import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavItemComponent } from './core/nav/nav-item/nav-item.component';
import { ResortPageComponent } from './resort-page/resort-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TracksComponent } from './resort-page/tracks/tracks.component';
import { WeatherComponent } from './resort-page/weather/weather.component';
import { SkiPassComponent } from './resort-page/ski-pass/ski-pass.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    NavItemComponent,
    ResortPageComponent,
    TracksComponent,
    WeatherComponent,
    SkiPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
