import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  _mainUrl="https://localhost:44383/api/"
  constructor() { }
}
