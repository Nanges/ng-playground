import { Routes } from "@angular/router";
import { ERROR_PATH } from "./error";
import { ForbiddenComponent, InternalComponent, NotFoundComponent, UnauthorizedComponent } from "./pages";

export const CORE_ROUTES: Routes = [
    {
        path: ERROR_PATH.Forbidden,
        component: ForbiddenComponent
    },
    {
        path: ERROR_PATH.Internal,
        component: InternalComponent
    },
    {
        path: ERROR_PATH.NotFound,
        component: NotFoundComponent
    },
    {
        path: ERROR_PATH.Unauthorized,
        component: UnauthorizedComponent
    }
];