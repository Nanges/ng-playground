import { ResolveFn, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    }
];
