import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/profile/profile.component';

import { AboutComponent } from 'src/app/profile/about/about.component';
import { CertificationComponent } from 'src/app/profile/certification/certification.component';
import { ExperienceComponent } from 'src/app/profile/experience/experience.component';
import { AcademicComponent } from 'src/app/profile/academic/academic.component';
import { CompanyComponent } from 'src/app/profile/company/company.component';

export const MemberLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'academic', component: AcademicComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'certification', component: CertificationComponent },
      { path: 'company', component: CompanyComponent },
    ]
  },
];
