import { Component, OnInit, Input } from '@angular/core';
import { IAddress } from '../../shared/model/user-information.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() selectedAddress: IAddress = {} as IAddress;

  constructor() { }

  ngOnInit(): void {
  }

}
