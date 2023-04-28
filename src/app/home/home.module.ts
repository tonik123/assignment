import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserInformationModule } from './user-information/user-information.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UserInformationModule,
    AboutUsModule,
    ContactModule
  ]
})
export class HomeModule { }
