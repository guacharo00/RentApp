import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SearchboxComponent } from './shared/searchbox/searchbox.component';
import { SearchboxfullComponent } from './shared/searchbox/searchboxfull.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { NoPageComponent } from './shared/no-page/no-page.component';
import { WhyUsComponent } from './shared/why-us/why-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertyComponent } from './pages/property/property.component';
import { AboutComponent } from './pages/about/about.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SearchboxComponent,
    SearchboxfullComponent,
    PaginationComponent,
    NoPageComponent,
    WhyUsComponent,
    ContactComponent,
    HomeComponent,
    PropertyComponent,
    AboutComponent,
    ContenidoComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
