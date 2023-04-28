import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInformationRoutingModule } from './user-information-routing.module';
import { UserInformationComponent } from './user-information.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    UserInformationComponent,
    AddressComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    UserInformationRoutingModule
  ]
})
export class UserInformationModule { }
