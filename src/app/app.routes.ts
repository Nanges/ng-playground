import { ResolveFn, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { ErrorComponent } from '@core/error/error.component';
import { NotFoundComponent } from '@core/not-found/not-found.component';
import { ERROR_PATH, InternalError, InternalErrorComponent } from '@core/error';

export const resolveContact: ResolveFn<any> = (route, state) => {
    throw new InternalError;
}

export const routes: Routes = [
    {
        path: ERROR_PATH.NotFound,
        component: NotFoundComponent
    },
    {
        path: ERROR_PATH.Internal,
        component: InternalErrorComponent
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
