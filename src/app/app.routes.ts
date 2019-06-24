import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PropertyComponent } from './pages/property/property.component';
import { NoPageComponent } from './shared/no-page/no-page.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [

    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
        ] 
    },
    { path: 'property', component: PropertyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', pathMatch: 'full', redirectTo: 'pages' },
    { path: '**', component: NoPageComponent }

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} )