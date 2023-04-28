import { Component, OnInit, Input } from '@angular/core';
import { ICompany } from '../../shared/model/user-information.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() selectedCompany: ICompany = {} as ICompany;

  constructor() { }

  ngOnInit(): void {
  }

}
