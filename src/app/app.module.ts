import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ValorActualComponent } from './valor-actual/valor-actual.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfoGeneralComponent,
    LoginComponent,
    HomeComponent,
    ValorActualComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
