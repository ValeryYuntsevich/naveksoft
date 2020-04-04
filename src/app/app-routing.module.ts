import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { GuardGuard } from './core/guard/guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    // canActivate: [GuardGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivate: [GuardGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
