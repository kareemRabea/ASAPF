import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressListComponent } from './address-list/address-list.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  { path: "person", component: PersonListComponent },
  { path: "add-person", component: PersonAddComponent },
  { path: "address", component: AddressListComponent },
  {path:"add-address",component:AddressAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
