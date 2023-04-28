import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../shared/service/user-information.service';
import { IAddress, ICompany, UserInformation } from '../shared/model/user-information.model';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  userInformationList: UserInformation[] = [];
  selectedCompanyData: ICompany = {} as ICompany;
  selectedAddressData: IAddress = {} as IAddress;

  constructor(private readonly userInformationService: UserInformationService) { }

  ngOnInit(): void {
    this.userInformationService.getUserInformation().subscribe((resp: UserInformation[]) => {
      this.userInformationList = resp;
    })
  }

  modalClicked(user: UserInformation, type: string): void {
    if(type === 'address') {
      this.selectedAddressData = user.address;
      this.selectedCompanyData = {} as ICompany;
    } else if(type === 'company') {
      this.selectedCompanyData = user.company;
      this.selectedAddressData = {} as IAddress;
    }
  }

}
