import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventComponent } from './components/event/event.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { WallComponent } from './components/wall/wall.component';
import { EventCreationComponent } from './components/event-creation/event-creation.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventComponent,
    NavBarComponent,
    LoginComponent,
    WallComponent,
    EventCreationComponent,
    ProfilComponent,
    LogoutComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
