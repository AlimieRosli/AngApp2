import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberLayoutRoutingModule } from './member-layout-routing.module';
import { MemberLayoutComponent } from './member-layout.component';

@NgModule({
  declarations: [MemberLayoutComponent],
  imports: [
    CommonModule,
    MemberLayoutRoutingModule
  ]
})
export class MemberLayoutModule { }
