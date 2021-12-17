import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  constructor(private personservice:PersonService,private route:Router) { }

  ngOnInit(): void {
  }

  add(form:any)
  {
    console.log(form);

    this.personservice.addperson_Req(form.value).subscribe((res) => {
        this.route.navigateByUrl("/person")
    })
  }
}
