import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personlist: any = [];

  constructor(private personservice:PersonService,private route:Router) { }

  ngOnInit(): void {
    this.getall();
  }
  getall() {
    this.personservice.personlist_Req().subscribe((res) => {
      this.personlist = res;
    })
  }

  remove(data:any)
  {
    this.personservice.persondelete_Req(data).subscribe((res) => {
      this.getall();

    })
  }

  update(data:any)
  {
    this.personservice.personupdate_Req(data).subscribe((res) => {

    })
  }

  updatefill(data: any) {


  }

}
