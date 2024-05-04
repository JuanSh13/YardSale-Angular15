import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { AllComponent } from './components/all/all.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  // { path: 'index', component: index.html },
  { path: 'login', component: LoginComponent },
  { path: 'create_account', component: CreateAccountComponent },
  { path: 'all', component: AllComponent },
  { path: '**', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
