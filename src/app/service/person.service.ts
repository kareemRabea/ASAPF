import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private url: UrlService, private http: HttpClient) { }


  addperson_Req(data:any) {
    return this.http.post(this.url._mainUrl + "Person/Add", data);
  }

  personlist_Req() {
    return this.http.get(this.url._mainUrl + "Person/GetAll");
  }
  persondelete_Req(data:any) {
    return this.http.post(this.url._mainUrl+"Person/Delete",data)
  }
  personupdate_Req(data:any) {
    return this.http.post(this.url._mainUrl+"Person/Update",data)
  }
}
