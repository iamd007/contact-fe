import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL = environment.URL;
  constructor(private http : HttpClient) { }

  getAllContacts() {
    return this.http.get(this.URL + "/contact/all");
  }
}
