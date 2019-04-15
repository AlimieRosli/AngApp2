import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MemberLayoutComponent } from './layouts/member-layout/member-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  {
    path: '',
    component: MemberLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/member-layout/member-layout.module#MemberLayoutModule'
      }]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
