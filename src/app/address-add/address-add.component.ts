import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from '../service/address.service';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {

  constructor(private addressservice:AddressService,private route:Router,private personservice:PersonService) { }

  personlist: any = [];
  ngOnInit(): void {
    this.personservice.personlist_Req().subscribe((res) => {
      this.personlist=res
    })
  }

  add(form:any)
  {
    console.log(form);

    this.addressservice.addAddress_Req(form.value).subscribe((res) => {
        this.route.navigateByUrl("/address")
    })
  }

}
