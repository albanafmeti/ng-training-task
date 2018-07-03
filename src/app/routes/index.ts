import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/general/not-found/not-found.component';
import { LoginComponent } from '../components/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

export default appRoutes;