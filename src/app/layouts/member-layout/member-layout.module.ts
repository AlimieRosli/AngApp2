import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MemberLayoutRoutes } from './member-layout-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { AboutComponent } from 'src/app/profile/about/about.component';
import { AcademicComponent } from 'src/app/profile/academic/academic.component';
import { ExperienceComponent } from 'src/app/profile/experience/experience.component';
import { CertificationComponent } from 'src/app/profile/certification/certification.component';
import { CompanyComponent } from 'src/app/profile/company/company.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AboutComponent,
    AcademicComponent,
    ExperienceComponent,
    CertificationComponent,
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MemberLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class MemberLayoutModule { }
