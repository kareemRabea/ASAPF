import { Component, OnInit } from '@angular/core';
import menu from '../../json/menu.json'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menulist:{title:string, route:string}[] = menu;
  constructor() {

   }

  ngOnInit(): void {
  }

  toggle() {
    console.log(5);

    var sidebar = document.querySelector("#sidebar");
   var container = document.querySelector(".my-container");
   var mainbody = document.querySelector(".mainbody");
  sidebar?.classList.toggle("active-nav");
    container?.classList.toggle("active-cont");

  }

}
