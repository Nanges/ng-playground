import { ResolveFn, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const resolveContact: ResolveFn<any> = (route, state) => {
    throw new Error('Error');
}

export const routes: Routes = [
    {
        path:"not-found",
        component:NotFoundComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"contact",
        resolve:{
            data: resolveContact
        },
        component:ContactComponent
    },
    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    },
    {
        path:"**",
        component:ErrorComponent
    }
];
