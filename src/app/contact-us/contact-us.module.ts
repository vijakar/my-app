import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactCompanyComponent } from './contact-company/contact-company.component';
import { ContactHrComponent } from './contact-hr/contact-hr.component';


@NgModule({
  declarations: [
    ContactCompanyComponent,
    ContactHrComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
