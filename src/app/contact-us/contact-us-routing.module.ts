import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCompanyComponent } from './contact-company/contact-company.component';
import { ContactHrComponent } from './contact-hr/contact-hr.component';

const routes: Routes = [
  {path:'contact-company', component:ContactCompanyComponent},
  {path:'contact-hr', component:ContactHrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
