import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/general/not-found/not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { InvoicesPageComponent } from '../components/dashboard/invoices';
import { AuthGuard } from '../guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'invoices', component: InvoicesPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];