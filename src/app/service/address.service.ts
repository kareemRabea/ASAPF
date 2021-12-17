import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private url: UrlService, private http: HttpClient) { }


  addAddress_Req(data:any) {
    return this.http.post(this.url._mainUrl + "Address/Add", data);
  }

  Addresslist_Req() {
    return this.http.get(this.url._mainUrl + "Address/GetAll");
  }
  Addressdelete_Req(data:any) {
    return this.http.post(this.url._mainUrl+"Address/Delete",data)
  }
  Addressupdate_Req(data:any) {
    return this.http.post(this.url._mainUrl+"Address/Update",data)
  }
}
